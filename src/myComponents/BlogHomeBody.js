import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';
import App from './bodyComponent'; 
export default class BlogHomeBody extends React.Component {
render() {
  return (
    <App/>
  )
}
//     render() {
//        return(
// <div className="row">
//   <div className="col-4">
//     <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
//       <a className="p-1 rounded" href="#simple-list-item-1">What is blockchain</a>
//       <a className="p-1 rounded" href="#simple-list-item-2">Key elements of a blockchain</a>
//       <a className="p-1 rounded" href="#simple-list-item-3">How blockchain works</a>
//       <a className="p-1 rounded" href="#simple-list-item-4">Benefits of blockchain</a>
//     </div>
//   </div>
//   <div className="col-8">
//     <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
//       <h4 id="simple-list-item-1">What is blockchain</h4>
//       <p>
//         Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.
//      </p>
//      <p>
//         <b>
//             Why blockchain is important:
//         </b>
//         Business runs on information. The faster it’s received and the more accurate it is, the better. Blockchain is ideal for delivering that information because it provides immediate, shared and completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, accounts, production and much more. And because members share a single view of the truth, you can see all details of a transaction end to end, giving you greater confidence, as well as new efficiencies and opportunities.
//         </p>
//       <h4 id="simple-list-item-2">Key elements of a blockchain</h4>
//       <p><b>Distributed ledger technology: </b>
// All network participants have access to the distributed ledger and its immutable record of transactions. With this shared ledger, transactions are recorded only once, eliminating the duplication of effort that’s typical of traditional business networks.
// </p>
// <p><b>Immutable records: </b>
// No participant can change or tamper with a transaction after it’s been recorded to the shared ledger. If a transaction record includes an error, a new transaction must be added to reverse the error, and both transactions are then visible.
// </p>

// <p><b>Smart contracts: </b>
// To speed transactions, a set of rules — called a smart contract — is stored on the blockchain and executed automatically. A smart contract can define conditions for corporate bond transfers, include terms for travel insurance to be paid and much more.</p>
//       <h4 id="simple-list-item-3">How blockchain works</h4>
//       <p>As each transaction occurs, it is recorded as a “block” of data
// Those transactions show the movement of an asset that can be tangible (a product) or intangible (intellectual). The data block can record the information of your choice: who, what, when, where, how much and even the condition — such as the temperature of a food shipment.

// Each block is connected to the ones before and after it
// These blocks form a chain of data as an asset moves from place to place or ownership changes hands. The blocks confirm the exact time and sequence of transactions, and the blocks link securely together to prevent any block from being altered or a block being inserted between two existing blocks.

// Transactions are blocked together in an irreversible chain: a blockchain
// Each additional block strengthens the verification of the previous block and hence the entire blockchain. This renders the blockchain tamper-evident, delivering the key strength of immutability. This removes the possibility of tampering by a malicious actor — and builds a ledger of transactions you and other network members can trust.

// </p>
//       <h4 id="simple-list-item-4">Benefits of blockchain</h4>
//       <p><b>What needs to change:</b> Operations often waste effort on duplicate record keeping and third-party validations. Record-keeping systems can be vulnerable to fraud and cyberattacks. Limited transparency can slow data verification. And with the arrival of IoT, transaction volumes have exploded. All of this slows business, drains the bottom line — and means we need a better way. Enter blockchain.

// </p>
//     </div>
//   </div>
// </div>
//        )
//     }
} 