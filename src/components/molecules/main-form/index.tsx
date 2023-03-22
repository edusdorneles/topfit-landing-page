import { Input, Button } from "@/components";

export const MainForm = () => {
    return (
        <div className="w-full">
            <div className="p-5 rounded-md bg-primary h-full shadow-md">
                <h2 className="text-white text-xl mb-5">AGENDE SEU HORÁRIO</h2>

                <form className="flex flex-col gap-3">
                    <Input type="text" placeholder="Nome:" />
                    <Input type="text" placeholder="E-mail:" />
                    <Input type="text" placeholder="Telefone:" />
                    <Button type="submit">AGENDAR</Button>
                </form>
            </div>
        </div>
    );
};
