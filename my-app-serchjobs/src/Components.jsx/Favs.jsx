import React from 'react';
import {connect} from 'react-redux'
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteFromFavorites } from '../redux/actions'; 

const mapStateToProps = (state) => ({
  favJobs: state.favorites.favJobs
})

const mapDispatchToProps = (dispatch) => ({
  addToFavs: (job) => {
    console.log("Dispatching job:",job)
    dispatch({
      type: "ADD_TO_FAVS",
      payload: job
    });
  },
});

// const mapDispatchToProps = (dispatch) => ({
//   delFromFavorites: (job) => {
//       dispatch({
//           type: 'DEL_FROM_FAVORITES',
//           payload: job._id
//       })
//   },
// })

const Favs = ({ favJobs }) => (
  <>
          {favJobs.map((job) =>(

            <Container
                  style={{
                    color: "#fff",
                    backgroundColor: "#5865F2",
                    border: "1px solid gray",
                    borderRadius: "10px",
                  }}
                  className="col-md-6 col-lg-8 mb-2 mt-3 "
                >
                  <Row>
                    <Col className="sm-12 md-6 lg-4">
                      {" "}
                      <h1>{job.title}</h1>
                      <div className="d-flex align-center">
                        <Link to={"/" + job.company_name}>
                          <h3 style={{ color: "salmon" }}>{job.company_name}</h3>
                        </Link>
  
                        <span>
                          <button 
                    
                            style={{
                              border: "none",
                              backgroundColor: "transparent",
                            }} 
                            >
                            <RiDeleteBin6Line
                              style={{
                                color: "white",
                                width: "40px",
                                height: "40px",
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
          </>
);
  

 
     

export default connect(mapStateToProps,mapDispatchToProps)(Favs);


