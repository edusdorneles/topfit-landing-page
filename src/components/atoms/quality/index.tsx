import { AiOutlineCheckCircle } from "react-icons/ai";
import * as T from "./types";

export const Quality = ({ title }: T.Props) => {
    return (
        <p className="flex items-center gap-2 text-white text-xl font-semibold">
            <AiOutlineCheckCircle /> {title}
        </p>
    );
};
