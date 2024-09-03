import { useEffect, useRef } from "react";

export function useUpdateEffect(
  effect: React.EffectCallback,
  deps: React.DependencyList
) {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      return effect();
    } else {
      hasMounted.current = true;
    }
  }, deps);
}

export default useUpdateEffect;
