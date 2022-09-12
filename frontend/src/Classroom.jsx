import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom"
import NewReview from './newReview';
import { getReviewList } from "./service"
import './classroom.css'

const Classroom = () => {
    const { id } = useParams()
    const [reviewList, setReviewList] = useState([])
    useEffect(async() => {
        const res = await getReviewList(id)
        setReviewList(res)
    }, [])

    return (
        <div className='classroom' style={{fontFamily: 'Courier New'}}>
            <h1 style={{margin:'20px'}}>{ id }</h1>
            <NewReview id={id}/>
            {reviewList.map((review) => {
                console.log(review)
                return(
                    <div key={review.title} class="card">
                        <h1>{review.rating}/5 : {review.title}</h1>
                        <h3>{review.description}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Classroom;
