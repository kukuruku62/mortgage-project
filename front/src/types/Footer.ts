export interface IListLinksProps {
  title?: string;
  items: {id: string, text: string; link?: string }[];
  classNameProp?: string,
}