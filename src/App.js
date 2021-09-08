function App() {
  return (
    <div className="App">
      <header className="App-header">
        {[1, 2, 3].map((val) => (
          <p>Edit and save to reload. {val}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
