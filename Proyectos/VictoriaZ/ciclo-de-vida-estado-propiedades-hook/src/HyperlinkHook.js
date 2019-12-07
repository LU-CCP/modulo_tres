// PARA HIPERLINK E INSTRUCCIONES
import React, { useState, useRef, useEffect, memo } from 'react'; // useRef:almacena en memoria algo, no se referencia cada vez

import logo from './logo.svg'; // useeffect se dispara en cada render, eq a los componentdidmount...
import './App.css'; // memo compara como un should component update

const Hyperlink = props => {
  // estados ya no se usan como objetos, sino q como variables individuales
  const [showInstructions, setShowInstructions] = useState(true);
  const [value, setValue] = useState('Learn React');
  const [compare, setCompare] = useState('Learn React');
  const _varGlobalRef = useRef('');

  console.log('Hyperlink constructor');

  useEffect(() => {
    console.log(
      'Hyperlink getDerivedStateFromProps',
      props.showInstructions,
      showInstructions
    );

    if (showInstructions !== props.setShowInstructions) {
      setShowInstructions(props.showInstructions);
    }
  }, [props.setShowInstructions, props.showInstructions, showInstructions]);

  // COMPONENT DID MOUNT
  useEffect(() => {
    console.log('Hyperlink componentDidMount');
    setTimeout(() => {
      console.log('Hyperlink setState');
      setValue('Learn React Now!');
    }, 3000);
    setTimeout(() => {
      _varGlobalRef.current = 'Please';
    }, 4000);
    setTimeout(() => {
      console.log('Hyperlink setState compare');
      setCompare('');
      const { onHide } = props;

      onHide(); // como le paso el valor q viene del App
    }, 5000);
  }, [props]);

  // component did Update
  useEffect(() => console.log('Hyperlink componentDidUpdate'));
  console.log('Hiperlink render');

  return (
    // equivalente al render, copiar aqui lo del render en App.js
    <div>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        {`${value} ${_varGlobalRef.current}`}
      </a>
      {!showInstructions && <p>Can you see the instructions?</p>}
    </div>
  );
};

export default memo(Hyperlink); // shouldComponentUpdate tb se le puede pasar la funcion como segundo argumento, si retorna falso se actualiza.son iguales? false-> actualiza
