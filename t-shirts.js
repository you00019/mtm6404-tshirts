const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const tshirts = [
  {
    title: "Blue T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Bright Purple T-Shirt",
    image: "bright-purple-t-shirt.jpg",
    price: 5.99,
    stock: 1,
    quantity: 1,
  },
  {
    title: "Cobalt Blue T-Shirt",
    image: "cobalt-blue-t-shirt.jpg",
    price: 9.99,
    stock: 5,
    quantity: 1,
  },
  {
    title: "Green T-Shirt",
    image: "green-t-shirt.jpg",
    price: 6.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Grey T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 4.99,
    stock: 2,
    quantity: 1,
  },
  {
    title: "Light Green T-Shirt",
    image: "light-green-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Purple T-Shirt",
    image: "purple-t-shirt.jpg",
    price: 7.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Red T-Shirt",
    image: "red-t-shirt.jpg",
    price: 6.99,
    stock: 3,
    quantity: 1,
  },
  {
    title: "Teal T-Shirt",
    image: "teal-t-shirt.jpg",
    price: 7.99,
    stock: 2,
    quantity: 1,
  },
];
function App() {
  return (
    <div className="container">
      <h1>T shirts</h1>
      <DisplayTshirts />
    </div>
  );
}
function DisplayTshirts() {
  return (
    <div className="Tshirt-container">
      {tshirts.map((tshirt, index) => (
        <Tshirt cloth={tshirt} key={index} />
      ))}
    </div>
  );
}
function Tshirt({ cloth }) {
  const imagePath = `./images/${cloth.image}`;
  const [numberThirt, setnumberThirt] = React.useState(cloth.stock);
  const [buyTshirt, setbuyTshirt] = React.useState("");
  const click = function (e) {
    e.preventDefault();
    setnumberThirt((tshirt) => (tshirt = numberThirt - buyTshirt));
  };
  return (
    <>
      <div>
        <img src={imagePath} alt={cloth.image} />
        <h2> {cloth.title}</h2>
        <h3>
          <em> ${cloth.price}</em>
        </h3>
        {numberThirt === 0 ? (
          <h3 style={{ color: "red" }}>Out of Stock</h3>
        ) : (
          <>
            <input
              type="number"
              placeholder="0"
              min="1"
              max={cloth.stock}
              value={buyTshirt}
              onChange={(e) => setbuyTshirt(e.target.value)}
            />
            <button onClick={click}>buy</button>
          </>
        )}
      </div>
    </>
  );
}

root.render(<App />);
