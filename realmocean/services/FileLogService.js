

class FileLogService extends RealmoceanService {
   
    async init() {
        const app = this.services.get('web-server').getExpressApp();
        const config = this.services.get('config-service').getConfig();

        const scheduleService = this.services.get('schedule-service');
        scheduleService.addJob('* * * * * *', () => {
            //console.log('job ------')
        })

       /*  const email = this.services.get('email-service');

        email.send('FileLogService initialized gönderildi.')
 */
     //   const team = this.services.get('team-service');
       // console.log(await team.list('the'))

        app.get("/hans", async (req, res) => {
            return res.json(config);
        });

       /*  app.get("/teams", async (req, res) => {
           const teams = await team.list('the')
            return res.json(teams);
        }); */
    }
}

FileLogService.Name = 'log-service';

module.exports = FileLogService;