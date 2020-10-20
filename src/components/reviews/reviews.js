import React from "react"
import ReviewCard from "../cards/reviewCard"
import Container from "../shared/container"
import LinkButton from "../shared/linkButton"

const Reviews = () => (
    <Container className="reviews">
        <h1>Reviews</h1>
        <Container className="review-content">
            <ReviewCard
                review="He's caring, funny, and always finds a way to make money (positively)."
                reviewerName="Bobby Joe"
            />
            <LinkButton to="/about">View All</LinkButton>
        </Container>
    </Container>
)
export default Reviews
