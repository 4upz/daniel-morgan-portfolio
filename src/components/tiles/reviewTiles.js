import React from "react"
import ReviewCard from "../cards/reviewCard"
import Container from "../shared/container"
import { reviews } from "../../utils/reviews"

const ReviewTiles = () => (
    <Container className="review-cards">
        {reviews.map(review => (
            <ReviewCard
                review={review.content}
                reviewerName={`- ${review.author}`}
                key={`tile_${review.author}`}
            />
        ))}
    </Container>
)

export default ReviewTiles
