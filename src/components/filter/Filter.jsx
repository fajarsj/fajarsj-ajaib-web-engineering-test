import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <div className="input input--group">
        <input type="text" placeholder="Search" className="input-control" />
        <button className="btn btn--primary">🔍</button>
      </div>
      <select className="input-control">
        <option value="" disabled selected>
          Select Gender
        </option>
        <option value="1">All</option>
        <option value="2">Male</option>
        <option value="3">Female</option>
      </select>
      <button className="btn btn--outline-dark">Reset Filter</button>
    </div>
  );
};

export default Filter;
