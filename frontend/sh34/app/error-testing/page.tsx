'use client';
import { ErrorPopup } from "@app/components/error-popup-components/ErrorPopup";
import { error } from "console";
import { ChangeEvent, useState } from "react";

export default function ErrorTesting() {
    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const [message, setMessage] = useState("error message");

    const showError = () => {
        setErrorMessage(message);
        console.log(message)
    }

    const onClose = () => {
        setErrorMessage(null);
    }

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    return (
        <div className="text-black h-screen w-screen bg-white">
            <h1>Error Testing</h1>
            <p>
                This page is for testing the error button.
            </p>
            <hr/>
            <label htmlFor="error-msg">Message:</label>
            <input onChange={onTextChange} id="error-msg" name="error-msg" value={message} className="border-2" type="text"/>
            <br/>
            <button className="" onClick={() => {showError()}}>Click To Show Error</button> 
            {errorMessage && <ErrorPopup message={errorMessage} onClose={onClose} />}
        </div>
    );
}