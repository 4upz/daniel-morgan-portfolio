import React from "react"
import ReviewCard from "../cards/reviewCard"
import Container from "../shared/container"
import LinkButton from "../shared/linkButton"

import Slider from "react-slick"

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
                <ReviewCard
                    review="He's caring, funny, and always finds a way to make money (positively)."
                    reviewerName="Bobby Joe"
                />
                <ReviewCard
                    review="He's caring, funny, and always finds a way to make money (positively)."
                    reviewerName="Bobby Joe"
                />
                <ReviewCard
                    review="He's caring, funny, and always finds a way to make money (positively)."
                    reviewerName="Bobby Joe"
                />
                <ReviewCard
                    review="He's caring, funny, and always finds a way to make money (positively)."
                    reviewerName="Bobby Joe"
                />
                <ReviewCard
                    review="He's caring, funny, and always finds a way to make money (positively)."
                    reviewerName="Bobby Joe"
                />
            </Slider>
            <LinkButton to="/about">View All</LinkButton>
        </Container>
    </Container>
)
export default Reviews
