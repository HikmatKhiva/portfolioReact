import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url'
export const client = SanityClient({
    projectId: '',
    dataset: '',
    apiVersion: '', // use current UTC date - see "specifying API version"!
    ignoreBrowserTokenWarning: true,
    token: '', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);