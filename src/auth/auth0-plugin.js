import { createAuth0Client } from "@auth0/auth0-spa-js";

const createAuth0 = async () => {
  return await createAuth0Client({
    domain: "your_auth0_domain",
    client_id: "your_auth0_client_id",
    redirect_uri: window.location.origin,
  });
};

const useAuth0 = createAuth0();
export { useAuth0 };
