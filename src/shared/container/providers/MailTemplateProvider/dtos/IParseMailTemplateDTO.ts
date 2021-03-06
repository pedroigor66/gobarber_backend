interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}

// variables: { name: '...', link: 'http://', etc}
// we can use any type of string or number as defined in ITemplateVariables
