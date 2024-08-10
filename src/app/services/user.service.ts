import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ data: IUser[] }> {
    return this.http.get<{ data: IUser[] }>(this.url);
  }

  addUser(user: Partial<IUser>): Observable<IUser> {
    return this.http.post<IUser>(this.url, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.url}/${user.id}`, user);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${userId}`);
  }
}
