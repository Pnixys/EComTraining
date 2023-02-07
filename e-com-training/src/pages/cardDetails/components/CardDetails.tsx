import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Product from "../../../Models/Product";

const CardDetails = () => {
    const location = useLocation();
    const [product] = useState(location.state.product as Product);

    return (
        <div className="grid grid-cols-3 mt-2">
            <div className="col-span-1 justify-self-center ml-5">
                <h2 className="text-center text-2xl">{product.mainInfosProduct.name}</h2>
                <img src={product.image} alt={product.mainInfosProduct.name} />
            </div>
            <ResponsiveContainer className="col-span-2" width="95%">
                <LineChart data={product.priceHistory}>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <XAxis dataKey="date" stroke="#fc850d" />
                    <YAxis stroke="#fc850d" />
                </LineChart>
            </ResponsiveContainer>

            <div className='col-span-3 row-start-2 text-justify p-5'>
                {product.mainInfosProduct.description}
            </div>
        </div>
    );
};

export default CardDetails;
