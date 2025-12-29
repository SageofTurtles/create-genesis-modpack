EntityJSEvents.modifyEntity(event => {
  event.modify("railways:conductor", builder => {
    builder.defineSyncedData(entity => {
      entity.addSyncedData("string", "Variant", "andesite_conductor")
    })
    builder.setTextureLocation(context => global.texture(context))
  })
})
/**
* 
* @param {Internal.ContextUtils$RendererModelContext} context 
*/
global.texture = context => {
  let { entity } = context
  if (entity.getSyncedData("Variant") == "copper_conductor") {
    return "railways:textures/entity/copper_conductor.png"
  }
  if (entity.getSyncedData("Variant") == "brass_conductor") {
    return "railways:textures/entity/brass_conductor.png"
  }
  if (entity.getSyncedData("Variant") == "railway_conductor") {
    return "railways:textures/entity/railway_conductor.png"
  }
  return null
}