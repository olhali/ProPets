/*import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>HOME</p>
            </div>
        );
    }
}

export default Home;*/

/*
import React, { Component } from "react";
import { render } from "react-dom";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            showHideDemo1: false,
            showHideDemo2: false,
            showHideDemo3: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHideDemo1":
                this.setState({ showHideDemo1: !this.state.showHideDemo1 });
                break;
            case "showHideDemo2":
                this.setState({ showHideDemo2: !this.state.showHideDemo2 });
                break;
            case "showHideDemo3":
                this.setState({ showHideDemo3: !this.state.showHideDemo3 });
                break;
            default:
                this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        }
    }

    render() {
        const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
        return (
            <div>
                {showHideDemo1 && <Demo1 />}
                <hr />
                {showHideDemo2 && <Demo2 />}
                <hr />
                {showHideDemo3 && <Demo3 />}
                <hr />
                <div>
                    <button onClick={() => this.hideComponent("showHideDemo1")}>
                        Click to hide Demo1 component
                    </button>
                    <button onClick={() => this.hideComponent("showHideDemo2")}>
                        Click to hide Demo2 component
                    </button>
                    <button onClick={() => this.hideComponent("showHideDemo3")}>
                        Click to hide Demo3 component
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;
*/

/*import React, { Component } from "react";

class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return <div>This is Demo1 component</div>;
    }
}

export default Demo1;*/

import React, { Component } from "react";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            showHideFName: true,
            showHideLName: true
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        switch (name) {
            case "showHideFName":
                this.setState({ showHideFName: !this.state.showHideFName });
                break;
            case "showHideLName":
                this.setState({ showHideLName: !this.state.showHideLName });
                break;
            default:
                this.setState({ showHideLName: !this.state.showHideLName });
        }
    }

    render() {
        const { showHideFName, showHideLName } = this.state;
        return (
            <div>
                <table>
                    {showHideFName && (
                        <tr>
                            <td>First Name :</td>
                            <td>
                                <input type="text" id="fName" />
                            </td>
                        </tr>
                    )}
                    {showHideLName && (
                        <tr>
                            <td>Last Name :</td>
                            <td>
                                <input type="text" id="lName" />
                            </td>
                        </tr>
                    )}
                    {showHideFName && showHideLName && (
                        <tr>
                            <td>
                                <button>Submit</button>
                            </td>
                        </tr>
                    )}
                    <tr>
                        <td>
                            <button onClick={() => this.hideComponent("showHideFName")}>
                                Hide First Name
                            </button>
                        </td>
                        <td>
                            <button onClick={() => this.hideComponent("showHideLName")}>
                                Hide Last Name
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Home;