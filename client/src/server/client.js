import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
export const client = SanityClient({
    projectId: '', /* projectId  here */
    dataset: 'production', /* dataset here */
    apiVersion: '', /* exmple '2023-05-03' */ // use current UTC date - see "specifying API version"!
    ignoreBrowserTokenWarning: true, 
    token: '', /* token */
    useCdn: false, // `false` if you want to ensure fresh data
})
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);