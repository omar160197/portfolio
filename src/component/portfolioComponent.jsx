import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function PortfolioSection(props) {
const projectCard=props.cardProjects.map((item,id)=>{
   return(
    <div key={id} class="mb-5 col-sm-12 col-md-4 col-lg-4">
    <MDBCard>
    <MDBCardImage
      src={item.projectImage}
      position="top"
      alt="..."
    />
    <MDBCardBody>
      <MDBCardTitle>{item.projectName}</MDBCardTitle>
      <MDBCardText>
        {item.projectDiscription}
      </MDBCardText>
      <a className="btn btn-primary" href={item.projectLink}>GitHub</a>
    </MDBCardBody>
  </MDBCard>
  </div>
   ) 
})

  return (
    <section id="portfolio">
      <h1 class="display-5 fw-bold"  style={{textAlign: "center"}}>
        Portfolio
      </h1>
      <hr class="mb-5" style={{width:"15%",margin: "auto"}}></hr>
      <div class="py-3  container">
        <div class="row text-center">
        {projectCard}
        </div>
      </div>
    </section>
  );
}
