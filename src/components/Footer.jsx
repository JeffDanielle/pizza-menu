const Footer = () => {
    const time = new Date
    const hr = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    const timeNow = `${hr}:${min}:${sec}`
    return (
        <footer className="text-xl text-center mt-10 font-bold">{timeNow}. We're currently open!</footer>
    );
}

export default Footer;