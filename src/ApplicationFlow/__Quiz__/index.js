import React from "react";
import { NavBar } from "../components/compound/Navigation";
import "../fonts/index";
import { withRouter } from "react-router-dom";

import { Container, Row, Col as Column } from "react-grid-system";

class Page extends React.Component {
  render() {
    return (
      <div>
        <NavBar inverse heading="Step 4: Create Subject" />
        <Container>
          <Row>
            <Column />
          </Row>
        </Container>
      </div>
    );
  }
}
export default withRouter(Page);
