import { useDeleteSession } from "@realmocean/sdk";
import { Fragment, Spinner, Text, UIController, UINavigate, UIView, VStack, useEffect, useNavigate, useState } from "@tuval/forms";


export class LogoutController extends UIController {
    public override LoadView(): UIView {

        const { deleteSession } = useDeleteSession('console');
        const navigate = useNavigate();


        useEffect(() => {
            deleteSession({ sessionId: 'current' }, () => window.location.href = '/login');
        }, []);

        return (
                VStack(
                    Spinner(),
                    Text('Logging out...')
                )
        )
    }
}