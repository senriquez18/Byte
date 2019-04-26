import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {} from './componets/pricipal/pricipal.component'
import { MotivosDeAjustesComponent } from './componets/motivos-de-ajustes/motivos-de-ajustes.component';
import { DiasInhabilesComponent, agregarDiasInhabiles } from './componets/dias-inhabiles/dias-inhabiles.component';
import { CobrosAdicionalesComponent, Agregar } from './componets/cobros-adicionales/cobros-adicionales.component';
import { InstitucionesCobrosAdicionalesComponent } from './componets/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component';
import { LimpiezaDeArchivosComponent } from './componets/limpieza-de-archivos/limpieza-de-archivos.component';
import { routing, appRoutingProviders } from './app.routing';
import { ProductosComponent } from './componets/productos/productos.component';
//***********************SAMUEL***************************/
import { MotivoDeReversaComponent } from './componets/motivo-de-reversa/motivo-de-reversa.component'
import { FormasDeDesembolsoComponent } from './componets/formas-de-desembolso/formas-de-desembolso.component';
import { MotivosReferenciasClientesComponent } from './componets/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { RelacionTransaccionesDepositosComponent } from './componets/relacion-transacciones-depositos/relacion-transacciones-depositos.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ParametrosAdicionalPorProductoComponent } from './componets/parametros-adicional-por-producto/parametros-adicional-por-producto.component';
import { EventosDeSolicitudesComponent } from './componets/eventos-de-solicitudes/eventos-de-solicitudes.component';
import { DocumentosAPresentarPorProductoComponent } from './componets/documentos-a-presentar-por-producto/documentos-a-presentar-por-producto.component';
import { MontosPorPlazoComponent } from './componets/montos-por-plazo/montos-por-plazo.component'


//----------------------- ANGULAR MATERIAL
import { 
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { PricipalComponent } from './componets/pricipal/pricipal.component';
import { from } from 'rxjs';
import { SidenavComponent } from './componets/sidenav/sidenav.component';



@NgModule({
  declarations: [
    AppComponent, 
    MotivosDeAjustesComponent,   
    DiasInhabilesComponent,  
    CobrosAdicionalesComponent,
    InstitucionesCobrosAdicionalesComponent,
    Agregar,
    agregarDiasInhabiles,
    LimpiezaDeArchivosComponent,
    ProductosComponent,
    
    MotivoDeReversaComponent,
    FormasDeDesembolsoComponent, 
    MotivosReferenciasClientesComponent,
    RelacionTransaccionesDepositosComponent,
    ParametrosAdicionalPorProductoComponent,
    EventosDeSolicitudesComponent, 
    DocumentosAPresentarPorProductoComponent,
    MontosPorPlazoComponent,
    PricipalComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    //
    //A11yModule,
    //CdkStepperModule,
    //CdkTableModule,
    //CdkTreeModule,
    //DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    //PortalModule,
    //ScrollingModule,
    //
    routing,
    LayoutModule
  ],
  exports:[
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
  ],
  entryComponents: [
    Agregar,
    agregarDiasInhabiles
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
