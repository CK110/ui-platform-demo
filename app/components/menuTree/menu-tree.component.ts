import { Component, Input, OnInit } from '@angular/core';
import { Router,RouteParams,ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'zijin-menu-tree',
    directives:[ROUTER_DIRECTIVES,MenuTreeComponent],
    templateUrl: "./app/components/menuTree/template.html"

})
export class MenuTreeComponent implements OnInit{
    @Input('dataSource') dataSource: any[]
    constructor(private _router: Router) {
    }

    ngOnInit() {
        for(let i=0,length=this.dataSource.length;i<length;i++){
            if(this.dataSource[i].children){
                this.dataSource[i].isLeaf=false;
                this.dataSource[i].fold=!!this.dataSource[i].fold;
            }else{
                this.dataSource[i].isLeaf=true;
            }
        }
    }

    doNavigate(param){
        console.log("11");

        console.log(param);
        this._router.navigate(param);
    }
}
