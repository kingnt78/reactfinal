import { findMatchingUser } from '../users';

export function login(username, password) {
    return function(dispatch) {
        const user = findMatchingUser(username, password);
        // If it username/password are correct, a user object will be available
        if (user) {
            // TODO #6 trigger a LOGIN_SUCCESS action here
            dispatch(loginSuccess(user));
        }
    };
}

function loginSuccess(user) {
    return {
        type: "LOGIN_SUCCESS",
        user
    };
};