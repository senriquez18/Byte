import{ModuleWithProviders}from "@angular/core";
import{Routes, RouterModule}from "@angular/router"

import{CobrosAdicionalesComponent}from "./componets/cobros-adicionales/cobros-adicionales.component";
import{DiasInhabilesComponent}from "./componets/dias-inhabiles/dias-inhabiles.component";
import{InstitucionesCobrosAdicionalesComponent}from "./componets/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component";
import{MotivosDeAjustesComponent}from "./componets/motivos-de-ajustes/motivos-de-ajustes.component";
import { LimpiezaDeArchivosComponent } from './componets/limpieza-de-archivos/limpieza-de-archivos.component';
import { ProductosComponent } from './componets/productos/productos.component';

import { FormasDeDesembolsoComponent } from './componets/formas-de-desembolso/formas-de-desembolso.component';
import { MotivoDeReversaComponent } from './componets/motivo-de-reversa/motivo-de-reversa.component'
import { MotivosReferenciasClientesComponent } from './componets/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { RelacionTransaccionesDepositosComponent } from './componets/relacion-transacciones-depositos/relacion-transacciones-depositos.component';
import { DocumentosAPresentarPorProductoComponent } from './componets/documentos-a-presentar-por-producto/documentos-a-presentar-por-producto.component';
import { EventosDeSolicitudesComponent } from './componets/eventos-de-solicitudes/eventos-de-solicitudes.component';
import { ParametrosAdicionalPorProductoComponent } from './componets/parametros-adicional-por-producto/parametros-adicional-por-producto.component';
import { MontosPorPlazoComponent } from './componets/montos-por-plazo/montos-por-plazo.component'
import { PricipalComponent } from './componets/pricipal/pricipal.component';

const appRoutes: Routes = [
    {path: 'cobrosAdicionales', component: CobrosAdicionalesComponent},
    {path: 'diasInhabiles', component: DiasInhabilesComponent},
    {path: 'institucionesCobrosAdicionales', component: InstitucionesCobrosAdicionalesComponent},
    {path: 'motivosDeAjustes', component: MotivosDeAjustesComponent},
    {path: 'limpiezaDeArchivos', component: LimpiezaDeArchivosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'Formas-de-desembolso',component:FormasDeDesembolsoComponent},
    {path: 'Motivo-de-reversa',component:MotivoDeReversaComponent},
    {path: 'Motivos-referencias-clientes',component:MotivosReferenciasClientesComponent},
    {path: 'Relacion-transacciones-depositos',component:RelacionTransaccionesDepositosComponent},
    {path: 'Documentos-a-Presentar-por-Producto',component:DocumentosAPresentarPorProductoComponent},
    {path: 'Eventos-de-solicitudes',component:EventosDeSolicitudesComponent},
    {path: 'Parametros-Adicional-por-Producto',component:ParametrosAdicionalPorProductoComponent},
    {path: 'Montos-por-Plazo',component:MontosPorPlazoComponent},
    {path: 'principal', component: PricipalComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);