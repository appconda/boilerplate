import { useGetRealm, useListRealms } from "@realmocean/sdk";
import { Fragment, Text, UIController, UINavigate, UIView } from "@tuval/forms";

export class HomeController extends UIController {
    public override LoadView(): UIView {
        const { realms, isLoading } = useListRealms();
        //  console.log('Error -- :' + error?.code)
        return (
            isLoading ? Text('Loading...') :
                realms.length === 0 ? UINavigate('/setup') :
                    Text('Home')
        )
    }
}