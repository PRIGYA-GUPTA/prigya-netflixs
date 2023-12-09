import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./eng.css";
function Eng() {
  return (
    <div className="sec">
      <FontAwesomeIcon icon={faGlobe} className="fav" />
      <select className="box" name="lan" id="lan">
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
      </select>
    </div>
  );
}

export default Eng;
