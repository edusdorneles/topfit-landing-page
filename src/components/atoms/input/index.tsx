import * as T from "./types";

export const Input = ({ ...rest }: T.Props) => {
    return <input className="outline-none rounded-md bg-white w-full p-2 shadow-md" {...rest} />;
};
