import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { UserComponent } from "./shared/components/user/user.component";
import { EditUserComponent } from "./shared/components/edit-user/edit-user.component";
import { ProductFormComponent } from "./shared/components/products/product-form/product-form.component";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { FairDashboardComponent } from "./shared/components/fair-dashboard/fair-dashboard.component";
import { FairDetailsComponent } from "./shared/components/fair-dashboard/fair-details/fair-details.component";
import { AuthGaurd } from "./shared/services/auth.gaurd";
import { AuthComponent } from "./shared/components/auth/auth.component";
import { UserRoleGuard } from "./shared/services/user-role.guard";


const routes : Routes=[
    {
        path : '', 
        component :AuthComponent//log
    },
    {
        path : 'home', 
        component :HomeComponent,
        canActivate:[AuthGaurd]

    },
    {
        path : 'products',
         component :ProductsComponent,
         canActivate:[AuthGaurd,UserRoleGuard],
         data : {
            userRole : ['buyer','admin','sa']
         },
         canActivateChild:[AuthGaurd],
         children :[
            {
        path : 'addproduct',
         component :ProductFormComponent
    },
    {
        path : ':productId',
         component :ProductComponent
    },
    {
        path : ':productId/edit',
         component :ProductFormComponent
    }
         ]
    },
    
    {
        path : 'users', 
        canActivate:[AuthGaurd,UserRoleGuard],
        component : UsersComponent,
        data : {
            userRole : ['admin','sa']
         },
        children :[
            {
                path : 'addUser', 
                component :EditUserComponent
            },
            {
                path : ':userId', 
                component :UserComponent
            },
            {
                path : ':userId/edit', 
                component :EditUserComponent
            }
        ]
    },
    {
        path : "fairs",
        canActivate:[AuthGaurd,UserRoleGuard],
        component:FairDashboardComponent,
        data : {
            userRole : ['sa']
         },
        children :[
            {
                path : ':fairId',
                component:FairDetailsComponent
            }
        ]
    },
    {
        path : 'page-not-found', 
        component : PageNotFoundComponent,
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