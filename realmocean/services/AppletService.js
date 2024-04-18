

class AppletService extends RealmoceanService {
    async init() {
        

        const app = this.services.get('web-server').getExpressApp();
        const databaseService = this.services.get('database-service');

      /*   setTimeout(async () => {
            console.log('AppletService initialized.');
            const databases = await databaseService.list('the');
            console.log(databases);
        }, 5000); */

        app.post("/applet/create", async (req, res) => {
            return res.json({
                test: 'sdfsdf'
            });
        });
    }

    async createApplet(schema) {

    }
}

AppletService.Name = 'applet-service';

module.exports = AppletService;