import crypto from 'crypto';
import axios from 'axios';
import { Config } from 'react-native-config';
import OAuth from 'oauth-1.0a';
import { baseURL, headers } from '@/networking/config';
import { resInterceptor } from '@/networking/interceptors';

export class NetworkService {
  generateSignature = (url, method, data) => {
    const oauth = OAuth({
      consumer: { key: Config.CONSUMER_KEY, secret: Config.CONSUMER_SECRET },
      signature_method: 'HMAC-SHA256',
      nonce_length: 11,
      realm: Config.ACCOUNT_ID,
      parameter_seperator: ',',
      hash_function(base_string, key) {
        return crypto.createHmac('sha256', key).update(base_string).digest('base64');
      },
    });
    const request_data = {
      url,
      method,
      data,
    };

    const token = {
      key: Config.ACCESS_TOKEN,
      secret: Config.TOKEN_SECRET,
    };
    return oauth.toHeader(oauth.authorize(request_data, token));
  };

  paramToString = (paramObj) => Object.keys(paramObj)
      .map((key) => `${key}=${paramObj[key]}`)
      .join('&');

  constructor() {
    this.client = axios.create({ baseURL, headers });
    this.client.interceptors.request.use((req) => {
      req.params = { ...req.params, script: Config.SCRIPT_ID, deploy: Config.DEPLOY_ID };
      const auth = this.generateSignature(
        req.baseURL.toLowerCase() + '?' + this.paramToString(req.params),
        req.method,
        req.data
      );
      req.headers = { ...req.headers, ...auth };
      return req;
    });
    this.client.interceptors.response.use(resInterceptor.onFulfill, resInterceptor.onReject);
  }

  setAccessToken(token) {
    this.client.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  clearAccessToken() {
    delete this.client.defaults.headers.common.authorization;
  }

  request({ method, url, data, ...config }) {
    return this.client.request({ method, url, data, ...config });
  }
}
export const networkService = new NetworkService();
