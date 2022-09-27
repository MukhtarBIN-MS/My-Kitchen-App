const User = require('../../Models/User');
const Chef = require('../../Models/Chef');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { UserInputError } = require('apollo-server');

const { validateRegisterInput, validateRegiterC } = require('../../util/validators');
const { validateLoginInput, validateLoginCInput } = require('../../util/validators');

const { SECRET_KEY } = require('../../config');

function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    },
        SECRET_KEY, { expiresIn: '1h' });

}

module.exports = {
    Mutation: {
        async login(_, { username, password }) {
            const { errors, valid } = validateLoginInput(username, password);

            if (!valid) {
                throw new UserInputError('Fields must not be empty', { errors })
            }
            const user = await User.findOne({ username });

            if (!user) {
                errors.general = 'User not found';
                throw new UserInputError('Wrong details', { errors });
            }
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                errors.general = 'Wrong details';
                throw new UserInputError('Wrong Details', { errors });
            }

            const token = generateToken(user);

            return {
                ...user._doc,
                id: user._id,
                token
            };
        },
        async loginC(_, { username, password }) {
            const { errors, valid } = validateLoginCInput(username, password);

            if (!valid) {
                throw new UserInputError('Fields must not be empty', { errors })
            }
            const userC = await Chef.findOne({ username });

            if (!userC) {
                errors.general = 'User not found';
                throw new UserInputError('Wrong details', { errors });
            }
            const match = await bcrypt.compare(password, userC.password);
            if (!match) {
                errors.general = 'Wrong details';
                throw new UserInputError('Wrong Details', { errors });
            }

            const token = generateToken(userC);

            return {
                ...userC._doc,
                id: userC._id,
                token
            };
        },
        async registerC(_, { registerCInput: { username, companyname, password, confirmPassword, rcNumber, email, address } }) {

            const { errors, valid } = validateRegiterC(username, companyname, password, confirmPassword, email, address);
            if (!valid) {
                throw new UserInputError('Error', { errors })
            }
            const RegC = await Chef.findOne({ username });


            if (RegC) {
                throw new UserInputError('username already taken', {
                    errors: {
                        username: 'The username name is already taken'
                    }
                });
            }

            password = await bcrypt.hash(password, 12);

            const newChef = new Chef({
                username,
                companyname,
                password,
                rcNumber,
                email,
                address,
                createdAt: new Date().toISOString()
            });

            const chefreg = await newChef.save();
            const token = generateToken(chefreg);
            return {
                ...chefreg._doc,
                id: chefreg._id,
                token
            };
        },
        async register(_, {
            registerInput: { username, password, confirmPassword, email }
        }) {
            const { valid, errors } = validateRegisterInput(username, password, confirmPassword, email);
            if (!valid) {
                throw new UserInputError('Error', { errors })
            }
            const user = await User.findOne({ username });


            if (user) {
                throw new UserInputError('Username is already taken', {
                    errors: {
                        username: 'This username is already taken'
                    }
                })
            }
            password = await bcrypt.hash(password, 12);
            const newUser = new User({
                email,
                password,
                username,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            const token = generateToken(res);
            return {
                ...res._doc,
                id: res._id,
                token
            };
        }

    }


}


