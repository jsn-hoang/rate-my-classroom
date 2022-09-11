import React from 'react';
import { useParams } from "react-router-dom"
import './classroom.css'

export function Classroom(){
    const { id } = useParams()
    return <h1>Classroom {id}</h1>
}


// styling for later use
{/* <div>
    <h1>ETLC E1-007</h1> <!--Classroom name var goes here-->

    <!-- acquired from w3schools -->
    <div class="row">
        <div class="leftcolumn">
            <div class="card">
                <h1>1/5</h1> <!--rating var goes here-->
                <h2>Dis class is dope yo</h2> <!--description var goes here-->
            </div>
            <div class="card">
                <h1>1/5</h1>
                <h2>Dis class is dope yo</h2>
            </div>
            <div class="card">
                <h1>1/5</h1>
                <h2>Dis class is dope yo</h2>
            </div>
            <div class="card">
                <h1>1/5</h1>
                <h2>Dis class is dope yo</h2>
            </div>
        </div>
    </div>
</div> */}