import React from 'react';
import ReactDOM from 'react-dom';
import EthAddress from '..';

const Demo = () => (
  <div>
    <section>
      <h4>
        Default usage:
      </h4>
      <EthAddress
        address="0x06012c8cf97bead5deae237070f9587f8e7a266d"
      />
    </section>

    <section>
      <h4>
        Show full address:
      </h4>
      <EthAddress
        address="0x06012c8cf97bead5deae237070f9587f8e7a266d"
        compact={false}
      />
    </section>

    <section>
      <h4>
        Link to etherscan:
      </h4>
      <EthAddress
        address="0x06012c8cf97bead5deae237070f9587f8e7a266d"
        etherscan
      />
    </section>

    <section>
      <h4>
        Invalid address
      </h4>
      <EthAddress
        address="aaaa"
        etherscan
      />
    </section>

    <section>
      <h4>
        Copy on click disabled
      </h4>
      <EthAddress
        address="0x06012c8cf97bead5deae237070f9587f8e7a266d"
        copyToClipboard={false}
      />
    </section>
  </div>
);

ReactDOM.render(<Demo />, document.getElementById('demo'));
