import * as T from "./types";

export const Button = ({ children, ...rest }: T.Props) => {
    return (
        <button
            {...rest}
            className="w-full bg-secondary hover:bg-secondaryHover text-white rounded-md p-2 transition-all"
        >
            {children}
        </button>
    );
};
