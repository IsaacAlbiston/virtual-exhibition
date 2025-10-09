export interface SearchInputProps {
    inputSearchTerm: string
    setInputSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export interface SearchQueryFormProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}