const BaseService = require("../BaseService");

class FileLogService extends BaseService{

  serviceName() {
    return 'FileLogService';
  }

  cron() {
    return '* * * * * *';
  }

  scheduled() {
    console.log(this.services.get('FileLogService'))
  }

  get(req, res) {
    return res.json({
      status: "FileLogService",
    });
  }

}


FileLogService.Name = 'FileLogService';

module.exports =  FileLogService;