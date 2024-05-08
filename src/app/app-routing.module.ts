import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";


const routes : Routes=[
    {
        path : '', 
        component :HomeComponent
    },
    {
        path : 'products',
         component :ProductsComponent
    },
    {
        path : 'users', 
        component : UsersComponent
    },
    {
        path : 'page-not-found', 
        component : PageNotFoundComponent
    },
    {
        path : '**',
        redirectTo : 'page-not-found'
    }
]

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports : [RouterModule]
})


export class AppRoutingModule{

}