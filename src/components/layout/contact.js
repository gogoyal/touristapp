import { Row, Col, Container, Image, Form ,Button } from "react-bootstrap";
export default function Contact() {
  return (
    <>
      
        <Container fluid>
        <Row>
          <Col md="6"className="d-flex align-items-center" >
            <Form>
                
           <Row className="m-3">
              <Col className="" lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h3>First Name</h3>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    className="border border-2 "
                  />
                </Form.Group>
              </Col>
              <Col className="" lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h3>Last Name</h3>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last Name"
                    className="border border-2 "
                  />
                </Form.Group>
              </Col>
              <Col className="" lg={6}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label><h3>Email</h3></Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    className="border border-2 "
                  />
                </Form.Group>
              </Col>
              <Col className="" lg={6}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label><h3>Phone Number</h3></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Number Here"
                    className="border border-2 "
                  />
                </Form.Group>
              </Col>
              <Col className="" lg={12}>
                
                <Form.Group className="mb-3">
                  <Form.Label><h3>Message</h3></Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Maximum of 300 characters"
                    className="border border-2 "
                  />
                </Form.Group>
              </Col>
              <div className="d-grid gap-2"><Button type="submit" style={{backgroundColor:'black'}}>Submit</Button></div>
            </Row>
            </Form>
          </Col>
          <Col md="6">
            <Image
              src="https://thumbs.dreamstime.com/b/contact-us-page-girl-sits-laptop-handles-calls-customers-technical-support-collecting-feedback-answering-questions-233545730.jpg"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      
    </>
  );
}
