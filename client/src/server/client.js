import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
export const client = SanityClient({
    projectId: '94zea0li',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    ignoreBrowserTokenWarning: true,
    token: 'skbzuP0QYLLps3DB85y9aDfVCrOicK7jn1Y3tQQBjZnCTKYdthYR44UVTHQg8RGEP84FOr7TeIrM60D4vA2DDRyZd63DEKzJhBItZ0Gf3N3VUe9OEyiCNKlNOh4b0Ndp8cRf6ITfoR7GA7f6WTCmwMsDoEkarrgEFxqY0tXIFbkIP7kvbK5f', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);