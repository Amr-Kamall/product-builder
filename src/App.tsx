import { useState } from "react";
import ProductCart from "./components/ProductCard";
import { categories, colors, inputList, productList } from "./data";
import "./index.css";
import Modal from "./ui/Modal";
import Button from "../src/ui/Button";
import { productValidation } from "./validation";
import ErrorMsg from "./ui/ErrorMsg";
import CircleColor from "./ui/CircleColor";
import Select from "./ui/SelectMenu";
import { IProduct } from "./interfaces";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuid } from "uuid";

function App() {
  const defaultProductObject = {
    id: uuid(),
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: { name: "", imageUrl: "" },
  };
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObject);
  const [productToRemove, setProductToRemove] =
    useState<IProduct>(defaultProductObject);
  const [indexOfProductToEdit, setIndexOfProductToEdit] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); //for select component
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  // handlers
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }

  function clear() {
    setProduct(defaultProductObject);
  }

  //for confirm
  function openConfirm() {
    setIsOpenConfirm(true);
  }

  function closeConfirm() {
    setIsOpenConfirm(false);
  }

  const handleRemoveItem = () => {
    // const newProducts = [...products];
    // newProducts.splice(index, 1);
    // setProducts(newProducts);
    console.log("amr kamal");
    const filtered = products.filter((pro) => pro.id !== productToRemove.id);
    setProducts(filtered);
    closeConfirm();
    toast("Product has been deleted", { icon: "👏" });
  };

  // handlers for editProducts
  function openEditModal() {
    setIsEditModalOpen(true);
  }
  function closeEditModal() {
    setIsEditModalOpen(false);
  }

  function clearEditModal() {
    setProductToEdit(defaultProductObject);
  }

  // add temp colors
  function handleAddTempColors(color: string) {
    const searchColor = tempColors.find((col) => col == color);

    if (searchColor === undefined) {
      setTempColors((prevColor) => [...prevColor, color]);
    } else {
      setTempColors((prev) => prev.filter((colorItem) => colorItem !== color));
    }
  }
  //event handler of each input
  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  //event handler of each input of editProduct
  const editProductEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  //handle submit for product Edit
  function handleSubmitEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = productValidation(productToEdit);
    // **check if any property has a value of "" && check of all properties have a value of ""

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      // console.log(errors);
      return;
    }
    //edit func here
    const updatedProducts = [...products];
    updatedProducts[indexOfProductToEdit] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
      category: selectedCategory,
    };
    console.log(productToEdit);
    setProducts(updatedProducts);

    setProductToEdit(defaultProductObject);
    setTempColors([]);
    closeEditModal();
  }

  // handle submit for add product
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = productValidation(product);
    // **check if any property has a value of "" && check of all properties have a value of ""

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      // console.log(errors);
      return;
    }
    setProducts((prev) => [
      ...prev,
      { ...product, colors: tempColors, category: selectedCategory },
    ]);
    setProduct(defaultProductObject);
    setTempColors([]);
    close();
  }

  // render
  const InputsList = inputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <input
        onChange={eventHandler}
        type="text"
        name={input.name}
        id={input.id}
        value={product[input.name]}
        className="border-2 border-gray-300 shadow-md p-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md text-md"
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  const InputsListToEdit = inputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <input
        onChange={editProductEventHandler}
        type="text"
        name={input.name}
        id={input.id}
        value={productToEdit[input.name]}
        className="border-2 border-gray-300 shadow-md p-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md text-md"
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  return (
    <main className="container mx-auto flex justify-center flex-col items-center py-10">
      <Button
        className="bg-indigo-600 w-[190px] text-white rounded-md px-4 py-2"
        onClick={open}
      >
        build a product
      </Button>
      <div className="grid sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4  py-7 px-3">
        {products?.map((product, index) => (
          <ProductCart
            setProductToRemove={setProductToRemove}
            products={products}
            setProducts={setProducts}
            key={product.id}
            product={product}
            setProductToEdit={setProductToEdit}
            openEditModal={openEditModal}
            index={index}
            setIndexOfProductToEdit={setIndexOfProductToEdit}
            openConfirm={openConfirm}
          />
        ))}
      </div>
      {/* edit modal */}
      <Modal
        isOpen={isEditModalOpen}
        close={closeEditModal}
        title="Edit Product"
      >
        <form className="space-y-2" onSubmit={handleSubmitEdit}>
          {InputsListToEdit}
          {/* color list */}

          <div className="flex flex-wrap py-1 gap-y-2">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                className="text-sm mr-2 rounded-md px-1"
                style={{ background: color }}
                key={color}
              >
                {color}
              </span>
            ))}
          </div>
          <p className="text-md">category</p>
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
            options={categories}
          />
          <div className="flex space-x-2 py-2 ">
            {colors.map((color) => (
              <CircleColor
                color={color}
                key={color}
                onClick={() => handleAddTempColors(color)}
              />
            ))}
          </div>

          <div className="flex items-center mt-5 space-x-3">
            <Button
              className="bg-indigo-700 w-full text-white rounded-md px-4 py-1"
              onClick={() => {}}
            >
              Submit
            </Button>
            <Button
              className="bg-slate-500 w-full text-white rounded-md px-4 py-1"
              onClick={clearEditModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* add modal */}
      <Modal isOpen={isOpen} close={close} title="Add Product">
        <form className="space-y-2" onSubmit={handleSubmit}>
          {InputsList}
          {/* color list */}
          {tempColors && (
            <div className="flex flex-wrap py-1 gap-y-2">
              {tempColors.map((color) => (
                <span
                  className="text-sm mr-2 rounded-md px-1"
                  style={{ background: color }}
                  key={color}
                >
                  {color}
                </span>
              ))}
            </div>
          )}
          <p className="text-md">category</p>

          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
            options={categories}
          />
          <div className="flex space-x-2 py-2 ">
            {colors.map((color) => (
              <CircleColor
                color={color}
                key={color}
                onClick={() => handleAddTempColors(color)}
              />
            ))}
          </div>

          <div className="flex items-center mt-5 space-x-3">
            <Button
              className="bg-indigo-700 w-full text-white rounded-md px-4 py-1"
              onClick={() => {}}
            >
              Submit
            </Button>
            <Button
              className="bg-slate-500 w-full text-white rounded-md px-4 py-1"
              onClick={clear}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* for confirm modal */}
      <>
        <Dialog
          open={isOpenConfirm}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={closeConfirm}
        >
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/15"
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle
                  as="h3"
                  className="font-medium capitalize text-black text-xl"
                >
                  are you sure you want to remove this product from your store
                </DialogTitle>
                <p className="mt-2 text-md text-[#AEB3BD]">
                  Deleting this product will remove it permenantly from your
                  inventory. Any associated data, sales history, and other
                  related information will also be deleted. Please make sure
                  this is the intended action.{" "}
                </p>
                <div className="mt-4 flex gap-4 flex-1 w-full">
                  <Button
                    className="text-center w-[50%] bg-[#c2344d] hover:bg-red-800 flex text-lg justify-center items-center gap-2 rounded-md py-1.5 px-3  font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={handleRemoveItem}
                  >
                    Yes, remove
                  </Button>
                  <Button
                    className="bg-[#F5F5FA] w-[50%]  hover:bg-gray-300 text-black p-2 rounded-md "
                    onClick={closeConfirm}
                  >
                    Cancel
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
        <Toaster position="top-center" reverseOrder={false} />
      </>
    </main>
  );
}

export default App;
