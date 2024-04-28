export interface EmailService {

    send_email(smtp_server: string, smpt_port: string, smtp_username: string, smtp_password: string,
        from_email: string,
        to_email: string, subject: string, html: string, values: any);
}