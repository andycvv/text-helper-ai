import { CATEGORIES_OPTIONS } from "../data/constants"
import { type Option, type Category } from "../types.d"
import './CategoriesOptionsSection.css'

interface Props {
  category: Category
  setCategory: (category: Category) => void
  setOption: (option: Option<Category>) => void
}

export const CategoriesOptionsSection = ({ category, setCategory, setOption }: Props) => {
  const options = CATEGORIES_OPTIONS[category]

  const handleClick = (key: Option<Category>) => {
    setCategory(category)
    setOption(key)
  }

  return (
    <ul className="categories-options-section">
      {
        Object.entries(options).map(([key, label]) => (
          <li key={key}>
            <button
              onClick={() => handleClick(key as Option<Category>)}
              value={key}
            >
              {label}
            </button>
          </li>
        ))
      }
    </ul>
  )
}