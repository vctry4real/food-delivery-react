import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "₦";
  return (
    <div className="bannerContent">
      <h3>Hello {name},</h3>
      <p>
        Learn more about Nigerian recipes
      </p>
      <a href={"https://www.allnigerianrecipes.com/"} target="_blank" >Learn More</a>
    </div>
  );
}

export default BannerName;
