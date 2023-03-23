import { Quality, Button } from "@/components";

export const QualitiesList = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 mb-5">
                <Quality title="Equipamentos modernos" />
                <Quality title="Ambiente organizado" />
                <Quality title="Instrutores qualificados" />
                <Quality title="Acesso conveniente" />
                <Quality title="Variedade de serviços" />
                <Quality title="Preços justos" />
                <Quality title="Ambiente amigável" />
                <Quality title="Comunidade de apoio" />
            </div>

            <Button className="px-16 py-2">ENTRAR EM CONTATO</Button>
        </>
    );
};
