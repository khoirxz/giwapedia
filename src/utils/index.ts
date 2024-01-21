import { AllCategory } from "./Types/Category";
import { AllProduct } from "./Types/Product";

export interface ContextContainerProps {
  products: AllProduct;
  setProducts: React.Dispatch<React.SetStateAction<AllProduct>>;
  categories: AllCategory;
  setCategories: React.Dispatch<React.SetStateAction<AllCategory>>;
  getAllProducts: () => Promise<void>;
  getAllCategory: () => Promise<void>;
}
