import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function TaskDetails() {
 
  const detail = require("../details.json");
  const id = useParams("id") || null;

  const Detail = (task) => {
    switch (task) {
      case "1":
        return detail[0];
      case "2":
        return detail[1];
      case "3":
        return detail[2];
      case "4":
        return detail[3];
      case "5":
        return detail[4];
      case "6":
        return detail[5];
    }
  };


  return (
    <>
      <Container className="">
        <Row className="m-2">
          <Col sm={12}>
            <h1 className="m-2">{Detail(id.id).task}</h1>
          </Col>
          <Col md={7}>
            <Image src={Detail(id.id).image} fluid />
            <Row className="m-1">
              <Button className="btn-lg btn-dark rounded-1 mt-2">
                book Now
              </Button>
            </Row>
          </Col>

          <Col md={5} className="">
            <Row className="border border-2 p-3 mb-2">
              <Col sm={12} className="">
                <h4 style={{ color: "#f38758" }}>Description :</h4>
              </Col>
              <Col lg={12}>{Detail(id.id).description}</Col>
            </Row>
          </Col>
          <Col md={5} className="">
            <Row className="border border-2 p-3 mb-2">
            <Col sm={12} className="">
                <h4 style={{ color: "#f38758" }}>Included :</h4>
              </Col>
                {Detail(id.id).included.map((items,index)=>{
                    return(
                        <Col lg={12} keys={index}> <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "green" }}
                      ></i> {items}</Col>   
                    )
                })}
              
            </Row>
            <Row className="border border-2 p-3 mb-2">
             <Col sm={12}>
             <h4 style={{ color: "#f38758" }}> Not Included :</h4>
             </Col>
             {Detail(id.id).notincluded.map((items,index)=>{
                return(
                    <Col lg={12} keys={index}>
                        <i class="fa-solid fa-circle-xmark"  style={{ color: "red" }}></i> {items}</Col>
                )
             })}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className=" p-3" style={{backgroundColor:'#241861'}}>
        <Row>
          <Col
            md={7}
            className="text-white d-flex justify-content-center align-items-center"
          >
            Get 20% OFF on your first booking 
          </Col>
          <Col>
            <a
              className="btn btn-lg d-flex justify-content-center"
              href="/premium"
              style={{ color: "#e38569" }}
            >
             Claim Now
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
