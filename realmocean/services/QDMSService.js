const BaseService = require("../BaseService");


const authPack = {
    url: 'http://93.180.135.42/QDMS/QDMSNET/BSAT/BSATWebapi.asmx?WSDL',
    token : 'jG5KCJiNA0ßßß7CUAVZ5naWvPKfVFcqex3JKJy$$$fZV2rz5u$$$RDfGWßßßxnRCAlVJDDjkhVnROßßßzSnZ27aQtLxßßß8Bnw==' 
}

class QDMSTestService extends BaseService {
    async init() {
        const schedule = this.services.get('schedule-service');
        const qdms = this.services.get('qdms-service');

         schedule.addJob('*/2 * * * * *', async () => {
            const users = await qdms.getUsers(authPack);
            console.log(users);
        }) 
        
    }
}

QDMSTestService.Name = 'test-qdms-service';

module.exports = QDMSTestService;