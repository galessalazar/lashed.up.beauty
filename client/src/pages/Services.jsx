// should i import the navbar
import pic1 from '../assets/images/pic1.png';

const Services = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px '}}>
            <h1> Services</h1>
            <img src={pic1}
            alt='Services and Pricing'
            style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    )
}

export default Services;