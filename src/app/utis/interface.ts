export interface Meme {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: Image,
    Description: string
  }
  
  export interface Image {
    data: Data
  }
  
  export interface Data {
    id: number
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
    curl: string,
  }
  
  export interface Formats {
    thumbnail: Thumbnail
  }
  
  export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
  }
  