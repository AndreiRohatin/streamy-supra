import Head from "next/head";
import "./styles.css";
// import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
 
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'
 
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'


// const infuraId = 'ab21d371c06f4cb292b53ce2d3f97ca5';


// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [mainnet],
//   [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
// )

// const config = createConfig({
//   autoConnect: true,
//   connectors: [
//     new MetaMaskConnector({ chains }),
//     new CoinbaseWalletConnector({
//       chains,
//       options: {
//         appName: 'wagmi',
//       },
//     }),
//     new WalletConnectConnector({
//       chains,
//       options: {
//         projectId: '...',
//       },
//     }),
//     new InjectedConnector({
//       chains,
//       options: {
//         name: 'Injected',
//         shimDisconnect: true,
//       },
//     }),
//   ],
//   publicClient,
//   webSocketPublicClient,
// })

//@ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <WagmiConfig config={config}> */}
        <Head>
          <title>Streamy</title>
          
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <Component {...pageProps} />
      {/* </WagmiConfig> */}
    </>
  );
}

export default MyApp;
