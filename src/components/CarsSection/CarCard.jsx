import { Icon } from "@iconify/react";
import "./CarsSection.css";
import car from "../../assets/car.png";
import { useState } from "react";

const CarCard = (props) => {
  const [fav, setFav] = useState(props.fav);

  function toggleFav() {
    setFav(!fav);
  }

  return (
    <div className="carCard">
      <div className="cardHeader">
        <div className="carName">
          <h4>Koenigsegg</h4>
          <span>Sport</span>
        </div>

        <Icon
          onClick={toggleFav}
          style={{ color: fav ? "red" : "black" }}
          className="cardIcon"
          icon="ion:heart-sharp"
        />
      </div>

      <div className="carCard_m">
        <div className="carImg">
          <img src={car} alt="car Image" />
        </div>

        <div className="carFeatures">
          <div className="feature">
            <Icon className="carIcons" icon="bi:fuel-pump-fill" />
            <span>90L</span>
          </div>
          <div className="feature">
            <Icon className="carIcons" icon="tabler:pokeball" />
            <span>Manual</span>
          </div>
          <div className="feature">
            <Icon className="carIcons" icon="ic:round-people-alt" />
            <span>2 People</span>
          </div>
        </div>
      </div>

      <div className="carFooter">
        <div className="carRent">
          <span>
            <strong>$99.00/</strong>day
          </span>
          <span className="strike">$100.00</span>
        </div>
        <button>Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
