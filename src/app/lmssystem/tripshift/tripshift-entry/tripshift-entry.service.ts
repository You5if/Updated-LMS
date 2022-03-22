import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError, map} from 'rxjs/operators';
import { Send } from 'src/app/send.model';
import { AppGlobals } from 'src/app/app.global';
import { CommonService } from 'src/app/components/common/common.service';
import { Http } from '@angular/http';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { Observable } from 'rxjs';
import { TripShiftModel } from '../tripshift.model';


@Injectable({
    providedIn: 'root'
})


export class TripShiftEntryService {

    constructor(private _globals: AppGlobals,
        private httpClient: HttpClient,
        private _cf: CommonService,
        private http: Http,
        private _auth: AuthService) {}

        Controllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'TripShift/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
           return response.json();
           }), catchError(this._cf.handleError));
        }

        EntryA(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'TripShift/createuniv',arr);
        }

        EntryE(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'TripShift/edituniv',arr);
        }

        child1ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'TripShiftDetails/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }
           getChildItembyChild(id: number): Observable<TripShiftModel[]> {
            return this.httpClient.get<TripShiftModel[]>(this._globals.baseAPIUrl + 'TripShiftDetails/bytripshift/' + id).pipe(
            map((result: TripShiftModel[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           
        }
       
           getProductPricing(id: number): Observable< TripShiftModel> {
            return this.httpClient.get< TripShiftModel>(this._globals.baseAPIUrl + 'ProductPricing/productpricing/' + id).pipe(
            map((result:  TripShiftModel) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
           getProductPricing2(id: number, idC:number, idD:string): Observable< TripShiftModel> {
            return this.httpClient.get< TripShiftModel>(this._globals.baseAPIUrl + 'ProductPricing/productinvoicepricing/' + id +'/' + idC + '/' + idD).pipe(
            map((result:  TripShiftModel) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
}

