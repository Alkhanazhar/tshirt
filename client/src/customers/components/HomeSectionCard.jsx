import { Button } from "@mui/material";
import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="card w-[18rem] bg-base-100 shadow-md duration-200 hover:shadow-xl mx-auto">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="w-[18rem] h-[18rem]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end mt-4">
          <Button variant="contained">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
