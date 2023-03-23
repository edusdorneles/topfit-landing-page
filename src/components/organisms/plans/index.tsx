import { PlansHeading, PlansCards } from "@/components";

export const Plans = () => {
    return (
        <section className="my-20 min-h-[40vh] h-full w-full flex justify-center max-w-4xl mx-auto gap-10 items-center flex-col px-6 lg:px-0">
            <PlansHeading />
            <PlansCards />
        </section>
    );
};
