import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const [data, setdata] = useState([]);
  const param = useParams();
  console.log(param.id, "param");
  const fetchdata = () => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => res.json())
      .then((newdata) => setdata(newdata));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data, "data");

  return (
    <>
      <div style={{ width: "60%", margin: "10px auto" }}>
        <h2>Home</h2>
        <img src={data.image} alt="srcimage" width="250px" height="250x" />
        <h2>{data.title}</h2>
        <h2>${data.price}</h2>
      </div>
    </>
  );
};

export default Home;
