import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css';
import { SIDE_CHAIN, PRIVATE_KEY } from './tronweb/test/helpers/config';

// import TronWeb from './tronweb/src/index.js'
const TronWeb = require('./tronweb/dist/TronWeb.node');

// const privateKey = 'EB6E720D3F439DB6A66A8A5CB535F6838C690CD6BA0D6027A78BE4B781F20AF7';
// const privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0';

// const mainOptions = {
//   fullNode: "https://testhttpapi.tronex.io",
//   solidityNode: "https://testhttpapi.tronex.io",
//   eventServer: "https://testapi.tronex.io"
// }

// const mainOptions = {
//   fullNode: "https://api.shasta.trongrid.io",
//   solidityNode: "https://api.shasta.trongrid.io",
//   eventServer: "https://api.shasta.trongrid.io"
// }

const mainOptions = {
  fullNode: 'https://api.nileex.io',
  solidityNode: 'https://api.nileex.io',
  eventServer: 'https://api.nileex.io'
  // fullNode: "http://47.252.3.238:8090",
  // solidityNode: "http://47.252.3.238:8090",
  // eventServer: "http://47.252.3.238:8090"
};
const privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0';

const mainGatewayAddress = 'TFLtPoEtVJBMcj6kZPrQrwEdM3W3shxsBU'; //testnet mainchain
const sideGatewayAddress = 'TRDepx5KoQ8oNbFVZ5sogwUxtdYmATDRgX';
const sideChainId = '413AF23F37DA0D48234FDD43D89931E98E1144481B';

const sideOptions = {
  fullNode: 'https://suntest.tronex.io',
  solidityNode: 'https://suntest.tronex.io',
  eventServer: 'https://suntest.tronex.io',
  mainGatewayAddress,
  sideGatewayAddress,
  sideChainId
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.tronWeb1 = new TronWeb(mainOptions.fullNode, mainOptions.solidityNode, mainOptions.eventServer, privateKey);
  }

  send = e => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
