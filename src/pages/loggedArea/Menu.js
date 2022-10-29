import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products/productsApi";
// import { Button } from "../../components/button/Button";
import '../../styles/products.scss';

export function Menu() {
    const [products, setProducts] = useState("");
    const [errorGetProducts, setErrorGetProducts] = useState("");

    const getProducts = () => {
        getAllProducts()
            .then((productList) => {
                setProducts(productList);
            })
            .catch((err) => {
                setErrorGetProducts(err);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {errorGetProducts === '' &&
                <div style={{ 
                        display: 'flex', 
                        width: '100%', 
                        justifyContent: 'center'
                    }}
                >
                    <div style={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            width: '90%', 
                            background: '#F8E8E8', 
                            alignItems: 'center'
                        }}
                    >
                        {products.map((product) => {
                            return (
                                <div style={{
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        width: '60%', 
                                        margin: '10px', 
                                        borderRadius: '5px', 
                                        alignItems: 'center', 
                                        boxShadow: '0 0 3px 2px #FFAAC2', 
                                        background: 'rgba(255,170,194,0.3)'
                                    }}
                                >
                                    <p style={{
                                            margin: '5px 0', 
                                            color: '#A396C2'
                                        }}
                                    >
                                        {product.name} - {product.description}
                                    </p>
                                    <p style={{
                                            margin: '5px 0', 
                                            color: '#A396C2'
                                        }}
                                    >
                                        Preço: {product.price}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }    
            {errorGetProducts !== '' &&
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', color: '#A396C2'}}>
                    <p>Não foi possível exibir o cardápio, tente novamente.</p>
                </div>
            }
        </>
    )
}
