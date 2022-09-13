import React from "react";
// import { Link } from "react-router-dom";
// import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
// import Rating from "../components/Rating";
import { useSearchParams } from "react-router-dom";
import products from "../products";

const ProductScreen = ({ match }) => {
  const [searchParams] = useSearchParams();
  // const product = products.find((p) => p._id === match.params.id);
  console.log(searchParams);

  return <div>hello</div>;
};

export default ProductScreen;
