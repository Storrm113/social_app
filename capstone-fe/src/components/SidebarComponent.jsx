import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SidebarComponent() {
  // const [communities, setCommunities] = useState([])
  // useEffect(() => {
  //   axios(`${import.meta.env.VITE_API_BASE_URL}/communities`, {  // 🔹 Fixed Axios request
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((res) => {
  //       console.log(res.data);
  //       setCommunities(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, );

  // if (!setCommunities) return <p>Loading...</p>;

  return (
    <>
      <nav className="sidebar">
        <Link to="/"> Home </Link> {/* big letters */}
        <Link to="/myprofile"> Profile </Link>
        <Link to="/communities"> Communities </Link>
        <Link to="/messages"> My Messages </Link>
      </nav>
      {/* <div>
        {communities?.map((community, index) => (
          <div key={index}>{community}</div>
        ))}
      </div> */}
    </>
  );
}

export default SidebarComponent;
