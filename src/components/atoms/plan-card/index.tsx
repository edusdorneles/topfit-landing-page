import * as T from "./types";

export const PlanCard = ({ icon, title, secondary, qualities }: T.Props) => {
    return (
        <div className={`${secondary ? "bg-secondary" : "bg-primary"} rounded-md flex flex-col items-center p-7`}>
            {icon}
            <h4 className="text-white text-xl my-4">{title}</h4>
            <div className="flex flex-col gap-2">{qualities}</div>
        </div>
    );
};
