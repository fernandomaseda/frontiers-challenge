import { useState, useCallback } from "react";

export function useLoadingPromise<T, K>(
  func: (...args: K[]) => Promise<T>
): {
  execute: (...args: K[]) => Promise<T | void>;
  data: T | null;
  loading: boolean;
  error: Error | null;
  submitted: boolean;
  reset: () => void;
} {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const execute = useCallback(
    (...args: Parameters<typeof func>) => {
      setError(null);
      setLoading(true);
      return func(...args)
        .then((data) => {
          setData(data);
          setSubmitted(true);
          return data;
        })
        .catch((error) => {
          setError(error);
          setSubmitted(false);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [func]
  );

  const reset = useCallback(() => {
    setError(null);
    setData(null);
    setLoading(false);
    setSubmitted(false);
  }, []);

  return { execute, data, loading, error, submitted, reset };
}
