import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import Dashboard from "../../pages/Dashboard";
import Layout from "../layout/Layout";
import Calculate from "../../pages/Calculate";
import {FormulaProvider} from "../../context/ContextFormula";

const RoutesSwitch = () => {
    return (
        <>
            <Router>
                <FormulaProvider>
                <Switch>
                    <Route path="/" exact>
                        <Layout content={<Dashboard/>}/>
                    </Route>
                    <Route path="/inputEVPI" exact>
                        <Layout content={<Calculate/>}/>
                    </Route>
                </Switch>
                </FormulaProvider>
            </Router>
        </>
    )
}

export default RoutesSwitch