import { type Category, NoneOption, Option } from "../types.d"
import { NONE_OPTION } from '../data/constants'
import { getResult } from "../logic/getResult"

export async function translate ({
  text,
  context,
  category,
  option
}: {
  text: string,
  context: string
  category: Category
  option: Option<Category> | NoneOption
}) {
  if (text.trim() === '') return ''
  if (option === NONE_OPTION) return text

  const prompt = `
    Modifica el siguiente texto según las instrucciones dadas. El resultado debe ser el texto modificado sin explicaciones adicionales. Ten en cuenta el siguiente contexto adicional: ${context}

    Texto original:
    ${text}

    Categoría: ${category}
    Opción: ${option}

    Texto modificado:
  `

  const result = await getResult({ prompt })

  return result
}
