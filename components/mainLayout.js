import Head from 'next/head';


 export default function MainLayout({children, title}) {
    return (
        <div>
            <Head>
                <title> {title} | DocPharm</title>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            </Head>
            {children}
            <script>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            </script>
        </div>
    )
}