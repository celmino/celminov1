import { MyTestClass } from "./_Test";

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

class AppletService extends RealmoceanService {
    public static get Name(): string {
        return 'applet-service';
    }
    async init() {
        const myTest = new MyTestClass();
        myTest.print();
        const app = this.services.get('web-server').getExpressApp();


        /*   setTimeout(async () => {
              console.log('AppletService initialized.');
              const databases = await databaseService.list('the');
              console.log(databases);
          }, 5000); */

        app.post("/applet/create", async (req, res) => {
            const schema = JSON.parse(req.body.schema);
            const realmId = req.headers['x-realm-id'];
            const appletId = req.headers['x-applet-id'];
            console.log(req.headers);
            console.log(schema);
            console.log(typeof schema);
            try {
                const applet = await this.createApplet(realmId, appletId, schema);
                return res.json(applet);
            } catch (e) {
                res.statusCode(500)
                return res.json(e);
            }
        });
    }

    async createApplet(realmId: string, appletId: string, schema: any) {
        // Create Applet Document
        const applet = await this.databaseService.createDocument(realmId, 'workspace', 'applets', 'unique()', {
            name: schema.name,
            opa: schema.tree_type,
            type: schema.applet_type,
            iconName: schema.iconName,
            iconCategory: schema.iconCategory,
            parent: schema.parent
        });

        appletId = applet.$id;

        // Create Applet Tree Item Document
        await this.databaseService.createDocument(realmId, 'workspace', 'ws_tree', appletId, {
            name: schema.name,
            type: 'applet',
            tree_widget: schema.tree_type,
            appletId: appletId,
            parent: '-1',
            path: (new Date()).getTime().toString(),
            fullPath: '/' + appletId,
            iconName: schema.tree_type === 'com.celmino.widget.applet-category' ? null : schema.iconName,
            iconCategory: schema.iconCategory,
            spaceId: '@team'
        })

        await this.schemaService.createDatabase(realmId, appletId, schema);

        return applet;
    }
}


module.exports = AppletService;