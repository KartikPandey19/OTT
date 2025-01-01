import { useState } from "react"

export const Form = () =>{
    const [type, setType] = useState("signin")
    return <>
        <form className="w-3/12 absolute p-12 bg-grey my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-6 ml-4">{(type==="signin")?"Sign In":"Sign Up"}</h1>
            <input className="p-4 m-4 w-full bg-gray-700" type="text" placeholder="Email Address" />
            {(type==="signup")?<input className="p-4 m-4 w-full bg-gray-700" type="text" placeholder="Name" />:""}
            <input className="p-4 m-4 w-full bg-gray-700" type="password" placeholder="Password" />
            <button className="p-4 m-4 bg-red-700 w-full rounded-lg">{(type==="signin")?"Sign In":"Sign Up"}</button>
            <p className="text-white p-4 m-2">{(type==="signin")
            ?<>
            New to NetPrime? <button onClick={()=>{
                setType("signup")
                }}>Sign Up</button>
            </>
                :
                <>Already Have Account? <button onClick={()=>{
                    setType("signin")
                    }}>Sign In</button></>
        }</p>

        </form>
    </>
}