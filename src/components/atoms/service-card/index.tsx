import Image from "next/image";
import * as T from "./types";

export const ServiceCard = ({ image, title, description }: T.Props) => {
    return (
        <div className="flex flex-col items-center mb-10 lg:mb-0 last:mb-0">
            <Image src={image} alt={title} width={260} height={260} className="rounded-md" />
            <h4 className="text-primary text-xl text-center font-semibold mt-3 mb-1">{title}</h4>
            <p className="text-secondary text-center">{description}</p>
        </div>
    );
};
