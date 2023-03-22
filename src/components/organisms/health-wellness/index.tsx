import { HealthWellnessHeading, HealthWellnessBanner } from "@/components";

export const HealthWellness = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-10">
            <HealthWellnessHeading />
            <HealthWellnessBanner />
        </section>
    );
};
