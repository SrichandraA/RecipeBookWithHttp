import { Subject } from "rxjs";

export class ValidityService{
    valid = new Subject<boolean>();

}