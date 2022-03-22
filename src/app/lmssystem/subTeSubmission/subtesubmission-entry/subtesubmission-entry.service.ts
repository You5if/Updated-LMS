import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError, map} from 'rxjs/operators';
import { Send } from 'src/app/send.model';
import { AppGlobals } from 'src/app/app.global';
import { CommonService } from 'src/app/components/common/common.service';
import { Http } from '@angular/http';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class subTeSubmissionEntryService {

    constructor(private _globals: AppGlobals,
        private httpClient: HttpClient,
        private _cf: CommonService,
        private http: Http,
        private _auth: AuthService) {}

        Controllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'SubTeSubmission/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
           return response.json();
           }), catchError(this._cf.handleError));
        }

        EntryA(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'SubTeSubmission/createuniv',arr);
        }

        EntryE(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'SubTeSubmission/edituniv',arr);
        }

        child1ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'SubTeFreeInput/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

        getChild1ItembyChild1(id: number): Observable<any[]> {
            return this.httpClient.get<any[]>(this._globals.baseAPIUrl + 'SubTeFreeInput/bysubtesubmission/' + id).pipe(
            map((result: any[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }

           child2ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'SubTeMC/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

        getChild2ItembyChild2(id: number): Observable<any[]> {
            return this.httpClient.get<any[]>(this._globals.baseAPIUrl + 'SubTeMC/bysubtesubmission/' + id).pipe(
            map((result: any[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           child3ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'SubTeBlank/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

        getChild3ItembyChild3(id: number): Observable<any[]> {
            return this.httpClient.get<any[]>(this._globals.baseAPIUrl + 'SubTeBlank/bysubtesubmission/' + id).pipe(
            map((result: any[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }

           child4ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'SubTeMat/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

        getChild4ItembyChild4(id: number): Observable<any[]> {
            return this.httpClient.get<any[]>(this._globals.baseAPIUrl + 'SubTeMat/bysubtesubmission/' + id).pipe(
            map((result: any[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           child5ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'SubTeOrder/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

        getChild5ItembyChild4(id: number): Observable<any[]> {
            return this.httpClient.get<any[]>(this._globals.baseAPIUrl + 'SubTeOrder/bysubtesubmission/' + id).pipe(
            map((result: any[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
}

