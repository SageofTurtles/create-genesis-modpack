// Remove default Create: Metalwork recipes
ServerEvents.recipes(event => {
    event.remove({ mod: 'createmetalwork' })
})

// Add item tags to Create: Ironworks crushed raw tin
ServerEvents.tags('item', event => {
    event.add('forge:dusts/tin', 'create_ironworks:crushed_raw_tin')
    event.add('forge:crushed_raw_tin', 'create_ironworks:crushed_raw_tin')
    event.add('create:crushed_raw_materials', 'create_ironworks:crushed_raw_tin')
    event.add('forge:tin_dusts', 'create_ironworks:crushed_raw_tin')
})
