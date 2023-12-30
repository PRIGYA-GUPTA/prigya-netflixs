import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function List({ list, setShowList }) {
  const handleClose = () => {
    setShowList(false);
  };
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          //   display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            width: "50rem",
            height: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            padding: "48px",
            borderRadius: "12px",
            margin: "auto",
            marginTop: "20px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {console.log(list)}
          {!list || list.length === 0 ? (
            <p>Thumbs up to the movies you like</p>
          ) : (
            list.map((item, index) => (
              <div key={index}>
                <ul>
                  <li>
                    <h2>{item?.title || item?.name || item?.original_name}</h2>
                  </li>
                </ul>
              </div>
            ))
          )}
        </div>
        <FontAwesomeIcon
          onClick={handleClose}
          style={{ position: "absolute", top: 30, right: 10 }}
          icon={faTimes}
          size="2x"
        />
      </div>
    </div>
  );
}

export default List;
