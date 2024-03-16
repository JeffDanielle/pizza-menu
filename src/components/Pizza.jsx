const pizzaComponent = ({ pizzaObj }) => {

    // if (pizzaObj.soldOut) return null;

    return (
        <>
            <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
                <img src={pizzaObj.photoName} alt="pizza image" />
                <div>
                    <h3 className="text-start font-bold">{pizzaObj.name}</h3>
                    <p className="text-start">{pizzaObj.ingredients}</p>
                    <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
                </div>
            </li>
        </>
    );
}

export default pizzaComponent;