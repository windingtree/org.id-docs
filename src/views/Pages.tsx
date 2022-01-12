import React from 'react';
import Page from '../componets/Page';

export const WhatIs:React.FC = () => <Page 
  title='What is ORGiD' 
  content='ORGiD is a decentralized self-sovereign identity (SSI) and protocol mainly dedicated to being used by organizations but supports the handling of personal identities as well. Decentralization of the solution is made with a smart contract that is deployed in multiple EVM compatible blockchains. Thanks to this, the protocol users can choose a preferable environment for their identity. An ORGiD created in any of the blockchains supported is equally able to handle protocol features across the whole ORGiD ecosystem.' 
/>

export const Identity:React.FC = () => <Page title='Light intro into self-sovereign identity'>
  <p>The below content is taken from Wikipedia https://en.wikipedia.org/wiki/Self-sovereign_identity . We will probably need to revise the text for our specific use case.</p>
  <p>Self-sovereign identity (SSI) is an approach to digital identity that gives individuals control of their digital identities.</p>
  <p>SSI addresses the difficulty of establishing trust in an interaction. In order to be trusted, one party in an interaction will present credentials to the other parties, and those relying parties can verify that the credentials came from an issuer that they trust. In this way, the verifier's trust in the issuer is transferred to the credential holder. This basic structure of SSI with three participants is sometimes called "the trust triangle".</p>
  <p>It is generally recognized that for an identity system to be self-sovereign, users control the verifiable credentials that they hold and their consent is required to use those credentials. This reduces the unintended sharing of users' personal data. This is contrasted with the centralized identity paradigm where identity is provided by some outside entity.</p>
  <p>In an SSI system, holders generate and control unique identifiers called decentralized identifiers. Most SSI systems are decentralized, where the credentials are managed using crypto wallets and verified using public-key cryptography anchored on a distributed ledger. The credentials may contain data from an issuer's database, a social media account, a history of transactions on an e-commerce site, or attestation from friends or colleagues.</p>
</Page>

export const Addresses:React.FC = () => <Page title='Addresses of smart contracts'>
  <p>Currently, the ORGiD smart contract is deployed to the following chains:</p>
  <ul>
    <li>Ropsten Testnet: 0x405005a015EA0E24889D6963447Bb0D646D91C83</li>
    <li>Rinkeby Testnet: 0x877c5532B2a76148334CBfA32779A0b9ee414FBE</li>
    <li>Arbitrum Rinkeby Testnet: 0x3925A9d5554508b65a6490c450FB294A9173948B</li>
    <li>Sokol Testnet (xDAI): 0xDd1231c0FD9083DA42eDd2BD4f041d0a54EF7BeE</li>
    <li>(expected soon) Optimism</li>
    <li>(expected soon) ZKSync</li>
  </ul>
</Page>

export const HowTo:React.FC = () => <Page title='How To'>
  {/* <p>Currently, the ORGiD smart contract is deployed to the following chains:</p> */}
</Page>

export const SDK:React.FC = () => <Page title='ORGiD SDK'>
  <p>The ORGiD SDK contains a set of utilities and libraries that help developers to create applications that use the protocol features and extend them.</p>
  <p>The ORGiD SDK is an open-source project. Everyone is invited to build a future based on open and freely available protocol.</p>
  <p>Using the ORGiD SDK can be developed a wide spectrum of user-centric applications that utilise possibilities provided by decentralized identity like exceptional identity control, portability, security and data interoperability.</p>
  <p>Please see the official documentations at https://windingtree.github.io/org.id-sdk</p>
</Page>

export const Features:React.FC = () => <Page title='ORGiD Features'>

</Page>

export const Links:React.FC = () => <Page title='Links' content='content' />

export const Protocol:React.FC = () => <Page title='Protocol' content='content' />

export const Roadmap:React.FC = () => <Page title='Roadmap' content='content' />
