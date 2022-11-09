import { Config } from 'react-native-config';

export const baseURL = `https://${Config.ACCOUNT_ID}.restlets.api.netsuite.com/app/site/hosting/restlet.nl`;

export const headers = {
  'Content-Type': 'application/json',
};
