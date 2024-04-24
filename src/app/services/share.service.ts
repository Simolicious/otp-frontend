import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ShareService {

    email$ = new BehaviorSubject<string>("");

    setEmail(val: string) {
        this.email$.next(val);
    }

}