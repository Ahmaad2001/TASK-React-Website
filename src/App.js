import "./App.css";
import image from "./assets/images/pharmacy-otc-products-turkey-64209774.jpg";
import Products from "./products";

function App() {
  console.log(Products[0]);
  return (
    <>
      <div className="App">
        <h1>Kuwaits Local Pharamacy</h1>
        <p>welcome to Kuwaits Local Pharamacy</p>
        <img src={image} alt="picture of a pharmacy" className="App" />
        <div>
          <img src={Products[0].image} />
          <h1>{Products[0].Name}</h1>
          <p>{Products[0].Price}</p>
        </div>
        <br />
        <div>
          <img src={Products[1].image} />
          <h1>{Products[1].Name}</h1>
          <p>{Products[1].Price}</p>
        </div>
      </div>
    </>
  );
}

export default App;
