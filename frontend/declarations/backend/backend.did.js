export const idlFactory = ({ IDL }) => {
  const BlogPost = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'author' : IDL.Text,
    'timestamp' : IDL.Text,
  });
  return IDL.Service({
    'getPost' : IDL.Func([IDL.Nat], [IDL.Opt(BlogPost)], ['query']),
    'getPosts' : IDL.Func([], [IDL.Vec(BlogPost)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
