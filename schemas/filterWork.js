export default {
    name: 'filter',
    title: 'FilterWork',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ]
        }
    ]
}