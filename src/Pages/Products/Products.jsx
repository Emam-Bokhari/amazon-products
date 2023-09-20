import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
    const {products}=useLoaderData()
  
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    products?.map(item=><ProductsCard key={item.id} data={item} />)
                }
            </div>
        </div>
    );
};

export default Products;