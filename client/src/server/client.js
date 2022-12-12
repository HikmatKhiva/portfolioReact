import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
export const client = SanityClient({
    projectId: '', // here project id
    dataset: '', // here dataset
    apiVersion: '2021-08-31', // use current UTC date - see "specifying API version"!
    ignoreBrowserTokenWarning: true, // ignore browser token warning
    token: '', // here token
    useCdn: true, // `false` if you want to ensure fresh data
})
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);