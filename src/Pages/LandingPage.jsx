import { Link } from "react-router"
import { FaArrowRightLong, FaFacebook, FaSquareXTwitter, FaSquareSnapchat, FaInstagram } from "react-icons/fa6";


function LandingPage() {
    return (
        <div
            className="bg-[url(/images/LandingbgImg.jpg)] min-h-[85vh] bg-blend-overlay bg-slate-800 bg-center bg-cover flex flex-col justify-center align-center"
        >
            <div className="w-[60%] p-6 mx-auto text-center text-gray-50 bg-gray-50/5 backdrop-blur-none rounded-md">
                <p className="text-2xl py-4">Welcome to My Awesome Blog</p>
                <p className="text-xl pb-6 pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur dolor quisquam consequuntur odio ab cumque nam beatae tenetur vitae ut.
                    Consectetur dolor quisquam consequuntur odio ab cumque nam beatae tenetur vitae ut.
                </p>
                <div className="flex justify-center align-center">
                    <Link
                        to="/blogs-home"
                        className="text-xl flex justify-center align-center hover:text-gray-400"
                    >
                        View Blogs
                        <span className="mx-2 pt-2 rounded-sm font-bold"><FaArrowRightLong /></span>
                    </Link>
                </div>

                <div className="text-2xl flex justify-center align-center py-4 mt-6">
                    <Link to="/" className="mx-2"><FaFacebook /></Link>
                    <Link to="/" className="mx-2"><FaSquareXTwitter /></Link>
                    <Link to="/" className="mx-2"><FaSquareSnapchat /></Link>
                    <Link to="/" className="mx-2"><FaInstagram /></Link>
                </div>
            </div>
        </div >
    )
}

export default LandingPage