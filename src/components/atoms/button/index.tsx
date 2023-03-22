import * as T from "./types";

export const Button = ({ children, className, secondary, ...rest }: T.Props) => {
    return (
        <button
            {...rest}
            className={` ${
                secondary ? "bg-secondary hover:bg-secondaryHover" : "bg-primary hover:bg-primaryHover"
            } text-white rounded-md p-2 transition-all ${className}`}
        >
            {children}
        </button>
    );
};
