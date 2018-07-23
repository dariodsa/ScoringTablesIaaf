import {Response} from '@angular/http';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { RestConstants } from './RestConstants';


@Injectable()
export class SimpleRestApiService {
	private headers: HttpHeaders;
	private options: object;

	constructor(private http: HttpClient) {
		this.headers = new HttpHeaders({"Content-Type": "application/json"});

		this.options = {headers: this.headers};
	}

	private static extractData(res: Response) {
		let body = res.json();

		return body || {};
	}

	private static handleError(error: any) {
		let errorMessage = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errorMessage);

		return Observable.throw(errorMessage);
	}

	getUrlService(url: string): Observable<any> {
		return this.http.get<any>(url, this.options);
	}

	getUrlServiceWithParams(url: string, jsonParams: object): Observable<any> {
		let options = {
			params: this.getParamsFromJSON(jsonParams),
		};

		return this.http.get<any>(url, options);
	}

	updateService(url: string, object: any): Observable<any> {
		let body = JSON.stringify(object);
		return this.http.post(url, body, this.options);
	}

	
	private getParamsFromJSON(jsonData: object): HttpParams {
		let httpParams = new HttpParams();
		Object.keys(jsonData).forEach(function (key) {
			httpParams = httpParams.set(key, jsonData[key]);
		});

		return httpParams;
	}
}
