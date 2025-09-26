PlayerEvents.loggedIn(event => {
  // Set the current date as string
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  const date = `${year}-${month}-${day}`

  // Save player login date as JSON file
  JsonIO.write(
    `latest_logins/${event.player.username}.json`,
    {
      player: event.player.username,
      last_login_date: date
    }
  )
})
