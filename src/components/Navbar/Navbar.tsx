import "./Navbar.scss";

export function Navbar() {
    return (
        <>
            <nav className="Navbar">
                <img className="logo" src="/logo_night.png" alt="Logo"></img>
                <ul>
                    <li>Home </li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li>
                        <a href="https://drive.google.com/file/d/1epgQyqdrs9YHCxXWX4_G9AfNNeFburUD/view?usp=drive_link">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
