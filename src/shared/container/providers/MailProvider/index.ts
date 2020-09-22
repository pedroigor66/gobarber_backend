import { container } from 'tsyringe';
import mailConfig from '@config/mail';
// import above is an object, not a class or interface

import IMailProvider from './models/IMailProvider';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProvider from './implementations/SESMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};
// new mail providers must be added here
// defined in mail.ts @config

// in the container bellow an instance was used because
// of the constructor inside EtherealMailProvider
container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
