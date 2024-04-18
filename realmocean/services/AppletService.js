
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
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
            const schema = JSON.parse(req.body.schema);
            const realmId = req.headers['x-realm-id'];
            const appletId = req.headers['x-applet-id'];
            console.log(req.headers);
            console.log(schema);
            console.log(typeof schema);
            try {
                await this.createApplet(realmId, appletId, schema);
            } catch {

            }

            return res.json(schema);
        });
    }

    async createApplet(realmId, appletId, schema) {
        const databaseService = this.services.get('database-service');
        return new Promise(async (resolve, reject) => {

            // Create Applet Document
            const applet = await databaseService.createDocument(realmId, 'workspace', 'applets', 'unique()', {
                name: schema.name,
                opa: schema.tree_type,
                type: schema.applet_type,
                iconName: schema.iconName,
                iconCategory: schema.iconCategory,
                parent: schema.parent
            });

            appletId= applet.$id;

            // Create Applet Tree Item Document
            await databaseService.createDocument(realmId, 'workspace', 'ws_tree', appletId, {
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

            for (let i = 0; i < schema.databases.length; i++) {
                const template = schema.databases[i];
                const { name, id, category, collections } = template;
                try {
                    const db = await databaseService.create(realmId, appletId, schema.name, true);
                    for (let j = 0; j < collections.length; j++) {
                        const collection = collections[j];
                        const { name, id, attributes, documents = [] } = collection;
                        const col = await databaseService.createCollection(realmId, db.$id, id, name, [], false);

                        for (let i = 0; i < attributes.length; i++) {
                            const { key, type, defaultValue = null, size = 255 } = attributes[i];
                            switch (type) {
                                case 'string':
                                    await databaseService.createStringAttribute(realmId, db.$id, col.$id, key, size, false, '', false);
                                    break;
                                case 'number':
                                    await databaseService.createIntegerAttribute(realmId, db.$id, col.$id, key, false);
                                    break;
                                case 'datetime':
                                    await databaseService.createDatetimeAttribute(realmId, db.$id, col.$id, key, false);
                                    break;
                                case 'boolean':
                                    await databaseService.createBooleanAttribute(realmId, db.$id, col.$id, key, false, defaultValue ?? false);
                                    break;
                            }
                        }

                    }

                    await delay(1000)
                    // create documents loop
                    for (let j = 0; j < collections.length; j++) {
                        const collection = collections[j];
                        const { name, id, attributes, documents = [] } = collection;
                        console.log(documents);

                        documents?.forEach(async document => {
                            let $id = 'unique()';
                            if (document.$id != null) {
                                $id = document.$id;
                                delete document.$id;
                            }
                            const doc = await databaseService.createDocument(realmId, db.$id, id, $id, document);


                        });

                    }

                } catch (error) {
                    console.error(error)
                    reject(error);
                }

                resolve(true);
            }
        })



    }
}

AppletService.Name = 'applet-service';

module.exports = AppletService;