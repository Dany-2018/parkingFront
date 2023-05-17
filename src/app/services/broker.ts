import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BrokerService {

    headers: HttpHeaders = new HttpHeaders({
        'content-type': 'application/json'
    });

    constructor(private http: HttpClient) {

    }

    post<T>(controlador: string, body: any, metodo: string = ''): Observable<T> {
        let url = `${environment.http.apiUrl}/${controlador}${(metodo) ? `/${metodo}` : ''}`;
        return this.http.post<T>(url, body, { headers: this.headers });
    }

    get<T>(controlador: string, metodo: string = ''): Observable<T> {
        let url = `${environment.http.apiUrl}/${controlador}${(metodo) ? `/${metodo}` : ''}`;
        return this.http.get<T>(url, { headers: this.headers });
    }

    delete<T>(controlador: string, metodo: string = ''): Observable<T> {
        let url = `${environment.http.apiUrl}/${controlador}${(metodo) ? `/${metodo}` : ''}`;
        return this.http.delete<T>(url, { headers: this.headers });
    }
}