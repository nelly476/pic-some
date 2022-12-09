import { Context } from "../Context";
import CartItem from "../components/CartItem";
import { useContext, useState } from "react";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const total = cartItems
    .map((item) => 5.99)
    .reduce((curr, prev) => curr + prev, 0);

  function handleOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:{" "}
        {total.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <div className="order-button">
        <button onClick={handleOrder}>{buttonText}</button>
      </div>
    </main>
  );
}

export default Cart;
