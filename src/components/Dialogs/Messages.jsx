import React from "react";

const Messages = (props) => (
    <div>
        <p>Messages</p>
        {
            props.messages && props.messages.map((message, i) => {
                return (<p key={i}>
                    {message.message}
                </p>);
            })
        }
    </div>
)

export default Messages;
