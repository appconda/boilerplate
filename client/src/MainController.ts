import { BiosController, UIView, useState } from "@tuval/forms";
import { Routes } from "./routes/+routes";

export class MainController extends BiosController {
    public override LoadBiosView(): UIView {
      

        return (
            Routes()
           
        
            /*  ScrollView({ axes: cVertical, alignment: cTopLeading })(
                ReactView(
                    <div>
                     
                        <button onClick={() => refreshToken()}>Open Picker</button>
                        <GoogleDrive token={token}></GoogleDrive>
                    </div>
                )
            )  */
        )
    }
}