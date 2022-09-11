import React from 'react';
import './classroomItem.css';
import { Link } from 'react-router-dom';

const ClassroomItem = ({name}) => {
    return (
        <div className='classroomItem'>
            <Link className="item" to="/">{name}</Link>
        </div>
    )
}

export default ClassroomItem