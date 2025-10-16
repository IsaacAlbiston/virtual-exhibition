export interface SearchInputProps {
    inputSearchTerm: string
    setInputSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export interface SearchQueryFormProps {
    setCurrentFilters: React.Dispatch<React.SetStateAction<currentFilters>>
    setShowSearchResults: React.Dispatch<React.SetStateAction<boolean>>
}

interface currentFilters {
    q: string
    museum: string
    after: string
    before: string
}