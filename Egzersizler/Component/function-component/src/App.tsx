import Button from "../Component/Button.tsx";
import React from "react";

function App() {
    const [message, setMessage] = React.useState<string>("")
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center flex-col bg-amber-400">
                <h1 className=" text-white">{message}</h1>
                <Button onClick={() => setMessage((prev) => (prev ? "" : "Hello"))}
                        className="bg-white w-48 h-8 rounded-md cursor-pointer"/>
            </div>
        </>
    )
}

export default App
