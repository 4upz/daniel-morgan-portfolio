import React from "react"
import Container from "../shared/container"
import Card from "./card"

const ContactCard = () => (
    <Container className="contact-section">
        <h1>Let's Talk</h1>
        <Card className="contact">
            <p>
                I'm always open to potential partnernships, networking
                opportunities, or even a friendly chat. Fill out the form below
                and I'll get back to you as soon as I can!
            </p>
            {/* TODO: Change these labels to use the "for" attribute so labels can be styled */}
            <form
                className="contact-form"
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <label className="name">
                    Name
                    <input type="text" name="name" id="name" />
                </label>
                <label className="email">
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label className="subject">
                    Subject
                    <input type="text" name="subject" id="subject" />
                </label>
                <label className="message">
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button className="button" type="submit">
                    Send
                </button>
            </form>
        </Card>
    </Container>
)

export default ContactCard
