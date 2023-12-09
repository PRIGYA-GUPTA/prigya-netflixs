import "./email.css";

function Email() {
  return (
    <>
      <div className="herofooter">
        <input
          type="email"
          className="email"
          placeholder="Email address"
        ></input>
        <div className="herostart">
          <span className="start">Get Started &gt;</span>
        </div>
      </div>
    </>
  );
}

export default Email;
