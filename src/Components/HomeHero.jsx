import { Link } from "react-router"
import { FaFacebook, FaSquareXTwitter, FaSquareSnapchat, FaInstagram } from "react-icons/fa6";

function HomeHero() {
    return (
        <section className="w-[95%] mx-auto p-2 grid grid-cols-2 gap-6">
            <div className="bg-gray-50/5 backdrop-blur-none rounded-md p-4 mt-6 flex flex-col justify-center relative">
                <p className="text-base">My Awesome Blog</p>
                <p className="text-2xl mb-3">Welcome to my Awesome Blog</p>
                <p className="text-xl mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                    fugit at corporis odio eos perspiciatis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                    fugit at corporis odio eos perspiciatis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                    fugit at corporis odio eos perspiciatis.
                </p>
                <div className="text-2xl flex justify-start align-center py-6 mt-6 absolute bottom-0 left-0">
                    <Link to="/" className="mx-2"><FaFacebook /></Link>
                    <Link to="/" className="mx-2"><FaSquareXTwitter /></Link>
                    <Link to="/" className="mx-2"><FaSquareSnapchat /></Link>
                    <Link to="/" className="mx-2"><FaInstagram /></Link>
                </div>
            </div>
            <div className="bg-gray-50/5 backdrop-blur-none rounded-md mt-6">
                <img
                    src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image"
                    className="rounded-md"
                />
            </div>
        </section>
    )
}

export default HomeHero