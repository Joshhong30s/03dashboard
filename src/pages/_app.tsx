import 'regenerator-runtime'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ColumnOrder from '../components/ColumnOrder'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ColumnOrder />
    </div>
  )
}
