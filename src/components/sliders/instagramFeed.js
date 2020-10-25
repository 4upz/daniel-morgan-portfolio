import React from "react"
import Container from "../shared/container"

const InstagramFeed = () => (
    <Container className="ig-feed">
        <h1>Follow Me on Instagram</h1>
        {/* TODO" Convert to Gatsby/React Responsive iFrame */}
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
            title="IGFeed"
            src="//lightwidget.com/widgets/1cc87fbc18b25598a567abc45c63ca90.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget"
            style={{ width: "100%", border: 0 }}
        ></iframe>
    </Container>
)

export default InstagramFeed
