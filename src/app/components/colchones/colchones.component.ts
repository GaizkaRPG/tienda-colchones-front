import { Component, OnInit } from '@angular/core';
import { ColchonService } from '../../services/colchon.service';
import { NgForm } from '@angular/forms';
import { Colchon } from '../../models/colchon.model';

declare var M: any;

@Component({
  selector: 'app-colchones',
  templateUrl: './colchones.component.html',
  styleUrls: ['./colchones.component.css'],
  providers: [ ColchonService ]
})
export class ColchonesComponent implements OnInit {

  constructor(public colchonService: ColchonService) { }

  ngOnInit(): void {
  }

  addColchon(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.colchonService.putColchon(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getColchons();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.colchonService.postColchon(form.value)
      .subscribe(res => {
        this.getColchons();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getColchons() {
    this.colchonService.getColchones()
      .subscribe(res => {
        this.colchonService.colchones = res as Colchon[];
      });
  }

  editColchon(colchon: Colchon) {
    this.colchonService.selectedColchon = colchon;
  }

  deleteColchon(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.colchonService.deleteColchon(_id)
        .subscribe(res => {
          this.getColchons();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.colchonService.selectedColchon = new Colchon();
    }
  }

}
