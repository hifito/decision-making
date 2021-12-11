import React, { useState, createContext } from "react";

export const ContextFormula = createContext()

export const FormulaProvider = props => {
    const [input, setInput] = useState({

    })

    const functionEMV = () => {

    }

    const functions = {
        functionEMV
    }

    return (
        <ContextFormula.Provider value = {{

        }}>
            {props.children}
        </ContextFormula.Provider>
    )

}