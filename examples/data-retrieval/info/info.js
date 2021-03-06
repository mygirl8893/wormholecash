/*
  Information about granted and revoked units of managed tokens.
*/

// Set NETWORK to either testnet or mainnet
const NETWORK = `testnet`

const WH = require("wormholecash/lib/Wormhole").default

// Instantiate Wormhole based on the network.
if (NETWORK === `mainnet`)
  var Wormhole = new WH({ restURL: `https://rest.btctest.net/v1/` })
//else var Wormhole = new WH({ restURL: `https://trest.bitcoin.com/v1/` })
else var Wormhole = new WH({ restURL: `https://trest.christroutner.com/v1/` })

async function info() {
  try {
    const info = await Wormhole.DataRetrieval.info()

    console.log(JSON.stringify(info, null, 2))
  } catch (error) {
    console.log(error)
  }
}
info()
