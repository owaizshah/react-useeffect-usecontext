import useSort from "../hooks/useSort";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import Table from "./Table";

function SortableTable(props) {
  const { config, data } = props;
  const { handleClick, sortBy, sortOrder, sortData } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          onClick={() => {
            handleClick(column.label);
          }}
        >
          <div className="flex items-center hover:bg-gray-100 cursor-pointer p-[10px]">
            {column.label} {getIcon(column.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      {sortBy}-{sortOrder}
      <Table {...props} data={sortData} config={updatedConfig} />;
    </div>
  );
}

function getIcon(label, sortBy, sortOrder) {
  if (label !== sortBy || sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  }
  if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
