module.exports.validateRegisterInput = (
    username,
    password,
    confirmPassword,
    email
) => {
    const errors = {};

    if (username.trim() === '') {
        errors.username = 'username must not be empty';
    }

    if (password === '') {
        errors.password = 'Password must not be empty';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Password must be match';
    }

    if (email.trim() === '') {
        errors.email = 'email must not be empty';
    }



    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};

module.exports.validateLoginInput = (
    username,
    password
) => {
    const errors = {};
    if (username.trim() === '') {
        errors.username = 'username must not be empty';
    }

    if (password === '') {
        errors.password = 'Password must not be empty'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
module.exports.validateLoginCInput = (
    username,
    password
) => {
    const errors = {};
    if (username.trim() === '') {
        errors.username = 'username must not be empty';
    }

    if (password === '') {
        errors.password = 'Password must not be empty'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
module.exports.validateRegiterC = (
    username,
    companyname,
    password,
    confirmPassword,
    email,
    address
   
) => {
    const errors = {};

    if (username.trim() === '') {
        errors.username = 'Username  must not be empty'
    }

    if (companyname.trim() === '') {
        errors.companyname = 'Company Name Cannot be Blank'
    }
    if (password === '') {
        errors.password = 'Password Cannot be Blank'
    } else if (password !== confirmPassword) {
        errors.password = 'Password must match'
    }

   if(email.trim() ===''){
       errors.email = 'Email must not be blank'
   }
   if(address.trim() ===''){
       errors.address = 'Adress must not be blank'
   }
   
   
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};