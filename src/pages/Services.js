import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const Services = () => {
    const [services, setServices] =useState([]);

    useEffect(() => {
        fetcher.get("/service").then(res => setServices(res.data));
    },[])

    return (
        <div>
            <h2>This is Services.</h2>
            <h2>This is Services.</h2>
            <h2>This is Services.</h2>
            <h2>This is Services.</h2>
            <h2>This is Services.</h2>
            <h2>This is Services.</h2>
            <p>length: {services.length}</p>
        </div>
    );
};

export default Services;