import { Button, Fragment, HStack, SecureField, Text, TextField, UIController, UIImage, UINavigate, UIView, VStack, cLeading, useNavigate, useState } from "@tuval/forms";
import { useCreateEmailSession, useCreateTeam, useGetMe } from "@realmocean/sdk";
export class LoginController extends UIController {
    public override LoadView(): UIView {

        const navigate = useNavigate();

        const { me, isLoading, isError: isAccountGetError } = useGetMe('console');

        const { createEmailSession, isSuccess, isError, error } = useCreateEmailSession('console');
       
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        return (
            isLoading ? Fragment() :
                me != null ? UINavigate('/main') :
                    HStack(
                        HStack(
                            UIImage('/images/login_image.webp')
                        ).width('50%'),
                        VStack({ alignment: cLeading, spacing: 10 })(
                            Text('Email').fontSize(16),
                            TextField().fontSize(16).padding(10).onChange(e => setEmail(e)),
                            Text('Password').fontSize(16),
                            SecureField().fontSize(16).padding(10).onChange(e => setPassword(e)),
                            VStack({ spacing: 10 })(
                                Button(
                                    Text('Login')
                                ).width('50%')
                                    .onClick(() => {
                                        createEmailSession({
                                            email: email,
                                            password: password
                                        }, () => {
                                            navigate('/main')
                                        })
                                    }),
                                Text('or'),
                                Button(
                                    Text('SignUp')
                                ).width('50%')
                                    .onClick(() => {
                                        navigate('/signup');
                                    })
                            ).height(),
                            isError && Text(error?.message),
                            isSuccess && UINavigate('/main')
                        ).width('50%').padding(100)
                    )

        )
    }
}