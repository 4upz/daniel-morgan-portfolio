import React from "react"
import Card from "./card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import Slider from "react-slick"

import { shuffledQuotes } from "../../utils/quotes"

const quotes = shuffledQuotes()

const sliderSettings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    adaptiveHeight: true,
}

const QuotesCard = () => (
    <Card className="quote">
        <FontAwesomeIcon icon={faQuoteLeft} className="icon left" />
        <Slider {...sliderSettings}>
            {quotes.map(quote => (
                <p className="quote-text" key={quote}>
                    {quote}
                </p>
            ))}
        </Slider>
        <FontAwesomeIcon icon={faQuoteRight} className="icon right" />
    </Card>
)

export default QuotesCard
