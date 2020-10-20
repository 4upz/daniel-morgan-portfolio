import React from "react"
import Card from "./card"

const ReviewCard = ({ review, reviewerName }) => (
    <Card className="review">
        <p className="content">"{review}"</p>
        <p className="name">{reviewerName}</p>
    </Card>
)

export default ReviewCard
