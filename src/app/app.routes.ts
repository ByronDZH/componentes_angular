import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


export const routes: Routes = [
    { path: "", component: InicioComponent },
    { path: "registro", component: RegistroComponent },
    { path: "contacto", component: ContactoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }