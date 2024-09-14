import product from './product';

const Price = () => {
    return <p>
        <span style={{ color: "red" ,fontWeight: "bold" }}>Price:</span> {product.price}
        </p>;
};

export default Price;