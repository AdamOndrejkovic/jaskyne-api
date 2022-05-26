import { Injectable } from '@nestjs/common';
import { MailDto } from './dto/mail.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async send(mailDto: MailDto) {
    await this.mailerService.sendMail({
      to: 'adam.ondrejkovic@gmail.com',
      subject: mailDto.subject || 'Contact mail',
      template: 'contact',
      context: {
        email: mailDto.sender,
        message: mailDto.message,
      },
    });
  }
}
