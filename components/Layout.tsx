import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextBase</title>
        <meta name="description" content="nextbase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
};

export default Layout;
