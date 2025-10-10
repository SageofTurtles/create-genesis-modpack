tag @s add villager_death.checked

execute if data entity @s Item.tag.data.villager_death at @s run function villager_death:died
