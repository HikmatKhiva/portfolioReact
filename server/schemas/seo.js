export default {
    name: 'seo',
    title: 'Seo',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'googleVerificationCode',
            title: 'Google Verification Code',
            type: 'string',
        },
        {
            name: 'yandexVerificationCode',
            title: 'Yandex Verification Code',
            type: 'string',
        },
        {
            name: 'ogUrl',
            title: 'OgURL',
            type: 'string',
        },
        {
            name: 'ogType',
            title: 'OgType',
            type: 'string',
        },
        {
            name: 'ogTitle',
            title: 'OgTitle',
            type: 'string',
        },
        {
            name: 'ogDescription',
            title: 'OgDescription',
            type: 'string',
        }
    ]
}