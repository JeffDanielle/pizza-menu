const pizzaComponent = (props) => {

    return (
        <>
            <main className="menu">
                <img src={props.photoName} alt="pizza image" />
                <h3 className="text-start font-bold">{props.name}</h3>
                <p className="text-start">{props.ingredients}</p>
            </main>
        </>
    );
}

export default pizzaComponent;