export interface Exhibition {
    name: string
    artworks: Artwork[]
}

export interface Artwork{
    id: string
    title: string
    imageURL: string
    description: string
    location: string
    websiteURL: string
}
