const Post = require('../../Models/Post');
const { AuthenticationError, UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');

module.exports = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find().sort({ createdAt: -1 });
                return posts;
            } catch (err) {
                throw new Error(err)
            }
        },
        async getPost(_, { postId }) {
            try {
                const post = await Post.findById(postId);
                if (post) {
                    return post
                } else {
                    throw new Error('Post not Found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {

        async createPost(_, { body }, context) {
            try {
                const user = checkAuth(context);
          
                if (arguments.body.trim() === '') {
                    throw new Error('Post must not be empty');

                }
                const newPost = new Post({
                    body,
                    user: user.id,
                    username: user.username,
                    createdAt: new Date().toISOString()
                });

                const post = await newPost.save();
                return post;
            } catch (err) {
                throw new Error('Error', err);
            }
        },
        async deletePost(_, { postId }) {
            const user = checkAuth(context);
            try {
                const post = await Post.findById(postId);
                if (user.username === post.username) {
                    await post.delete();
                    return 'Post deleted';
                }
                else {
                    throw new AuthenticationError('Invalid/Expired token');
                }

            } catch (err) {
                throw new Error('Error', err)
            }
        },
        async likePost(_, { postId }, context) {
            const user = checkAuth(context)
            if (user) {
                const { username } = await Post.findById(postId);
                if (post) {
                    if (post.likes.find((like) => like.username === username)) {
                        post.likes = post.likes.filter((like) => like.username !== username);
                    } else {
                        post.likes.push({
                            username,
                            createdAt: new Date().toISOString()
                        });
                    }
                    await post.save();
                    return post;
                }
                else throw new UserInputError('Post not Found');
            }
            else{
                throw new AuthenticationError('Please Login', {errors})
            }
        }
    }
    }