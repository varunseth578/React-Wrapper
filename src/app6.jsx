function App() {
    return (
      <div>
        <CardWrapper>
        hii
        </CardWrapper>
      </div>
    );
  }
  function CardWrapper({children}) {
    return (
      <div style={{ border: "2px solid black", padding: 20 }}>
        {children}
      </div>
    );
  }
  
  export default App;
  