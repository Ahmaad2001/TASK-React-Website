import "./App.css";
import image from "./assets/images/pharmacy-otc-products-turkey-64209774.jpg";

function App() {
  return (
    <>
      <div className="App">
        <h1>Kuwaits Local Pharamacy</h1>
        <p>welcome to Kuwaits Local Pharamacy</p>
        <img src={image} alt="picture of a pharmacy" className="App"></img>
      </div>
    </>
  );
}

export default App;
