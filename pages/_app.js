/* eslint-disable new-cap */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
// eslint-disable-next-line camelcase
import { Raleway, Josefin_Sans, Zen_Dots } from "@next/font/google";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});
const zendots = Zen_Dots({
  subsets: ["latin"],
  variable: "--font-zendots",
  weight: "400",
});

function MyApp({ Component, pageProps }) {
  return (
    <main
      className={`${raleway.variable} ${josefin.variable} ${zendots.variable}`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
