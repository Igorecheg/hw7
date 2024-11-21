import "./index.css";

export function ProductCard({ data }) {
  return (
    <div className="product-card">
      <img width="200" src={data.image} alt={data.name} />
      <div className="inter">
      <h5>{data.category}</h5>
      <h4>{data.title}</h4>        
      </div>
      <div className="outer">
      <span>$ {data.price}</span> 
      <button><p className="txt">Add to cart</p></button>      
      </div>

    </div>
  );
}