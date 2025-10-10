export interface artworksData {
    attributes: attributesModel
    id: string
    links?: linksModel
    relationships?: any
    type?: string
}

interface attributesModel {
    '@admin': any
    category: any
    creation: any
    cumulation: any
    description: any
    identifier: any
    inscription: any
    language: any
    legal: any
    measurements: any
    multimedia: any
    name: nameModel[]
    summary: summaryModel
    title: any
}

interface nameModel {
    type: string
    value: string
    primary?: boolean
}

interface summaryModel{
    title: string
}

interface linksModel {
    self: string
}