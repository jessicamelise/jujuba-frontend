export const login = async (email, password) => {
    try {
        const query = `?email_user=${email}&password=${password}`;
        const usersAPI = await fetch(`https://jujuba-api.herokuapp.com/login/${query}`, {
        // const usersAPI = await fetch(`http://localhost:8000/login${query}`, {
            method: 'GET',
        })
        const response = await usersAPI.json();
        return response;
    }
    catch (err) {
        console.error("We got a problem to fetch the information", err);
    };
};