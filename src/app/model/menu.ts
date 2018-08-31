export class Menu{
    id_menu:any;
    name_menu:any;
    icon_menu:any;
    url_menu:any;
    list_menu_child:any;
    constructor(id_menu,name_menu,icon_menu,url_menu,list_menu_child)
    {
       this.id_menu= id_menu;
       this.name_menu= name_menu;
       this.icon_menu= icon_menu;
       this.url_menu=url_menu;
       this.list_menu_child=list_menu_child;
    }
}