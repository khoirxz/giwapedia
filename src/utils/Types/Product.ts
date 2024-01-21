export interface AllProduct {
  allProduct: {
    edges: Edge[];
  };
}

interface Edge {
  node: Node;
}

interface Node {
  categories: Categories;
  id: string;
  price: number;
  title: string;
}

interface Categories {
  title: string;
}
