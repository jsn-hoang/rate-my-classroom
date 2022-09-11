import React, { useState } from "react"; 
import { createReview } from './service';
import './newReview.css';

const NewReview = ({id}) => {
    const [newReviewTitle, setNewReviewTitle] = useState("")
    const [newReviewDescription, setNewReviewDescription] = useState("")
    const handleSubmit = async(e) => {
        e.preventDefault()
        const rating = document.getElementById("rating");
        const ratingValue = rating.value;
        const newReview = await createReview(newReviewTitle, newReviewDescription, ratingValue, id); 
        console.log(newReview)
        location.reload()
    }

    const handleChangeTitle = async(e) => {
        e.preventDefault()
        setNewReviewTitle(e.target.value)
    }

    const handleChangeDescription = async(e) => {
        e.preventDefault()
        setNewReviewDescription(e.target.value)
    }


    return (
        <div className="newReview">
            <form onSubmit={handleSubmit} className='reviewForm'>
                <div>
                    <label>
                    Title
                    <input type="text" value={newReviewTitle} onChange={handleChangeTitle} />
                    </label>
                </div>
                <div>
                    <label>
                    Description
                    <input type="text" value={newReviewDescription} onChange={handleChangeDescription} />
                    </label>
                </div>
                <div className="rating">
                    <label>
                    Rating
                    <select id="rating" name="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>
                </div>
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default NewReview