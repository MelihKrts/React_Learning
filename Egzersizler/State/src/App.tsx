import React from "react"

function App() {

    const [count, setCount] = React.useState<number>(0)

    return (
        <>
            <div
                className="bg-[#f5f5f5] w-full container-full mx-auto min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold underline"> {count} </h1>
                <button className="bg-[#3498db] border-amber-100 rounded-sm my-2 p-2 w-32 cursor-pointer"
                        onClick={() => setCount(count + 1)}>Increase count
                </button>
            </div>

        </>
    )
}

export default App
