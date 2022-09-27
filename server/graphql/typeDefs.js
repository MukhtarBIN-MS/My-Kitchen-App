const { gql } = require('apollo-server');

module.exports = gql`
   type Query{
      getPosts:[Post]
      getPost(postId:ID): Post
   }
   type Post{
       id:ID!
       body:String!
       createdAt:String!
       username:String!
       comments: [Comments]!
       likes: [Likes]!
       likesCount:Int!
       CommentCount: Int!
   }
   type Comments{
       id:ID!
       createdAt:String!
       username:String!
       body:String!
   }
   type Likes{
       id:ID!
       createdAt:String!
       username:String!
   }
   input RegisterInput{
       username:String!
       password:String!
       confirmPassword:String!
       email:String!
}
input RegisterCInput{
       username:String!
       companyname:String!
       password:String!
       confirmPassword:String!
       rcNumber:Int!
       email:String!
       address:String!
}
   type User{
       id:ID!
       email:String!
       token:String!
       username:String!
       createdAt:String!
   }
   type UserC{
       id:ID!
       username:String!
       companyname:String!
       address:String!
       email:String!
       token:String!
       createdAt:String!
   }
   type Mutation{
       register(registerInput: RegisterInput):User!
       registerC(registerCInput: RegisterCInput):UserC!
       login(username:String!, password:String!):User!
       loginC(username:String!, password:String!):UserC!
       createPost(body:String):Post!
       deletePost(postId:ID!):String!
       createComment(postId:String, body:String):Post!
       deleteComments(postId:ID!, commentId:ID!):Post!
       likePost(postId:ID!):Post!

   }
`;

