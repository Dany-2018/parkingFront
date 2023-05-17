import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidadorComponent } from "./validador/validador.component";

@NgModule({
    declarations:[
        ValidadorComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ValidadorComponent
    ]
})
export class SharedModule { }