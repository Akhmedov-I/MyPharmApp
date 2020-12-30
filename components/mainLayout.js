import Head from 'next/head';


 export default function MainLayout({children, title}) {
    return (
        <div>
            <Head>
                <title> {title} | DocPharm</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            </Head>
            <main>
                {children}
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"> </script>
        </div>
    )
}