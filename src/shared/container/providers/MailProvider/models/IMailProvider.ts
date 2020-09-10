import ISendMailDTO from '../dtos/ISendMailsDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
