# Desc: Checks for mobs with specific name and silences them
#
# Called by: silence_mobs:detect (adv)

execute as @e[name="silence me", distance=..16, sort=nearest, limit=1] run function silence_mobs:apply
execute as @e[name="Silence me", distance=..16, sort=nearest, limit=1] run function silence_mobs:apply
execute as @e[name="silence_me", distance=..16, sort=nearest, limit=1] run function silence_mobs:apply
execute as @e[name="Silence Me", distance=..16, sort=nearest, limit=1] run function silence_mobs:apply

advancement revoke @s only silence_mobs:detect
