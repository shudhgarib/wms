const MyModal = ({onClick}) => {
  return (
    <>
      <div
        className="modal-wrapper mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}>
        <div
          className="modal-container"
          style={{
            textAlign: "center",
            color: "white",
            padding: "10px",
            border: "3px solid white",
            borderRadius: "10px",
            background: "black",
          }}>
          <h3
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
            }}>
            ThankYou!
          </h3>
          <p>Your donation is visible in the donor List.</p>
          <button
            onClick={onClick}
            style={{
              borderRadius: "100%",
              padding: "5px",
            }}>
            ❌
          </button>
        </div>
      </div>
    </>
  );
};
export default MyModal;
