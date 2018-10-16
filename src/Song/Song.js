import React from "react";
// Import Container component.
import Container from "../Container";
// Import Row component.
import Row from "../Row";
// Import Col component.
import Col from "../Col";
// Import css
import './Song.css';

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
const Song = ({ _id, handleSaveButton, title, snippet, date, url }) => (
    <li>
        <Container>
            <Row style={{marginTop: 40}}>
                <Col size="xs-8 sm-9">
                    <h3>{ title }</h3>
                    <p>{ snippet }</p>
                    <p>Published on { date }</p>
                    <a rel="noreferrer noopener" target="_blank" href={ url }>
                    </a>
                </Col>
            </Row>
        </Container>
    </li>
);

// Export search results list component.
export default Song;
