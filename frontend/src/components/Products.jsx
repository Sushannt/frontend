import axios from "axios";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState(50);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`/api/shop?range=${range}`);
      setProducts(data);
    };

    getProducts();
  });
  return (
    <>
      <div className="flex justify-between items-center w-11/12 mx-auto mt-[10vh]">
        <h1 className="text-2xl mt-10 font-bold tracking-wider">
          Latest Fashion Products
        </h1>
        <div className="min-w-[30vw]">
          <h1 className="mb-2 font-semibold">Price Filter</h1>
          <input
            type="range"
            min={25}
            max="125"
            value={range}
            className="range w-full"
            step="25"
            onChange={(event) => setRange(Number(event.target.value))}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
            <span>125</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-2 mt-4 w-11/12 mx-auto">
        {products.map((product) => (
          <div
            className="card w-96 bg-base-100 shadow-xl py-5"
            key={product._id}
          >
            <figure>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-3/4 rounded-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="truncate">{product.description}</p>
              <div className="card-actions justify-between">
                <div>
                  <h2 className="text-3xl font-bold">${product.price}</h2>
                </div>
                <div>
                  <div className="badge badge-outline">{product.category}</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
