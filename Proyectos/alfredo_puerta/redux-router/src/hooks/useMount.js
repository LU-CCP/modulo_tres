import useEffectOnce from './userEffectOnce';

const useMount = fn => {
  useEffectOnce(() => {
    fn();
  });
};

export default useMount;
