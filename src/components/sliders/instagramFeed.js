import React from "react"
import Container from "../shared/container"

const InstagramFeed = () => (
    <Container className="ig-feed">
        <h1>Social Media</h1>
        {/* TODO" Convert to Gatsby/React Responsive iFrame */}
        <Container className="widget">
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe
                src="//lightwidget.com/widgets/61e07e19455a53d1b3c200ee85218a49.html"
                scrolling="no"
                allowtransparency="true"
                className="lightwidget-widget"
                style={{ width: "100%", border: 0, overflow: "hidden" }}
            ></iframe>
        </Container>
    </Container>
)

export default InstagramFeed
