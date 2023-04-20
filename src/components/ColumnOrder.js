/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { useTable, useColumnOrder } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'

export default function ColumnOrder() {
  // step3: create a table instance
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = useTable(
    {
      columns: columns,
      data: data,
    },
    useColumnOrder
  )

  const changeOrder = () => {
    setColumnOrder([
      'id',
      'first_name',
      'last_name',
      'phone',
      'country',
      'date_of_birth',
    ])
  }
  return (
    <>
      <button onClick={changeOrder}>Change Column Order</button>
      <table className='w-full' {...getTableProps()}>
        <thead className='bg-slate-500'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className='border-2 border-white'
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='text-center' {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
        <tfoot className='text-center'>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  )
}
