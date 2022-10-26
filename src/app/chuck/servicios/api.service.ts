import { Injectable } from '@angular/core';
import { Frase } from "../modelos/frase";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private frase: Frase = { cli_id: "", cli_identificacion: "", cli_nombre: "", cli_apellido: "", cli_correo: "", cli_telefono: "", cli_tp_doc_id: "" };
  private ChuckUrl = "https://localhost:7006";

  constructor(private http: HttpClient)  {}
  
  public getFrase(): Observable<Frase> {
    return this.http.get<Frase>(this.ChuckUrl);
  }
}
