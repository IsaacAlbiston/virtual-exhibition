export interface Exhibition {
    name: string
    artworks: Artwork[]
}

interface Artwork{
    title: string
    imageURL: string
    description: string
    location: string
    websiteURL: string
}
