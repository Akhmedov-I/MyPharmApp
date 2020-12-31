import Head from 'next/head';


 export default function CabinetLayout({children, title}) {
    return (
        <div>
            <Head>
                <title> {title} | DocPharm</title>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            </Head>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">DocPharm</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#">Рецепт <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#">Клиенты</a>
                  <a class="nav-item nav-link" href="#">Лекарства</a>
                  <a class="nav-item nav-link" href="#">История рецептов</a>
                </div>
              </div>
            </nav>
            {children}
            <script>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            </script>
        </div>
    )
}