import { Component, OnInit } from '@angular/core';
// import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-support-universities',
  templateUrl: './support-universities.component.html',
    // providers: [RequestService]

})
export class SupportUniversitiesComponent implements OnInit {
  private universitiesList: any[];
  private showUniversities: boolean = true;  
  private selectedUniversity: any;
  
  // constructor(private _requestService: RequestService) { }


  ngOnInit() {
    this.universitiesList = [
      { title: 'Kendall College'}, 
      { title: 'Universidad del Valle de Mexico (UVM)'}, 
      { title: 'Walden University'}, 
      { title: 'BTK Academies of Design (HTK)'},
      { title: 'BTK Group'}, 
      { title: 'University of Petroleum and Energy Studies (UPES)'}, 
      { title: 'Universidad Peruana de Ciencias Aplicadas (UPC)'}, 
      { title: 'Santa Fe University of Art and Design (CSF)'}, 
      { title: 'New School of Architecture and Design (NSAD)'}, 
      { title: 'Business School Sao Paulo (BSP)'},
      { title: 'Universidad Andrés Bello (UNAB)'}, 
      { title: 'INTI International University & Colleges (INTI)'},   
    ];

    // this._requestService.getArticles().subscribe(result => {
    //   console.log('result', result);
    // },error => {
    //     console.log('error', error);
    //   });
  }

  selectUniversity(university: any) {
    this.showUniversities = false;
    this.selectedUniversity = university;
    console.log(this.selectedUniversity);
  }

  changeUniversity() {
    this.showUniversities = true;
  }

}
