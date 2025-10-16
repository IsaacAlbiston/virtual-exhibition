import type { SearchParams } from "./ApiModels"

export interface SearchInputProps {
    inputSearchTerm: string
    setInputSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export interface SearchQueryFormProps {
    setCurrentFilters: React.Dispatch<React.SetStateAction<SearchParams>>
    setShowSearchResults: React.Dispatch<React.SetStateAction<boolean>>
}