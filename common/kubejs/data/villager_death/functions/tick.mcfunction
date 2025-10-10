# Controls everything to do with Villager Death Messages

schedule function villager_death:tick 1t

execute as @e[type=item,tag=!villager_death.checked] run function villager_death:check_item
