ServerEvents.recipes(event => {
  event.remove({ id: /create_central_kitchen:crafting\/dough_(1|2|3|4)/ })
})