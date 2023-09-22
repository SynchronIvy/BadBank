function NavBar(){
    return (
        <div className="p-1">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" title="Bank Home Page">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#/createaccount/" title="Create account here">Create Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/deposit/" title="Deposit money into your account">Deposit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/withdraw/" title="Withdraw money from your account">Withdraw</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/alldata/" title="See transaction history">All Data</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
}