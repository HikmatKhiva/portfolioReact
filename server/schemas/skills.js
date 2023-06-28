export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string',
        },
        {
            name: 'tooltipColor',
            title: 'TooltipColor',
            type: 'string',
        },
        {
            name:'animatedCardBg',
            title: 'Animated Card Background',
            type: 'string',
        },
        {
            name:'skillExperience',
            title: 'Skill Experience',
            type:'string',
        },
        {
            name:'progressBg',
            title: 'Progress Background',
            type:'string',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}