export default {
    name: 'certificate',
    title: "Certificate",
    type: 'document',
    fields: [
        {
            name: 'certificate',
            title: 'Certificate',
            type: 'file',
            options: {
                accept: '.pdf',
            }
        }
    ]
}