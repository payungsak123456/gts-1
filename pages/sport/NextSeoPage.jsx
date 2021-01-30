import { NextSeo } from "next-seo";
import Head from "next/head";

export default function NextSeoPage() {
    return (
        <>
            <NextSeo
                title="GTS GOLD 168 - SPORT"
                description="GTS GOLD 168 SPORT BETTING AND CASINO ONLINE"
                canonical="https://gtsgold168.com/sport"
                openGraph={{
                    url: "https://gtsgold168.com/sport",
                    title: "GTS GOLD 168 - SPORT",
                    description: "GTS GOLD 168 SPORT BETTING AND CASINO ONLINE",
                    images: [
                        {
                            url: "https://image.freepik.com/free-vector/casino-poker-card-design_91128-228.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                        },
                        {
                            url: "https://media.istockphoto.com/photos/casino-winner-and-loser-picture-id471883911?k=6&m=471883911&s=170667a&w=0&h=nDfoI2eyhsTeb_GPfWyHhFmyNKnBrb5xeixSdsqG7GA=",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                        },
                        { url: "https://graphicriver.img.customer.envatousercontent.com/files/313208802/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=598e5b417990648e53ce27ea9568258f" },
                        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPhr_5idVJdh_H8mChq1c8mJw6wnvoaUQ_A&usqp=CAU" },
                    ],
                }}
            />
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="forntEnd-Developer" content="Mamunur Rashid" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title> GTS GOLD 168 - SPORT </title>
                <link
                    rel="shortcut icon"
                    href="/assets/images/favicon.ico"
                    type="image/x-icon"
                />
            </Head>

        </>
    );
}
