import {
  Container,
 
  Row,
  Col,
  Card,
  Button,
 
  Image,
  Form,
} from "react-bootstrap";
export default function About() {
  return (
    <>
      <div className="position-relative">
        <Image src="https://wallpapercave.com/wp/wp6987774.jpg" fluid />
        <div className="position-absolute top-50 end-50  text-white ">
          <h1 className="h1"> Discover The Colorful World of</h1>
          <span className="display-1"> Fiji Islands</span>
          <Button type="button" variant="dark" className="m-5 opacity-75">
            Book Now
          </Button>
        </div>
      </div>

      <Container className="mt-4">
        <Row>
          <Col sm={5} lg={3} className="m-3">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                className=""
                variant="top"
                src="https://tse1.mm.bing.net/th?id=OIP.N21meVTBwQROG4151Mt62wHaE8&pid=Api&P=0&h=180"
              ></Card.Img>
              <Card.Body>
                <Card.Title>Malamala Beach</Card.Title>
                <Card.Text>
                  Spend a day relaxing on a private island at the Malamala Beach
                  Club .Enjoy a hassle-free crossing—round-trip ferry tickets
                  are provided
                </Card.Text>
                <Button>Explore more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5} lg={3} className="m-3">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                className=""
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
          <Col sm={5} lg={3} className="m-3">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                className=""
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
          <Col sm={5} lg={3} className="m-3">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                className=""
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
          <Col sm={5} lg={3} xxl={3} className="m-3">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                className=""
                variant="top"
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/f0/da.jpg"
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
          <Col sm={5} lg={3} className="m-3">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                className=""
                variant="top"
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/58/28.jpg"
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
          </Col>
        </Row>
      </Container>
      <div className="row">
        <div className="col-md-6">
          <Form>
            <Row>
              <Col md="12">
                <Form.Group className="mb-3 col-md-8">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-8">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="mail@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-8">
                  <Form.Label>Any Queries</Form.Label>
                  <Form.Control as="textarea" placeholder="Type Here" />
                </Form.Group>
                <Button type="submit" className="m-3">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="col-md-6">
          <Image
            src="https://as2.ftcdn.net/v2/jpg/03/95/96/39/1000_F_395963930_wPVy49FD4gLPfuu0diLh2aRsxCwKy4Vk.jpg"
            fluid
          />
        </div>
      </div>
    </>
  );
}
