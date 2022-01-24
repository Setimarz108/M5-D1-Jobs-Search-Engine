import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Search from "./Search";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e)=>{
    setSearch(e.target.value)
 }

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let response = await fetch(
          "https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2NDI0NDE3ODksImV4cCI6MTY0MzY1MTM4OX0.c8a_yy-ROyiriWmK5LnQYY8Gmrz8smjTnxvGxtDu-24",
            },
          }
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
    fetchJobs();
  }, []);


  return (
    <>
      <Search  onChange={handleSearch} value={search} className="mb-4"/>
      {jobs.data.map((job) => (
          <Container style={{color:"#fff",backgroundColor:"#5865F2",border: '1px solid gray', borderRadius:"10px"}}>
              <Row>
                  <Col> <h1>{job.title}</h1></Col>
              </Row>
              
        </Container>
      ))}
    </>
  );
}
