// Stacks Info service
// ref: https://docs.hiro.so/api#tag/Info
import fetch from "cross-fetch";
import {
  Configuration,
  InfoApi,
  InfoApiInterface,
  ServerStatusResponse,
} from "@stacks/blockchain-api-client";

const NETWORK_HOST = 'https://stacks-node-api.mainnet.stacks.co';

const getStatusCall = (apiHost: string): Function => (
  async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const apiConfig: Configuration = new Configuration({
          fetchApi: fetch,
          basePath: apiHost,
        });
      
        // initiate the /info API with the basepath and fetch library
        const infoApi: InfoApiInterface = new InfoApi(apiConfig);
      
        // get Stacks core node info
        const response: ServerStatusResponse = await infoApi.getStatus();
      
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  }
);

export const getStatus = getStatusCall(`${process.env.STACKS_API_HOST}`);
export const getNetworkStatus = getStatusCall(NETWORK_HOST);
