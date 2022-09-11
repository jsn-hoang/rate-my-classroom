import React from 'react';
import { useParams } from "react-router-dom"
import { getReviewList } from "./service"

const Classroom = async() => {
    const { id } = useParams()
    const reviewList = await getReviewList(id)
    console.log(reviewList[0].rating)
    return <h1>Classroom { id }</h1>
}

export default Classroom;
