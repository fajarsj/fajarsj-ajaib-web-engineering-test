import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getUserData } from "../../store/user-actions";
import "./Pagination.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const handlePaginate = (pageNumber) => {
    searchParams.set("page", pageNumber);
    setSearchParams(searchParams);
    dispatch(getUserData(`?page=${pageNumber}&results=10`));
    setPage(pageNumber);
  };

  return (
    <div className="pagination">
      <button
        className="btn btn--outline-primary"
        onClick={() => handlePaginate(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        className="btn btn--outline-primary"
        onClick={() => handlePaginate(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
