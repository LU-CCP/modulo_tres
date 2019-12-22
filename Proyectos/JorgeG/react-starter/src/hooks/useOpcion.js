import { useCallback, useState } from 'react';

const useOpcion = () => {
  const [opcion, setOpcion] = useState();

  const handleButtonBar = useCallback(
    number => () => {
      setOpcion(number);
    },
    [setOpcion]
  );

  console.log(opcion);

  return { opcion, handleButtonBar };
};

export default useOpcion;
