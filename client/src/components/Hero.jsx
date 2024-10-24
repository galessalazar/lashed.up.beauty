const Hero = () => {
    const heroStyle = {
        backgroundColor: 'lightgrey',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Playfair Display',
        fontSize: '2rem',
    };
    return (
        <div style={heroStyle}>
            <h1>Glamour in Every Lash Transformation</h1>
        </div>
    );
};

export default Hero;