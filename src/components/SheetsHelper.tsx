import { google } from 'googleapis'

async function fetchSheetData(range: string) {
  // Auth
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  // Query
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  })

  return response.data.values
}

export default fetchSheetData
