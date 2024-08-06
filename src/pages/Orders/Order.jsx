import React from 'react'
import { useSortBy, useTable } from 'react-table'
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
    { id: "Id111111111111111111", quantity: "Quantity1", discount: "Discount1", amount: 12121, status: "Status1", action: "Action1" },
    { id: "Id2", quantity: "Quantity2", discount: "Discount2", amount: 22222, status: "Status2", action: "Action2" },
    { id: "Id3", quantity: "Quantity3", discount: "Discount3", amount: 33333, status: "Status3", action: "Action3" },
  ], []);

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = useTable({
    columns,
    data
  },
    useSortBy);

  return (
    <div className='container px-20 py-10'>
      <table {...getTableProps()} className='table-auto mx-auto'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr className='mb-3  py-4 ' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc ? ' 🔽' : ' 🔼'
                      : ''}
                  </span>

                </th>
              )}

            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr className=' group  '  {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td className='group-hover:bg-gray-400  cursor-pointer mx-1 my-1 p-4 bg-gray-100' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Order