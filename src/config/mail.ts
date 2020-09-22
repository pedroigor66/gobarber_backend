interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  // if first variable is empty, replace it with 'ethereal'

  defaults: {
    from: {
      email: 'email_that_we_have_domain@domain.com',
      name: 'Name from domain TBD',
    },
  },
} as IMailConfig;
