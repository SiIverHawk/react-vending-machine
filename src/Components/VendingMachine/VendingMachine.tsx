import React from "react";
import Products from "../Products/Products";
import classes from "./VendingMachine.module.css";

const VendingMachine: React.FC = () => {
  return (
    <main className={classes.content}>
      <h1>Available products</h1>
      <hr />
      <div className={classes.wrapper}>
        {
          [1, 2, 3, 4, 5, 6].map(items => (
            <Products key={items} preparation_time={5} />
          ))
        }
      </div>
      <h1>Dispatched Products</h1>
      <hr />
    </main>
  )
}

export default VendingMachine
