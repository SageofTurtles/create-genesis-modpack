# Controls everything to do with vwh

schedule function villager_workstation_highlights:tick 1t

scoreboard players enable @a vwh_findStation
execute at @a[scores={vwh_findStation=1..}] as @e[type=villager,distance=..5,sort=nearest,limit=1] at @s run function villager_workstation_highlights:show_station