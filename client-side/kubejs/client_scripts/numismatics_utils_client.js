ItemEvents.tooltip(event => {
  event.addAdvanced('numismatics_utils:bank_meter', (item, advanced, text) => {
    text.add(1, [
      Text.darkAqua('Displays your account balance in the top-right corner of your screen when equipped.')
    ])
  })

  event.addAdvanced('numismatics_utils:portable_bank_terminal', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for details')
      ])
    } else {
      text.add(1, [
        Text.gold('Can be used like a '),
        Text.yellow('bank terminal'),
        Text.gold(' to access your account balance or convert currency.')
      ])
    }
  })
})