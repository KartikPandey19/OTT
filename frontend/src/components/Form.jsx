import { useState, useRef } from "react"
import { validateData } from "../utils/validate";

export const Form = () => {
    const [type, setType] = useState("signin")
    const [errorMessage,setErrorMessage] = useState("");
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    

    const handleFormSubmit = () =>{
        const message = validateData(email.current.value,password.current.value)
        console.log(message);
        setErrorMessage(message);
    }
    return (
        <form
        onSubmit={(e)=>e.preventDefault()} 
        className="w-3/12 absolute p-12 bg-grey-500 my-36 mx-auto right-0 left-0 text-white rounded-lg">
            <h1 className="font-bold text-3xl py-6 ml-4">{type === "signin" ? "Sign In" : "Sign Up"}</h1>
            
            <input ref={email} className="p-4 m-4 w-full bg-gray-700" type="text" placeholder="Email Address" />

            {type === "signup" && <input ref={name} className="p-4 m-4 w-full bg-gray-700" type="text" placeholder="Name" />}

            <input ref={password} className="p-4 m-4 w-full bg-gray-700" type="password" placeholder="Password" />

            <p className="text-red-600 font-bold text-lg ml-4">{errorMessage}</p>
            <button className="p-4 m-4 bg-red-700 w-full rounded-lg"
            onClick={handleFormSubmit} 
            >{(type === "signin") ? "Sign In" : "Sign Up"}</button>
            <p className="text-white p-4 m-2">{type === "signin"
                ? <>
                    New to NetPrime?{" "} <button
                        type="button"
                        className="text-blue-500 underline"
                        onClick={() => {
                            setType("signup")
                        }}>Sign Up</button>
                </>
                :
                <>Already Have Account?{" "} <button
                    type="button"
                    className="text-blue-500 underline"
                    onClick={() => {
                        setType("signin")
                    }}>Sign In</button></>
            }</p>

        </form>
    )
}