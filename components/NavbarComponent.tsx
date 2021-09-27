import React from "react";

export default function NavbarComponent(): JSX.Element {
    return (
        <>
            <div className="nav-container">
                <div className="nav-brand">
                    <div className="nav-item-group">
                        <a href="#" className="nav-item">
                            Jareem
                        </a>
                    </div>
                </div>

                <div className="nav-menu">
                    <div className="nav-item-group">
                        <a href="#" className="nav-item">
                            home
                        </a>
                        <a href="#" className="nav-item">
                            home
                        </a>
                        <a href="#" className="nav-item">
                            home
                        </a>
                        <a href="#" className="nav-item">
                            home
                        </a>
                    </div>
                </div>

                <style jsx>{`
                    .nav-container {
                        width: 100%;
                        background-color: white;
                        display: grid;
                        grid-template-column: 50% 50%;
                        grid-template-rows: "auto";
                        grid-template-areas: "nb nm";
                        padding: 0 70px;
                    }

                    .nav-brand {
                        display: flex;
                        justify-content: flex-start;
                    }

                    .nav-menu {
                        display: flex;
                        justify-content: flex-end;
                    }

                    .nav-item-group {
                        display: flex;
                        flex-direction: row;
                    }

                    .nav-item {
                        padding: 15px 25px;
                        display: flex;
                    }

                    .nav-item :hover {
                        background-color: #333;
                        color: white;
                    }
                `}</style>
            </div>
        </>
    );
}
