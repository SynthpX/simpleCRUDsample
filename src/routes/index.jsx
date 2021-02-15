import React from "react";
import Admin from "./Admin";
import LoginPengguna from "./Pengguna";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Routes(props){
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPengguna/>
                </Route>
                <Route exact path="/admin">
                    <Admin/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;