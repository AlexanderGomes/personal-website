import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'



export const client = SanityClient({
  projectId: 'btiz5fln',
  dataset: 'production',
  useCdn: true,
  token: process.env.SANITY__TOKEN,
  apiVersion: '2022-05-22',
})


const builder = imageUrlBuilder(client)


export const urlFor = (source) => builder.image(source)