import React from "react"
import ReviewCard from "../cards/reviewCard"
import Container from "../shared/container"
import LinkButton from "../shared/linkButton"

import Slider from "react-slick"
import { reviews } from "../../utils/reviews"

const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7500,
    autoplaySpeed: 500,
    cssEase: "linear",
}

const Reviews = () => (
    <Container className="reviews">
        <h1>Reviews</h1>
        <Container className="review-content">
            <Slider {...sliderSettings}>
                {reviews.map(review => (
                    <ReviewCard
                        review={review.content}
                        reviewerName={`- ${review.author}`}
                        key={review.author}
                    />
                ))}
            </Slider>
            <LinkButton to="/about">View All</LinkButton>
        </Container>
    </Container>
)
export default Reviews
