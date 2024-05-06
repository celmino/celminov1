import { Client, Payload, RealmoceanException, ServiceBroker } from "@realmocean/sdk";




export class RealmServiceBroker extends ServiceBroker<any> {

    public static get Default(): RealmServiceBroker {
        return new RealmServiceBroker();
    }

    public get ServiceName(): string {
        return 'com.celmino.service.realm'
    }


    async setup(accountId: string, realmId: string, realmName: string): Promise<any> {
        


        let path = '/setup';
        let payload: Payload = {};

        payload['accountId'] = accountId;
        payload['realmId'] = realmId;
        payload['realmName'] = realmName;

        // Content-Length hesapla
        // const contentLength = new TextEncoder().encode(formData).length;

        //  alert(contentLength)


        const uri = new URL(this.config.endpoint + path);
        return await this.call('post', uri, {
            'content-type': 'application/json'
        }, payload);
    }

   
}