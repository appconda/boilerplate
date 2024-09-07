import { Button, Fragment, HStack, Heading, HeadingSizes, SecureField, Text, TextField, UIController, UINavigate, UIView, VStack, cLeading, useNavigate, useState } from "@tuval/forms";
import { useCreateAccount, useCreateEmailSession, useGetMe } from "@realmocean/sdk";

export class SignupController extends UIController {
    public override LoadView(): UIView {

        const { createAccount, isSuccess: isCreateAccountSuccess, isError: isCreateAccountError, error: createAccountError } = useCreateAccount('console');
        const { createEmailSession, isSuccess, isError, error } = useCreateEmailSession('console');
        
        const [userName, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const navigate = useNavigate();

        return (

            HStack(
                HStack().width('50%'),
                VStack({ alignment: cLeading, spacing: 10 })(
                    Heading('Sign up').size(HeadingSizes.LARGE),
                    Text('Name'),
                    TextField().onChange(e => setUserName(e)),
                    Text('Email'),
                    TextField().onChange(e => setEmail(e)),
                    Text('Password'),
                    SecureField().onChange(e => setPassword(e)),
                    Button(
                        Text('Signup')
                    ).width('100%')
                        .onClick(() => {
                            createAccount({
                                name: userName,
                                email: email,
                                password: password
                            }, () => {
                                createEmailSession({
                                    email: email,
                                    password: password
                                }, () => navigate('/main'))
                            })
                        }),
                    isError && Text(error?.message),
                    isSuccess && UINavigate('/main')
                ).width('50%').padding(100)
            )

        )
    }
}