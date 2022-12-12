export default {
    name: 'mainTitle',
    title: 'mainTitle',
    type: 'document',
    fields: [
        {
            name: 'img',
            title: 'PersonImage',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'array',
            of: [
                {
                    name: 'text',
                    title: 'Text Your Self',
                    type: 'string'
                },
            ]
        }
    ]
}