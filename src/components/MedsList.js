import Products from "../products";

const Body = () => {
  return (
    <>
      <div className="App">
        <img src={Products[0].image} />
        <h1>{Products[0].Name}</h1>
        <p>{Products[0].Price}</p>
      </div>
      <br />
      <div className="App">
        <img src={Products[1].image} />
        <h1>{Products[1].Name}</h1>
        <p>{Products[1].Price}</p>
      </div>
    </>
  );
};

export default Body;
