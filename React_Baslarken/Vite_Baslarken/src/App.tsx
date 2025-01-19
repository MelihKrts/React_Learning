import {useState} from "react";

function App() {

    const [message, setMessage] = useState("");

    type User = {
        name: string,
        surname: string,
    }

    const userInfo: User = {
        name: "John",
        surname: "Doe",
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">{message}</h1>

                <button onClick={() => setMessage(`Hello  ${userInfo.name}, ${userInfo.surname}`)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Click me
                </button>

            </div>

        </>
    )
}

export default App
