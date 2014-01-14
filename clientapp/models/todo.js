var HumanModel = require('human-model');

module.exports = HumanModel.define({
  props: {
    id: ['number'],
    name: ['string', true, 'do something'],
    done: ['boolean', true, false]
  }
});
