import type { ArtworksDataScienceMuseums, ArtworksDataVandA } from "./DataModels"

export interface pageIndexParams {
    itemsInfo: ArtworksDataScienceMuseums[]|ArtworksDataVandA[]
    path: string
}