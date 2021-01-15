import { NextSeo } from "next-seo";
import Head from "next/head";

export default function NextSeoPage() {
    return (
        <>
            <NextSeo
                title="Page Meta Title"
                description="This will be the page meta description"
                canonical="https://www.canonicalurl.ie/"
                openGraph={{
                    url: "https://www.canonicalurl.ie/",
                    title: "Open Graph Title",
                    description: "Open Graph Description",
                    images: [
                        {
                            url: "https://www.example.ie/og-image-01.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                        },
                        {
                            url: "https://www.example.ie/og-image-02.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                        },
                        { url: "https://www.example.ie/og-image-03.jpg" },
                        { url: "https://www.example.ie/og-image-04.jpg" },
                    ],
                }}
            />
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="forntEnd-Developer" content="Mamunur Rashid" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title> Dooplo - Gaming HTML Template</title>
                <link
                    rel="shortcut icon"
                    href="assets/images/favicon.png"
                    type="image/x-icon"
                />
            </Head>

        </>
    );
}
