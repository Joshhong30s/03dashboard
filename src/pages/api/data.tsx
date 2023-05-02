// import { NextApiRequest, NextApiResponse } from 'next'
// import { getServerSideProps } from '../overview'

// const apiData = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { site } = req.query

//   if (!site) {
//     return res.status(400).json({ message: 'Site parameter is required' })
//   }

//   try {
//     const { props } = await getServerSideProps()
//     res.status(200).json(props)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Failed to fetch data' })
//   }
// }

// export default apiData
