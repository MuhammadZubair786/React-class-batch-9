import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(false);

    const totalPages = Math.ceil(100 / limit);

    const fetchPosts = async () => {
        try {
            setLoading(true);

            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
            );

            setPosts(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [currentPage, limit]);


    const handleLimitChange = (e) => {
        setLimit(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Posts Pagination</h2>

            <label>Records per page: </label>

            <select value={limit} onChange={handleLimitChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>

            {loading ? (
                <h3>Loading...</h3>
            ) : (
                posts.map((post) => (
                    <div key={post.id} style={{border:"2px solid red",margin:"2px"}}>
                        <h3>{post.id}. {post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            )}


            <button
                disabled={currentPage === 1 || loading}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Previous
            </button>

            <span style={{ margin: "10px" }}>
                Page {currentPage} of {totalPages}
            </span>

            <button
                disabled={currentPage === totalPages || loading}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
