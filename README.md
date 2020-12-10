# 7reduxform
## Создание редакс форм

1.Создаем компонент, содержащий только форму с обработчиком onSubmit={props.handleSubmit}
```
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
```

2.Оборачиваем его в reduxForm, присваиваем новой константе
```
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
```

3.Включаем получившийся компонент в главный компонент и передаем ему через пропсы обработчик onSubmit
```
const Dialogs = (props) => {
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return <div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
        <Messages messages={props.message} />
    </div>
}
```