const Post = require('../../Models/Post');
const { UserInputError } = require('apollo-server');
const { AuthenticationError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');

module.exports = {
    Mutation: {
        async createComment(_, { postId, body }, context) {
            const { username } = checkAuth(context);
            if (body.trim() == '') {
                throw new UserInputError('Empty comment', {
                    errors: {
                        body: 'comment must not be empty'
                    }
                })
            }
            const post = Post.findById(postId);
            if (post) {
                post.comments.unshift({
                    body,
                    username,
                    createdAt: new Date().toISOString()
                });
                await post.save();
                return post;
            }
            else throw UserInputError('Post not Found');
        },
        async deleteComments(_, { postId, commentId }, context) {
            const { username } = checkAuth(context);

            const post = await Post.findById(postId);

            if (post) {
                const commentsIndex = post.comments.findIndex(c => c.id === commentId);
                if (post.comments[commentsIndex].username === username) {
                    post.comments.splice(commentsIndex, 1);

                    await post.save();
                    return post;
                }
                else {
                    throw new AuthenticationError('Action not allowd');
                }
            }else{
                throw new UserInputError('User not Found');
            }
        }
    }
}