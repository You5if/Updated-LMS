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


export class QuestionBankEntryService {

    constructor(private _globals: AppGlobals,
        private httpClient: HttpClient,
        private _cf: CommonService,
        private http: Http,
        private _auth: AuthService) {}

        Controllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'QuestionBank/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
           return response.json();
           }), catchError(this._cf.handleError));
        }

        EntryA(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'QuestionBank/createuniv',arr);
        }

        EntryE(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'QuestionBank/edituniv',arr);
        }

        child1ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'QuBanMC/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

        getChild1ItembyChild1(id: number): Observable<any[]> {
            return this.httpClient.get<any[]>(this._globals.baseAPIUrl + 'QuBanMC/byquestionbank/' + id).pipe(
            map((result: any[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }

           child2ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'QuBanFill/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

        getChild2ItembyChild2(id: number): Observable<any[]> {
            return this.httpClient.get<any[]>(this._globals.baseAPIUrl + 'QuBanFill/byquestionbank/' + id).pipe(
            map((result: any[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           child3ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'QuBanOrd/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

        getChild3ItembyChild3(id: number): Observable<any[]> {
            return this.httpClient.get<any[]>(this._globals.baseAPIUrl + 'QuBanOrd/byquestionbank/' + id).pipe(
            map((result: any[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }

           child4ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'QuBanMat/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }

        getChild4ItembyChild4(id: number): Observable<any[]> {
            return this.httpClient.get<any[]>(this._globals.baseAPIUrl + 'QuBanMat/byquestionbank/' + id).pipe(
            map((result: any[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
}

