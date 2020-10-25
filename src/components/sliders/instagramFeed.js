import React from "react"
import Container from "../shared/container"

const InstagramFeed = () => (
    <Container className="ig-feed">
        <h1>Social Media</h1>
        {/* TODO" Convert to Gatsby/React Responsive iFrame */}
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <Container className="widget">
            <iframe
                title="IGFeed"
                src="//lightwidget.com/widgets/c2eb0c27b9ac5e16994ad7d17f94d21b.html"
                scrolling="no"
                allowtransparency="true"
                className="lightwidget-widget"
            ></iframe>
        </Container>
    </Container>
)

export default InstagramFeed
