export const idlFactory = ({ IDL }) => {
  const CryptoBlock = IDL.Record({
    'change24h' : IDL.Int,
    'name' : IDL.Text,
    'price' : IDL.Nat,
    'symbol' : IDL.Text,
  });
  return IDL.Service({
    'getCryptoBlock' : IDL.Func([], [CryptoBlock], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
