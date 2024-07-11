import axios from "axios";
const signUp = async (data) => {
    let result
    try {
        const res = await axios.post('http://localhost:5200/api/users/signup', data);
        result = res.data;
    } catch (error) {
        result = error;
    }

    return result;
}

const signIn = async (data) => {
    let result
    try {
        const res = await axios.post('http://localhost:5200/api/users/signin', data);
        result = res.data;
    } catch (error) {
        result = error;
    }

    return result;
}

export {signIn, signUp}