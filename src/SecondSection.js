import Strange from "./Strange";
import "./second.css";

function SecondSection({ img, head, para, children }) {
  return (
    <div className="second">
      <div className="secCon" style={{ position: "relative" }}>
        <img className="secImg" src={img}></img>
        {children}
      </div>
      <div className="secHeadCon">
        <h1 className="heading">{head}</h1>
        <p className="secondPara">{para}</p>
      </div>
    </div>
  );
}

export default SecondSection;
