import { concat, List, shuffle } from "lodash";

export const categories = [
  {
    category: "technology",
    subcategories: [
      "Artificial Intelligence",
      "Virtual Reality",
      "Neural Networks",
      "Cloud Computing",
      "Blockchain Technology",
      "Internet of Things",
      "Cybersecurity",
      "Quantum Computing",
      "Machine Learning",
      "Advanced Robotics",
    ],
  },
  {
    category: "games",
    subcategories: [
      "Indie Games",
      "Action Games",
      "Strategy Games",
      "Adventure Games",
      "Open World Games",
      "RPG Games",
      "Sports Games",
      "Simulation Games",
      "Puzzle Games",
      "Horror Games",
    ],
  },
];

export function getRandomSubcategories() {
  let allSubcategories: any[] = [];
  categories.forEach(category => {
    allSubcategories = concat(allSubcategories, category.subcategories.map(subcategory => ({
      category: category.category,
      subcategory
    })));
  });

  const shuffledSubcategories = shuffle(allSubcategories);

  const selectedSubcategory = shuffledSubcategories[0];

  return {
    category: selectedSubcategory.category,
    subcategory: selectedSubcategory.subcategory
  };
}
