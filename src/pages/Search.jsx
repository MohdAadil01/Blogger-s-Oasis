import React from "react";
import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
function Search() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchQueryData, setSearchQueryData] = useState({
    sortOrder: "desc",
    searchTerm: "",
    category: "uncategorized",
  });
  console.log(searchQueryData);

  const location = useLocation();
  const navigate = useNavigate();

  const fetchPosts = async (urlParams) => {
    setIsLoading(false);
    const searchQuery = urlParams.toString();
    const res = await fetch(
      `http://localhost:8888/api/post/getallposts?${searchQuery}`
    );
    const data = await res.json();
    if (!res.ok) {
      setErrorMessage(data.errorMessage);
      return;
    }
    setPosts(data.foundPosts);
    setIsLoading(false);
    if (data.foundPosts.length === 9) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTerm = urlParams.get("searchTerm");
    const sortOrder = urlParams.get("sort");
    const category = urlParams.get("category");
    if (searchTerm || sortOrder || category) {
      setSearchQueryData({
        ...searchQueryData,
        searchTerm,
        sortOrder,
        category,
      });
    }
    fetchPosts(urlParams);
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSearchQueryData({ ...searchQueryData, searchTerm: e.target.value });
    }
    if (e.target.id === "sort") {
      const order = e.target.value || "desc";
      setSearchQueryData({
        ...searchQueryData,
        sortOrder: order,
      });
    }
    if (e.target.id === "category") {
      const category = e.target.value || "uncategorized";
      setSearchQueryData({
        ...searchQueryData,
        category: category,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchQueryData.searchTerm);
    urlParams.set("sort", searchQueryData.sortOrder);
    urlParams.set("category", searchQueryData.category);
    const searchQuery = urlParams.toString();
    console.log(searchQuery);
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const start = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("start", start);
    const searchQuery = urlParams.toString();
    const res = await fetch(
      `http://localhost:8888/api/post/getallposts?${searchQuery}`
    );
    const data = await res.json();
    if (!res.ok) {
      setErrorMessage(data.errorMessage);
    }
    setPosts([...posts, ...data.foundPosts]);
    if (data.foundPosts.length >= 9) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex   items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={searchQueryData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <Select
              id="sort"
              onChange={handleChange}
              value={searchQueryData.sortOrder}
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Category:</label>
            <Select
              id="category"
              onChange={handleChange}
              value={searchQueryData.category}
            >
              <option value="uncategorized">Uncategorized</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="javascript">JavaScript</option>
            </Select>
          </div>
          <Button type="submit" outline gradientDuoTone="purpleToPink">
            Apply Filters
          </Button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 ">
          Posts results:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!isLoading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No Post found.</p>
          )}
          {isLoading && <p className="text-xl text-gray-500">Loading...</p>}
          {!isLoading &&
            posts.length > 0 &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-7 w-full"
            >
              Show more
            </button>
          )}
        </div>
        <div className="p-7 flex flex-wrap gap-4"></div>
      </div>
    </div>
  );
}
export default Search;
