

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
            this.createApplet(realmId,appletId, schema);
            return res.json(schema);
        });
    }

    async createApplet(realmId,appletId, schema) {
        const databaseService = this.services.get('database-service');
        return new Promise(async (resolve, reject) => {
            for (let i = 0; i < schema.databases.length; i++) {
                const template = schema.databases[i];
                const { name, id, category, collections } = template;
                try {
                    const db = await databaseService.create(realmId, applet.$id, opa.name, category);
                    for (let j = 0; j < collections.length; j++) {
                        const collection = collections[j];
                        const { name, id, attributes, documents } = collection;
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

                        if (documents.length > 0) {
                            setTimeout(() => {
                                documents?.forEach(async document => {
                                    let $id = nanoid();
                                    if (document.$id != null) {
                                        $id = document.$id;
                                        delete document.$id;
                                    }
                                    const doc = await databaseService.createDocument(realmId, db.$id, col.$id, $id, document);
                                    console.log(doc);
                                    resolve(true)
                                });
                            }, 3000);
                        } else {
                            resolve(true)
                        }
                    }

                } catch (error) {
                    console.log(error);
                }
            }
        })



    }
}

AppletService.Name = 'applet-service';

module.exports = AppletService;