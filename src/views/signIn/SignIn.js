import React, { Component } from "react";
import AutoCompleteCountries2 from "../../Components/AutoCompleteCountries2";
import TextFieldNumberSignIn from "../../Components/TextFieldNumberSignIn";
import TextFieldPasswordSignIn from "../../Components/TextFieldPasswordSignIn";
import logo from "../../Assets/Images/Diamond-Logo.07b20e47.svg";
import { getConfirmToSignIn } from "../../Services/GetConfirmToSignIn";

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        code: "98",
        signIn: true,
        password: "",
        mobileNumber: "",
        };
    }

    signInChanged = () => {
        if (!!this.state.signIn !== true)
        this.setState(
            {
            signIn: true,
            },
            () => console.info(this.state.signIn)
        );
    };

    signUpChanged = () => {
        if (!!this.state.signIn === true)
        this.setState(
            {
            signIn: false,
            },
            () => console.info(this.state.signIn)
        );
    };

    changeStateSignIn = () => {
        if (!!this.state.signIn !== false)
        this.setState(
            {
            signIn: false,
            },
            () => console.info(this.state.signIn)
        );
    };

    getSateOfCountries = code => {
        this.setState({
        code: code,
        });
    };

    getStateOfPassword = password => {
        this.setState({
        password: password,
        });
    };

    getStateOfMobileNumber = mobileNumber => {
        this.setState({
        mobileNumber: mobileNumber,
        });
    };

    signInClicked = () => {
        getConfirmToSignIn(
        this.getConfirmToSignInCallback,
        this.state.mobileNumber,
        this.state.password
        );
    };

    getConfirmToSignInCallback = (res) => {
        console.log(res);
        if(!!res.hasError === false){
            localStorage.setItem("token", res.messageItems[0]?.data?.token);
            window.location.href = "http://localhost:3000/products"
        }else{
            alert("your mobile number or password is wrong")
        }
    };

    

    render() {
        return (
        <div className="sign">
            {this.state.signIn ? (
            <div className="d-flex signIn-background">
                <div className="parent-sign p-4">
                <form className="mt-5">
                    <div className="d-flex align-item-center">
                    <AutoCompleteCountries2
                        getSateOfCountries={code => this.getSateOfCountries(code)}
                    />
                    <TextFieldNumberSignIn
                        getStateOfMobileNumber={mobileNumber =>
                        this.getStateOfMobileNumber(mobileNumber)
                        }
                        code={this.state.code}
                        password={this.state.password}
                    />
                    </div>
                    <div className="mt-4 w-100">
                    <TextFieldPasswordSignIn
                        getStateOfPassword={password =>
                        this.getStateOfPassword(password)
                        }
                    />
                    </div>
                    <div className="mt-4">
                    <input className="me-1" type="checkbox" />
                    <span>Remember me</span>
                    </div>
                    <div className="mt-2">
                    <a className="forget-password" href="/signIn">
                        Forget Password
                    </a>
                    </div>
                </form>
                <div className="TAC">
                <button
                    className="btn-signIn mt-8"
                    onClick={this.signInClicked}
                >
                    Sign in
                </button>
                </div>
                </div>
                <div className="TAC">
                <img className="img-logo-sign" alt="img" src={logo} />
                <br />
                <button className="btn-sign" onClick={() => this.signUpChanged()}>
                    Sign up
                </button>
                </div>
            </div>
            ) : (
            <div className="d-flex signIn-background">
                <div className="TAC">
                <img className="img-logo-sign" alt="img" src={logo} />
                <br />
                <button onClick={() => this.signInChanged()} className="btn-sign">
                    Sign in
                </button>
                </div>
                <div className="parent-sign p-4">
                <form className="mt-4">
                    <h6 className="fwb mb-3">Verify your mobile</h6>
                    <div>
                    For your security, we want to make sure it's really you. We
                    will send a text message with a 6-digit verification code.
                    </div>
                    <div className="mt-4 d-flex align-item-center">
                    <AutoCompleteCountries2
                        getSateOfCountries={code => this.getSateOfCountries(code)}
                    />
                    <TextFieldNumberSignIn code={this.state.code} />
                    </div>
                    <div className="TAC">
                    <button className="btn-signIn mt-8">
                        send Verification Code
                    </button>
                    </div>
                </form>
                </div>
            </div>
            )}
        </div>
        );
    }
}


