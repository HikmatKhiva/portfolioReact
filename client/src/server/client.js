import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
export const client = SanityClient({
    projectId: '94zea0li',
    dataset: 'production',
    apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
    ignoreBrowserTokenWarning: true,
    token: 'skPxrMND8ihzmzpmBH7GjYbp9a7guzNUaG3an69YOaZ8fzE9PCON7VXp3lD4PziooIUivqwn9LZqxBzfck49OskZrqE6ofaEe9Z7c5cZqjQKoxs1emJqd5taRvdv6dCaZHE8Ck3ExZeNGSSrsij8QsePr11aHFx4fjQWm8lIkFQ8Y8N38Dbt', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);