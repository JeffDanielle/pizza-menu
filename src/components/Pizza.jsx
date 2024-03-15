const pizzaComponent = (props) => {

    return (
        <>
            <img src={props.photoName} alt="pizza image" />
            <h2 className="text-start font-bold">{props.name}</h2>
            <p className="text-start">{props.ingredients}</p>
        </>
    );
}

export default pizzaComponent;