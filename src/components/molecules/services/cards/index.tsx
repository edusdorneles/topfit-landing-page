import { ServiceCard } from "@/components";

export const ServicesCards = () => {
    return (
        <div className="flex lg:gap-6 flex-col lg:flex-row justify-between max-w-4xl w-full px-6 lg:px-0">
            <ServiceCard
                image="/images/services/service-1.jpg"
                title="TERINAMENTO"
                description="Um treinador ajuda um indivíduo a alcançar seus objetivos de fitness com um programa personalizado."
            />

            <ServiceCard
                image="/images/services/service-2.jpg"
                title="GRUPO"
                description="Exercite-se com outras pessoas em aulas divertidas lideradas por um instrutor."
            />

            <ServiceCard
                image="/images/services/service-3.jpg"
                title="24 HORAS"
                description="Acesso a uma academia com equipamentos modernos a qualquer hora do dia ou da noite."
            />
        </div>
    );
};
