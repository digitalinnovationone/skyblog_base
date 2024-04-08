export interface NewsProps {
  length: number;
  title: string;
  category: string;
  preview: string;
}

export interface News {
  id: number;
  title: string;
  content: string;
  description: string;
  date: string;
  datetime: string;
  category: Category;
  author: Author;
  imageUrl: string;
}

interface Author {
  name: string;
  role: string;
  imageUrl: string;
}

interface Category {
  title: string;
  category?: string;
}
