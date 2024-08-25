export function productValidation(product: {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}) {
  //return object
  const errors: {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
  } = { title: "", description: "", imageUrl: "", price: "" };

  const imageUrlPattern = /^(ftp|http|https):\/\/[^ "]+$/.test(
    product.imageUrl
  );

  if (
    product.title.trim() === "" ||
    product.title.length < 5 ||
    product.title.length > 50
  ) {
    errors.title = "product title must between 10 and 50 characters!";
  }
  if (
    product.description.trim() === "" ||
    product.description.length < 10 ||
    product.description.length > 500
  ) {
    errors.description =
      "product description must between 10 and 500 characters!";
  }

  if (product.imageUrl.trim() === "" || !imageUrlPattern) {
    errors.imageUrl = "Valid Url is required";
  }

  if (isNaN(Number(product.price)) || product.price.trim() === "") {
    errors.price = "Valid price is required!";
  }
  return errors;
}
