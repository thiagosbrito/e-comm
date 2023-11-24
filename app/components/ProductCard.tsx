import Image from "next/image";
import { SimplifiedProduct } from "../interface";
import Link from "next/link";

export default function ProductCard(props: SimplifiedProduct) {
  return (
    <div  className="group relative">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 hover:shadow-xl lg:h-80 transition duration-200">
        <Image
            src={props.imageUrl}
            alt="Product image"
            className="w-full h-full object-cover object-center lg:h-full lg:w-full"
            width={300}
            height={300}
        />
        </div>

        <div className="mt-4 flex justify-between">
        <div>
            <h3 className="text-sm text-gray-700">
            <Link href={`/product/${props.slug}`}>
                {props.name}
            </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
            {props.categoryName}
            </p>
        </div>
        <p className="text-sm font-medium text-gray-900">
            ${props.price}
        </p>
        </div>
    </div>
  )
}
