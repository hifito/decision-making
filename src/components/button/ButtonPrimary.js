import React from "react"
import {Button} from "antd";

const ButtonPrimary = (props) => {
    return (
        <>
            <Button style={{width: props.width, height: props.height, fontSize: props.fontSize, backgroundColor: "#0318D3"}}
                    type="primary" onClick={props.onClick}>{props.text}</Button>
        </>
    )
}

ButtonPrimary.defaultProps = {
    width: 200,
    height: 60,
    fontSize: 18
};


export default ButtonPrimary