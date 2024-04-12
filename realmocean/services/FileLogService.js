const BaseService = require("../BaseService");

class FileLogService extends BaseService {

   
    async init() {
        const app = this.services.get('web-server');
        const email = this.services.get('email-service');

        email.send('FileLogService initialized gönderildi.')

      

        app.get("/hans", async (req, res) => {
            return res.json({
                hans: 'sdfg'
            });
        });
    }

}


FileLogService.Name = 'log-service';

module.exports = FileLogService;