import { useState } from "react";
import Input from './Input.jsx'
import { useInput } from "../Useinput.js";

export default function Login() {

    const {
        enteredValue: emailValue,
        handleInputBlur: handleEmailBlur,
        handleInputChange: handleEmailChange,
        hasError: emailHasError
    } = useInput('', (val) => val.includes('@'));

    const {
        enteredValue: passwordValue,
        handleInputBlur: handlePasswordBlur,
        handleInputChange: handlePasswordChange,
        hasError: passwordHasError
    } = useInput('', (val) => (val.length > 4));

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    onChange={(event) => handleEmailChange(event.target.value)}
                    value={emailValue}
                    onBlur={() => handleEmailBlur()}
                    error={emailHasError && 'Enter valid email'}
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onChange={(event) => handlePasswordChange(event.target.value)}
                    value={passwordValue}
                    onBlur={() => handlePasswordBlur()}
                    error={passwordHasError && 'Enter valid password'}
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
