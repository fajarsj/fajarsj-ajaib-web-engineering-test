import "./Table.scss";

const Table = (props) => {
  const { data, columns, handleSortColumn } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(({ title, slug, sortByOrder }, index) => (
            <th
              key={slug}
              onClick={() => handleSortColumn(slug, index)}
            >{`${title} ${sortByOrder === "asc" ? "🔼" : ""} ${
              sortByOrder === "desc" ? "🔽" : ""
            }`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((user, index) => (
            <tr key={`${user.name} ${index}`}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.registered_date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
