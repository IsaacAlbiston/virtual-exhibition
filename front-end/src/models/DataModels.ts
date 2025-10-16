export interface ArtworksDataScienceMuseums {
    attributes: AttributesModel
    id: string
    links: LinksModel
    relationships?: any
    type?: string
}

interface AttributesModel {
    '@admin': any
    category: CategoryModel[]
    creation: any
    cumulation: any
    description: any
    identifier: any
    inscription: any
    language: any
    legal: any
    measurements: any
    multimedia: any
    name: NameModel[]
    summary: SummaryModel
    title: any
}

interface CategoryModel{
    museum: string
    name: string
    type: string
    value: string
}

interface NameModel {
    type: string
    value: string
    primary?: boolean
}

interface SummaryModel{
    title: string
}

interface LinksModel {
    self: string
}

export interface ArtworksDataVandA {
    accessionNumber: string
    availableToBook: boolean
    objectType: string
    systemNumber: string
    _currentLocation: CurrentLocationModel
    _images: ImagesModel
    _primaryDate: string
    _primaryImageId: string
    _primaryMaker: PrimaryMakerModel
    _primaryPlace: string
    _primaryTitle: string
    _warningTypes: any[]
}

interface CurrentLocationModel {
    detail: DetailModel
    displayName: string
    id: string
    onDisplay: boolean
    site: string
    type: string
}

interface DetailModel {
    free: string
    case: string
    shelf: string
    box: string
}

interface ImagesModel {
    imageResolution: string
    _iiif_image_base_url: string
    _iiif_presentation_url: string
    _primary_thumbnail: string
}

interface PrimaryMakerModel {
    association: string
    name: string
}