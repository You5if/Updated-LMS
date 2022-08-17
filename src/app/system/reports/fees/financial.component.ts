import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { AppGlobals } from 'src/app/app.global';
import { SelectService } from 'src/app/components/common/select.service';
import { SelectModel } from 'src/app/components/misc/SelectModel';
import { ReportPageService } from 'src/app/components/PR/report-page/report-page.service';
import { ReportComponent } from 'src/app/report/report.component';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { Direction } from '@angular/cdk/bidi';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';


@Component({
  selector: 'app-report',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FeesComponent implements OnInit {

  myForm!: FormGroup;
  parents: any;
  students: any;
  years: any;
  classes: any;
  groups: any;
  role: string|null = localStorage.getItem('role');
  direction: Direction = "ltr";
  submit!: string;
  parent!: string;
  student!: string;
  year!: string;
  class!: string;
  group!: string;
  feesReports!: string;
  toDate!: string;
  fromDate!: string;
  parentId1!:number;
  studentId!:number;
  yearId!:number;
  classId!:number;
  groupId!:number;
  fromDateTech:string = ''
  toDateTech:string = ''
  refCon: string = "concat(CustomerName,' ',ESName,' ',ETName)"
  techId!:number

  constructor(
    public dialogRef: MatDialogRef<ReportComponent>,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private _select: SelectService,
    private _report: ReportPageService,
    private _ui: UIService,
    private _auth: AuthService,
    private _globals: AppGlobals,
    private router: Router,
    ) { 
    this.dialogRef.disableClose = true
  }

  ngOnInit() {
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      this.direction = "ltr"
      this.submit = "Get report"
      this.feesReports = "Fees Analysis"
      this.fromDate = "From date"
      this.toDate = "To date"
      this.parent = "Parent"
      this.student = "Student"
      this.year = "Year"
      this.class = "Class"
      this.group = "Group"
      
    }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
      this.direction = "rtl"
      this.submit = "التقرير"
      this.fromDate = "من تاريخ"
      this.feesReports = "تحليلات الرسوم"
      this.student = "الطالب"
      this.toDate = "الى تاريخ"
      this.parent = "اولياء الامور"
      this.year = "السنة"
      this.class = "الفصل"
      this.group = "المجموعة"
      
    }

    console.log("user:", this._auth.getUserId(), this._auth.getUniqueName());
    
    //http://lmsapi.autopay-mcs.com/api/Ddl/getdropdown/schoolyearid/schoolyear/scname/active=1%20and%20deleted=0%20and%20schoolyearid>1/false)
    this._ui.loadingStateChanged.next(true);
    this._select.getDropdown('schoolyearid','schoolyear','scname','active=1 and deleted=0 and schoolyearid>1',false).subscribe((res: SelectModel[]) => {
      this._ui.loadingStateChanged.next(false);
      this.years = res;
      
  });
  //http://lmsapi.autopay-mcs.com/api/Ddl/getdropdown/schoolclassid/schoolclass/scclassname/active=1%20and%20deleted=0%20and%20schoolclassid>1/false)
  this._ui.loadingStateChanged.next(true);
    this._select.getDropdown('schoolclassid','schoolclass','scclassname','active=1 and deleted=0 and schoolclassid>1',false).subscribe((res: SelectModel[]) => {
      this._ui.loadingStateChanged.next(false);
      this.classes = res;
     
  });
    

    

    

    
  }

  onClose() {
    this.dialogRef.close()
  }

  onGetGroup2() {
    this.classId = 1
    this.groupId = 0
    this.groups = []
    // http://lmsapi.autopay-mcs.com/api/Ddl/getdropdown/schoolgroupid/schoolgroup/scgroupname/active=1%20and%20deleted=0%20and%20schoolclassid={}%20and%20schoolyearid={}/false
  //   this._ui.loadingStateChanged.next(true);
  //   this._select.getDropdown('schoolgroupid','schoolgroup','scgroupname','active=1 and deleted=0 and schoolclassid='+ this.classId + ' ' + 'and schoolyearid='+ this.yearId ,false).subscribe((res: SelectModel[]) => {
  //     this._ui.loadingStateChanged.next(false);
  //     this.groups = res;
      
  // });
  }
  onGetGroup(id:number) {
    // http://lmsapi.autopay-mcs.com/api/Ddl/getdropdown/schoolgroupid/schoolgroup/scgroupname/active=1%20and%20deleted=0%20and%20schoolclassid={}%20and%20schoolyearid={}/false
    this._ui.loadingStateChanged.next(true);
    this._select.getDropdown('schoolgroupid','schoolgroup','scgroupname','active=1 and deleted=0 and schoolclassid='+ id + ' ' + 'and schoolyearid='+ this.yearId ,false).subscribe((res: SelectModel[]) => {
      this._ui.loadingStateChanged.next(false);
      this.groups = res;
      
  });
  }

  onResults(id:number, e:any) {
    if (id === 1) {
      this.parentId1 = e
    }else {
      this.onChangeParent(e)
    }
    console.log('ee',e);
    
    
  }

  onChangeParent(id: number) {
    //http://lmsapi.autopay-mcs.com/api/Ddl/getdropdown/CustomeraccountId/Customeraccount/ename/active=1%20and%20deleted=0%20and%20customerid=91/false
    this._ui.loadingStateChanged.next(true);
        this._select.getDropdown("CustomeraccountId", "Customeraccount", "ename", "active=1 and deleted=0 and customerid="+id, false).subscribe((res: SelectModel[]) => {
          this._ui.loadingStateChanged.next(false);
          console.log("drop: ", res);
          this.students = res;
      });
  }

  onReport(fromDate:any, toDate:any, id:any) {
    if(id > 0) {
      let reportId: number = 2;
      let restOfUrl: string;
      restOfUrl = 'from=' + fromDate + "&to=" + toDate + "&user=" + id;
      this._report.passReportData({ reportId: reportId, restOfUrl: restOfUrl });
      this.router.navigate(['System/TechnicianReport']);
      // this.router.navigate([]).then(result => {  window.open(this._globals.baseAppUrl + '#/report'); });
      // window.open('#/report', '_blank');
      console.log(restOfUrl)
    }
  }
  onParentReport(id:any) {
    if(id > 0) {
      let reportId: number = 12;
      let restOfUrl: string;
      restOfUrl = 'parent=' + id;
      this._report.passReportData({ reportId: reportId, restOfUrl: restOfUrl });
      this.router.navigate(['System/FinancialReportsPage']);
      // this.router.navigate([]).then(result => {  window.open(this._globals.baseAppUrl + '#/report'); });
      // window.open('#/report', '_blank');
      console.log(restOfUrl)
    }
  }
  onStudentReport(id:any) {
    if(id > 0) {
      let reportId: number = 13;
      let restOfUrl: string;
      restOfUrl = 'student=' + id;
      this._report.passReportData({ reportId: reportId, restOfUrl: restOfUrl });
      this.router.navigate(['System/FinancialReportsPage']);
      // this.router.navigate([]).then(result => {  window.open(this._globals.baseAppUrl + '#/report'); });
      // window.open('#/report', '_blank');
      console.log(restOfUrl)
    }
  }
  onGroupReport(yearId:any, classId:any, groupId:any ) {
    if(groupId > 0) {
      let reportId: number = 14;
      let restOfUrl: string;
      restOfUrl = 'class=' + groupId;
      this._report.passReportData({ reportId: reportId, restOfUrl: restOfUrl });
      this.router.navigate(['System/FinancialReportsPage']);
      // this.router.navigate([]).then(result => {  window.open(this._globals.baseAppUrl + '#/report'); });
      // window.open('#/report', '_blank');
      console.log(restOfUrl)
    }
  }

  onFromDateTech(e:any) {
    let idD = (<HTMLInputElement>e.target).value
    this.fromDateTech = idD
    if (this.toDateTech === "") {
      this.toDateTech = idD
    }
    console.log("fromDate", this.fromDateTech);
    
  }
  onToDateTech(e:any) {
    let idD2 = (<HTMLInputElement>e.target).value
    this.toDateTech = idD2
    if (this.fromDateTech === "") {
      this.fromDateTech = idD2
    }
    console.log("toDate", this.toDateTech);
    
  }
  

  onSubmit(type:string) {
    
    if (type == '12') {
      this.onParentReport(
        this.parentId1
        
      );
    }else if (type == '13') {
      this.onStudentReport(
        this.studentId
        
      );
    }else if (type == '14') {
      this.onGroupReport(
        this.yearId,
        this.classId,
        this.groupId
        
      );
    }
    // this.onReport(
    //   this.fromDateTech,
    //   this.toDateTech,
    //   this.techId
    // );
  }
}
