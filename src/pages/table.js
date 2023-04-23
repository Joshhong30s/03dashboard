import { google } from 'googleapis'
import BasicTable from '../components/BasicTable'

export async function getServerSideProps() {
  //auth
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })
  const sheets = google.sheets({ version: 'v4', auth })

  //query
  const range = 'baby!A1:F'
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  })

  //result
  const data = response.data.values.slice(1).map((row) => {
    const [Day, Weight, FeedingTime, FeedingVolume, DiaperTime, DiaperColor] =
      row
    return {
      Day,
      Weight,
      FeedingTime,
      FeedingVolume,
      DiaperTime,
      DiaperColor,
    }
  })

  return {
    props: {
      data,
    },
  }
}

export default function Table(props) {
  console.log(props)

  return (
    <div>
      <BasicTable data={props.data} />
    </div>
  )
}
