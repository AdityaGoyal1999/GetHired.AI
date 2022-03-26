import React from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "../images/linkedin.png";
import axios from "axios";
import qs from 'qs';

function LinkedInPage() {

    const [code, setCode] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [token, setToken] = React.useState("");

    const getAccessToken = () => {

        console.log("Attempting to get access token");
        console.log(code);

        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            'Access-Control-Allow-Origin': '*',
        }

const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url: "https://www.linkedin.com/oauth/v2/accessToken",
};
axios(options);
        
        axios.post("https://www.linkedin.com/oauth/v2/accessToken", {
            grant_type: "authorization_code",
            code: code,
            redirect_uri: `${window.location.origin}/linkedin/`,
            client_id: "776uhg31uytqhr",
            client_secret: "xTLORo5f2dLJvqo7"
        }, {headers})
        .then(function (response) {
            console.log(response);
            setToken(response.access_token);
        })
        .catch(function (error) {
            console.log(error);
            setToken("");
        });
    
      }

  const { linkedInLogin } = useLinkedIn({
    clientId: "776uhg31uytqhr",
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code);
      setCode(code);
      setErrorMessage("");
      getAccessToken();
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
      setCode("");
      setErrorMessage(error.errorMessage);
    },
  });



  return (
    <div>
      {/* <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
      /> */}

      {/* {!code && <div>No code</div>}
      {code && (
        <div>
          <div>Authorization Code: {code}</div>
        </div>
      )} */}
    </div>
  );
}

export default LinkedInPage;