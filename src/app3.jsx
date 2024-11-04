//only  changes rerender using memo

import React, { Fragment, useState } from "react";

function App() {
  const [title, setTitle] = useState("my name is varun");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>update the title</button>
      <Header title={title}></Header>
      <Header title="varun 2"></Header>
      <Header title="varun 3"></Header>
    </div>
  );
}
const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
