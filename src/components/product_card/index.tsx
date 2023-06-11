interface ProductCardProps {
  image: string;
  productName: string;
  brandName: string;
  price: number;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="bg-white w-[242px] h-[236px] rounded-lg border-2 border-black shadow-lg p-5 ">
      <img
        src={props.image}
        alt="image product"
        style={{
          width: "200px",
          height: "124px",
        }}
      />
      <div className="w-full mt-2">
        <p className="text-sm text-black">{props.productName}</p>
        <p className="text-sm text-black">{props.brandName}</p>
        <h6 className="text-xl font-bold text-black">R$ {props.price}</h6>
      </div>
    </div>
  );
}
