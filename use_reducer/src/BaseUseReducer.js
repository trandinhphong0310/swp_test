// import { useReducer } from "react";

import { useReducer } from "react";

// export default function BaseUseReducer() {
//     const initialState = {
//         name: "",
//         age: 20
//     };

//     function reducer(state, action) {
//         switch (action.type) {
//             case "Increment":
//                 return {
//                     age: state.age + 1
//                 }
//             case "Decrement":
//                 return {
//                     age: state.age - 1
//                 }
//             case "changeName":
//                 return {
//                     name: action.payload
//                 }
//             default:
//                 throw new Error(`Unknown action type: ${action.type}`);
//         }
//     }

//     const [state, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <h1>Base UseReducer Example</h1>
//             <input value={state.name} onChange={e => (dispatch({type: "changeName", payload: e.target.value}))}></input>
//             <h2>Understanding the useReducer Hook {state.name}</h2>
//             <p>Your Age is: {state.age}</p>
//             <button onClick={() => dispatch({ type: "Increment"})}>Increment</button>
//             <button onClick={() => dispatch({ type: "Decrement"})}>Decrement</button>
//         </div>
//     );
// }

export default function BaseUseReducer() {
  const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "add_item":
        return {
          ...state,
          cart: [...state.cart, action.payload],
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + action.payload.price
        };
      default:
        throw Error("Invalid");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

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
