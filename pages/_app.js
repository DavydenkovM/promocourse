// `pages/_app.js`
// import 'swiper/swiper.scss'
// import 'swiper/css/swiper.css';

import '../app/globals.css';
import 'swiper/css/bundle';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}