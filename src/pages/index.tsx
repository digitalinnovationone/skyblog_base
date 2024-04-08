import { News } from "@/interfaces/news";
import Link from "next/link";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export default function Home() {
  const [news, setNews] = useState<News[]>([]);

  const mockNews = [
    {
      id: 1,
      title: "Title 1",
      content: faker.lorem.paragraph(50),
      description: faker.lorem.paragraph(),
      date: new Date().toDateString(),
      datetime: new Date().toISOString(),
      category: {
        title: "Category 1",
      },
      author: {
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
        imageUrl: faker.image.avatar(),
      },
      imageUrl: "https://i.imgur.com/tIbIBW9.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      content: faker.lorem.paragraph(50),
      description: faker.lorem.paragraph(),
      date: new Date().toDateString(),
      datetime: new Date().toISOString(),
      category: {
        title: "Category 2",
      },
      author: {
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
        imageUrl: faker.image.avatar(),
      },
      imageUrl: "https://i.imgur.com/EV9EmEV.jpg",
    },
    {
      id: 3,
      title: "Title 3",
      content: faker.lorem.paragraph(50),
      description: faker.lorem.paragraph(),
      date: new Date().toDateString(),
      datetime: new Date().toISOString(),
      category: {
        title: "Category 3",
      },
      author: {
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
        imageUrl: faker.image.avatar(),
      },
      imageUrl: "https://i.imgur.com/tIbIBW9.jpg",
    },
    {
      id: 4,
      title: "Title 4",
      content: faker.lorem.paragraph(50),
      description: faker.lorem.paragraph(),
      date: new Date().toDateString(),
      datetime: new Date().toISOString(),
      category: {
        title: "Category 4",
      },
      author: {
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
        imageUrl: faker.image.avatar(),
      },
      imageUrl: "https://i.imgur.com/EV9EmEV.jpg",
    },
    {
      id: 5,
      title: "Title 5",
      content: faker.lorem.paragraph(50),
      description: faker.lorem.paragraph(),
      date: new Date().toDateString(),
      datetime: new Date().toISOString(),
      category: {
        title: "Category 5",
      },
      author: {
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
        imageUrl: faker.image.avatar(),
      },
      imageUrl: "https://i.imgur.com/tIbIBW9.jpg",
    },
    {
      id: 6,
      title: "Title 6",
      content: faker.lorem.paragraph(50),
      description: faker.lorem.paragraph(),
      date: new Date().toDateString(),
      datetime: new Date().toISOString(),
      category: {
        title: "Category 6",
      },
      author: {
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
        imageUrl: faker.image.avatar(),
      },
      imageUrl: "https://i.imgur.com/EV9EmEV.jpg",
    },
  ];

  function handleNewNews() {
    setNews(mockNews);
  }

  useEffect(() => {
    handleNewNews();
    localStorage.setItem("news", JSON.stringify(mockNews));
  }, []);

  return (
    <div className="bg-white py-10 sm:py-10 h-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between w-full items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The SkyBlog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 pb-10 sm:pb-10">
              This blog is generated with AI. The news are fake, but the code is
              real.
            </p>
          </div>

          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleNewNews}
          >
            Create new news
          </button>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news?.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              passHref
              prefetch={false}
            >
              <section className="flex max-w-xl flex-col items-start justify-between cursor-pointer">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={item.datetime} className="text-gray-500">
                    {item.date}
                  </time>
                  <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {item.category.title}
                  </p>
                </div>
                <img
                  className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-lg"
                  src={item.imageUrl}
                  alt=""
                />
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {item.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={item.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {item.author.name}
                    </div>
                    <p className="text-gray-600">{item.author.role}</p>
                  </div>
                </div>
              </section>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
