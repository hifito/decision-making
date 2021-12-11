import React from "react";
import Logo from "../../assets/image/Logo.png"
import Container from "../container/Container";

const Header = (props) => {
    return (
        <>
            <header>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={Logo} alt="EVPI" style={{height: 41, width: 111, marginTop: 60, marginLeft: 100}}/>
                </div>
            </header>
        </>
    )
}

export default Header