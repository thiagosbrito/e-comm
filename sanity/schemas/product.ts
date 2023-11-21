export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        { name: 'name', type: 'string', title: 'Product\'s name'},
        { name: 'description', type: 'text', title: 'Product\'s description'},
        { name: 'images', type: 'array', title: 'Product\'s images', of: [{ type: 'image'}]},
        { name: 'price', type: 'number', title: 'Product\'s price'},
        { name: 'slug', type: 'slug', title: 'Product\'s slug', options: { source: 'name'} },
        { name: 'category', type: 'reference', title: 'Product\'s catory', to: [{type: 'category'}]},
        { name: 'price_id', type: 'string', title: 'Stripe Price ID'}
    ]
}