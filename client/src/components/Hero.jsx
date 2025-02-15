import Card from "./Card";

const Hero = () => {
  const heroStyle = {
    backgroundColor: "#D9CBAE",
    height: "54vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Playfair Display",
    fontSize: "2rem",
  };

  const borderStyle = {
    borderBottom: "3px dashed #8B5A2B",
    margin: "0",
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
        <h1>Glamour in Every Lash Transformation To Be The Best Looking Hyna Out There....obv update to whatever</h1>
      </div>
      <div style={borderStyle}></div>
      <div style={sectionStyle}>
        <Card
          title="About"
          content="Your story goes here or I can update to a small section about your journey and photos, keep it simple. These 3 cards will open up to another page."
          link="/about"
        />

        <Card
          title="Services"
          content="Explore services offered and contact me for your tailored needs...whatever you want to put here to get them to click to see your services and pricing."
          link="/services"
        />
        <Card
          title="Booking"
          content="Book your appointment easily online. For a seamless experience, please click on BOOKINGS to review the booking rules and details. Your understanding of the policies ensures a smooth and enjoyable appointment."
          link="/bookings"
        />
      </div>
    </div>
  );
};

export default Hero;
