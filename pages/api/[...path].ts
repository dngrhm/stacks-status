import { IncomingMessage, ServerResponse } from 'http';
import httpProxy from 'http-proxy';

const API_URL = process.env.STACKS_API_HOST // The actual URL of your API
const proxy = httpProxy.createProxyServer()
// Make sure that we don't parse JSON bodies on this route:
export const config = {
    api: {
        bodyParser: false
    }
}

const receive = (req: IncomingMessage, res: ServerResponse) => {
  //remove the /api route prefix required by next from proxied URL
  req.url = req.url?.replace(/\/api/, '');
  proxy.web(req, res, { target: API_URL, changeOrigin: true })
}

export default receive;