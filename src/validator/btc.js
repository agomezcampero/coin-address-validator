/* eslint-disable no-param-reassign */
import segwit from '../utils/segwit';

const {
  toHex, sha256, decode,
} = require('../utils');

const DEFAULT_NETWORK_TYPE = 'prod';

function getDecoded(address) {
  try {
    return decode(address);
  } catch (e) {
    // if decoding fails, assume invalid address
    return null;
  }
}

function getAddressType(address, currency) {
  currency = currency || {};
  // should be 25 bytes per btc address spec and 26 decred
  const expectedLength = currency.expectedLength || 25;
  const decoded = getDecoded(address);

  if (decoded) {
    const { length } = decoded;

    if (length !== expectedLength) {
      return null;
    }

    const checksum = toHex(decoded.slice(length - 4, length));
    const body = toHex(decoded.slice(0, length - 4));
    const goodChecksum = sha256(sha256(body)).substr(0, 8);

    return checksum === goodChecksum ? toHex(decoded.slice(0, expectedLength - 24)) : null;
  }

  return null;
}

function isValidP2PKHandP2SHAddress(address, currency, networkType) {
  networkType = networkType || DEFAULT_NETWORK_TYPE;

  let correctAddressTypes;
  const addressType = getAddressType(address, currency);

  if (addressType) {
    if (networkType === 'prod' || networkType === 'testnet') {
      correctAddressTypes = currency.addressTypes[networkType];
    } else {
      correctAddressTypes = currency.addressTypes.prod.concat(currency.addressTypes.testnet);
    }

    return correctAddressTypes.indexOf(addressType) >= 0;
  }

  return false;
}

const isValidAddress = (address, currency, networkType) =>
  isValidP2PKHandP2SHAddress(address, currency, networkType)
    || segwit.isValidAddress(address, currency.segwitHrp);

export default { isValidAddress };
