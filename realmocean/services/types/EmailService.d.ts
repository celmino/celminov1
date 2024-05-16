interface EmailServiceAccessObject {
    tls: boolean;
    smtpServer: string,
    smtpPort: string,
    username: string;
    password: string;
}
export interface EmailService extends RealmoceanService<EmailServiceAccessObject> {

     sendEmail(from_email: string,
        to_email: string, subject: string, htmlTemplate: string, values: any): Promise<any>;
}