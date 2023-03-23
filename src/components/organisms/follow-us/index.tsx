import { FollowUsHeading, FollowUsSocialMedia } from "@/components";

export const FollowUs = () => {
    return (
        <section className="min-h-[100px] h-full w-full px-6 py-6 flex items-center lg:px-0 lg:py-0 bg-secondary">
            <div className="h-full w-full max-w-4xl mx-auto flex items-center justify-between">
                <FollowUsHeading />
                <FollowUsSocialMedia />
            </div>
        </section>
    );
};
