import axios from 'axios';

const getConfirmToSignIn = (callback, mobileNumber , password) => {
    let url = "http://172.17.17.101:8088/api/en/Account/Authentication/SignIn";
    let data = {
        mobile: mobileNumber,
        password: password,
    };
    let header = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwOCIsInJvbGUiOiJVc2VyIiwibmJmIjoxNjM2MjE4MDQyLCJleHAiOjE2Mzg4MTAwNDIsImlhdCI6MTYzNjIxODA0Mn0.4ZfNIqflP5__llHTv2diaepaZvCUd8mc5QtPOodfsOA`,
        },
    };

    axios
        .post(url, data, header)
        .then(res => {callback(res.data)} )
};

export {getConfirmToSignIn}