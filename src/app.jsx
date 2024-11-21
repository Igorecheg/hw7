import { useEffect, useState } from "react";
import "./index.css";
import { CountValue } from "./components/CountValue";
import { ProductCard } from "./components/ProductCard/card";

  const defaultValue = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GTUlYqtUyMdhP7BNzV55vUfTHJl5yQWLiQ&s",
      subname: "dad",
      name: "iphone 15 pro",
      price: 1299,
    },
    {
      img: "https://sun9-71.userapi.com/impf/c633821/v633821962/3250a/RJVPAtni34M.jpg?size=520x0&quality=95&sign=899e38884d3b4ad8bf0b92edf1ec2105",
      subname: "dad",
      name: "iphone 15 pro max",
      price: 1499,
    },
  ];

  
  export function App() {
    const [products, setProducts] = useState(defaultValue);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .finally(() => setLoading(false))
      .finally(() => setLoading(false))
    }, []);


    return (
      <div className="cont">
        {loading && <div>Loading...</div>}
        {products.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </div>
    );
  }
  
  

