import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductoComponent } from './pages/producto/producto.component';
// tslint:disable-next-line: variable-name
const app_routes: Routes = [
    {path: 'home', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item', component: ProductoComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{

}