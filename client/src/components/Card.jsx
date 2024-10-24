import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Card = ({ title, content, link }) => {
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
      <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <h2 style={ titleStyle}>{title}</h2></Link>
      <p>{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
