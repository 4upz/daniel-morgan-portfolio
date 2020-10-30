import React from "React"
import Card from "./card"

const ContentCard = ({ title, children, className }) => (
    <Card className={`content ${className || ""}`}>
        <h2>{title}</h2>
        {children}
    </Card>
)

export default ContentCard
