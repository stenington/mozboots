var HumanModel = require('human-model');

module.exports = HumanModel.define({
  session: {
    loggedInUser: {
      type: 'string',
      required: true,
      default: null,
      allowNull: true
    },
    synced: ['boolean', true, false],
    personaLagMs: ['number', true, 0]
  },

  derived: {
    name: {
      deps: ['loggedInUser'],
      fn: function () {
        return this.loggedInUser || 'friend';
      }
    }
  }
});
