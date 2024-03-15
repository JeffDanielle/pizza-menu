const pizzaComponent = (props) => {

    return (
        <>
            <img src={props.photoName} alt="pizza image" />
            <h2>{props.name}</h2>
            <p>{props.ingredients}</p>
        </>
    );
}

export default pizzaComponent;