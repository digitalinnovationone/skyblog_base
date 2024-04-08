import { News } from "@/interfaces/news";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Details() {
  const { id } = useRouter().query;
  const [newFounded, setNewFounded] = useState<News | null>(null);

  function getNews() {
    const newsString = localStorage.getItem("news");
    const news = newsString ? JSON.parse(newsString) : [];

    const newFounded = news.find((item: News) => item.id === Number(id));
    setNewFounded(newFounded);
  }

  useEffect(() => {
    getNews();
  }, [id]);

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white  antialiased relative">
      <Link href={`/`} passHref className="absolute start-7 top-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 text-black hover:text-gray-600"
        >
          <path
            fillRule="evenodd"
            d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src={newFounded?.author.imageUrl}
                  alt="Jese Leos"
                />
                <div>
                  <p rel="author" className="text-xl font-bold text-gray-900 ">
                    {newFounded?.author.name}
                  </p>
                  <p className="text-base text-gray-500 ">
                    {newFounded?.author.role}
                  </p>
                  <div className="text-base text-gray-500 ">
                    <time
                      dateTime={newFounded?.datetime}
                      title="February 8th, 2022"
                    >
                      {newFounded?.date}
                    </time>
                  </div>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              {newFounded?.title}
            </h1>
            <figure>
              <img
                src={newFounded?.imageUrl}
                alt=""
                className="w-full h-96 object-cover rounded-lg"
              />
              <figcaption>Image for text</figcaption>
            </figure>
          </header>
          <section className="mb-8 not-format">
            <p className="mb-4 text-lg leading-relaxed text-gray-700 ">
              {newFounded?.content}
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
