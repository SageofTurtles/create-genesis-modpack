ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
  global.livinghurt(event)
})
/**
* 
* @param {Internal.LivingHurtEvent} event 
*/
global.livinghurt = event => {
  const { amount, source: { actual }, source } = event
  if (source.getType() != 'create.run_over') return
  event.amount = amount * 3
}