import { useState } from "react";
import data from "../data/data"
import Pizza from "./Pizza"
const pizzaRender = () => {
    const [pizzaData, setPizzaData] = useState(data)
    const listOfPizza = pizzaData.map((item) => {
        return (
            <Pizza
                photoName={item.photoName}
                name={item.name}
                ingredients={item.ingredients}
            />
        )
    })
    return (
        <>
            {listOfPizza}
        </>
    );
}

export default pizzaRender;