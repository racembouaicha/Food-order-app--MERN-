import { useContext } from "react";
import axios from "axios";
import MealItemform from "./MealItemForm";
import classes from "./MealItem.module.css";
import cartContext from "../../../Store/cart-context";

const MealItem = (props) => {

  const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 1000,
})
  const cartctx = useContext(cartContext);
  const price = `${props.price.toFixed(2)}`;

  const options = {
    url: 'http://localhost:5000/product/addProduct',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
     
    },
    data: {
      name: props.name,
      description: props.description,
      price: props.price,
    }
  };

var ids =[]

  const addToCartHandler = async (amount) => {
   
    axios(options)
  .then(response => {
    console.log(response.data._id);
    ids.push(response.data._id);

  });
  
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
    console.log(ids)
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
