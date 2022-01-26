import React from 'react';
import AddButton from "./AddButton";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Jobs(job) {
  return <>
      <Row>
  <Col className="">
        <h1>{job.title}</h1>
    <div className="d-flex align-center">
      <Link to={"/" + job.company_name}>
        <h3 style={{ color: "salmon" }}>{job.company_name}</h3>
      </Link>

     <AddButton/>
    </div>
    <h3>{job.category}</h3>
    <h6>{job.candidate_required_location}</h6>
  </Col>
</Row></>;
}

