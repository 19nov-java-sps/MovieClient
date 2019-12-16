import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-user-detail',
  templateUrl: './manager-user-detail.component.html',
  styleUrls: ['./manager-user-detail.component.css']
})
export class ManagerUserDetailComponent implements OnInit {

  currentUser: User = new User();

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.currentUser.userId = param['id'];
      this.getUser(this.currentUser.userId);
    })
    
  }

  getUser(idParam: number) {
    this.userService.getUserById(idParam)
      .then((responsePost)=>{
        this.currentUser = responsePost;
      })
      .catch((e)=>{
        console.warn(e);
      })
  }

}
