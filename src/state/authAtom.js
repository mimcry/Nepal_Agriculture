import { atomWithStorage } from 'jotai/utils';
// Atom to store the access token
export const accessTokenAtom = atomWithStorage('access_token', '');

// Atom to store the refresh token
export const refreshTokenAtom = atomWithStorage('refresh_token', '');
// This atom will persist the login state in localStorage
export const isLoggedInAtom = atomWithStorage('isLoggedIn', false);
export const userIdAtom = atomWithStorage('userId', null); // For storing the user ID
