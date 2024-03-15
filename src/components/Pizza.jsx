const pizzaComponent = (props) => {

    return (
        <>
            <li className="pizza">
                <img src={props.pizzaObj.photoName} alt="pizza image" />
                <div>
                    <h3 className="text-start font-bold">{props.pizzaObj.name}</h3>
                    <p className="text-start">{props.pizzaObj.ingredients}</p>
                    <span>{props.pizzaObj.price + 3}</span>
                </div>
            </li>
        </>
    );
}

export default pizzaComponent;