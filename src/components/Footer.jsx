const Footer = () => {
    const time = new Date
    const hr = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    const openHr = 8
    const closeHr = 22
    const timeNow = `${hr}:${min}:${sec}`
    const isOpen = hr >= openHr && hr <= closeHr

    // if (hr >= openHr && hr <= closeHr) {
    //     alert("We're currently open!")
    // } else {
    //     alert("We're currently closed!")
    // }
    return (
        <footer className="text-xl text-center mt-10 font-bold">{timeNow}. We're currently open!</footer>
    );
}

export default Footer;