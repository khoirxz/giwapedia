export interface AllProduct {
  allProduct: {
    edges: Edge[];
  };
}

interface Edge {
  node: Node;
}

export interface Node {
  categories: Categories;
  description: Description;
  id: string;
  price: number;
  title: string;
}

export interface Categories {
  title: string;
}

export interface Description {
  json: Json;
}

export interface Json {
  content: Content[];
  type: string;
}

export interface Content {
  attrs: Attrs;
  content: Content2[];
  type: string;
}

export interface Attrs {
  textAlign: string;
}

export interface Content2 {
  text: string;
  type: string;
}
