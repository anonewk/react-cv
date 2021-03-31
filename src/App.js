import React from 'react';
import {BrowserRouter , Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Error from "./pages/Error";
import Portfolio from "./pages/Portfolio";
import Competence from "./pages/Competence";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/knowledges" exact component={Knowledges} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/competence" exact component={Competence} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
