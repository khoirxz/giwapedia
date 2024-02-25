export interface AllMetaResponse {
  MetaPage: Meta;
}

interface Meta {
  title: string;
  description: string;
  telephone: string;
  icon: { src: string };
}
