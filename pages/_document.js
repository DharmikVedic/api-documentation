import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
class MyDocument extends Document {
    render() {
        return (
            <Html>
            <Head>
            <meta name="theme-color" content="#ffffff" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                            rel="stylesheet"/>

        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
        </Html>
    )
    }
}

export default MyDocument
