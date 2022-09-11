import React from "react";
import './classroom.css';
import { useParams } from "react-router-dom"

classroomName = useParams();

const Classroom = () => (
    <div>
        <title>{classroomName}</title>
        <h1{classroomName}></h1>
        <div class="leftcolumn">
            <h2>hello</h2>

            
        </div>
    </div>
);

export default Classroom;
