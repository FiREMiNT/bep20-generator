export default {
  data () {
    return {
      tokenDetails: [
        {
          name: 'HelloBEP20',
          version: '2.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: false,
          supplyType: '100k',
          accessType: 'Ownable',
          mintable: false,
          burnable: false,
          operable: false,
          tokenRecover: false,
          removeCopyright: false,
          originalPrice: 0.0,
          price: 0.0,
          gas: 1330639,
        },
        {
          name: 'SimpleBEP20',
          version: '2.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: false,
          supplyType: 'Fixed',
          accessType: 'Ownable',
          mintable: false,
          burnable: false,
          operable: false,
          tokenRecover: false,
          removeCopyright: false,
          originalPrice: 0.35,
            price: 0.05,
          gas: 1333276,
        },
        {
          name: 'StandardBEP20',
          version: '2.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'Ownable',
          mintable: false,
          burnable: false,
          operable: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0.5,
            price: 0.075,
          gas: 1260139,
        },
        {
          name: 'BurnableBEP20',
          version: '2.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'Ownable',
          mintable: false,
          burnable: true,
          operable: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0.5,
          price: 0.1,
          gas: 1444650,
        },
        {
          name: 'MintableBEP20',
          version: '2.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Capped',
          accessType: 'Ownable',
          mintable: true,
          burnable: false,
          operable: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0.6,
          price: 0.1,
          gas: 1524151,
        },
        {
          name: 'CommonBEP20',
          version: '2.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Capped',
          accessType: 'Ownable',
          mintable: true,
          burnable: true,
          operable: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 0.75,
          price: 0.15,
          gas: 1708581,
        },
        {
          name: 'UnlimitedBEP20',
          version: '2.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Unlimited',
          accessType: 'Ownable',
          mintable: true,
          burnable: true,
          operable: false,
          tokenRecover: false,
          removeCopyright: true,
          originalPrice: 1,
          price: 0.3,
          gas: 1637163,
        },
        {
          name: 'AmazingBEP20',
          version: '2.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Unlimited',
          accessType: 'Ownable',
          mintable: true,
          burnable: true,
          operable: true,
          tokenRecover: true,
          removeCopyright: true,
          originalPrice: 2,
          price: 0.5,
          gas: 2254686,
        },
      ],
    };
  },
};
