import Card from './Card';

const Hero = () => {
  const heroStyle = {
    backgroundColor: "lightgrey",
    height: "62vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Playfair Display",
    fontSize: "2rem",
  };

  const sectionStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  };
  return (
    <div>
        <div style={heroStyle}>
            <h1>Glamour in Every Lash Transformation</h1>
        </div>
        <div style={sectionStyle}>
            <Card title='About' content='Your story goes here or I can update to a small section about your journey and photos, keep it simple' />
            <Card title='Services' content='Explore services offered and contact me for your tailored needs.' />
               <Card title='Booking' content='Book your appointment easily online.' /> 
        </div>

    </div>
  );
};

export default Hero;
