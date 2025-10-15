import type { searchParams } from "./ApiModels"

export interface SearchInputProps {
    inputSearchTerm: string
    setInputSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export interface SearchQueryFormProps {
    setCurrentFilters: React.Dispatch<React.SetStateAction<searchParams>>
    setShowSearchResults: React.Dispatch<React.SetStateAction<boolean>>
}