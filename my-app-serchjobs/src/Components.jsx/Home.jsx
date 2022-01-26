import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Home() {
  const [jobs, setJobs] = useState(); //the state should be first undefined in order to render the object properly with a coditional(line 47)
  const [search, setSearch] = useState("");

  

  const fetchJobs = async (search = "developer") => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`,
        
        );
      console.log("response", response);
      if (response.ok) {
        let jobs = await response.json();
        setJobs(jobs);
        console.log("myData", jobs);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

const handleSearch = (e) => {
    setSearch(e.target.value);
    fetchJobs(e.target.value); // develo
  };

  
  useEffect(() => {
     fetchJobs()    
  }, []);

  return (
    
     <>
      <Container className="mb-3">
    <Row>
        <Col xs={12} style={{border: '1px solid gray', borderRadius:"22px", backgroundColor:'#404EED'}}>
            <Form className="justify-content-center">
                <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label></Form.Label>
                    <Form.Control 
                     placeholder="search"
                    onChange={handleSearch} value={search} type="search"/>
                    <Button color="primary" onClick={() => {
                   }}/>
                </Form.Group>
            </Form>
        </Col>
    </Row></Container>
    
     <div>
      {jobs &&
        jobs.data.filter((job) => true || job.title.toLowerCase().includes(search)).map((job) => (
          <Container
            style={{
              color: "#fff",
              backgroundColor: "#5865F2",
              border: "1px solid gray",
              borderRadius: "10px",
            }} className="col-md-6 col-lg-8 mb-2 "
          >
            <Row>
              <Col className="">
                {" "}
                <h1>{job.title}</h1>
                <Link to={"/" + job.company_name}>
                  <h3 style={{color:"salmon"}}>{job.company_name}</h3> 
                  <span><button></button></span></Link>
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
