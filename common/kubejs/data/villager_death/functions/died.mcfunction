# Controls when a villager has died

execute store result score @s vdm_x run data get entity @s Pos[0]
execute store result score @s vdm_y run data get entity @s Pos[1]
execute store result score @s vdm_z run data get entity @s Pos[2]
execute store result score @s vdm_dim run data get entity @p Dimension
scoreboard players add @s vdm_dim 0

execute as @s[scores={vdm_dim=20}] run tellraw @a ["§r§eA villager has died! §r( §6XYZ: ",{"score":{"name":"@s","objective":"vdm_x"}}," ",{"score":{"name":"@s","objective":"vdm_y"}}," ",{"score":{"name":"@s","objective":"vdm_z"}}," §r§ein §r§cThe Nether §r)"]
execute as @s[scores={vdm_dim=19}] run tellraw @a ["§r§eA villager has died! §r( §6XYZ: ",{"score":{"name":"@s","objective":"vdm_x"}}," ",{"score":{"name":"@s","objective":"vdm_y"}}," ",{"score":{"name":"@s","objective":"vdm_z"}}," §r§ein §r§aOverworld §r)"]
execute as @s[scores={vdm_dim=17}] run tellraw @a ["§r§eA villager has died! §r( §6XYZ: ",{"score":{"name":"@s","objective":"vdm_x"}}," ",{"score":{"name":"@s","objective":"vdm_y"}}," ",{"score":{"name":"@s","objective":"vdm_z"}}," §r§ein §r§dThe End §r)"]
execute as @s[scores={vdm_dim=0}] run tellraw @a ["§r§eA villager has died! §r( §6XYZ: ",{"score":{"name":"@s","objective":"vdm_x"}}," ",{"score":{"name":"@s","objective":"vdm_y"}}," ",{"score":{"name":"@s","objective":"vdm_z"}}," )"]

kill @e[tag=vdm_aec]
kill @s