export const registerNewUser = async (newUser) => {
    console.log(newUser)
    try {
        const usersAPI = await fetch("https://jujuba-api.herokuapp.com/users", {
        // const usersAPI = await fetch("http://localhost:8000/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        const response = await usersAPI.json();
        return response;
    }
    catch (err) {
        console.error("We got a problem to fetch the information", err);
    };
};

export const login = async (email, password) => {
    try {
        const query = `?email_user=${email}&password=${password}`;
        // const usersAPI = await fetch(`https://jujuba-api.herokuapp.com/login/${query}`, {
        const usersAPI = await fetch(`http://localhost:8000/login${query}`, {
            method: 'GET',
        })
        const response = await usersAPI.json();
        return response;
    }
    catch (err) {
        console.error("We got a problem to fetch the information", err);
    };
};
