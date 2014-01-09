var HumanModel = require('human-model');

module.exports = HumanModel.define({
  urlRoot: '/me',
  props: {
    accumulatedTime: ['number', true],
    thing: ['number', true]
  },
  session: {
    timeOnSite: ['number', true, 0],
    name: ['string', true, 'bud']
  }
});
