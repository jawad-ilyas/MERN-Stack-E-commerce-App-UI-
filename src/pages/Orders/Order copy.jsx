import React from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;
  return (
    <input
      value={filterValue || ''}
      onChange={e => setFilter(e.target.value || undefined)}
      placeholder={`Search ${count} records...`}
    />
  );
}

// Main table component
function OrderTable({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      // Default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Use page, not rows
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Set the initial page
      defaultColumn,
    },
    useFilters,
    useSortBy,
    usePagination // Use the usePagination hook here
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc ? ' 🔽' : ' 🔼'
                      : ''}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => { // Render the current page
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function Order() {
  const columns = React.useMemo(() => [
    { Header: "ID", accessor: "id" },
    { Header: "Quantity", accessor: "quantity" },
    { Header: "Discount", accessor: "discount" },
    { Header: "Amount", accessor: "amount" },
    { Header: "Status", accessor: "status" },
    { Header: "Action", accessor: "action" },
  ], []);

  const data = React.useMemo(() => [
    { id: "Id1", quantity: "Quantity1", discount: "Discount1", amount: 12121, status: "Status1", action: "Action1" },
    { id: "Id2", quantity: "Quantity2", discount: "Discount2", amount: 22222, status: "Status2", action: "Action2" },
    { id: "Id3", quantity: "Quantity3", discount: "Discount3", amount: 33333, status: "Status3", action: "Action3" },
    { id: "Id4", quantity: "Quantity4", discount: "Discount4", amount: 44444, status: "Status4", action: "Action4" },
    { id: "Id5", quantity: "Quantity5", discount: "Discount5", amount: 55555, status: "Status5", action: "Action5" },
    { id: "Id1", quantity: "Quantity1", discount: "Discount1", amount: 12121, status: "Status1", action: "Action1" },
    { id: "Id2", quantity: "Quantity2", discount: "Discount2", amount: 22222, status: "Status2", action: "Action2" },
    { id: "Id3", quantity: "Quantity3", discount: "Discount3", amount: 33333, status: "Status3", action: "Action3" },
    { id: "Id4", quantity: "Quantity4", discount: "Discount4", amount: 44444, status: "Status4", action: "Action4" },
    { id: "Id5", quantity: "Quantity5", discount: "Discount5", amount: 55555, status: "Status5", action: "Action5" },
    { id: "Id1", quantity: "Quantity1", discount: "Discount1", amount: 12121, status: "Status1", action: "Action1" },
    { id: "Id2", quantity: "Quantity2", discount: "Discount2", amount: 22222, status: "Status2", action: "Action2" },
    { id: "Id3", quantity: "Quantity3", discount: "Discount3", amount: 33333, status: "Status3", action: "Action3" },
    { id: "Id4", quantity: "Quantity4", discount: "Discount4", amount: 44444, status: "Status4", action: "Action4" },
    { id: "Id5", quantity: "Quantity5", discount: "Discount5", amount: 55555, status: "Status5", action: "Action5" },
    { id: "Id1", quantity: "Quantity1", discount: "Discount1", amount: 12121, status: "Status1", action: "Action1" },
    { id: "Id2", quantity: "Quantity2", discount: "Discount2", amount: 22222, status: "Status2", action: "Action2" },
    { id: "Id3", quantity: "Quantity3", discount: "Discount3", amount: 33333, status: "Status3", action: "Action3" },
    { id: "Id4", quantity: "Quantity4", discount: "Discount4", amount: 44444, status: "Status4", action: "Action4" },
    { id: "Id5", quantity: "Quantity5", discount: "Discount5", amount: 55555, status: "Status5", action: "Action5" },
    { id: "Id1", quantity: "Quantity1", discount: "Discount1", amount: 12121, status: "Status1", action: "Action1" },
    { id: "Id2", quantity: "Quantity2", discount: "Discount2", amount: 22222, status: "Status2", action: "Action2" },
    { id: "Id3", quantity: "Quantity3", discount: "Discount3", amount: 33333, status: "Status3", action: "Action3" },
    { id: "Id4", quantity: "Quantity4", discount: "Discount4", amount: 44444, status: "Status4", action: "Action4" },
    { id: "Id5", quantity: "Quantity5", discount: "Discount5", amount: 55555, status: "Status5", action: "Action5" },
    { id: "Id1", quantity: "Quantity1", discount: "Discount1", amount: 12121, status: "Status1", action: "Action1" },
    { id: "Id2", quantity: "Quantity2", discount: "Discount2", amount: 22222, status: "Status2", action: "Action2" },
    { id: "Id3", quantity: "Quantity3", discount: "Discount3", amount: 33333, status: "Status3", action: "Action3" },
    { id: "Id4", quantity: "Quantity4", discount: "Discount4", amount: 44444, status: "Status4", action: "Action4" },
    { id: "Id5", quantity: "Quantity5", discount: "Discount5", amount: 55555, status: "Status5", action: "Action5" },
    { id: "Id1", quantity: "Quantity1", discount: "Discount1", amount: 12121, status: "Status1", action: "Action1" },
    { id: "Id2", quantity: "Quantity2", discount: "Discount2", amount: 22222, status: "Status2", action: "Action2" },
    { id: "Id3", quantity: "Quantity3", discount: "Discount3", amount: 33333, status: "Status3", action: "Action3" },
    { id: "Id4", quantity: "Quantity4", discount: "Discount4", amount: 44444, status: "Status4", action: "Action4" },
    { id: "Id5", quantity: "Quantity5", discount: "Discount5", amount: 55555, status: "Status5", action: "Action5" },
    { id: "Id1", quantity: "Quantity1", discount: "Discount1", amount: 12121, status: "Status1", action: "Action1" },
    { id: "Id2", quantity: "Quantity2", discount: "Discount2", amount: 22222, status: "Status2", action: "Action2" },
    { id: "Id3", quantity: "Quantity3", discount: "Discount3", amount: 33333, status: "Status3", action: "Action3" },
    { id: "Id4", quantity: "Quantity4", discount: "Discount4", amount: 44444, status: "Status4", action: "Action4" },
    { id: "Id5", quantity: "Quantity5", discount: "Discount5", amount: 55555, status: "Status5", action: "Action5" },
  ], []);

  return <OrderTable columns={columns} data={data} />;
}

export default Order;
