import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface BlogPost {
  'id' : bigint,
  'title' : string,
  'content' : string,
  'author' : string,
  'timestamp' : string,
}
export interface _SERVICE {
  'getPost' : ActorMethod<[bigint], [] | [BlogPost]>,
  'getPosts' : ActorMethod<[], Array<BlogPost>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
