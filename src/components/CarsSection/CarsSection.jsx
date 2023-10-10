import React, { useEffect } from "react";
import './CarsSection.css'
import CarCard from "./CarCard";

const CarsSection = () => {

  // useEffect(() => {
  //   fetch("")
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data.Results)
  //   })
  // }, [])
  
  return (
    <>
      <div className="carsSection">

        {/* Popular Car Section */}
        <div className="popularSection">
          <div className="popularSectionHead">
            <h4>Popular Car</h4>
            <a href="#">View All</a>
          </div>

          <div className="popularSectionCars">
            <CarCard fav={false} />
            <CarCard fav={true} />
            <CarCard fav={false} />
            <CarCard fav={false} />
          </div>
        </div>

        {/* Recommended Car Section */}
        <div className="popularSection">
          <div className="popularSectionHead">
            <h4>Recomendation Car</h4>
            <a href="#">View All</a>
          </div>

          <div className="RecomSectionCars">
            <CarCard fav={true} />
            <CarCard fav={false} />
            <CarCard fav={true} />
            <CarCard fav={false} />
            <CarCard fav={false} />
            <CarCard fav={true} />
            <CarCard fav={false} />
            <CarCard fav={false} />
          </div>

          <div className="showMore">
            <button>Show more car</button>
            <span>120 Cars</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default CarsSection;
