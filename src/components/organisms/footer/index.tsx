export const Footer = () => {
    return (
        <footer className="flex items-center justify-between bg-primary px-6 py-4 lg:px-0">
            <div className="max-w-4xl mx-auto w-full flex items-center justify-between flex-col-reverse md:flex-row gap-2 md:gap-0">
                <p className="text-white text-sm md:text-base">© 2023 TopFit. Todos os direitos reservados.</p>

                <p className="text-white text-sm md:text-base">
                    Feito por:{" "}
                    <a
                        target="_blank"
                        className="underline"
                        href="https://wa.me/5551993896982?text=Ol%C3%A1%2C%20vim%20para%20saber%20mais%20sobre%20os%20sites%20que%20voc%C3%AA%20desenvolve!"
                    >
                        Eduardo Dorneles
                    </a>
                </p>
            </div>
        </footer>
    );
};
