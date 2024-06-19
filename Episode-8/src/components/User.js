import React, { useEffect } from "react";

const User = (props) => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Ridam Singhal");
    }, 1000);

    return () => {
      console.log("Unmounted");
      clearInterval(id);
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Name: king</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: linkedin.in</h4>
    </div>
  );
};

export default User;
