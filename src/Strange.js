import strange from "./Images/boxshot.png";
import down from "./Images/download-icon.gif";
import "./strange.css";
function Strange() {
  return (
    <div>
      <div className="StrangeCon">
        <div>
          <img src={strange} alt="strange" className="strimg"></img>
        </div>
        <div className="headdiv">
          <p className="strpara">Stranger Things</p>
          <p style={{ color: "blue" }}>Downloading...</p>
        </div>
        <div className="loaddiv">
          <img src={down} className="loading" alt="load"></img>
        </div>
      </div>
    </div>
  );
}

export default Strange;
