import { useState } from "react";
import data from "../data/data"
import Pizza from "./Pizza"
const pizzaRender = () => {
    const [pizzaData, setPizzaData] = useState(data)
    const listOfPizza = pizzaData.map((item) => {
        return (
            <Pizza pizzaObj={item} key={item.name} />
            // <Pizza
            //     photoName={item.photoName}
            //     name={item.name}
            //     price={item.price}
            //     ingredients={item.ingredients}
            // />
        )
    })
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                {listOfPizza}
            </ul>
        </main>
    );
}

export default pizzaRender;