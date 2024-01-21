export interface AllCategory {
  allCategory: {
    edges: Edge[];
  };
}

interface Edge {
  node: Node;
}

interface Node {
  id: string;
  title: string;
}
