import { ServicesHeading, ServicesCards } from "@/components/molecules";

export const Services = () => {
    return (
        <section className="w-full container mx-auto flex flex-col justify-center items-center gap-10 my-20">
            <ServicesHeading />
            <ServicesCards />
        </section>
    );
};
