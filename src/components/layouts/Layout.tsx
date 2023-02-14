import Head from 'next/head';
import { BreadCrumbs, NavBar } from "../ui";

interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}
export const Layout = ({ children, title, pageDescription, imageFullUrl }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <div className="container">
        <header>
          <NavBar />
        </header>
        <main>
          <div className="container--content">
            <BreadCrumbs />
            <div className="content">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};
