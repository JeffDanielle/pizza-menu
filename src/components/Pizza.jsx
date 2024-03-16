const pizzaComponent = ({ pizzaObj }) => {

    // if (pizzaObj.soldOut) return null;

    return (
        <>
            <li className="pizza">
                <img src={pizzaObj.photoName} alt="pizza image" />
                <div>
                    <h3 className="text-start font-bold">{pizzaObj.name}</h3>
                    <p className="text-start">{pizzaObj.ingredients}</p>
                    <span>{pizzaObj.price + 3}</span>
                </div>
            </li>
        </>
    );
}

export default pizzaComponent;