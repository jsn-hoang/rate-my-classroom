import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom"
import { getReviewList } from "./service"

const Classroom = () => {
    const { id } = useParams()
    const [reviewList, setReviewList] = useState([])
    useEffect(async() => {
        const res = await getReviewList(id)
        setReviewList(res)
    }, [])

    return (
        <div>
            <h1>Classroom { id }</h1>
            {reviewList.map((review) => {
                console.log(review)
                return(
                    <div>
                        {review}.rating
                    </div>
                )
            })}
        </div>
    )
}

export default Classroom;
