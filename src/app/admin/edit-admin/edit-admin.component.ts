import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Admin } from 'src/app/model/admin';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {

  id: number;
  admin: Admin = new Admin;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(paramsId => { this.id = paramsId.id});
    console.log(this.id)
    this.adminService.getAdminId(this.id).subscribe(
      res => {
        this.admin = res;
        console.log(this.admin)
      }
    )
  }

}
