import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'
import { GoogleAuth } from 'google-auth-library'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Auth
  const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  // query
  const range = 'site!A2:AK8' // range can be dynamically upon request

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    })

    console.log('Response data:', response.data)

    res.status(200).json({ status: 'success', sites: response.data.values })
  } catch (error) {
    console.error('Error getting data from GoogleSheet:', error)
    return new Response(JSON.stringify({ status: 'error' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
}

export default handler
