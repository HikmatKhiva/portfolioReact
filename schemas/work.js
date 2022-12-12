export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'TopTitle',
            type: 'string',
            validation: Rule => Rule.required(0).min(5).max(15).error('Please Enter a valid work Title'),
        },
        {
            name: 'workTitle',
            title: 'WorkTitle',
            type: 'string',
            validation: Rule => Rule.required(0).min(5).max(20).error('Please Enter a valid work name'),
        },
        {
            name: 'urlProject',
            title: 'UrlProject',
            type: 'string',
        },
        {
            name: 'gitUrl',
            title: 'gitUrl',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'filterType',
            title: 'FilterType',
            type: 'array',
            of: [{ name: 'filter', title: 'Filter', type: 'string' }]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required().error('Please Upload an image'),
            options: {
                hotspot: true
            }
        }
    ]
}