import { Icategories, Iinputs, IProduct } from "../interfaces";
import { v4 as uuid } from "uuid";


export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Nike Shoes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "350",
    colors: ["#A31ACB", "#FF6E31", "#3C2A21", "#CB1C8D", "#645CBB"],
    category: {
      name: "Nike",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "120000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },

  {
    id: uuid(),
    title: "Nike Shoes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "350",
    colors: ["#A31ACB", "#FF6E31", "#3C2A21", "#CB1C8D"],
    category: {
      name: "Nike",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "120000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },

  {
    id: uuid(),
    title: "Ford Mustang: American Muscle",
    description:
      "The Ford Mustang is an iconic symbol of American muscle cars, offering power and performance in a stylish package.",
    imageUrl:
      "https://images.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "600000",
    colors: ["#FF0000", "#0000FF", "orange"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "BMW X5: Luxury SUV",
    description:
      "The BMW X5 combines luxury, comfort, and performance in an SUV that's perfect for both city driving and long journeys.",
    imageUrl:
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "800000",
    colors: ["#000000", "#FF5733", "#C70039"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
];
export const inputList: Iinputs[] = [
  { id: "title", name: "title", type: "text", label: "product title" },
  {
    id: "description",
    name: "description",
    type: "text",
    label: "product description",
  },
  { id: "image", name: "imageUrl", type: "text", label: "product image Url" },
  { id: "price", name: "price", type: "text", label: "product price" },
];

export const colors: string[] = [
  "#f4d03f",
  "#dc7633",
  "#c39bd3",
  "#DFFF00",
  "#DE3163",
  "#CCCCFF",
  "#00FF00",
  "#00FFFF",
  "#FF00FF",
  "#800080",
  "#515a5a ",
  "#E7264C",
  "#966527",
  "#641C24",
];

export const categories: Icategories[] = [
  {
    id: uuid(),
    name: "Nike",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: uuid(),
    name: "T-Shirt",
    imageUrl:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: uuid(),
    name: "Clothes",
    imageUrl:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: uuid(),
    name: "PC Desktop",
    imageUrl:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
  },
  {
    id: uuid(),
    name: "Furniture",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: uuid(),
    name: "Cars",
    imageUrl:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: uuid(),
    name: "Camera",
    imageUrl:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
