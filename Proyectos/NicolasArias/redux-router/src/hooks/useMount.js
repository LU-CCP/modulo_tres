import useEffectOnce from './useEffectOnce';

// fn: funcion
const useMount = fn => {
  useEffectOnce(() => {
    fn();
  });
};

export default useMount;
