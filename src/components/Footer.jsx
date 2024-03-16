const Footer = () => {
    const time = new Date
    const hr = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    const openHr = 12
    const closeHr = 22
    const timeNow = `${hr}:${min}:${sec}`
    const isOpen = hr >= openHr && hr <= closeHr

    // if (!isOpen) {
    //     return <p>We're happy to welcome you between {openHr}:00 and {closeHr}:00</p>
    // }

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>
                        We're open until {closeHr}:00. Come Visit us or order online.
                    </p>
                    <button className="btn">Order Now!</button>
                </div>
            ) : (
                <p>We're happy to welcome you between {openHr}:00 and {closeHr}:00</p>
            )
            }
        </footer>
    );
}

export default Footer;