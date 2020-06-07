// using node-style package resolution in a CSS file:
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// import buildClient from '@/api/build-client';
import Header from '../components/header';

// wrapper around all pages

const AppComponent = ({ Component, pageProps }: any): any => {
    return (
        <div>
            <Header />
            <div>
                <Component {...pageProps} />
            </div>
        </div>
    );
};

// ssr
// AppComponent.getInitialProps = async (appContext: any) => {
//   // create client
//   const client = buildClient(appContext.ctx);
//   //call get
//   const { data } = await client.get(`/api/users/currentuser`);

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(
//       appContext.ctx,
//       client,
//       data.currentUser
//     );
//   }

//   return {
//     pageProps,
//     ...data,
//   };
// };

export default AppComponent;
