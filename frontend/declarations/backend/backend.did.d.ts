import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface CryptoBlock {
  'change24h' : bigint,
  'name' : string,
  'price' : bigint,
  'symbol' : string,
}
export interface _SERVICE { 'getCryptoBlock' : ActorMethod<[], CryptoBlock> }
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
