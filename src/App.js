import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import Table from "./components/table/Table";

const App = () => {
  return (
    <Layout>
      <Header title="Example with search and filter" />
      <Filter />
      <Table />
    </Layout>
  );
};

export default App;
