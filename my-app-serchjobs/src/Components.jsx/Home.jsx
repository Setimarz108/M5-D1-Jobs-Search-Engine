import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BiListPlus } from "react-icons/bi";
import { fetchJobsAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  jobsArray: state.jobsData.storage,  
});

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => {
      dispatch(fetchJobsAction())
  }
})



function Home(props) {
  const [jobs, setJobs] = useState(); //the state should be first undefined in order to render the object properly with a coditional(line 47)
  const [search, setSearch] = useState("");

    const handleSearch = (e) => {
    setSearch(e.target.value);
    // develo
  };

  useEffect(() => {
    props.getJobs()
  }, []);

  return (
    <>
      <Container className="mb-3">
        <Row>
          <Col
            xs={12}
            style={{
              border: "1px solid gray",
              borderRadius: "22px",
              backgroundColor: "#404EED",
            }}
          >
            <Form className="justify-content-center">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  placeholder="search"
                  onChange={handleSearch}
                  value={search}
                  type="search"
                />
                <Button color="primary" onClick={() => {}} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      
     <Link to="/favorites"><h2>Favourites</h2></Link> 
      <div>
        {props.jobsArray &&
          props.jobsArray
            .filter((job) => true || job.title.toLowerCase().includes(search))
            .map((job) => (
              <Container
                style={{
                  color: "#fff",
                  backgroundColor: "#5865F2",
                  border: "1px solid gray",
                  borderRadius: "10px",
                }}
                className="col-md-6 col-lg-8 mb-2 "
              >
                <Row>
                  <Col className="">
                    {" "}
                    <h1>{job.title}</h1>
                    <div className="d-flex align-center">
                      <Link to={"/" + job.company_name}>
                        <h3 style={{ color: "salmon" }}>{job.company_name}</h3>
                      </Link>

                      <span>
                        <button onClick={() => props.addToFavs(job)}
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <BiListPlus
                            style={{
                              color: "white",
                              width: "50px",
                              height: "50px",
                              marginLeft: "10px",
                            }}
                          />
                        </button>
                      </span>
                    </div>
                    <h3>{job.category}</h3>
                    <h6>{job.candidate_required_location}</h6>
                  </Col>
                </Row>
              </Container>
            ))}
      </div>
    </>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
