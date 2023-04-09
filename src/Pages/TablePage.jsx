// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 2,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 5,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 3,
    },
    {
      name: "Lime",
      color: "bg-green-500",
      score: 1,
    },
  ];

  const config = [
    {
      label: "name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "color",
      render: (fruit) => <div className={`mx-2 p-2 ${fruit.color}`} />,
    },
    {
      label: "score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruits) => fruits.name;

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
