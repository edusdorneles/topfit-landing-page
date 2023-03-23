import * as T from "./types";

export const SocialMediaIcon = ({ link, icon }: T.Props) => {
    return (
        <a
            href={link}
            target="_blank"
            className="bg-primary hover:bg-primaryHover transition-all rounded-full h-10 w-10 flex items-center justify-center"
        >
            {icon}
        </a>
    );
};
