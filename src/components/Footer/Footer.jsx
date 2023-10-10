import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footer">
        <div className="footTitle">
          <h1>MORENT</h1>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="footLinks">
          <ul>
            <li className="linkHead">About</li>
            <li>
              <a href="#">About it works</a>
            </li>
            <li>
              <a href="#">Featured</a>
            </li>
            <li>
              <a href="#">Partnership</a>
            </li>
            <li>
              <a href="#">Business Relation</a>
            </li>
          </ul>
          <ul>
            <li className="linkHead">Community</li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
            <li>
              <a href="#">Invite a friend</a>
            </li>
          </ul>
          <ul>
            <li className="linkHead">Socials</li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <div className="leftFoot">
          <span>@2022 MORENT.All rights reserved</span>
        </div>

        <div className="rightFoot">
          <span><a href="#">Privacy & Policy</a></span>
          <span><a href="#">Terms & Condition</a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
