// should i import the navbar
import img1  from '../assets/images/img1.png';

const Services = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px '}}>
            <h1> Services</h1>
            <img src={img1}
            alt='Services and Pricing'
            style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    )
}

export default Services;