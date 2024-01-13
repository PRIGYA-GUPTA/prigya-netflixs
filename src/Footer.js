import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import Eng from "./Eng";
function Footer() {
  const FooterItems = [
    "FAQ",
    "Help Centre",
    "Account",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    " Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  return (
    <div className="footer">
      <div className="container">
        <p>Questions? Call 000-800-919-1694</p>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
          {FooterItems.map((item, index) => (
            <div className="col" key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="eng-wrapper">
          <Eng />
        </div>
        <p style={{ paddingTop: "1.5rem" }}>Netflix India</p>
      </div>
    </div>
  );
}

export default Footer;
