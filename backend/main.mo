import Int "mo:base/Int";

import Text "mo:base/Text";
import Nat "mo:base/Nat";

actor {
  // Define the structure of our crypto block
  type CryptoBlock = {
    name: Text;
    symbol: Text;
    price: Nat;
    change24h: Int;
  };

  // Initialize our crypto block with some mock data
  stable var cryptoBlock: CryptoBlock = {
    name = "Bitcoin";
    symbol = "BTC";
    price = 50000;
    change24h = 5;
  };

  // Query function to get the crypto block data
  public query func getCryptoBlock(): async CryptoBlock {
    cryptoBlock
  };
}