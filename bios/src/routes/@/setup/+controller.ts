import { useDeleteSessions, useGetMe } from "@realmocean/sdk";
import { UIController, UIRouteOutlet, UIScene, UIView, DialogContainer, VStack, Fragment, UINavigate, Text, Button, useNavigate } from "@tuval/forms";

export class SetupController extends UIController {
    public BindRouterParams() {

    }

    public LoadView(): UIView {

        return (
           Text('Setup')

        )
    }
}