import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  admin: Admin = new Admin

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(admin) {
    this.adminService.addAdmin(admin).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/admins']);
      }
    )
  }


}


