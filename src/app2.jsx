//only changes rerender

import { Fragment, useState } from "react";

function App() {
  return (
    <div>
      <HeaderWithButton />

      <Header title="varun 2"></Header>
      <Header title="varun 3"></Header>
    </div>
  );
}
function HeaderWithButton() {
  const [title, setTitle] = useState("my name is varun");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>update the title</button>
      <Header title={title}></Header>
    </div>
  );
}
function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
