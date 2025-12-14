import '@/styles/globals.css';

/**
 * Custom App component to load global styles across all pages.
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}