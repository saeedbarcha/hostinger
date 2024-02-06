import React from "react";
import TopCart from "./TopCart";
import { Container } from "react-bootstrap";
import topCategoriesBg1 from "./topCatBack-1.png";
// import topCategoriesBg2 from "./topCatBack-2.jpg";
import "./TopCategory.css";

const TopCategoryScreen = () => {
  return (
    <>
      {/* <Container fluid className="py-5 px-3 "> */}
      {/* <Container className="py-5 px-3 " style={{ minHeight:"450px", padding:"25px", background: `linear-gradient(rgba(29, 20, 205, 0.65), rgba(29, 205, 89, 0.2)), url(${bacImg}) fixed center center`}}> */}
      <Container className="py-5 px-3 " style={{ height:"500px", background: `linear-gradient(rgba(244, 247, 254, 0.9), rgba(244, 247, 254, 0.2)), url(${topCategoriesBg1}) fixed center center`, opacity:".9"}}>
     
      <h2 className="titleTopCategories ">Top Categories</h2>
        <TopCart />
      </Container>
    </>
  );
};

export default TopCategoryScreen;
