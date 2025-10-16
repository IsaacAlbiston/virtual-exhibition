export interface SearchParams {
    p: string
    pSize: string
    q: string
    museum: string
    after: string
    before: string
}

export interface ParamsVandA {
    page: string
    page_size: string
    q?: string
    year_made_from?: string
    year_made_to?: string
}