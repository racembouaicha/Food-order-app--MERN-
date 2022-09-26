import { useContext } from "react";

import MealItemform from "./MealItemForm";
import classes from "./MealItem.module.css";
import cartContext from "../../../Store/cart-context";

const MealItem = (props) => {
  const cartctx = useContext(cartContext);
  const price = `${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemform onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
