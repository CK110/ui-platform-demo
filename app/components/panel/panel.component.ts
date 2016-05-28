import { Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'zijin-panel',
    directives:[],
    templateUrl: "./app/components/panel/template.html"
})
export class PanelComponent implements OnInit {
    @Input('title') title: string;

    @Input('width') width:string;
    @Input('height') height:string;

    @Input('collapsible')  collapsible:Boolean;
    @Input('collapsed')  collapsed:Boolean;


    display:string;

    constructor() {

    }

    ngOnInit() {
        if (this.collapsible==true) {
            this.collapsed=true;
        }


    }


    public test(collapsed){

        this.collapsed =!collapsed;

        this.display=this.collapsed ==true ? 'block' : 'none';


    }

}
