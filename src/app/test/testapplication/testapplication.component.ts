import { Component, OnInit } from '@angular/core';
import { TestdataService } from 'src/app/services/testdata.service';
import { MatTableDataSource } from '@angular/material/table';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

export interface PeriodicElement {
  Country: string;
  TotalConfirmed: number;
  TotalRecovered: number;
  TotalDeaths:number;
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-testapplication',
  templateUrl: './testapplication.component.html',
  styleUrls: ['./testapplication.component.css']
})
export class TestapplicationComponent implements OnInit {
  
  displayedColumns: string[] = ['Country','TotalConfirmed','TotalRecovered','TotalDeaths'];
  public dataSource = new MatTableDataSource<PeriodicElement>();
  userDetails: any = [];
  value:string='';
  covidData: FormGroup;
  search = new FormControl('');
  
  constructor(
    private common: TestdataService,
    fb: FormBuilder,
  ) {
    this.covidData = fb.group({
      search: this.search
    });
   }

  ngOnInit(): void {
    this.getcovidStatics();
  }



  public doFilter = () => {
    this.value= this.covidData.value.search
    this.dataSource.filter = this.value.trim().toLocaleLowerCase();
  }



  getcovidStatics(){    
      this.common.getCovidData().subscribe(
        res => {
          this.userDetails= res
          this.dataSource.data = this.userDetails['Countries'] as PeriodicElement[];
        },
        err => {
          console.log('ERROR', err.status);
        },
      );
    
  }

}
