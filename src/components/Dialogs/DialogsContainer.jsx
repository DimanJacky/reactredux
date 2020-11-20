import React from "react";
import {connect} from "react-redux";
import {sendMessageCreator} from "../../redux/actions/actions";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    return <div>
        <Dialogs
            message={props.dialogsPage.messages}
            sendMessage={props.sendMessage}
        />
    </div>
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DialogsContainer);
