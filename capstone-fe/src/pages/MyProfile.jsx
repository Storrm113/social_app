import React, {useEffect, useState} from 'react'
import axios from "axios"


function MyProfile({token}) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios("`${import.meta.env.VITE_API_BASE_URL}/myprofile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((data) => {
        console.log(data);
        setUserData(data.data);

      })
      .catch((err) => console.log(err));
  }, [token]);
  return (
    <div>Welcome {userData?.username}</div>
  )
}

export default MyProfile