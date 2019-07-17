npm i cypress cypress-image-snapshot --save

#Cypress Image Snapshot

##Add to the following indexes:

###Cypress/plugins/index:

```
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
}
```

###Cypress/support/commands:
```
const { addMatchImageSnapshotCommand } = require('cypress-image-snapshot/command')
addMatchImageSnapshotCommand()
```

#Cypress XPath (if desired)

npm i --save cypress-xpath

https://www.w3schools.com/xml/xpath_intro.asp

###Cypress/support/index:

require('cypress-xpath')
