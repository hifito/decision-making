import Container from "../container/Container";
import React from "react";
import Header from "./Header";
import Background from "../../assets/image/Background.png"

const Layout = (props) => {
    return (
        <>
            <div style={{
                // backgroundImage: `url(${Background})`,
                // backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
            }}>
                <Header/>
                <div style={{margin: 100}}>
                    {props.content}
                </div>
            </div>
        </>
    )
}

export default Layout