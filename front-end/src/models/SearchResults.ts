import type { artworksData } from "./DataModels";

export interface SearchResultsProps {
    artworksInfo: artworksData[]
}

export interface ArtworkInfoCardProps {
    artwork: artworksData
}