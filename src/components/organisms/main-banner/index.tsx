import { MainHeading, MainForm } from "@/components";

export const MainBanner = () => {
    return (
        <section className="flex justify-center text-center min-h-[45vh] h-full bg-[url('/images/banner/main.jpg')] bg-bottom bg-no-repeat bg-cover">
            <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl w-full mx-auto gap-5 px-6 py-6 lg:px-0">
                <MainHeading />
                <MainForm />
            </div>
        </section>
    );
};
