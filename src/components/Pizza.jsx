const pizzaComponent = (props) => {

    return (
        <>
            <div className="pizza">
                <img src={props.photoName} alt="pizza image" />
                <div>
                    <h3 className="text-start font-bold">{props.name}</h3>
                    <p className="text-start">{props.ingredients}</p>
                    <span>{props.price + 3}</span>
                </div>
            </div>
        </>
    );
}

export default pizzaComponent;