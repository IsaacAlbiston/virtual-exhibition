import type { Artwork, Exhibition } from "./Exhibitions"

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
}

export interface ExhibitionArtworkCardProps{
    artwork: Artwork
}