// @flow
import React, { Component } from 'react';
import './styles.scss';
import styles from './styles.module.css';
import Page from '../../layout/Page';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as classNames from 'classnames';

type Props = {}
type State = {}

class SignUp extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            submitted: false
        };
    }

    componentDidMount() {
        console.log(this.props);
    }

    submit = () => {
        alert('submitted');
    }

    render() {
        const formClasses = classNames("flex", "flex-column", "center-all", styles.form);

        return <Page pageId="sign-up" >
            <h1>Sign Up</h1>
            <form className={formClasses} role="form" aria-label="Sign Up Form">
                <label htmlFor="sign-up-username">
                    <span className="visuallyHidden">Username</span>
                    <TextField id="sign-up-username" type='text' placeholder="Username" fullWidth InputProps={{
                        className: 'text-field'
                    }} />
                </label>               <label htmlFor="sign-up-email">
                    <span className="visuallyHidden">Email</span>
                    <TextField id="sign-up-email" type='email' placeholder="Email" fullWidth />
                </label>
                <label htmlFor="sign-up-password">
                    <span className="visuallyHidden">Password</span>
                    <TextField id="sign-up-password" type='password' placeholder="Password" fullWidth />
                </label>
                <Button type="button" onClick={this.submit}>Next</Button>
            </form>
        </Page >
    }
}

export default SignUp;