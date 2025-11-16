ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event

  // Function to open website
  function websiteCommand(player) {
    player.tell(
      Text.aqua({
        underlined: true,
        text: 'Click here to open the Create: Genesis SMP website.',
        click: { action: 'open_url', value: 'https://genesis.centralhosting.au' }
      })
    )
    return 15
  }

  // Function to open GitHub issue tracker
  function issuesCommand(player) {
    player.tell(
      Text.aqua({
        underlined: true,
        text: 'Click here to open the Create: Genesis issue tracker.',
        click: { action: 'open_url', value: 'https://github.com/SageofTurtles/create-genesis-modpack/issues' }
      })
    )
    return 15
  }

  // Function to join Discord
  function discordCommand(player) {
    player.tell(
      Text.aqua({
        underlined: true,
        text: 'Click here to join the Create: Genesis SMP discord.',
        click: { action: 'open_url', value: 'https://discord.gg/PckFfRcuK6' }
      })
    )
    return 15
  }

  // Function to open Ko-fi page
  function supportCommand(player) {
    player.tell(
      Text.aqua({
        underlined: true,
        text: 'Click here to support us on Ko-fi!',
        click: { action: 'open_url', value: 'https://ko-fi.com/sageofturtles' }
      })
    )
    return 15
  }

  // Register commands
  event.register(Commands.literal('website')
    .requires(source => source.hasPermission(0))
    .executes(ctx => websiteCommand(ctx.source.player))
  )

  event.register(Commands.literal('issues')
    .requires(source => source.hasPermission(0))
    .executes(ctx => issuesCommand(ctx.source.player))
  )

  event.register(Commands.literal('discord')
    .requires(source => source.hasPermission(0))
    .executes(ctx => discordCommand(ctx.source.player))
  )

  event.register(Commands.literal('support-us')
    .requires(source => source.hasPermission(0))
    .executes(ctx => supportCommand(ctx.source.player))
  )
})
