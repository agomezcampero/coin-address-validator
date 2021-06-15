import btcValidator from '../validator/btc';
import ethValidator from '../validator/eth';
import xrpValidator from '../validator/xrp';
import xmrValidator from '../validator/xmr';

const CURRENCIES = [{
  name: 'bitcoin',
  symbol: 'btc',
  addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'bitcoincash',
  symbol: 'bch',
  addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'litecoin',
  symbol: 'ltc',
  addressTypes: { prod: ['30', '05', '32'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'peercoin',
  symbol: 'ppc',
  addressTypes: { prod: ['37', '75'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'dogecoin',
  symbol: 'doge',
  addressTypes: { prod: ['1e', '16'], testnet: ['71', 'c4'] },
  validator: btcValidator,
}, {
  name: 'beavercoin',
  symbol: 'bvc',
  addressTypes: { prod: ['19', '05'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'freicoin',
  symbol: 'frc',
  addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'protoshares',
  symbol: 'pts',
  addressTypes: { prod: ['38', '05'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'megacoin',
  symbol: 'mec',
  addressTypes: { prod: ['32', '05'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'primecoin',
  symbol: 'xpm',
  addressTypes: { prod: ['17', '53'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'auroracoin',
  symbol: 'aur',
  addressTypes: { prod: ['17', '05'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'namecoin',
  symbol: 'nmc',
  addressTypes: { prod: ['34'], testnet: [] },
  validator: btcValidator,
}, {
  name: 'biocoin',
  symbol: 'bio',
  addressTypes: { prod: ['19', '14'], testnet: ['6f', 'c4'] },
}, {
  name: 'garlicoin',
  symbol: 'grlc',
  addressTypes: { prod: ['26', '05'], testnet: ['6f', 'c4'] },
}, {
  name: 'vertcoin',
  symbol: 'vtc',
  addressTypes: { prod: ['0x', '47'], testnet: ['6f', 'c4'] },
  segwitHrp: 'vtc',
}, {
  name: 'bitcoingold',
  symbol: 'btg',
  addressTypes: { prod: ['26', '17'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'komodo',
  symbol: 'kmd',
  addressTypes: { prod: ['3c', '55'], testnet: ['0', '5'] },
  validator: btcValidator,
}, {
  name: 'bitcoinz',
  symbol: 'btcz',
  expectedLength: 26,
  addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: btcValidator,
}, {
  name: 'bitcoinprivate',
  symbol: 'btcp',
  expectedLength: 26,
  addressTypes: { prod: ['1325', '13af'], testnet: ['1957', '19e0'] },
  validator: btcValidator,
}, {
  name: 'hush',
  symbol: 'hush',
  expectedLength: 26,
  addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: btcValidator,
}, {
  name: 'snowgem',
  symbol: 'sng',
  expectedLength: 26,
  addressTypes: { prod: ['1c28', '1c2d'], testnet: ['1d25', '1cba'] },
  validator: btcValidator,
}, {
  name: 'zcash',
  symbol: 'zec',
  expectedLength: 26,
  addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: btcValidator,
}, {
  name: 'zclassic',
  symbol: 'zcl',
  expectedLength: 26,
  addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: btcValidator,
}, {
  name: 'zencash',
  symbol: 'zen',
  expectedLength: 26,
  addressTypes: { prod: ['2089', '2096'], testnet: ['2092', '2098'] },
  validator: btcValidator,
}, {
  name: 'votecoin',
  symbol: 'vot',
  expectedLength: 26,
  addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: btcValidator,
}, {
  name: 'decred',
  symbol: 'dcr',
  addressTypes: { prod: ['073f', '071a'], testnet: ['0f21', '0efc'] },
  hashFunction: 'blake256',
  expectedLength: 26,
}, {
  name: 'digibyte',
  symbol: 'dgb',
  addressTypes: { prod: ['1e'], testnet: [] },
  validator: btcValidator,
}, {
  name: 'ethereum',
  symbol: 'eth',
  validator: ethValidator,
}, {
  name: 'etherzero',
  symbol: 'etz',
  validator: ethValidator,
}, {
  name: 'ethereumclassic',
  symbol: 'etc',
  validator: ethValidator,
}, {
  name: 'callisto',
  symbol: 'clo',
  validator: ethValidator,
}, {
  name: 'ripple',
  symbol: 'xrp',
  validator: xrpValidator,
}, {
  name: 'dash',
  symbol: 'dash',
  addressTypes: { prod: ['4c', '10'], testnet: ['8c', '13'] },
  validator: btcValidator,
}, {
  name: 'neo',
  symbol: 'neo',
  addressTypes: { prod: ['17'], testnet: [] },
  validator: btcValidator,
}, {
  name: 'neogas',
  symbol: 'gas',
  addressTypes: { prod: ['17'], testnet: [] },
}, {
  name: 'qtum',
  symbol: 'qtum',
  addressTypes: { prod: ['3a', '32'], testnet: ['6f', 'c4'] },
  validator: btcValidator,
}, {
  name: 'monero',
  symbol: 'xmr',
  validator: xmrValidator,
}];

const currencies = {
  CURRENCIES,
  getByNameOrSymbol: (currencyNameOrSymbol) => {
    const key = currencyNameOrSymbol.toLowerCase();

    return CURRENCIES.find(({ name, symbol }) => (name === key || symbol === key));
  },
};

export default currencies;
