import product from './product';

const Picture = () => {
    return <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />;
};

export default Picture;