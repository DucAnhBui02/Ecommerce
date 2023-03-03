import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img
                    src="https://i.pinimg.com/564x/1f/49/8e/1f498e023da7d61e452a078bbd81119a.jpg"
                    className="card-img"
                    alt="background"
                    height="550px"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT THE ALL TRENDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
};

export default Home;
