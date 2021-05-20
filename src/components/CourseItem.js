import React from "react";
import {useParams} from "react-router-dom";

function CourseItem(){

    const { course }= useParams();
    return <div>{course}</div>;
}
export default CourseItem;