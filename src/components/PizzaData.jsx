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


            {pizzaData.length > 0 ? (
                <>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

                    <ul className="pizzas">
                        {listOfPizza}
                    </ul>
                </>) : "We're still working on our menu!. Please come back later :)"
            }
        </main>
    );
}

export default pizzaRender;