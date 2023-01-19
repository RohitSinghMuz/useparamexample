import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pageone = () => {
  const [data, setdata] = useState([]);

  const navigate = useNavigate();
  const getdata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((objdata) => setdata(objdata));
  };

  useEffect(() => {
    getdata();
  }, [data]);
  console.log(data, "data");

  const btndetails = (item) => {
    navigate(`/home/${item.id}`);
  };
  return (
    <>
      <div style={{ width: "30%", margin: "10px auto" }}>
        <h2>Homepage</h2>
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <button
                style={{ padding: "15px", margin: "20px" }}
                onClick={() => btndetails(item)}
              >
                {item.id} Click
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Pageone;
