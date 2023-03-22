export const HealthWellnessBanner = () => {
    return (
        <div className="min-h-[40vh] h-full bg-[url('/images/banner/saude-bem-estar.jpg')] bg-center bg-cover w-full flex justify-center items-center flex-col p-6 lg:px-0">
            <h3 className="text-center text-white text-3xl md:text-4xl font-bold mb-1">COMECE HOJE</h3>

            <p className="text-center text-white mt-2">
                Não há melhor momento do que o presente para começar a cuidar da sua saúde e bem-estar na academia.
            </p>

            <p className="text-center text-white mb-6">
                Começar na academia é um passo importante para alcançar seus objetivos de fitness e melhorar sua
                qualidade de vida.
            </p>

            <button className="rounded-full px-16 py-2 bg-primary text-white">Contato</button>
        </div>
    );
};
