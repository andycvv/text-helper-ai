import { useReducer } from "react"
import { type Category, type Action, type State, type Option } from "../types"
import { NONE_OPTION } from "../data/constants"

const initialState: State = {
  text: '',
  context: '',
  loading: false,
  filters: {
    category: 'correction',
    option: 'none'
  }
}


function reducer (state: State, action: Action): State {
  const { type, payload } = action

  if(type === 'REFRESH_TEXT') {
    if(payload === state.text) {
      return {
        ...state,
        loading: false
      }
    }

    return {
      ...state,
      loading: false,
      text: payload
    }
  }

  if(type === 'CHANGE_CATEGORY') {
    if(payload === state.filters.category) return state
    if(state.text.trim() === '') return state

    return {
      ...state,
      loading: true,
      filters: {
        ...state.filters,
        category: payload,
      }
    }
  }

  if(type === 'SELECT_OPTION') {
    if(payload === state.filters.option) return state
    if(state.text.trim() === '') return state

    return {
      ...state,
      loading: true,
      filters: {
        ...state.filters,
        option: payload
      }
    }
  }

  if(type === 'CHANGE_CONTEXT') {
    const loading = state.filters.option !== NONE_OPTION

    return {
      ...state,
      loading,
      context: payload
    }
  }

  if(type === 'CHANGE_LOADING') {
    return {
      ...state,
      loading: payload
    }
  }

  return state
}

export const useStore = () => {
  const [{ text, loading, context, filters }, dispatch] = useReducer(reducer, initialState)

  const setText = (payload: string) => {
    dispatch({ type: "REFRESH_TEXT", payload })
  }

  const setCategory = (payload: Category) => {
    dispatch({ type: "CHANGE_CATEGORY", payload })
  }

  const setOption = (payload: Option<Category>) => {
    dispatch({ type: "SELECT_OPTION", payload })
  }

  const setContext = (payload: string) => {
    dispatch({ type: "CHANGE_CONTEXT", payload })
  }

  return {
    text,
    context,
    loading,
    filters,
    setText,
    setContext,
    setCategory,
    setOption,
  }
}