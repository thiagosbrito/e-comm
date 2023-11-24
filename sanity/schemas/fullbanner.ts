export default {
    name: 'fullbanner',
    type: 'document',
    title: 'Featured Products',
    fields: [
        { name: 'title', type: 'string', title: 'Fullbanner Title' },
        { name: 'description', type: 'string', title: 'Fullbanner Description' },
        { name: 'image', type: 'image', title: 'Fullbanner Image'},
        { name: 'link', type: 'reference', title: 'Link', to: [{type: 'product'}] },
        { name: 'active', type: 'boolean', title: 'Active'},
        { name: 'title_color', type: 'color', title: 'Title\'s color' },
        { name: 'description_color', type: 'color', title: 'Description\'s color' }
    ],
  }