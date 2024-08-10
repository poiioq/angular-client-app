import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from '../services/user.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'api-data',
  standalone: true,
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class UserComponent implements OnInit {
  users: IUser[] = [];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.getUsers().subscribe((response) => {this.users = response.data;})
  }

  addNewUser() {
    const newUser: Partial<IUser> = { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com' };
    this._userService.addUser(newUser).subscribe((data) => console.log(data));
  }

  updateUser() {
    const updatedUser: IUser = { id: 2, first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@example.com', avatar: '' };
    this._userService.updateUser(updatedUser).subscribe((data) => console.log(data));
  }

  deleteUser() {
    this._userService.deleteUser(2).subscribe(() => console.log('User deleted'));
  }
}
