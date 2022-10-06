import React, { useEffect, useState } from "react";
import { createProduct, getAllProducts, updateProduct, deleteProduct } from "../../api/products/productsApi";
import { Button } from "../../components/button/Button";
import '../../styles/products.scss';

export function Products() {
    const [products, setProducts] = useState("");
    const [editProduct, setEditProduct] = useState("");
    const [showNewProductForm, setShowNewProductform] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [loadCreate, setLoadCreate] = useState(false);
    // eslint-disable-next-line
    const [errorGetProducts, setErrorGetProducts] = useState("");
    // eslint-disable-next-line
    const [errorCreateProduct, setErrorCreateProduct] = useState("");

    const getProducts = () => {
        getAllProducts()
            .then((productList) => {
                const contentEditable = productList.map((eachProduct) => {
                    return {...eachProduct, editable: false, remove: ""}
                });
                setProducts(contentEditable);
            })
            .catch((err) => {
                setErrorGetProducts(err);
            });
    };

    const updateOneProduct = (ind, payload) => {
        updateProduct(ind, payload)
            .then((product) => {
                getProducts();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteOneProduct = (productId) => {
        deleteProduct(productId)
            .then((product) => {
                getProducts();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const createNewProduct = () => {
        setLoadCreate(true);
        const product = {
            name,
            type,
            price,
            description,
        };

        createProduct(product)
            .then((newProduct) => {
                getProducts();
                setName("");
                setDescription("");
                setPrice("");
                setType("");
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoadCreate(false);
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

    const handleMakeEditable = (index) => {
        const makeEditable = products.map((eachProduct, ind) => {
            if (ind === index) {
                eachProduct.editable = true;
            };
            return eachProduct;
        });
        setProducts(makeEditable);
    };

    const handleChangeEditable = (event) => {
        const list = event.target.children;
        const editValues = [];
        for (let item of list) {
            editValues.push(item.innerText);
        };
        const edit = {
            name: editValues[0],
            description: editValues[1],
            price: editValues[2],
            type: editValues[3]
        };
        setEditProduct(edit);
    };

    const handleSaveEdit = (index, productId) => {
        const makeNotEditable = products.map((eachProduct, ind) => {
            if (ind === index) {
                eachProduct.editable = false;
            }
            return eachProduct;
        });
        setProducts(makeNotEditable)
        updateOneProduct(productId, editProduct);
    };

    const handleDeleteProduct = (productId) => {
        deleteOneProduct(productId);
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
                    <form onSubmit={handleClick}>
                        <input
                            type="text"
                            placeholder="Nome do produto"
                            onChange={handleInputName}
                            value={name}
                            required
                            disabled={loadCreate}
                        />
                        <input
                            type="text"
                            placeholder="Descrição"
                            onChange={handleInputDescription}
                            value={description}
                            required
                            disabled={loadCreate}
                        />
                        <input
                            type="text"
                            placeholder="Preço"
                            onChange={handleInputPrice}
                            value={price}
                            required
                            disabled={loadCreate}
                        />
                        <input
                            type="text"
                            placeholder="Tipo"
                            onChange={handleInputType}
                            value={type}
                            required
                            disabled={loadCreate}
                        />  
                        <div>
                            <Button type="submit" disabled={loadCreate}>Inserir</Button>
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
                            <tr 
                                key={index} 
                                contentEditable={product.editable} 
                                suppressContentEditableWarning={true}
                                onInput={(e) =>handleChangeEditable(e)}
                            >
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.type}</td>
                                <td>{product.id}</td>
                                <td>
                                    {product.editable ? 
                                        <div onClick={() => handleSaveEdit(index, product.id)}>
                                            Salvar
                                        </div> : 
                                        <span 
                                            className="material-icons"
                                            onClick={() => handleMakeEditable(index)}
                                        >
                                            &#xe3c9;
                                        </span> 
                                    }
                                </td>
                                <td>
                                    {product.remove === "" && 
                                        <span 
                                            className="material-icons"
                                            onClick={() => handleDeleteProduct(product.id)}
                                        >
                                            &#xe872;
                                        </span> 
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
