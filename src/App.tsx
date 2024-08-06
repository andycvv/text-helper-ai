import '@fontsource/poppins'
import './App.css'
import { Title } from './components/Title'
import { CategoriesSection } from './components/CategoriesSection'
import { InputSection } from './components/InputSection'
import { useStore } from './hooks/useStore'
import { useEffect } from 'react'
import { translate } from './services/translate.ts'
import { ContextInput } from './components/ContextInput.tsx'
import { useDebounce } from './hooks/useDebounce.ts'
import { NONE_OPTION } from './data/constants.ts'

function App () {
  const {
    filters: {
      option,
      category
    },
    text,
    loading,
    context,
    setText,
    setContext,
    setCategory,
    setOption
  } = useStore()

  const debouncedContext = useDebounce(context, 500)
  const debouncedOption = useDebounce(option, 500)

  useEffect(() => {
    if (text.trim() === '') return
    if (option === NONE_OPTION) return

    translate({
      text, 
      category, 
      option: debouncedOption, 
      context: debouncedContext 
    })
      .then(result => {
        if (result == null) return
        setText(result)
      })
      .catch(() => {
        setText('Error!!!')
      })
  }, [debouncedContext, debouncedOption])

  return (
    <div id='app'>
      <Title />

      <div id='text-helper'>
        <CategoriesSection
          setCategory={setCategory}
          setOption={setOption}
        />
        <ContextInput
          setContext={setContext}
        />
        <InputSection
          text={text}
          setText={setText}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default App
