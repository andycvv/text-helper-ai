import { CATEGORIES } from "../data/constants"
import { type Category, Option } from "../types.d"
import { CategoriesOptionsSection } from "./CategoriesOptionsSection"
import './CategoriesSection.css'

interface Props {
  setCategory: (category: Category) => void
  setOption: (option: Option<Category>) => void
  loading: boolean
}

export const CategoriesSection = ({ setCategory, setOption, loading }: Props) => {
  return (
    <ul className="categories-section">
      {
        Object.entries(CATEGORIES).map(([key, label]) => (
          <li key={key}>
            <h2>{label}</h2>
            <CategoriesOptionsSection
              category={key as Category}
              setCategory={setCategory}
              setOption={setOption}
              loading={loading}
            />
          </li>
        ))
      }
    </ul>
  )
}