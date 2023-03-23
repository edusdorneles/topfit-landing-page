import { PlanCard } from "@/components";
import { MdOutlineEmojiPeople } from "react-icons/md";

export const PlansCards = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <PlanCard
                secondary
                icon={<MdOutlineEmojiPeople size={36} color="#FFF" />}
                title="FITNESS"
                qualities={
                    <ul className="text-white list-inside list-disc">
                        <li className="text-sm">Acesso ilimitado à academia</li>
                        <li className="text-sm">Acompanhamento nutricional</li>
                        <li className="text-sm">Acesso às aulas coletivas</li>
                        <li className="text-sm line-through">Estacionamento privativo</li>
                        <li className="text-sm line-through">Aulas exclusivas</li>
                        <li className="text-sm line-through">Lounge para descanso</li>
                        <li className="text-sm line-through">Personal trainer exclusivo</li>
                        <li className="text-sm line-through">Piscina climatizada</li>
                        <li className="text-sm line-through">Área de Spa e bem-estar</li>
                    </ul>
                }
            />

            <PlanCard
                icon={<MdOutlineEmojiPeople size={36} color="#FFF" />}
                title="MASTER"
                qualities={
                    <ul className="text-white list-inside list-disc">
                        <li className="text-sm">Acesso ilimitado à academia</li>
                        <li className="text-sm">Acompanhamento nutricional</li>
                        <li className="text-sm">Acesso às aulas coletivas</li>
                        <li className="text-sm">Estacionamento privativo</li>
                        <li className="text-sm">Aulas exclusivas</li>
                        <li className="text-sm">Lounge para descanso</li>
                        <li className="text-sm">Personal trainer exclusivo</li>
                        <li className="text-sm">Piscina climatizada</li>
                        <li className="text-sm">Área de Spa e bem-estar</li>
                    </ul>
                }
            />

            <PlanCard
                secondary
                icon={<MdOutlineEmojiPeople size={36} color="#FFF" />}
                title="PREMIUM"
                qualities={
                    <ul className="text-white list-inside list-disc">
                        <li className="text-sm">Acesso ilimitado à academia</li>
                        <li className="text-sm">Acompanhamento nutricional</li>
                        <li className="text-sm">Acesso às aulas coletivas</li>
                        <li className="text-sm">Estacionamento privativo</li>
                        <li className="text-sm">Aulas exclusivas</li>
                        <li className="text-sm">Lounge para descanso</li>
                        <li className="text-sm line-through">Personal trainer exclusivo</li>
                        <li className="text-sm line-through">Piscina climatizada</li>
                        <li className="text-sm line-through">Área de Spa e bem-estar</li>
                    </ul>
                }
            />
        </div>
    );
};
