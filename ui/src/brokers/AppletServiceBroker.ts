import { Client,  Payload, RealmoceanException } from "@realmocean/sdk";



const url = window.location.port != null ?
    `${window.location.protocol}//${window.location.hostname}:${window.location.port}/v1/service/applet`
    : `${window.location.protocol}//${window.location.hostname}/v1/service/applet`;


export class AppletServiceBroker extends Client {

    public static get Default(): AppletServiceBroker {
        return new AppletServiceBroker();
    }

    headers: any = {
        'x-realm-id':null,
        'x-applet-id': null,
        'x-github-token': 'web'
    };

    constructor() {
        super();
        this.setEndpoint(url);
    }
    setRealmId(value: string): this {
        this.headers['x-realm-id'] = value;
        return this;
    }
    setAppletId(value: string): this {
        this.headers['x-applet-id'] = value;
        return this;
    }
/* 
    setRepo(value: string): this {
        this.headers['x-github-repo'] = value;
        return this;
    }

    setToken(value: string): this {
        this.headers['x-github-token'] = value;
        return this;
    } */

    async createApplet(schema: any): Promise<any> {
        if (typeof schema === 'undefined') {
            throw new RealmoceanException('Missing required parameter: "issue"');
        }



        let path = '/create';
        let payload: Payload = {};

        payload['schema'] = schema;


        // Content-Length hesapla
        // const contentLength = new TextEncoder().encode(formData).length;

        //  alert(contentLength)


        const uri = new URL(this.config.endpoint + path);
        return await this.call('post', uri, {
            'content-type': 'application/x-www-form-urlencoded'
        }, payload);
    }
}