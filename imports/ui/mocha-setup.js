import { chai } from 'meteor/practicalmeteor:chai';
import chaiJquery from 'chai-jquery';

before(function () {
    this.jsdom = require('jsdom-global')();
    chaiJquery(chai, chai.util, $);

    // Build helper for simulating events
    $.fn.simulate = function (eventName, value) {
        if (value) {
            this.val(value);
        }
        TestUtils.Simulate[eventName](this[0]);
    }

});

after(function () {
    this.jsdom();
});