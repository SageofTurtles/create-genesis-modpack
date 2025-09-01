# Shows the work station of this villager

effect give @s minecraft:glowing 10 1 true
summon minecraft:armor_stand ~ ~ ~ {Invisible:1b,Marker:1b,Tags:["vwh_armor_stand"]}

execute store result entity @e[type=armor_stand,tag=vwh_armor_stand,sort=nearest,limit=1] Pos[0] double 1.0 run data get entity @s Brain.memories."minecraft:job_site".value.pos[0]
execute store result entity @e[type=armor_stand,tag=vwh_armor_stand,sort=nearest,limit=1] Pos[1] double 1.0 run data get entity @s Brain.memories."minecraft:job_site".value.pos[1]
execute store result entity @e[type=armor_stand,tag=vwh_armor_stand,sort=nearest,limit=1] Pos[2] double 1.0 run data get entity @s Brain.memories."minecraft:job_site".value.pos[2]

execute as @e[type=armor_stand,tag=vwh_armor_stand,sort=nearest,limit=1] at @s align xyz run summon minecraft:area_effect_cloud ~0.5 ~1 ~0.5 {Particle:"heart",ReapplicationDelay:10,Radius:0.5f,RadiusPerTick:0f,RadiusOnUse:0f,Duration:200,Tags:["vwh_area_effect_cloud"]}
kill @e[type=armor_stand,tag=vwh_armor_stand,sort=nearest,limit=1]

execute store result score @s vwh_stationX run data get entity @s Brain.memories."minecraft:job_site".value.pos[0]
execute store result score @s vwh_stationY run data get entity @s Brain.memories."minecraft:job_site".value.pos[1]
execute store result score @s vwh_stationZ run data get entity @s Brain.memories."minecraft:job_site".value.pos[2]

execute unless score @s vwh_stationY matches 0 run tellraw @p ["",{"text":"The workstation is located at [XYZ]: ","color":"yellow"},{"score":{"name":"@s","objective":"vwh_stationX"}},{"text":" "},{"score":{"name":"@s","objective":"vwh_stationY"}},{"text":" "},{"score":{"name":"@s","objective":"vwh_stationZ"}}]
execute if score @s vwh_stationY matches 0 run tellraw @p ["",{"text":"This villager does not have a workstation!","color":"yellow"}]

scoreboard players set @a vwh_findStation 0