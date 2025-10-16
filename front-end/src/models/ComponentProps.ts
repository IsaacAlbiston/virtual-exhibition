import type { Artwork, Exhibition } from "./Exhibitions"

export interface SearchResultsProps{
    totalResults: number
    reformattedArtworks: Artwork[]
    exhibitions: Exhibition[]
    setExhibitions: React.Dispatch<React.SetStateAction<Exhibition[]>>
}

export interface ArtworkInfoCardProps{
    artwork: Artwork
    exhibitions: Exhibition[]
    setExhibitions: React.Dispatch<React.SetStateAction<Exhibition[]>>
}

export interface AddArtworkFormProps{
    artwork: Artwork
    exhibitions: Exhibition[]
    setExhibitions: React.Dispatch<React.SetStateAction<Exhibition[]>>
}

export interface ExhibitionDropdownProps{
    exhibitions: Exhibition[]
    inputExhibition: string
    setInputExhibition: React.Dispatch<React.SetStateAction<string>>
    setInputExhibitionIndex: React.Dispatch<React.SetStateAction<number>>
}

export interface NewExhibitionFormProps{
    setExhibitions: React.Dispatch<React.SetStateAction<Exhibition[]>>
}

export interface NameInputProps{
    inputName: string
    setInputName: React.Dispatch<React.SetStateAction<string>>
}

export interface ExhibitionListProps{
    exhibitions: Exhibition[]
}

export interface ExhibitionInfoCardProps{
    exhibition: Exhibition
    exhibitionIndex: number
}

export interface ArtworkListProps{
    artworks: Artwork[]
    exhibitionIndex: number
}

export interface ExhibitionArtworkCardProps{
    artwork: Artwork
    exhibitionIndex: number
}

export interface ArtworkPageInfoProps{
    artwork: Artwork
}

export interface BackButtonProps{
    previousPage: string
}

export interface MuseumDropdownProps{
    inputMuseum: string
    setInputMuseum: React.Dispatch<React.SetStateAction<string>>
}

export interface FormInputProps{
    inputString: string
    setInputString: React.Dispatch<React.SetStateAction<string>>
    inputLabel: string
}

export interface PageIndexParams {
    totalResults: number
    path: string
}