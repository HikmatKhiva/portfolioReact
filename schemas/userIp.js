export default {
    name: 'userIp',
    title: 'UserIp',
    type: 'document',
    fields: [
        {
            name: 'country',
            title: 'Country',
            type: 'string',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'ip',
            title: 'IP',
            type: 'string',
        },
        {
            name: 'network',
            title: 'Network',
            type: 'string',
        },
        {
            name: 'latitude',
            title: 'Latitude',
            type: 'number',
            format: 'float'
        }, {
            name: 'longitude',
            title: 'Longitude',
            type: 'number',
            format: 'float'
        },
        {
            name: 'country_calling_code',
            title: 'Country calling code',
            type: 'string',
        }
    ]
}