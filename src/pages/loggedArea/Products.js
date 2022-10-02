import React, { useEffect, useState } from "react";
import { createProduct, getAllProducts } from "../../api/products/productsApi";
import { Button } from "../../components/button/Button";
import '../../styles/products.scss';

export function Products() {
    const [products, setProducts] = useState("");
    // eslint-disable-next-line
    const [newProduct, setNewProduct] = useState("");
    const [showNewProductForm, setShowNewProductform] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    // eslint-disable-next-line
    const [errorGetProducts, setErrorGetProducts] = useState("");
    // eslint-disable-next-line
    const [errorCreateProduct, setErrorCreateProduct] = useState("");

    const getProducts = () => {
        getAllProducts()
            .then((productList) => {
                setProducts(productList);
            })
            .catch((err) => {
                setErrorGetProducts(err);
            });
    };

    const createNewProduct = () => {
        const product = {
            name,
            type,
            price,
            description,
        };

        createProduct(product)
            .then((newProduct) => {
                console.log(newProduct);
                setNewProduct(newProduct);
                getAllProducts();
            })
            .catch((err) => {
                setErrorCreateProduct(err);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleClickShowNewProductForm = () => {
        setShowNewProductform(!showNewProductForm);
    };

    const handleInputName = (e) => {
        setName(e.target.value);
    };

    const handleInputDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleInputPrice = (e) => {
        setPrice(e.target.value);
    };

    const handleInputType = (e) => {
        setType(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        createNewProduct();
    };

    return (
        <div id="products-area">
            <div className="button-new-product">
                <p onClick={handleClickShowNewProductForm}>
                    {showNewProductForm ? 'Cancelar Cadastro -' : 'Cadastrar Produto +'}
                </p>
            </div>
            {showNewProductForm &&
                <div>
                {/* onSubmit={handleClick} */}
                    <form onSubmit={handleClick}>
                        <input
                            type="text"
                            placeholder="Nome do produto"
                            onChange={handleInputName}
                            value={name}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Descrição"
                            onChange={handleInputDescription}
                            value={description}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Preço"
                            onChange={handleInputPrice}
                            value={price}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Tipo"
                            onChange={handleInputType}
                            value={type}
                            required
                        />  
                        <div>
                            <Button type="submit">Inserir</Button>
                        </div>
                    </form>
                </div>
            }
            <table>
                <thead>
                    <tr>
                        {products && Object.keys(products[0]).map((productKey, index) => {
                            return (
                                <th key={index}>{productKey}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.type}</td>
                                <td>{product.id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
