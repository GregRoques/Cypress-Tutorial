npm i cypress cypress-image-snapshot --save

#Cypress Image Snapshot

##Add to the following indexes:

###Cypress/Integration/plugins:

```
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
}
```

###Cypress/Integration/commands:
```
const { addMatchImageSnapshotCommand } = require('cypress-image-snapshot/command')
addMatchImageSnapshotCommand()
```

###Cypress/package.json:
