const PostResolvers = require('./post');
const UserResolvers = require('./user');
const CommentResolvers = require('./comments');

module.exports={
    Post:{
        likesCount(parent){
            return parent.likes.length
        },
        CommentCount(parent){
            return parent.comments.length
        }
    },
    Query:{
        ...PostResolvers.Query,
       
    },
    Mutation:{
        ...UserResolvers.Mutation,
        ...PostResolvers.Mutation,
        ...CommentResolvers.Mutation
    }
}