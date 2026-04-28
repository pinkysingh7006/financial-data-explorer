import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <h2 className="logo">Financials</h2>
                </div>
                <div className="navbar-right">
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">Reports</a>
                    <a href="#" className="nav-link">Companies</a>
                    <a href="#" className="nav-link">About</a>
                </div>

            </div>
        </nav>
    );
}