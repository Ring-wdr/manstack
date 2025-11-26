import React from 'react';

export function Delay({
  children,
  fallback,
  ms = 1000,
}: React.PropsWithChildren<{ ms?: number; fallback?: React.ReactNode }>) {
  const [delayed, setDelayed] = React.useState(false);
  const msRef = React.useRef(ms);
  React.useEffect(() => {
    const milisecond = msRef.current;
    const timer = setTimeout(setDelayed, milisecond, true);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return delayed ? children : (fallback ?? null);
}
