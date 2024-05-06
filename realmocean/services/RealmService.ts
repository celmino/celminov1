
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

class RealmService extends RealmoceanService {
    public static get Name(): string {
        return 'com.celmino.service.realm';
    }

    async init() {

        const router = this.services.get('web-server').getRouter();

        router.post("/com.celmino.service.realm/realm/setup", async (req, res) => {

            const accountId = req.body.accountId;
            const realmId = req.body.realmId;
            const realmName = req.body.realmName;
            const teamId = req.body.teamId;


            try {
                const applet = await this.setup(realmId, realmName, teamId, accountId);
                return res.json(applet);
            } catch (e) {
                res.statusCode(500)
                return res.json(e);
            }
        });
    }

    async setup(workspaceId: string, workspaceName: string, teamId: string, accountId: string) {
        const databaseService = this.databaseService;


        const database = await databaseService.create(workspaceId, 'workspace', 'Workspace');

        await databaseService.createCollection(workspaceId, database.$id, 'realmInfo', 'RealmInfo');
        await databaseService.createStringAttribute(workspaceId, database.$id, 'realmInfo', 'name', 255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, 'realmInfo', 'teamId', 255, false);


        const appletCol = await databaseService.createCollection(workspaceId, database.$id, 'applets', 'Applets');
        const nameAttr = await databaseService.createStringAttribute(workspaceId, database.$id, appletCol.$id, 'name', 255, false);
        const parent = await databaseService.createStringAttribute(workspaceId, database.$id, appletCol.$id, 'parent', 255, false);
        const opaAttr = await databaseService.createStringAttribute(workspaceId, database.$id, appletCol.$id, 'opa', 255, false);
        const typeAttr = await databaseService.createStringAttribute(workspaceId, database.$id, appletCol.$id, 'type', 255, false);
        const iconName = await databaseService.createStringAttribute(workspaceId, database.$id, appletCol.$id, 'iconName', 255, false);
        const iconCategory = await databaseService.createStringAttribute(workspaceId, database.$id, appletCol.$id, 'iconCategory', 255, false);
        const themeColor = await databaseService.createStringAttribute(workspaceId, database.$id, appletCol.$id, 'themeColor', 255, false, '-1');

        //Tree Collection Creating
        const treeCol = await databaseService.createCollection(workspaceId, database.$id, 'ws_tree', 'Workspace Tree');
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'name', 255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'type', 255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'parent', 255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'path', 1255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'fullPath', 1255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'spaceId', 255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'tree_widget', 255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'appletId', 255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'iconName', 255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'iconCategory', 255, false);
        await databaseService.createStringAttribute(workspaceId, database.$id, treeCol.$id, 'iconColor', 255, false, '-1');

        await delay(1000);

        await databaseService.createDocument(workspaceId, database.$id, 'realmInfo', workspaceId, {
            name: workspaceName,
            teamId: accountId
        });

        await databaseService.createDocument(accountId, 'workspace', 'membership', workspaceId, { name: workspaceName });


    }
}


module.exports = RealmService;