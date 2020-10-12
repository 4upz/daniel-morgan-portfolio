import React from "react"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Image from "../components/image"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    </Layout>
)

export default IndexPage
