import Products from "../products";

const ProductsList = () =>
  Products.map((product) => {
    return (
      <div className="App">
        <div>{product.Name}</div>
        <div>{product.Price}</div>
        <img src={product.image} height="300px" />
      </div>
    );
  });

export default ProductsList;

//{
/* <div className="App">
<img src={Products[0].image} />
<h1>{Products[0].Name}</h1>
<p>{Products[0].Price}</p>
</div>
<br />
<div className="App">
<img src={Products[1].image} />
<h1>{Products[1].Name}</h1>
<p>{Products[1].Price}</p>
</div> */
//}
