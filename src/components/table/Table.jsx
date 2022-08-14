import "./Table.scss";

const Table = (props) => {
  const { data } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Registered Date</th>
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
              <td>{user.registeredDate}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
