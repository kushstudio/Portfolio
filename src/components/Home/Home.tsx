import "./Home.scss";

export function Home() {
    return (
        <div className="Home">
            <div className="Intro">
                <p className="Greet">Hey, I'm Kushagr</p>
                <h1>Building things for the Web</h1>
                <h3 className="secondary-text">
                    FullStack Developer at Accenture
                </h3>
                <p className="secondary-text">
                    I work across frontend, backend and cloud technologies,
                    building and improving applications that solve real problems
                </p>
            </div>
            <div>
                <img
                    className="Profile"
                    src="/profile.jpeg"
                    alt="Profile pic"
                />
            </div>
        </div>
    );
}
