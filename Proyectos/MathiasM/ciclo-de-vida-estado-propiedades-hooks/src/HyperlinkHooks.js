import React, { useRef, useState, useEffect, memo } from 'react';

const Hyperlink = props => {
  const _varGlobalRef = useRef('');
  const [value, setValue] = useState('Learn React');
  const [compare, setCompare] = useState('');
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    if (showInstructions !== props.showInstructions) {
      setShowInstructions(props.showInstructions);
    }
  }, [props.showInstructions, showInstructions]);

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

      onHide();
    }, 5000);
  }, [props]);

  useEffect(() => {
    console.log('Hyperlink componentDidUpdate');
  });
};

export default memo(Hyperlink);
