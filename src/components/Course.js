import React from "react";
import {Link, useRouteMatch, Switch, Route } from "react-router-dom";
import CourseItem from "./CourseItem";


function Course(){
    const {url, path}= useRouteMatch();
    return(
        <div>
            <ul>
                <li>
                    <Link to={`${url}/Programming`}>Programming</Link>
                </li>
                <li><Link to={`${url}/Networking`}>Network</Link>
                </li>
            </ul>
            <Switch>
                <Route path ={`${path}/:course`}>
                    <CourseItem>

                    </CourseItem>

                </Route>
            </Switch>

        </div>
    );

}
export default Course ;