function App() {
    return (
      <div>
        <CardWrapper innerComponent={<TextComponent />} />
        <CardWrapper innerComponent={<TextComponent2 />} />
      </div>
    );
  }
  function CardWrapper({innerComponent}) {
    return (
      <div style={{ border: "2px solid black", padding: 20 }}>
        {innerComponent}
      </div>
    );
  }
  function TextComponent() {
    return <div>hii there</div>;
  }
  function TextComponent2() {
    return <div>hii there 2</div>;
  }
  
  export default App;
  