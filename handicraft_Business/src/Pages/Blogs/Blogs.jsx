import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/animation.json"; // Ensure path is correct
import { useContext, useState } from "react";
import { themeContext } from "../../context/ContextApi";
import useAxiosPublicApi from "../../Hook/useAxiosPublicApi";
import { Helmet } from "react-helmet-async";

const BlogsPage = () => {
  const { darkMode } = useContext(themeContext);
  const axiosPublic = useAxiosPublicApi();

  // State to track which blog's description is expanded
  const [expandedBlog, setExpandedBlog] = useState(null);

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["/blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie animationData={loadingAnimation} width={500} height={350} />
      </div>
    );
  }

  // Toggle description visibility
  const handleReadMore = (blogId) => {
    setExpandedBlog(expandedBlog === blogId ? null : blogId);
  };

  return (
    <>
      <Helmet>
        <title>Handcraft Business|Contact Us</title>
      </Helmet>
      
        <div
          className={`mx-auto pt-24 p-8  ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          <h1 className="text-3xl font-bold mb-8 text-center">
            Handicraft Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="p-4 border rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-500 mb-2">
                  By {blog.author} on {blog.date}
                </p>
                <p className="mb-4">{blog.excerpt}</p>
                {/* Show full description if expanded */}
                {expandedBlog === blog.id && (
                  <p className="mb-4">{blog.description}</p>
                )}
                <button
                  className="text-indigo-600 hover:underline"
                  onClick={() => handleReadMore(blog.id)}
                >
                  {expandedBlog === blog.id ? "Read less" : "Read more"}
                </button>
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
};

export default BlogsPage;
