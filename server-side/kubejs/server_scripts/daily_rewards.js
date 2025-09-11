// Defines 'date' to be used for both PlayerEvents
const date = 'BLANK'

PlayerEvents.loggedIn(event => {
  // Set player's time online back to 0 (necessary to set to 0 for new players)
  event.player.persistentData.timeOnline = 0
  
  // Set the current date as string
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  date = `${day}-${month}-${year}`
})

PlayerEvents.tick(event => {
  // Cancel further checks if reward has already been claimed today (to minimize lag)
  if (event.player.persistentData.lastReward === date) return

  // If no reward was claimed by the player yet today, add 1 tick to time online
  event.player.persistentData.timeOnline++

  // Give reward after 20 consecutive minutes online
  if (event.player.persistentData.timeOnline >= 24000) {
    event.server.runCommand(`numismatics pay ${event.player.username} 1 COG`)
    event.player.tell([
      { text: 'Thanks for playing, ', color: 'light_purple' },
      { text: event.player.username, color: 'aqua' },
      { text: '! You\'ve received ', color: 'light_purple' },
      { text: '1 cog', color: 'aqua' },
      { text: ' as your daily reward.', color: 'light_purple' }
    ])

    // Mark reward as claimed for today's date, and reset time online value
    event.player.persistentData.lastReward = date
    event.player.persistentData.timeOnline = 0
    console.log(`${event.player.username} received daily reward for ${event.player.persistentData.lastReward}.`)
  }
})