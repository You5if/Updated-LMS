import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError, map} from 'rxjs/operators';
import { Send } from 'src/app/send.model';
import { AppGlobals } from 'src/app/app.global';
import { CommonService } from 'src/app/components/common/common.service';
import { Http } from '@angular/http';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { Observable } from 'rxjs';
import { SubjectOutlineModel } from '../subjectoutline.model';
import { productPricingModel } from 'src/app/system/AnotherComponents/invoice/invoice.model';


@Injectable({
    providedIn: 'root'
})


export class SubjectOutlineEntryService {

    constructor(private _globals: AppGlobals,
        private httpClient: HttpClient,
        private _cf: CommonService,
        private http: Http,
        private _auth: AuthService) {}

        Controllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'SubjectOutline/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
           return response.json();
           }), catchError(this._cf.handleError));
        }

        EntryA(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'SubjectOutline/createuniv',arr);
        }

        EntryE(arr: any){
           return this.http.post(this._globals.baseAPIUrl + 'SubjectOutline/edituniv',arr);
        }
        child1ItemControllers(model: Send) {
            return this.http.post(this._globals.baseAPIUrl + 'SubOutlineUn/getuniventry', model, this._cf.requestOptions()).pipe(
           map((response: any) => {
               console.log('here: ', response.json());
           return response.json();
           }), catchError(this._cf.handleError));
           }
           getChildItembyChild(id: number): Observable<SubjectOutlineModel[]> {
            return this.httpClient.get<SubjectOutlineModel[]>(this._globals.baseAPIUrl + 'SubOutlineUn/bysuboutline/' + id).pipe(
            map((result: SubjectOutlineModel[]) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }

           getProductPricing(id: number): Observable<productPricingModel> {
            return this.httpClient.get<productPricingModel>(this._globals.baseAPIUrl + 'ProductPricing/productpricing/' + id).pipe(
            map((result: productPricingModel) => {
            return result;
            }), catchError(this._cf.handleError)
            );
           }
      
}

