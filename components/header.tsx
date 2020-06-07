const Header = () => {
    return (
        <div>
            <nav className="bp3-navbar">
                <div style={{ margin: '0 auto', width: '480px' }}>
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading">Blueprint</div>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
                        <button className="bp3-button bp3-minimal bp3-icon-document">Files</button>
                        <span className="bp3-navbar-divider"></span>
                        <button className="bp3-button bp3-minimal bp3-icon-user"></button>
                        <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
                        <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
