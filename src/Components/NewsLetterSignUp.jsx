import { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";

function NewsLetterSignUp() {

    const [email, setEmail] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Sign Up")
    }

    return (
        <section className="w-[95%] mx-auto p-4 mt-2 rounded-md bg-gray-300 text-gray-950 shadow-lg shadow-gray-800/50 hover:shadow-xl">
            <div className="p-2 mx-auto w-[60%] text-center">
                <p className="text-3xl mb-2 py-2 flex justify-center align-center">
                    <span className="text-center"><FaEnvelope /></span>
                </p>
                <p className="text-xl">Want to stay up-to-date with all the latest news?</p>
                <p className="text-xl ">Sign Up for our newsletter</p>
                <div className="my-5">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            className="bg-gray-900 text-gray-100 p-2 rounded-md mr-4 text-xl w-[40%] outline-gray-950 focus:border-gray-950 focus:outline-hidden"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="bg-gray-900 rounded-md text-gray-100 px-4 py-2 cursor-pointer text-xl"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewsLetterSignUp