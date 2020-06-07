import Head from 'next/head';
// import Link from 'next/link';
// import { NextPageContext } from 'next';
import { Card, Elevation } from '@blueprintjs/core';

const LandingPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Card interactive={true} elevation={Elevation.TWO}>
                <h1>client-nextjs-boilerplate</h1>
                <p>nextjs-typescript-jest-blueprintjs</p>
                {/* <Button>Submit</Button> */}
            </Card>
        </div>
    );
};

// ssr
// LandingPage.getInitialProps = async (
//   context: NextPageContext,
//   client: any,
//   currentUser: any
// ) => {
//   const { data } = await client.get('/api/tickets');

//   return { tickets: data };
// };

export default LandingPage;
