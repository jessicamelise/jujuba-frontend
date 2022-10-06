export const getAllProducts = async () => {
    try {
        const productsAPI = await fetch("https://jujuba-api.herokuapp.com/products", {
        // const productsAPI = await fetch("http://localhost:8000/products", {
            method: 'GET',
        })
        const response = await productsAPI.json();
        return response;
    }
    catch (err) {
        console.error("We got a problem to fetch the information", err);
    };
};

export const createProduct = async (product) => {
    try {
        const productsAPI = await fetch("https://jujuba-api.herokuapp.com/products", {
        // const productsAPI = await fetch("http://localhost:8000/products", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const response = await productsAPI.json();
        return response;
    }
    catch (err) {
        console.error("We got a problem to fetch the information", err);
    };
};

export const updateProduct = async (productId, product) => {
    try {
        const productsAPI = await fetch(`https://jujuba-api.herokuapp.com/products/${productId}`, {
        // const productsAPI = await fetch(`http://localhost:8000/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const response = await productsAPI.json();
        return response;
    }
    catch (err) {
        console.error("We got a problem to fetch the information", err);
    };
};

export const deleteProduct = async (productId) => {
    try {
        const productsAPI = await fetch(`https://jujuba-api.herokuapp.com/products/${productId}`, {
        // const productsAPI = await fetch(`http://localhost:8000/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
        const response = await productsAPI.json();
        return response;
    }
    catch (err) {
        console.error("We got a problem to fetch the information", err);
    };
};
