import React from "react";
import Header from "./Header";

const Layout = (props) => {
    return (
        <>
            <div style={{}}>
                <Header/>
                <div style={{margin: "50px 100px 100px 100px"}}>
                    {props.content}
                </div>
            </div>
        </>
    )
}

export default Layout