import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import car from "./assets/car.png";
import SearchSection from "./components/SearchSection/SearchSection";
import CarsSection from "./components/CarsSection/CarsSection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="home">
        {/* top Section of landing page */}
        <div className="topSection">
          <div className="leftTopSection">
            <div className="topContent">
              <h1>The Best Platform for Car Rental</h1>
              <p>
                Ease of doing a car rental safety and reliably. Of course at a
                low price.
              </p>
              <button>Rental Car</button>
            </div>
            <img src={car} alt="" />
          </div>
          <div className="rightTopSection">
            <div className="topContent">
              <h1>Easy way to rent a car at a low price</h1>
              <p>
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <button>Rental Car</button>
            </div>
            <img src={car} alt="" />
          </div>
        </div>

        {/* Pick-up & Drop-off Section */}
        <SearchSection />

        {/* Cars to show */}
        <CarsSection />
      </div>
      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
