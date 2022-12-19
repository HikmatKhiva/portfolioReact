import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId: '94zea0li',
    dataset: 'production',
    apiVersion: '2021-08-31', // use current UTC date - see "specifying API version"!
    ignoreBrowserTokenWarning: true,
    token: 'ska9cCFvPwmi9HWNxHi4ZKnsfUzGGMcSqDjhjG6u4QztuVbch7s6MqenNG1sYcbQnJnBGlW2WlR1SNjjZ7Ukm7fHnUMWMPmJzVXYOg0v77nwCroZvgcFwS7T81toUNIX6FLIJ4UkJLPJ31IQnQvjvLONBUzXNHS15PMkkHoQrBbXKC4zQgly', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);