export default {
    name:'myCertificate',
    title:'My Certificate',
    type:'document',
    fields:[
        {
            name:'certificate',
            title:'Certificate',
            type:'array',
            of:[{type:'certificate',}]
        }
    ]
}