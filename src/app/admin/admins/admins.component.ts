import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  data: Admin[] = [];
  admin: Admin = new Admin;
  ida: number;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.adminService.getAdmin().subscribe(
      res => {
      this.data = res;
        console.log(this.data)

      }
    )
  }

  catchAdmin(ida) {
    console.log(ida)
    this.router.navigate(['/editadmin'], { queryParams: { ida: ida } });
  };


  deleteAdmin(ida) {
    this.route.queryParams.subscribe(params => { this.ida = +params['ida'] || 0; });
    console.log(ida)
    this.adminService.deleteAdmin(ida).subscribe(
      res => {
        console.log(res);
        this.data.splice(this.data.indexOf(this.data.filter(admin => admin.id_admin == ida)[0]), 1)


      }
    )
  }

}
