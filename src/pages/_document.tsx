import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <title>Academia TopFit</title>
                <meta
                    name="description"
                    content="Oferecemos treinamento pessoal com treinadores qualificados, aulas em grupo divertidas lideradas por instrutores experientes e acesso 24 horas a uma academia moderna com equipamentos de ponta."
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
