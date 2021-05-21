import { useEffect, useRef } from 'react';

export function useInterval(callback: Function) {
  const savedCallback = useRef<Function>(callback);
  const delay = 1000;

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return () => {};
  }, [delay]);
}
