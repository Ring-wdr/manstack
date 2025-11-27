import React from 'react';

// biome-ignore lint/suspicious/noExplicitAny: <allow all types of callback>
function useCallbackRef<T extends (...args: any[]) => any>(callback: T | undefined): T {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  });

  return React.useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}

export { useCallbackRef };
