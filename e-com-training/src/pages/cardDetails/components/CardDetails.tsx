import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Product from "../../../Models/Product";

const CardDetails = () => {
    const location = useLocation();
    const [product, setProduct] = useState(location.state.product as Product);

    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1 justify-self-center">
                <h2>{product.mainInfosProduct.name}</h2>
                <img src={product.image} alt={product.mainInfosProduct.name} />
            </div>
            <ResponsiveContainer className="col-span-2" width="95%">
                <LineChart data={product.priceHistory}>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <XAxis dataKey="date" />
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>

            <div className='col-span-3 row-start-2 text-justify p-5'>
                Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores eius minus quo, quibusdam libero fuga, maxime aspernatur quisquam mollitia dicta! Beatae nobis corrupti ad? Quia necessitatibus ipsa velit voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis facere natus vel temporibus nam hic, a itaque. Fuga dicta illum, veritatis eius officia voluptate ad minima inventore sit possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cum nesciunt officiis consequuntur ducimus aliquam commodi dolorum aspernatur dignissimos quam! Voluptatum quae nemo tenetur corrupti quidem, rem rerum porro quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, accusamus aut? Ipsum, eaque quo odio eius, magni, error aspernatur beatae quae ducimus incidunt tempore nemo deserunt doloremque corporis eos dolorem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam incidunt labore obcaecati explicabo molestias deserunt dolor id, quibusdam exercitationem magnam commodi blanditiis quidem quo quam, tempore provident et velit debitis.
            </div>
        </div>
    );
};

export default CardDetails;
