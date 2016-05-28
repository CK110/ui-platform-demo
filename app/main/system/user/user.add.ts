import {Component} from "@angular/core";
import {User} from "./ms/user";
import {PanelComponent} from "../../../components/panel/panel.component";

@Component({
    selector:"user-add",
    templateUrl: './app/main/system/user/user.add.html',
    directives:[PanelComponent]
})

export class UserAddComponent{
    model:User=new User();
    doSubmit(value:any){
        alert(this.modelInfo);
    }

    get modelInfo() { return JSON.stringify(this.model) }
}
