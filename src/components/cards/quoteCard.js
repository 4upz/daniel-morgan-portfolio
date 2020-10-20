import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const QuoteCard = ({ text }) => (
    <div className="card quote overlap">
        <FontAwesomeIcon icon={faQuoteLeft} className="icon left" />
        <p className="quote-text">{text}</p>
        <FontAwesomeIcon icon={faQuoteRight} className="icon right" />
    </div>
)

QuoteCard.propTypes = {
    text: PropTypes.string.isRequired,
}

export default QuoteCard
