import { PlanCard } from "@/components";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { FaTimes, FaCheck } from "react-icons/fa";

export const PlansCards = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <PlanCard
                secondary
                icon={<MdOutlineEmojiPeople size={36} color="#FFF" />}
                title="FITNESS"
                qualities={
                    <ul className="text-white list-inside list-disc">
                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} /> Acesso ilimitado à academia
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Acompanhamento nutricional
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Acesso às aulas coletivas
                        </li>

                        <li className="text-sm flex items-center gap-2 line-through">
                            <FaTimes size={10} />
                            Estacionamento privativo
                        </li>

                        <li className="text-sm flex items-center gap-2 line-through">
                            <FaTimes size={10} /> Aulas exclusivas
                        </li>

                        <li className="text-sm flex items-center gap-2 line-through">
                            <FaTimes size={10} /> Lounge para descanso
                        </li>

                        <li className="text-sm flex items-center gap-2 line-through">
                            <FaTimes size={10} /> Personal trainer exclusivo
                        </li>

                        <li className="text-sm flex items-center gap-2 line-through">
                            <FaTimes size={10} /> Piscina climatizada
                        </li>

                        <li className="text-sm flex items-center gap-2 line-through">
                            <FaTimes size={10} /> Área de Spa e bem-estar
                        </li>
                    </ul>
                }
            />

            <PlanCard
                icon={<MdOutlineEmojiPeople size={36} color="#FFF" />}
                title="MASTER"
                qualities={
                    <ul className="text-white list-inside list-disc">
                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Acesso ilimitado à academia
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Acompanhamento nutricional
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Acesso às aulas coletivas
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Estacionamento privativo
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Aulas exclusivas
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Lounge para descanso
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Personal trainer exclusivo
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Piscina climatizada
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Área de Spa e bem-estar
                        </li>
                    </ul>
                }
            />

            <PlanCard
                secondary
                icon={<MdOutlineEmojiPeople size={36} color="#FFF" />}
                title="PREMIUM"
                qualities={
                    <ul
                        className="text-white
                     list-inside list-disc"
                    >
                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Acesso ilimitado à academia
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Acompanhamento nutricional
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Acesso às aulas coletivas
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Estacionamento privativo
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Aulas exclusivas
                        </li>

                        <li className="text-sm flex items-center gap-2">
                            <FaCheck size={10} />
                            Lounge para descanso
                        </li>

                        <li className="text-sm flex items-center gap-2 line-through">
                            <FaTimes size={10} />
                            Personal trainer exclusivo
                        </li>

                        <li className="text-sm flex items-center gap-2 line-through">
                            <FaTimes size={10} />
                            Piscina climatizada
                        </li>

                        <li className="text-sm flex items-center gap-2 line-through">
                            <FaTimes size={10} />
                            Área de Spa e bem-estar
                        </li>
                    </ul>
                }
            />
        </div>
    );
};
