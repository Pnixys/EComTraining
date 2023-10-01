import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from "react-redux";
import { IsNotNullOrUndefined } from "../../../utils/DataUtils";

import Product from "../../../Models/Product";
import IProductGraphService from "../../../services/productService/IProductGraphService";
import ProductGraphService from "../../../services/productService/ProductGraphService";
import { addProduct } from "../../../app/cart/cartSlice";
import { Guard } from "../../../utils/Guard";

import { connectedUser } from '../../../app/user/userSlice'

const CardDetails = () => {
    const _productGraphService: IProductGraphService = new ProductGraphService();
    const location = useLocation();
    const [product] = useState(location.state.product as Product);
    const [productGraph] = useState(_productGraphService.getGraphById(product.id));
    const [canBuy, setCanBuy] = useState(false);

    const user = useSelector(connectedUser);

    const dispatch = useDispatch();

    const buyProduct = () => {
        console.log(IsNotNullOrUndefined(user), user)
        if (IsNotNullOrUndefined(user)) {
            Guard.IsNotNull(product, "Product is null");
            dispatch(addProduct(product));

        } else {
            setCanBuy(true);
        }
    }

    return (
        <div className="grid grid-cols-3 mt-2">
            <div className="col-span-1 justify-self-center ml-5">
                <h2 className="text-center text-2xl">{product.name}</h2>
                <img src={product.image} alt={product.name} />
            </div>
            <ResponsiveContainer className="col-span-2" width="95%">
                <LineChart data={productGraph?.priceHistory}>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <XAxis dataKey="date" stroke="#fc850d" />
                    <YAxis stroke="#fc850d" />
                </LineChart>
            </ResponsiveContainer>

            <div className='col-span-3 row-start-2 text-justify p-5'>
                {product.description}
            </div>

            <div className="text-justify m-5 col-span-3 justify-self-center">
                <div>
                    <span className="text-3xl">Price: {product.price}</span>
                    <span> JGS</span>
                </div>
                <button id="buy-button" className="w-40 p-2 mt-2" onClick={buyProduct}>
                    BUY
                </button>
            </div>
        </div>
    );
};

export default CardDetails;