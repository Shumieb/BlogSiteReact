import { Link } from "react-router"
import HomeHero from "../Components/HomeHero"
import { FaArrowRightLong } from "react-icons/fa6";
import BlogSummaryCard from "../Components/BlogSummaryCard";
import NewsLetterSignUp from "../Components/NewsLetterSignUp";

function HomePage() {
    return (
        <main className="bg-gray-900 min-h-[90vh] text-gray-50 pt-2 pb-12">
            <HomeHero />

            <section className="w-[95%] mx-auto p-2 mt-6">
                <div className="flex justify-between align-center mb-1">
                    <p className="text-2xl">Latest Blogs</p>
                    <Link
                        to="/blogs-list"
                        className="text-xl flex justify-center align-center text-gray-400 hover:text-gray-300"
                    >
                        View All Blogs
                        <span className="mx-2 pt-2 rounded-sm font-bold"><FaArrowRightLong /></span>
                    </Link>
                </div>
            </section>

            <section className="w-[95%] mx-auto p-4 mt-1">
                <BlogSummaryCard />
                <BlogSummaryCard />
                <BlogSummaryCard />
                <BlogSummaryCard />
                <BlogSummaryCard />
            </section>

            <NewsLetterSignUp />


        </main>
    )
}

export default HomePage