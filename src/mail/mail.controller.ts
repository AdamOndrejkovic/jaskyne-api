import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailDto } from './dto/mail.dto';

@Controller('mailer')
export class MailController {
  constructor(private readonly mailerService: MailService) {}

  @Post()
  create(@Body() mailDto: MailDto) {
    return this.mailerService.send(mailDto);
  }
}
