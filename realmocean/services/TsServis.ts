declare var BaseService, module;

 class ConfigService extends BaseService {

    public static get Name(): string {
        return 'ts-service';
    }
}


module.exports = ConfigService;