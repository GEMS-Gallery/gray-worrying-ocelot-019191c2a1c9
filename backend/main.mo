import Bool "mo:base/Bool";
import Char "mo:base/Char";

import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";

actor {
  type BlogPost = {
    id: Nat;
    title: Text;
    content: Text;
    author: Text;
    timestamp: Text;
  };

  stable var posts: [BlogPost] = [
    {
      id = 1;
      title = "The Future of Cryptocurrency";
      content = "Cryptocurrency has been making waves in the financial world...";
      author = "Satoshi Nakamoto";
      timestamp = "2023-04-15T10:30:00Z";
    },
    {
      id = 2;
      title = "Understanding Blockchain Technology";
      content = "Blockchain is the underlying technology behind cryptocurrencies...";
      author = "Vitalik Buterin";
      timestamp = "2023-04-16T14:45:00Z";
    },
    {
      id = 3;
      title = "Crypto Trading Strategies for Beginners";
      content = "If you're new to cryptocurrency trading, here are some strategies...";
      author = "Charlie Lee";
      timestamp = "2023-04-17T09:15:00Z";
    }
  ];

  public query func getPosts(): async [BlogPost] {
    posts
  };

  public query func getPost(id: Nat): async ?BlogPost {
    Array.find(posts, func(post: BlogPost): Bool { post.id == id })
  };
}