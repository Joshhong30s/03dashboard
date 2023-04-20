// step2: defining the columns for data table
import { format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter'
export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',

    disableFilters: true,
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth',

    Cell: ({ value }) => {
      return format(new Date(value), 'yyyy/mm/dd')
    },
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
  },
]

export const groupedColumns = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'Id',
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
      },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
      },
    ],
  },
]

// email and age will not be rendered because they're left out of the array
