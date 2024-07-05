import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 2000,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 2500,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 3000,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 2500,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 3500,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 3000,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color:"blueviolet" , fontSize:"48px", textTransform:"capitalize"}
  const style = {};

  return (
    <header className="header footer">
      <h1 style={style}> Fast Delicious Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2> Our Menu</h2>

      

      {numPizzas > 0 ? (
        <>

        <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious
        </p>

        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
          </>
      ) : (
        <p> We're still working on our menu.Please come back later</p>
      )}
      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={2000}
        photoName="pizzas/focaccia.jpg"
      />
      <Pizza
        name="Margherita"
        ingredients="Tomato and mozarella"
        price={3000}
        photoName="pizzas/margherita.jpg"
      />

      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={2500}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={2000}
        photoName="pizzas/funghi.jpg"
      />

      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={3100}
        photoName="pizzas/salamino.jpg"
      />

      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={3500}
        photoName="pizzas/prosciutto.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out": ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients}</p>

        <span>Rs. {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're Currently Open")

  // } else {
  //   alert("Sorry We're Closed")
  // }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          {" "}
          We're Happy to Welcome you between {openHour}:00 & {closeHour}:00.{" "}
        </p>
      )}
      {/* {new Date().toLocaleTimeString()} . We"re currently open */}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00 . Come Visit us or Order
        Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React Version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
// React.render(<App/>, document.getElementById("root"));
