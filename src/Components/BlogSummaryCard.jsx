import { Link } from "react-router"
import { FaArrowRightLong } from "react-icons/fa6";

function BlogSummaryCard() {
    return (
        <div className="bg-gray-50/5 backdrop-blur-none rounded-md grid grid-cols-2 gap-4 h-[400px] mb-12 shadow-lg shadow-gray-800/50 hover:shadow-xl">
            <div className="overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="object-cover object-center h-[100%] w-[100%] rounded-l-md"
                />
            </div>
            <div className="p-4 flex flex-col justify-center">
                <p className="text-base text-gray-400">Lorem ipsum dolor</p>
                <p className="text-2xl mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p className="text-lg mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, magnam voluptatum.
                    Delectus sapiente optio exercitationem eligendi quas nam dicta cupiditate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, magnam voluptatum.
                    Delectus sapiente optio exercitationem eligendi quas nam dicta cupiditate.
                </p>
                <div className="flex justify-start align-center mt-4">
                    <Link
                        to="/blog/1"
                        className="text-xl flex justify-center align-center text-gray-400 hover:text-gray-300"
                    >
                        View
                        <span className="mx-2 pt-2 rounded-sm font-bold"><FaArrowRightLong /></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSummaryCard