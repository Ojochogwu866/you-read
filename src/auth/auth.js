import { createAuth0Client } from "@auth0/auth0-spa-js";

let auth0Client;
export const initAuth0 = async () => {
  auth0Client = await createAuth0Client({
    domain: "dev-chaxqseb4mvt5h01.uk.auth0.com",
    client_id: "kHpTMUQEtHdnVuljRqpMjHjrNZprnsWy",
    redirect_uri: `${window.location.origin}/callback`,
    audience: "YOUR_AUTH0_AUDIENCE",
  });
  return auth0Client;
};
export const handleAuthentication = async () => {
  const authResult = await auth0Client.handleRedirectCallback();
  return authResult.appState || {};
};
export const getAuth0Client = () => auth0Client;
export const isAuthenticated = async () => {
  return await auth0Client.isAuthenticated();
};
export const loginWithEmailAndPassword = async (email, password) => {
  if (!auth0Client) await initAuth0();
  return auth0Client.signup({
    email,
    password,
    connection: "email",
  });
};
export const signupWithFacebook = async () => {
  return auth0Client.loginWithPopup({
    connection: "facebook",
  });
};

export const signupWithGoogle = async () => {
  return auth0Client.loginWithPopup({
    connection: "google",
  });
};
export const signupWithEmail = async (email, password) => {
  return auth0Client.signup({
    connection: "email",
    email,
    password,
  });
};
export const login = () => auth0Client.loginWithRedirect({});
export const loginWithPopup = async (connection) => {
  return auth0Client.loginWithPopup({
    connection,
  });
};

export const loginWithFacebook = async () => {
  return auth0Client.loginWithPopup({
    connection: "facebook",
  });
};
export const loginWithGoogle = async () => {
  return auth0Client.loginWithPopup({
    connection: "google-oauth2",
  });
};
export const logout = () =>
  auth0Client.logout({
    returnTo: "http://localhost:8080",
  });
export default auth0Client;
/**export async function signupWithEmail({ email, password }) {
  try {
    await auth0Client.signup({
      connection: "Username-Password-Authentication",
      email,
      password,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
  return user;
}

export async function signupWithFacebook({ commit }) {
  try {
    await auth0Client.loginWithRedirect({
      redirect_uri: `${window.location.origin}/callback`,
      connection: "facebook",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function signupWithGoogle({ commit }) {
  try {
    await auth0Client.loginWithRedirect({
      redirect_uri: `${window.location.origin}/callback`,
      connection: "google-oauth2",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
} */
