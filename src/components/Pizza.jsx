const pizzaComponent = ({ soldOut, photoName, name, ingredients, price }) => {

    // if (pizzaObj.soldOut) return null;

    return (
        <>
            <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
                <img src={photoName} alt="pizza image" />
                <div>
                    <h3 className="text-start font-bold">{name}</h3>
                    <p className="text-start">{ingredients}</p>
                    <span>{soldOut ? "SOLD OUT" : price}</span>
                </div>
            </li>
        </>
    );
}

export default pizzaComponent;