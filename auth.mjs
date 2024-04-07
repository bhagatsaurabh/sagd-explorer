import { google } from "googleapis";

const auth = () => {
  const credentialFilename = process.env.SAGD_KEY;
  const scopes = ["https://www.googleapis.com/auth/drive"];
  const auth = new google.auth.GoogleAuth({
    keyFile: credentialFilename,
    scopes: scopes,
  });

  return google.drive({ version: "v3", auth });
};

export { auth };
