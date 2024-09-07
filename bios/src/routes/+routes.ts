import { Text, UIController, UIRoute, UIRouteOutlet, UIRoutes, UIView } from "@tuval/forms"
import { LoginController } from "./@/login/+controller"
import { SignupController } from "./@/signup/+controller"
import { HomeController } from "./@/*/+controller"
import { LayoutController } from "./@/+controller"
import { SetupController } from "./@/setup/+controller"


class KontDrakula extends UIController {
    LoadView(): UIView {
        return (
            UIRouteOutlet().width('100%').height('100%')
        )
    }
}
class AddController extends UIController {
    LoadView(): UIView {
        return (
            Text('asdfdf')
        )
    }
}
export const Routes = () => {
    return (
        UIRoutes(
            UIRoute('/@', LayoutController).children(
                 UIRoute('*', HomeController),
                 UIRoute('setup', SetupController),
            ),
           
            UIRoute('/login', LoginController),
            UIRoute('/signup', SignupController),
            UIRoute('/logout', LoginController),
            
        ) 
    )
}