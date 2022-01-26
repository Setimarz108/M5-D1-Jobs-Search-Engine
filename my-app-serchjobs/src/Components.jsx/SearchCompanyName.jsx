import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ConstructionRounded } from "@mui/icons-material";


function SearchCompanyName() {

   const params = useParams();
  const [companyJobs, setCompanyJobs] = useState([]);

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
  try {
    const resp = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${params.companyName}`
    );
    if (resp.ok) {
      const company = await resp.json();
      setCompanyJobs(company);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {companyJobs.data &&
        companyJobs?.data.map((job) => (
            <Container
            style={{
              color: "#fff",
              backgroundColor: "#5865F2",
              border: "1px solid gray",
              borderRadius: "10px",
            }} className="col-md-6 col-lg-8 "
          >
            <Row>
              <Col className="">
                {" "}
                <h1>{job.title}</h1>
                <Link to={"/" + job.company_name}>
                  <h3 style={{color:"salmon"}}>{job.company_name}</h3></Link>
                <h3>{job.category}</h3>
               <h6>{job.candidate_required_location}</h6>
              </Col>
            </Row>
          </Container>
        ))}
    </div>
  );
}

export default SearchCompanyName;