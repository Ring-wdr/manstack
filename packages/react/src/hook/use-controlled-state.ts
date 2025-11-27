import React from 'react';

import { noop } from '@manstack/core';
import { useCallbackRef } from './use-callback-ref';

const useEarlyEffect: typeof React.useLayoutEffect =
  typeof document !== 'undefined' ? (React.useInsertionEffect ?? React.useLayoutEffect) : noop;

export function useControlledState<TValue>(
  value: Exclude<TValue, undefined>,
  defaultValue: Exclude<TValue, undefined> | undefined,
  onChange?: (v: TValue) => void,
): [TValue, (value: React.SetStateAction<TValue>) => void];
export function useControlledState<TValue>(
  value: Exclude<TValue, undefined> | undefined,
  defaultValue: Exclude<TValue, undefined>,
  onChange?: (v: TValue) => void,
): [TValue, (value: React.SetStateAction<TValue>) => void];
export function useControlledState<TValue>(
  value: TValue,
  defaultValue: TValue,
  onChange?: (v: TValue) => void,
): [TValue, (value: React.SetStateAction<TValue>) => void] {
  const [stateValue, setStateValue] = React.useState(value || defaultValue);
  const valueRef = React.useRef(stateValue);
  const onChangeRef = useCallbackRef(onChange);

  const isControlledRef = React.useRef(value !== undefined);
  const isControlled = value !== undefined;
  React.useEffect(() => {
    const wasControlled = isControlledRef.current;
    if (wasControlled !== isControlled) {
      console.warn(
        `WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`,
      );
    }
    isControlledRef.current = isControlled;
  }, [isControlled]);

  const currentValue = isControlled ? value : stateValue;
  useEarlyEffect(() => {
    valueRef.current = currentValue;
  });

  const setValue = React.useCallback(
    (value: React.SetStateAction<TValue>) => {
      const newValue = value instanceof Function ? value(valueRef.current) : value;
      if (!Object.is(valueRef.current, newValue)) {
        valueRef.current = newValue;
        setStateValue(newValue);
        onChangeRef?.(newValue);
      }
    },
    [onChangeRef],
  );

  return [currentValue, setValue];
}
