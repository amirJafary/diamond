import axios from 'axios';

const getConfirmToSignIn = (callback, mobileNumber , password) => {
    let url = "http://172.17.17.101:8088/api/en/Account/Authentication/SignIn";
    let data = {
        mobile: mobileNumber,
        password: password,
    };
    const token = localStorage.getItem('token');

    let header = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    axios
        .post(url, data, header)
        .then(res => {callback(res.data)} )
};

export {getConfirmToSignIn}