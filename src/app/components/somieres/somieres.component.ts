import { Component, OnInit } from '@angular/core';
import { SomierService } from '../../services/somier.service';
import { NgForm } from '@angular/forms';
import { Somier } from '../../models/somier.model';

declare var M: any;

@Component({
  selector: 'app-somieres',
  templateUrl: './somieres.component.html',
  styleUrls: ['./somieres.component.css'],
  providers: [ SomierService ]
})
export class SomieresComponent implements OnInit {

  constructor(public somierService: SomierService) { }

  ngOnInit(): void {
  }

  addSomier(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.somierService.putSomier(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getSomiers();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.somierService.postSomier(form.value)
      .subscribe(res => {
        this.getSomiers();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getSomiers() {
    this.somierService.getSomieres()
      .subscribe(res => {
        this.somierService.somieres = res as Somier[];
      });
  }

  editSomier(somier: Somier) {
    this.somierService.selectedSomier = somier;
  }

  deleteSomier(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.somierService.deleteSomier(_id)
        .subscribe(res => {
          this.getSomiers();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.somierService.selectedSomier = new Somier();
    }
  }

}
