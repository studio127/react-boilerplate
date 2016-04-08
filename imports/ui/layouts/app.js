import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session'; // XXX: SESSION
import ConnectionNotification from '../components/connection-notification';
import Tracker from 'tracker-component';


const CONNECTION_ISSUE_TIMEOUT = 5000;


export default class App extends Tracker.Component {
    constructor(props) {
        super(props);
        this.state = {
            showConnectionIssue: false
        };
        this.autorun(() => {
            this.setState({
                user: Meteor.user(),
                loading: false,
                connected: Meteor.status().connected
            });
        });


    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({showConnectionIssue: true});
        }, CONNECTION_ISSUE_TIMEOUT);
    }

    componentWillReceiveProps({loading, children}) {
        // redirect / to a list once lists are ready
        // if (!loading && !children) {
        //     const list = Lists.findOne();
        //     this.context.router.replace(`/lists/${ list._id }`);
        // }
    }


    logout() {
        Meteor.logout();
    }


    render() {
        const {showConnectionIssue, connected, loading, user} = this.state;
        const {children, location} = this.props;

        // clone route components with keys so that they can
        // have transitions
        const clonedChildren = children && React.cloneElement(children, {
                key: location.pathname,
            });

        return (
            <div id="layout-flexbox" className="app">
                <header id="header">
                    {showConnectionIssue && !connected
                        ? <ConnectionNotification/>
                        : null}
                    <h1>header</h1>
                </header>
                <div className="content-area">
                    <nav id="nav">
                        <h3>nav</h3>
                    </nav>
                    <aside id="subnav">
                        <h3>aside</h3>
                    </aside>
                    <main id="main">
                        <h1>Studio 127 simple starter</h1>
                    </main>
                </div>
                <footer id="footer">
                    <h3>footer</h3>
                </footer>

            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element, // matched child route component
    location: React.PropTypes.object,  // current router location
    params: React.PropTypes.object,    // parameters of the current route
};

App.contextTypes = {
    router: React.PropTypes.object,
};