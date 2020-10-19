import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const Quote = ({ text }) => (
    <div className="card quote overlap">
        <FontAwesomeIcon icon={faQuoteLeft} className="icon left" />
        <p className="quote-text">{text}</p>
        <FontAwesomeIcon icon={faQuoteRight} className="icon right" />
    </div>
)

Quote.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Quote
