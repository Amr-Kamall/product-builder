import { IProduct } from "../interfaces";
import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";
import { txtSlice } from "../utils/functions";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  index: number;
  setIndexOfProductToEdit: (value: number) => void;
  setProducts: (products: IProduct[]) => void; // Updated type
  products: IProduct[]; // Updated type
  openConfirm: () => void;
  setProductToRemove: (product:IProduct) => void;
}

const ProductCart = ({
  product,
  setProductToEdit,
  openEditModal,
  index,
  setIndexOfProductToEdit,
  openConfirm,
  setProductToRemove,
}: IProps) => {
  const { title, description, imageUrl, price, colors, category } = product;

  const handleEditProduct = () => {
    setIndexOfProductToEdit(index);
    setProductToEdit(product);
    openEditModal();
  };

  const handleOpenConfirmForRemove = () => {
    openConfirm();
    setProductToRemove(product);
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto  w-[100%] rounded-md border min-h-[400px] border-gray-300 py-2 px-2 flex gap-2 flex-col">
      <ProductImage
        className="rounded-md bg-red-500 max-w-full max-h-[200px] object-cover"
        alt="product-img"
        src={imageUrl}
      />
      <p>{title}</p>
      <p className="flex flex-wrap text-orange">{txtSlice(description)}</p>

      <div className="flex space-x-2">
        {colors.map((col) => (
          <span
            key={col}
            className={`rounded-full  w-5 h-5 cursor-pointer  `}
            style={{ background: col }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-md font-semibold">${price}</span>
        <img
          className="rounded-full w-10 h-10 object-cover"
          alt={category.name}
          src={category.imageUrl}
        />
      </div>
      <div className="flex justify-between gap-2 text-white items-center">
        <Button
          className="bg-indigo-600 w-full px-4 py-1"
          onClick={handleEditProduct}
        >
          EDIT
        </Button>
        <Button
          onClick={handleOpenConfirmForRemove}
          className="bg-red-700 px-4 w-full py-1"
        >
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
