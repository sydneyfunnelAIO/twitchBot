import Head from 'next/head'

export default function Home() {
  return (
      <div className="container">
        <Head>
          <title>SydneyBot</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Welcome to <a href="https://www.twitch.tv/sydneyfunnelaio">Sydneybot</a>
          </h1>

          <p className="description">
            Created by SydneyfunnelAIO
          </p>

          <div className="grid">
              <a  className="card" href={"https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=ne63ji40tcy0jfrvc4qlofq0ryx1m8&redirect_uri=http://localhost/index&scope=user_read"}  >
                  <h3 >Go to DashBoard &rarr;</h3>

              </a>
            <a  className="card">
              <h3>About Me &rarr;</h3>
              <p>Working on Back-end systems via Nodejs / C# /Ruby</p>
            </a>

            <a  className="card">
              <h3>My Mission &rarr;</h3>
              <p>Everyone should create them own Bots via own Names. 100% customisable Bots</p>
            </a>


            <a

                className="card"
            >
              <h3>Contact &rarr;</h3>

              <p>
                sydneyfunnelallinone@gmail.com </p>
            </a>
          </div>
        </main>

        <footer>

        </footer>

        <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #8A16D9;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #8A16D9;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #8A16D9;
          border-color: #8A16D9;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
  )
}
