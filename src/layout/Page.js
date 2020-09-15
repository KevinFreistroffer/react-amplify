// @flow
import React, { Component } from 'react';

type Props = {}
type State = {}

class Page extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            pageId: ''
        };
    }

    render() {
        return <div className="page" id={this.props.pageId != null ? this.props.pageId : ''}>
            {this.props.children}</div>
    }
}

export default Page;