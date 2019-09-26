import {RouterModule, Routes} from "@angular/router";
import {UkmPage} from "./ukm.page";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: 'tabs',
        component: UkmPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: './home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: './profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/ukm/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/ukm/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class UkmRoutingModule {
}