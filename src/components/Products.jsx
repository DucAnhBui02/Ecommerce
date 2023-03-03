/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            const respone = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await respone.clone().json());
                setFilter(await respone.json());
                setLoading(false);
            }
            return () => {
                // eslint-disable-next-line no-const-assign
                componentMounted = false;
            };
        };
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const filterProducts = (products) => {
        const updateLists = data.filter((x) => x.category === products);
        setFilter(updateLists);
    };
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>
                        Men's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>
                        Women's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('jewelery')}>
                        Jewelery
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('electronics')}>
                        Electronic
                    </button>
                </div>
                {filter.map((product) => {
                    return (
                        <React.Fragment key={product.id}>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4">
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt={product.title}
                                        height="250px"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                                            Buy Now
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </>
        );
    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
            </div>
        </div>
    );
};

export default Products;
