interface Iprops {
  src: string;
  alt: string;
  className: string;
}
const ProductImage = ({ src, alt, className }: Iprops) => {
  return <img src={src} alt={alt} className={className} />;
};

export default ProductImage;
