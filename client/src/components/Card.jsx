import PropTypes from "prop-types";

const Card = ({ title, content }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    flex: "1",
    textAlign: "center",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "Playfair Display",
    margin: "0 0 10px",
  };

  return (
    <div style={cardStyle}>
      <h2 style={ titleStyle}>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
