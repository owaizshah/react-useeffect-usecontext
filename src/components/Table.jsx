import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  return (
    <table className="table-auto border-spacing-2">
      <thead className="border-b-2 p-5">
        <tr>
          {config.map((title) => {
            if (title.header) {
              return <Fragment key={title.label}>{title.header()}</Fragment>;
            }
            return <th key={title.label}>{title.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData) => {
          const renderedColumns = config.map((column) => (
            <td className="p-3" key={column.label}>
              {column.render(rowData)}
            </td>
          ));
          return (
            <tr key={keyFn(rowData)} className="border-b ">
              {renderedColumns}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
