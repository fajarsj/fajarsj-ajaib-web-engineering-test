import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import Table from "./components/table/Table";
import Pagination from "./components/pagination/Pagination";

import { getUserData } from "./store/user-actions";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(getUserData("?page=1&results=10"));
    navigate({
      search: "?page=1&results=10",
    });
  }, [dispatch, navigate]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    setCurrentUser(users);
  }, [users, dispatch]);

  const filterByGender = (userArr, gender) => {
    return userArr.filter((user) => user.gender.toLowerCase() === gender);
  };

  const filterBySearch = (userArr, keyword) => {
    return userArr.filter((user) =>
      Object.keys(user).some((key) => user[key].toLowerCase().includes(keyword))
    );
  };

  useEffect(() => {
    let filterUsers = [...users];

    if (searchValue) {
      filterUsers = filterBySearch(filterUsers, searchValue);
    }

    if (selectedGender && selectedGender !== "all") {
      filterUsers = filterByGender(filterUsers, selectedGender);
    }

    setCurrentUser(filterUsers);
  }, [selectedGender, searchValue, users]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const handleSelectChange = (event) => {
    setSelectedGender(event.target.value.toLowerCase());
  };

  const handleReset = () => {
    setSelectedGender("");
    setSearchValue("");
    setCurrentUser(users);
  };

  return (
    <Layout>
      <Header title="Example with search and filter" />
      <Filter
        handleSearchChange={handleSearchChange}
        handleSelectChange={handleSelectChange}
        handleReset={handleReset}
        selectedGender={selectedGender}
        searchValue={searchValue}
      />
      {users && <Table data={currentUser} />}
      <Pagination />
    </Layout>
  );
};

export default App;
