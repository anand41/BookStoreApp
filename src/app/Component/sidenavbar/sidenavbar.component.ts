import { Component, OnInit ,ViewChild  } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenavModule;
  isSeller = false;
  isAdmin=false;
  role:string;
  constructor(private router:Router ) { }

  ngOnInit() {
   this.role= localStorage.getItem('role');
   console.log('role check sidenav',this.role);
   if (this.role === 'admin') 
   {
     this.isAdmin=true;
   }
   if (this.role === 'seller') 
   {
     this.isSeller=true;
   }
  }
  sellerBooks()
  {
    this.router.navigate(['dashboard/admin'],{queryParams:{book:'unverified'}});
  }

  orders()
  {
    this.router.navigate(['dashboard/admin'],{queryParams:{book:'order'}});
  }

  reviews()
  {
    this.router.navigate(['dashboard/admin'],{queryParams:{book:'review'}});
  }

  books()
  {
    this.router.navigate(['dashboard/admin'],{queryParams:{book:'books'}});
  }


  addBook(){

  }
  approvedBook(){}
  rejectedBook(){}
}
