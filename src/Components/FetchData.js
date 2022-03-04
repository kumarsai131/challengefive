import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import "./Styles.css";
export default function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, SetError] = useState(false);
  const [currentPage, SetCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  async function fetchData() {
    try {
      const mainData = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const jsonData = await mainData.json();
      setData(jsonData.slice(0, 92));
      setLoading(false);
    } catch (err) {
      SetError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) return <>Loading...</>;
  else if (error) return <>Something Went Wrong 😢</>;
  else
    return (
      <>
        <div>
          <ul className="posts">
            {currentPost.map((e) => {
              return (
                <li key={e.id}>
                  <div>{e.title}</div>
                  <div>{e.thumbnailUrl}</div>
                  <br />
                </li>
              );
            })}
          </ul>
          <Pagination
            postsPerPage={postsPerPage}
            totalPost={data.length}
            SetCurrentPage={SetCurrentPage}
          />
        </div>
      </>
    );
}
