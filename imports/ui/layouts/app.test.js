import {renderComponent, expect, TestUtils} from '../test-helpers'
import App from './app'
import '../mocha-setup'

if (Meteor.isClient) {
    describe('App', function () {

        it('shows the correct text', function () {
            const component = renderComponent(App);
            expect(component).to.contain('Studio 127 simple starter')
        });

    });

}