import React, { useCallback, useState } from 'react';
import ReactDOM from "react-dom";
import css from './App.module.css';

const App = (props: { message: string }) => {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount(count => count + 1)
  }, [count])

  return (
    <div className={css.root}>
      <h1>{props.message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Inrement</button>
    </div>
  );
}

ReactDOM.render(<App message="esbuild + React + Typescript"/>, document.getElementById('root'));