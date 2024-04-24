import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, of, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DataService {

    private apiUrl = 'https://simon-8081.entrostat.dev/api/otp';

    constructor(private http: HttpClient) {}

    generateOTP(email: string) {
        return this.http.post<any>(this.apiUrl + '/generate', { email: email }, {observe: 'response'}).pipe(
            map(response => {
                return this.handleSuccessResponse(response);
            }),
            catchError(error => {
                return this.handleError(error);
            }),
        );
    }

    validateOTP(email: string, otpCode: string) {
        return this.http.post<any>(this.apiUrl + '/validate', { email: email, otp: otpCode }, {observe: 'response'}).pipe(
            map(response => {
                return this.handleSuccessResponse(response);
            }),
            catchError(error => {
                return this.handleError(error);
            }),
        );
    }

    resendOTP(email: string) {
        return this.http.post<any>(this.apiUrl + '/resend', { email: email }, {observe: 'response'}).pipe(
            map(response => {
                return this.handleSuccessResponse(response);
            }),
            catchError(error => {
                return this.handleError(error);
            }),
        );
    }

    private handleSuccessResponse(response: any) {
        const message = response ? response.body.message : 'Unknown Error';
        return { success: response.status >= 200 && response.status < 300, message: message};
    }

    private handleError(error: any) {
        let errorMessage;

        if(error.error && error.error.message) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `HTTP Error ${error.status}`;
        }

        return of({ success: false, message: errorMessage });
    }
}