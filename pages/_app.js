import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReportContext from '../public/asset/context/reportContext';

const initialData = {
}

function MyApp({ Component, pageProps }) {
  return (
    <ReportContext.Provider value={initialData}>
      <Component {...pageProps} />
    </ReportContext.Provider>
  )
}

export default MyApp
