import "./Filter.scss";

const Filter = (props) => {
  const {
    handleSelectChange,
    handleSearchChange,
    handleReset,
    selectedGender,
    searchValue,
  } = props;

  return (
    <div className="filter">
      <div className="input input--group">
        <input
          type="text"
          placeholder="Search"
          className="input-control"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button className="btn btn--primary">Search</button>
      </div>
      <select
        className="input-control"
        onChange={handleSelectChange}
        value={selectedGender}
      >
        <option value="" disabled>
          Select Gender
        </option>
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button className="btn btn--outline-dark" onClick={handleReset}>
        Reset Filter
      </button>
    </div>
  );
};

export default Filter;
