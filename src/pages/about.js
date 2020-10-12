import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

const SecondPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>Hi from the about page</h1>
        <p>Welcome</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage
