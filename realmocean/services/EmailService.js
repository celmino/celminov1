const BaseService = require("../BaseService");

class EmailService extends BaseService {

    async init() {
      
    }

    send(value) {
        console.log(value);
    }

}


EmailService.Name = 'email-service';

module.exports = EmailService;