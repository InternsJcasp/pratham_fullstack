export const ProductCard = ({ productName, image, details, price, rating }) => {
  return (
    <div className="product-card">
      <img src={image} alt={productName} />

      <h2>{productName}</h2>

      <p>{details}</p>

      <p>Price: {price}</p>

      <p>Rating: ⭐ {rating}</p>
    </div>
  );
};
