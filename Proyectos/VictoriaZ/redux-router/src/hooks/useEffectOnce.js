import { useEffect } from 'react';

const useEffectOnce = effect => {
  useEffect(effect, []); // una sola vez pq recibe un array vacio
};

export default useEffectOnce;
