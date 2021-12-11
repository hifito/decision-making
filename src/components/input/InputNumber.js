import React from "react"
import {Button, Input} from "antd";

const InputNumber = (props) => {
    return (
        <>
            <Input style={{width: "100%", height: 36}} name={props.name} onChange={props.onChange} value={props.value} required/>
        </>
    )
}

export default InputNumber