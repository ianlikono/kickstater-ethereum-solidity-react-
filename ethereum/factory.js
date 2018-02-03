import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x258c3fEf279D62e480B2f98D54a2668Ff721083a'
)

export default instance;