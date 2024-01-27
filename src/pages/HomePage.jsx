import React from 'react'
import { Helmet } from 'react-helmet'
import { JsonLd } from 'react-schemaorg'

const metajson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "test",
    url: "https://example.com",
    logo: "https://example.com/logo.png",
  
}

const HomePage = () => {

    return (
        <>
        <div>
            <h1>test</h1>
            <JsonLd data={metajson} />
            {/* <Helmet>
                <title>SEO</title>
                <meta name="description" content="ini deskripsi" />
                <meta name="judul" content="ini judul" />
                <meta name="author" content="ini author" />
                <meta name="keywords" content="ini keyword" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <link rel="" href="" />
            </Helmet> */}
        </div>
        </>
    )
}
export default HomePage