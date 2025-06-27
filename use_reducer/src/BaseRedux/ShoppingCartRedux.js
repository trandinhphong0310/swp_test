function ShoppingCartRedux() {
    return (
    <div>
      <h1>Shopping cart</h1>

      <div>
        <button onClick={() => dispatch({ type: "add_item", payload: {item_name: "Item1 - 10$", price: 10}})}>
          Item1 - 10$
        </button>
        <button>Item2 - 15$</button>
      </div>

      <h2>List Cart</h2>
      <ul>
        {state.cart.map((item, index) => (
          <li key={index}>{item.item_name}</li>
        ))}
      </ul>
      <p>Total Quantity {state.totalQuantity}</p>
      <p>Total Price {state.totalPrice}$</p>
    </div>
  );
}

export default ShoppingCartRedux