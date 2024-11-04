//all are rerender

import { Fragment, useState } from "react";

function App() {
  const [title, setTitle] = useState("my name is varun");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <Fragment>
      <button onClick={updateTitle}>update the title</button>
      <Header title={title}></Header>
      <Header title="varun 2"></Header>
      <Header title="varun 3"></Header>
    </Fragment>
  );
}
function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
