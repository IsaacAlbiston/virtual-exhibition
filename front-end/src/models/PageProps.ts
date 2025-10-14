import type { Artwork, Exhibition } from "./Exhibitions"

export interface HomePageProps {
    exhibitions: Exhibition[]
    setExhibitions: React.Dispatch<React.SetStateAction<Exhibition[]>>
}

export interface NewExhibitionPageProps {
    exhibitions: Exhibition[]
    setExhibitions: React.Dispatch<React.SetStateAction<Exhibition[]>>
}

export interface ExhibitionsPageProps {
    exhibitions: Exhibition[]
}

export interface ArtworkPageProps {
    exhibitions: Exhibition[]
}