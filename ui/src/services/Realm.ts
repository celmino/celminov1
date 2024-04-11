import { Services, setUpProject } from "@realmocean/sdk";


export const RealmServices = {
    createPersonelRealm: async (realmId: string, realmName: string, organizationId: string) => {
        setUpProject('console', undefined);

        try {
            await Services.Teams.create(organizationId,realmName);
        } 
        catch {
            // organization exist
        }
        

        const workspace = await Services.Projects.create(realmId, realmName, organizationId);

        // Workspace Database
        const database = await Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace');

        // Membership Collection
        await Services.Databases.createCollection(workspace.$id, database.$id, 'membership', 'Realm Memberships');
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, 'membership', 'name', 255, false);

        //applets Collection
        const appletCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets');
        const nameAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false);
        const parent = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'parent', 255, false);
        const opaAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false);
        const typeAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'type', 255, false);
        const iconName = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconName', 255, false);
        const iconCategory = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconCategory', 255, false);
        const themeColor = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'themeColor', 255, false, '-1');

        //Tree Collection Creating
        const treeCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'ws_tree', 'Workspace Tree');
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'name', 255, false);
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'type', 255, false);
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'parent', 255, false);
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'path', 1255, false);
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'fullPath', 1255, false);
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'spaceId', 255, false);

        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'tree_widget', 255, false);
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'appletId', 255, false);
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'iconName', 255, false);
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'iconCategory', 255, false);
        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'iconColor', 255, false, '-1');


        // Create personel realm membership
        await Services.Databases.createDocument(workspace.$id, database.$id, 'membership', workspace.$id, { name: workspace.name });

    }
}