import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {User} from './user';

@Injectable()
export class UserService {
    constructor (private http: Http) {}

    private _userUrl = 'app/main/system/user/ms/data.json';  // URL to web api

    getUserByID(){

    }

    getAllUsers () {
        return this.http.get(this._userUrl)
            .map(res => <User[]> res.json().data)
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
