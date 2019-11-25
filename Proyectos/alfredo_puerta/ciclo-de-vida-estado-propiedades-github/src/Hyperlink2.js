import React, { useEffect, useState, useRef, memo } from "react";

// de props vienen todas las propiedades anterior como this
const Hyperlink = props => {
  const _varGlobalRef = useRef("");
  const [value, setValue] = useState("Learn React");
  const [compare, setCompare] = useState("");
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(
    () => {
      if (showInstructions !== props.showInstructions) {
        setShowInstructions(props.showInstructions);
      }
    },
    [props.showInstructions]
  );

  useEffect(() => {
    console.log("Hyperlink componentDidMount");
    setTimeout(() => {
      console.log("Hyperlink setState");
      setValue("Learn React Now!");
    }, 3000);
    setTimeout(() => {
      _varGlobalRef.current = "Please";
      console.log("Hyperlink forceUpdate");
    }, 4000);
    setTimeout(() => {
      console.log("Hyperlink setState compare");
      setCompare("");
      const { onHide } = props;
      onHide();
    }, 5000);
  }, []);

  useEffect(() => {
    console.log("HyperLink componentDidUpdate");
  });

  console.log("Hyperlink render");
  return (
    <div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`${value} ${_varGlobalRef.current}`}
      </a>
      {!showInstructions && <p>Can you see the instructions?</p>}
    </div>
  );
};

//memo compara shouldComponentUpdate hace las comparaciones
//shouldComponentUpdate recordar que memo retorna lo contrario ya que la pregunta es al reves
export default memo(Hyperlink);
