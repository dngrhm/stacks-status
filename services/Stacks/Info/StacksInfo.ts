// Stacks Info service
// ref: https://docs.hiro.so/api#tag/Info
import fetch from "cross-fetch";
import {
  Configuration,
  InfoApi,
  InfoApiInterface,
  CoreNodeInfoResponse,
} from "@stacks/blockchain-api-client";

const NETWORK_HOST = 'https://stacks-node-api.mainnet.stacks.co';

const getInfoCall = (apiHost: string): Function => (
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
        const info: CoreNodeInfoResponse = await infoApi.getCoreApiInfo();
      
        resolve(info);
      } catch (err) {
        reject(err);
      }
    });
  }
);

export const getInfo = getInfoCall(`${process.env.STACKS_API_HOST}`);
export const getNetworkInfo = getInfoCall(NETWORK_HOST);
