/* eslint-disable new-cap */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
// eslint-disable-next-line camelcase
import { Raleway, Zen_Dots, Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "500",
});
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

const zendots = Zen_Dots({
  subsets: ["latin"],
  variable: "--font-zendots",
  weight: "400",
});

function MyApp({ Component, pageProps }) {
  return (
    <main
      className={`${raleway.variable} ${ubuntu.variable} ${zendots.variable}`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
