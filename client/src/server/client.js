import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
export const client = SanityClient({
    projectId: '', // your sanity.io projectId
    dataset: 'production', // your sanity.io dataset
    apiVersion: '2023-05-03', // use current UTC date - see "specifying API version"!
    ignoreBrowserTokenWarning: true,
    token: '', // your sanity.io token or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);