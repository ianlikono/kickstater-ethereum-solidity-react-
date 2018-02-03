import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4d90f53e6A72A4DffCcDA7AE9928F6787b949f16'
)

export default instance;