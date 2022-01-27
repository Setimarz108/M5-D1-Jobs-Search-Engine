import React from 'react';
import AddButton from "./AddButton";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Jobs(jobs, search) {
  return (
    <>
       <div>
        {jobs &&
          jobs.data
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

                      <AddButton  />
                    </div>
                    <h3>{job.category}</h3>
                    <h6>{job.candidate_required_location}</h6>
                  </Col>
                </Row>
              </Container>
            ))}
      </div>
      </>)
}

