import { Button, Row, Image, Col, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Home() {
  const getDetails = require("../details.json");
  return (
    <>
      <Container fluid>
        <Row className="landing p-5">
          <Col md={6}>
            {" "}
            <h1>Discover The Colorful World of FIJI</h1>
          </Col>
          <Col md={6}>
            <a className="btn btn-lg btn-light ">explore</a>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 ">
        <Row>
          {getDetails.map((items, index) => {
            return (
              <Col sm={5} lg={4} className="mt-2" key={index}>
                <Card className="shadow-lg">
                  <Card.Img
                    className="imgMaxHeight"
                    variant="top"
                    src={items.image}
                  ></Card.Img>
                  <Card.Body>
                    <Card.Title>{items.task}</Card.Title>
                    <Card.Text>{items.description}</Card.Text>
                    <Link
                      style={{ backgroundColor: "black" }}
                      className="btn btn-primary"
                      to={"/details/" + items.id}
                    >
                      Explore More..
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}

          {/* <Col sm={5} lg={4} className="mt-2">
            <Card className="shadow-lg">
              <Card.Img
                className="imgMaxHeight"
                variant="top"
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/8f/b3.jpg"
              ></Card.Img>
              <Card.Body>
                <Card.Title>Cultural Night Tour</Card.Title>
                <Card.Text>
                  Visit a local village to experience their culture, food, and
                  social activities Watch a fire dance and Meke performance
                </Card.Text>
                <Button>Explore more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5} lg={4} className="mt-2">
            <Card className="shadow-lg">
              <Card.Img
                className="imgMaxHeight"
                variant="top"
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/3b/99/2b.jpg"
              ></Card.Img>
              <Card.Body>
                <Card.Title>South Sea Island Cruise</Card.Title>
                <Card.Text>
                  Enjoy the ultimate day out in paradise at South Sea Island in
                  Fiji’s Mamanuca archipelago.Discover the stunning coral reefs,
                  kayak in the lagoons.
                </Card.Text>
                <Button>Explore more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5} lg={4} className="mt-2">
            <Card className="shadow-lg">
              <Card.Img
                className="imgMaxHeight"
                variant="top"
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/a7/1b/58.jpg"
              ></Card.Img>
              <Card.Body>
                <Card.Title>Encounter Snorkel with Sharks</Card.Title>
                <Card.Text>
                  An incredible encounter with marine life on this ultimate
                  snorkel with sharks encounter in Fiji. It's a hassle-free day
                  with a full itinerary organized for you.
                </Card.Text>
                <Button>Explore more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5} lg={4} className="mt-2">
            <Card className="shadow-lg">
              <Card.Img
                className="imgMaxHeight"
                variant="top"
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/f0/da.jpg" fluid
              ></Card.Img>
              <Card.Body>
                <Card.Title>Fiji Sunset Dinner Cruise</Card.Title>
                <Card.Text>
                  Glide into the sunset during a Denarau Island dinner cruise
                  and be welcomed aboard with a complimentary cocktail. Feast on
                  a buffet barbecue dinner and fresh-caught chargrilled whole
                  lobster.
                </Card.Text>
                <Button>Explore more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5} lg={4} className="mt-2">
            <Card className="shadow-lg">
              <Card.Img
                className="imgMaxHeight"
                variant="top"
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/58/28.jpg" fluid
              ></Card.Img>
              <Card.Body>
                <Card.Title>ATV Quad Bike Adventure Tour</Card.Title>
                <Card.Text>
                  Go deep into the wilderness of Fiji on this quad-bike
                  adventure tour. Spend half a day trekking up a mountain ridge
                  with a guide in the lead.
                </Card.Text>
                <Button>Explore more</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
