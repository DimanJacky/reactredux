import React from "react";
import {Field, reduxForm} from "redux-form";
import Messages from "./Messages";

const Dialogs = (props) => {
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return <div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
        <Messages messages={props.message} />
    </div>
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
