export interface Project {
  title?: string;
  listImages?: IImage[];
  url?: string;
  type: string;
}

export interface IImage {
  id?: string;
  src: string;
  alt: string;
  size?: string;
}
