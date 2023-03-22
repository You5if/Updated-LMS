import { Component, OnInit, Inject } from '@angular/core';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';
import { MessageBoxService } from 'src/app/components/messagebox/message-box.service';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { CommonService } from 'src/app/components/common/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forexRateModel, journalentrydetailModel, JournalEntryModel } from '../journalentry.model';
import { APIResultModel } from 'src/app/components/misc/APIResult.Model';
import { JournalEntryService } from '../journalentry.service';
import { Observable, of } from 'rxjs';
import { SelectModel, SelectCodeModel } from 'src/app/components/misc/SelectModel';

import { SelectService } from 'src/app/components/common/select.service';
// import { element } from '@angular/core/src/render3';
import { AppGlobals } from 'src/app/app.global';
import { AlertifyService } from 'src/app/alertify.service';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-journalentry-entry',
  templateUrl: './journalentry-entry.component.html',
  styleUrls: ['./journalentry-entry.component.scss']
})

export class JournalEntryEntryComponent implements OnInit {
  url!: string;
  dialog_title: string|null = localStorage.getItem(this._globals.baseAppName + '_Add&Edit');

  direction!: Direction;
  reference!: string;
  dated!: string;
  currency!: string;
  narration!: string;
  forexRate!: string;
  submit!: string;
  cancel!: string;
  debit!: string;
  credit!: string;
  lock!: string;
  customer!:string
  supplier!:string
  company!:string
  costcenter!:string
  shareholder!:string

  num: number = 0
  selectedElement: number = 0
  referenceLock: boolean = false
  narrationLock: boolean = false

  currencyType: SelectModel[] = [];
  accountType: SelectModel[] = [];
  customers: SelectModel[] = [];
  suppliers: SelectModel[] = [];
  shareholders: SelectModel[] = [];
  costcenters: SelectModel[] = [];
  companys: SelectModel[] = [];
  line!:string

  elem = []as any[];

  preFinalArray!: journalentrydetailModel

  narr: string = "";
  fRate: string = "";
  refr: string = "";
  inputShared!: number;
  acc!:string;
  openSubmit: boolean = false
  addMore!: string;

  myDate = '2021-01-01';

  fArray: journalentrydetailModel[] = [];
  lastArray: journalentrydetailModel[] = [];

  journalEntryDetailDisplayedColumns: string[] =
  [
    'journalEntryDetailSrNo',
    'account',
    'debit',
    'credit',
    'journalEntryDetailDelete',
  ];
journalEntryDetailData: journalentrydetailModel[] = [];
journalEntryDetailDataFinal: journalentrydetailModel[] = [];
journalEntryDetailDeletedElementsArray: journalentrydetailModel[] = [];
journalEntryDetailTableValueAfterDeleteArray: journalentrydetailModel[] = [];
journalEntryDetailDataSource = new MatTableDataSource(this.journalEntryDetailData);
elemSource = new MatTableDataSource(this.elem);
  curName!: string;
  receipt!: string;


  constructor(
      private _ui: UIService,
      private _msg: MessageBoxService,
      private _auth: AuthService,
      private _globals: AppGlobals,
      private alertify: AlertifyService,
      private _select: SelectService,
      private _myService: JournalEntryService,
      private dialogRef: MatDialogRef<JournalEntryEntryComponent>,
      @Inject(MAT_DIALOG_DATA) public pModel: JournalEntryModel
  ) { }

  ngOnInit() {

    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      
      this.direction = "ltr"
      this.reference = "Reference"
      this.receipt = "Receipt no"
      this.narration = "Narration"
      this.forexRate = "Forex rate"
      this.dated = "Date"
      this.acc = "Account"
      this.line = "Debits and Credits"
      this.customer = "Customer"
      this.supplier = "Supplier"
      this.costcenter = "Cost center"
      this.shareholder = "Share holder"
      this.company = "Company"
      this.currency = "Currency"
      this.lock = "Lock"
      this.debit = "Debit"
      this.credit = "Credit"
      this.addMore = "Add more"
      this.submit = "Submit"
      this.cancel = "Cancel"
      


    }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
     
      this.direction = "rtl"
      this.reference = "المرجع"
      this.narration = "السرد"
      this.forexRate = "معدل فوركس"
      this.dated = "التاريخ"
      this.acc = "حساب"
      this.receipt = "ايصال رقم"
      this.currency = "العملة"
      this.customer = "العميل"
      this.supplier = "الممول"
      this.costcenter = "مركز التسعير"
      this.line = "الخصومات والائتمانات"
      this.shareholder = "صاحب السهم"
      this.company = "الشركة"
      this.lock = "تثبيت"
      this.debit = "الخصم"
      this.credit = "الزيادة"
      this.addMore = "إضافة المزيد"
      this.submit = "ارسال"
      this.cancel = "الغاء"
      

    }


    this._select.getDropdown('miscdetailid','miscdetail','misctext','miscid=17',false).subscribe((res: SelectModel[]) => {
      this.currencyType = res;
      res.forEach((cur) => {
        if (cur.id === this.pModel.currency) {
          this.curName = cur.name
        }
      })
  });

  this._select.getDropdown('accountid','account',"concat(accountcode,':',accountname)",'active=1 and deleted=0 and accountid>1',false).subscribe((res: SelectModel[]) => {
    this.accountType = res;
    console.log(res);
});
  this._select.getDropdown('CustomerAccountId','CustomerAccount',"concat(studentcode,':',Ename)",'active=1 and deleted=0 and CustomerAccountId>1',false).subscribe((res: SelectModel[]) => {
    this.customers = res;
});
  this._select.getDropdown('Supplierid','Supplier','Suppliername','active=1 and deleted=0 and Supplierid>1',false).subscribe((res: SelectModel[]) => {
    this.suppliers = res;
});
  this._select.getDropdown('costcenterid','costcenter','costname','active=1 and deleted=0 and costcenterid>1',false).subscribe((res: SelectModel[]) => {
    this.costcenters = res;
});
  this._select.getDropdown('shareholderid','shareholder','shname','active=1 and deleted=0 and shareholderid>1',false).subscribe((res: SelectModel[]) => {
    this.shareholders = res;
});
  this._select.getDropdown('syscompid','syscomp','BusinessName','active=1 and deleted=0 and syscompid>1',false).subscribe((res: SelectModel[]) => {
    this.companys = res;
});
    this._myService.getJournalEntryDetailbyJournalEntry(this.pModel.journalEntryId).subscribe(
        (result) => {
          console.log("Res:",result, this.pModel)
          if(result.length > 1) {
            this.pModel.journalEntryDetailEntry = result;
          this.journalEntryDetailData = [...this.pModel.journalEntryDetailEntry];
          this.journalEntryDetailDataSource.data = [...this.journalEntryDetailData];
          for(let s=0; s<this.pModel.journalEntryDetailEntry.length; s++) {
            console.log(this.pModel.journalEntryDetailEntry[s]);
            
            const row = {
              value: ++this.num,
               collapse: true,
               numTitle: false,
              journalEntryDetailId1: this.pModel.journalEntryDetailEntry[s].journalEntryDetailId,
              journalEntryId: this.pModel.journalEntryId,
              accountId1: this.pModel.journalEntryDetailEntry[s].accountId,
              sysCompanyId1: this.pModel.journalEntryDetailEntry[s].sysCompanyId,
              customerId1: this.pModel.journalEntryDetailEntry[s].customerId,
              supplierId1: this.pModel.journalEntryDetailEntry[s].supplierId,
              costCenterId1: this.pModel.journalEntryDetailEntry[s].costCenterId,
              shareholderId1: this.pModel.journalEntryDetailEntry[s].shareholderId,
              showShare1:null as any,
      showCustomer1: null as any,
      showCost1:null as any,
      showSupplier1:null as any,
              reference: this.pModel.journalEntryDetailEntry[s].reference,
              narration: this.pModel.journalEntryDetailEntry[s].narration,
              debit1: this.pModel.journalEntryDetailEntry[s].debit,
              credit1: this.pModel.journalEntryDetailEntry[s].credit,
              'active': true,
              readOnly: false,
              auditColumns: this._auth.getAuditColumns()
            }
            if(this.pModel.journalEntryDetailEntry[s].customerId > 1) {
              row.showCustomer1 = true
            }else {
              row.showCustomer1 = false
            }
            
            if(this.pModel.journalEntryDetailEntry[s].supplierId > 1) {
              row.showSupplier1 = true
            }else {
              row.showSupplier1 = false
            }
            
            if(this.pModel.journalEntryDetailEntry[s].costCenterId > 1) {
              row.showCost1 = true
            }else {
              row.showCost1 = false
            }
            
            if(this.pModel.journalEntryDetailEntry[s].shareholderId > 1) {
              row.showShare1 = true
            }else {
              row.showShare1 = false
            }
            
            this.elem.push(row);
          }
          console.log(this.elem);

        
          
          this.elem.forEach((one) => {
            if(one && one.value != this.num) {
              one.collapse = false
              one.numTitle = true
            }

          })
          }
        }
      );

      switch (this.pModel.entryMode) {

          case 'A': {
              this.url = 'JournalEntry/Create';
              
              this.addControlFirstLine();

              break;
          }

          case 'E': {
              this.url = 'JournalEntry/Edit';
              
              break;
          }

          case 'D': {
              this.url = 'JournalEntry/Delete';
              
              break;
          }

          case 'V': {
              this.url = 'JournalEntry/View';
              
              break;
          }

          default: {
              this._msg.showError('Option not implemented..!');
              break;
          }
      }

      console.log("PModel:", this.pModel)
      this.elem.forEach((uni) => {
        if(uni && uni.collapse) {
          this.refr = uni.reference
          this.narr = uni.narration

        }
      })

      this._myService.getForexRate(this.pModel.currency, this.pModel.entryDate).subscribe((resu: forexRateModel) => {
        this._ui.loadingStateChanged.next(false);
        console.log(resu)
        this.pModel.forexRate = resu.name
        
      })

      
  }

  onRefChange(searchValue: string): void {
    console.log('I ran from ref change');
    this.elem[this.selectedElement].reference = searchValue
  }

  onNarrChange(searchValue: string): void {
    console.log('I ran from narr change');
    this.elem[this.selectedElement].narration = searchValue
  }

  addJournalEntryDetailRecord() {
    const rowFB: journalentrydetailModel = {
      journalEntryDetailId: 0,
      journalEntryId: this.pModel.journalEntryId,
      accountId: 1,
      customerId:1,
      supplierId:1,
      costCenterId:1,
      sysCompanyId:1,
      shareholderId:1,
      showShare:false,
      showSupplier:false,
      showCustomer:false,
      showCost:false,
      debit: 0,
      reference: "",
      narration: "",
      relatedJournalEntryDetailId: 1,
      credit: 0,
      'active': true,
      readOnly: false,
      entryMode: "A",
      auditColumns: null
    };

    this.journalEntryDetailData.push(rowFB);
    this.journalEntryDetailDataSource.data = [...this.journalEntryDetailData];
    console.log("Chi", this.journalEntryDetailDataSource.data)
  }

  openThis(id: number) {
    console.log('I ran from open this');
    this.elem.forEach((one3) => {
      if(one3 && one3.value == id) {
        one3.collapse= true
        this.refr = one3.reference
        this.narr = one3.narration
      }else {
        one3.collapse = false
      }
    })

  }

  showTitle(id: number) {
    console.log('I ran from show title');
    this.elem.forEach((one1) => {
      if(one1 && one1.value == id) {
        one1.numTitle = true
      }
    })
  }
  hideTitle(id: number) {
    console.log('I ran from hide title');
    this.selectedElement = id-1
    this.elem.forEach((one1) => {
      if(one1 && one1.value == id) {
        one1.numTitle = false
        this.refr = one1.reference
        this.narr = one1.narration
      }else {
        one1.collapse = false

      }
    })
  }



  addControlFirstLine() {
    console.log('I ran from add control');
    // ++this.num
    const row = {
      value: ++this.num,
       collapse: true,
       numTitle: false,
      journalEntryDetailId1: 0,
      journalEntryId: this.pModel.journalEntryId,
      accountId1: 2,
      customerId1:2,
      showShare1:false,
      showCustomer1:false,
      showCost1:false,
      showSupplier1:false,
      
      supplierId1:2,
      costCenterId1:2,
      shareholderId1:2,
      sysCompanyId1:2,
      reference: '',
      narration: '',
      debit1: 1,
      credit1: 0,
      'active': true,
      readOnly: false,
      auditColumns: this._auth.getAuditColumns()
    }
    // this.narr = row.narration
    if(this.referenceLock){
      row.reference = this.refr
    }
    if(this.narrationLock){
      row.narration = this.narr
    }

    this.elem.push(row)
    this.elemSource.data = [...this.elem]
    this.selectedElement = this.elem.length - 1;
    this.elem.forEach((one) => {
      if(one && one.value != this.num) {
        one.collapse = false
        one.numTitle = true
      }

    })
    // console.log(this.elem)
    // console.log(this.selectedElement)
  }
  addControl() {
    console.log('I ran from add control');
    // ++this.num
    const row = {
      value: ++this.num,
       collapse: true,
       numTitle: false,
      journalEntryDetailId1: 0,
      journalEntryId: this.pModel.journalEntryId,
      accountId1: 2,
      customerId1:2,
      showShare1:false,
      showCustomer1:false,
      showCost1:false,
      showSupplier1:false,
      
      supplierId1:2,
      costCenterId1:2,
      shareholderId1:2,
      sysCompanyId1:2,
      reference: '',
      narration: '',
      debit1: 0,
      credit1: 0,
      'active': true,
      readOnly: false,
      auditColumns: this._auth.getAuditColumns()
    }
    // this.narr = row.narration
    if(this.referenceLock){
      row.reference = this.refr
    }
    if(this.narrationLock){
      row.narration = this.narr
    }

    this.elem.push(row)
    this.elemSource.data = [...this.elem]
    this.selectedElement = this.elem.length - 1;
    this.elem.forEach((one) => {
      if(one && one.value != this.num) {
        one.collapse = false
        one.numTitle = true
      }

    })
    // console.log(this.elem)
    // console.log(this.selectedElement)
  }

  deleteFun(id: number) {
    console.log('I ran from delete');
    this.elem.splice(id, 1);
    }

  checkCollapse() {

  }


  getChange(event:any){
    console.log('I ran from get change');
   this.refr = event
  }

  onChangeCurrency(id: number){
    this._myService.getForexRate(id, this.pModel.entryDate).subscribe((resu: forexRateModel) => {
      this._ui.loadingStateChanged.next(false);
      console.log(resu)
      this.pModel.forexRate = resu.name
      
    })
  }
  onChangeDate(e: Event){
    let id= (<HTMLInputElement>e.target).value
    this._myService.getForexRate(this.pModel.currency, id).subscribe((resu: forexRateModel) => {
      this._ui.loadingStateChanged.next(false);
      console.log(resu)
      this.pModel.forexRate = resu.name
      
    })
  }

  // Step.4 of 7 (next addDeletedElements)
  onDeleteJournalEntryDetail(index: number) {
    // Assinging the values in the table to a tempArray
    this.journalEntryDetailTableValueAfterDeleteArray = this.journalEntryDetailData;
    // Looping through addressData to find targeted element
    this.journalEntryDetailData = this.journalEntryDetailData.map((ele, _index) => {
      if (index === _index) {
        // if (ele.entryStatus !== 0) {
        //   ele.entryStatus = 2;
        //   ele.deleted = true;
        //   ele.active = false;
        //   // Saving the element to be pushed into the array prior to sending to the database
        //   this.journalEntryDetailDeletedElementsArray.push(ele);
        // }
        // Deleting the element from the array
        this.journalEntryDetailTableValueAfterDeleteArray.splice(index, 1);
      }
      return ele;
    });
    // Assinging the value of the new array to the table
    this.journalEntryDetailData = this.journalEntryDetailTableValueAfterDeleteArray;
    // Arranging the srNo
    this.journalEntryDetailData = this.journalEntryDetailData.map((ele, _index) => {
      // ele.srNo = _index + 1;
      return ele;
    });
    this.journalEntryDetailDataSource.data = [...this.journalEntryDetailData];
    // Preventing the table becoming empty
    if (this.journalEntryDetailData.length < 1) {
      this.addJournalEntryDetailRecord();
    }
  }


  onChangeAccount1(id: number, i: number) {
    console.log(id);
    this._select.getDropdown('accounttype','account','accountname','accountid='+id,false).subscribe((res: SelectModel[]) => {
      if(res[0].id == 19004) {
        this.elem[i].showCost1 = true
      }else if(res[0].id == 19005) {
        this.elem[i].showCost1 = true
      }else {
        this.elem[i].showCost1 = false
        this.elem[i].costCenterId1 = 1
      }
      
  });
    
    // if(id === 107) {
    //   this.elem[i].showShare1 = true
    // }else
     if(id === 82) {
      this.elem[i].showSupplier1 = true
    }else if(id === 81) {
      this.elem[i].showCustomer1 = true
    }else {
      this.elem[i].showShare1 = false
      this.elem[i].showSupplier1 = false
      this.elem[i].showCustomer1 = false
      this.elem[i].shareholderId1 = 1
      this.elem[i].supplierId1 = 1
      this.elem[i].customerId1 = 1

    }
  }
  onChangeAccount2(id: number, i: number) {
    console.log(id);

    this._select.getDropdown('accounttype','account','accountname','accountid='+id,false).subscribe((res: SelectModel[]) => {
      if(res[0].id == 19004) {
        this.elem[i].showCost2 = true
      }else if(res[0].id == 19005) {
        this.elem[i].showCost2 = true
      }else {
        this.elem[i].showCost2 = false
        this.elem[i].costCenterId2 = 1
      }
      
  });
    
    // if(id === 107) {
    //   this.elem[i].showShare2 = true
    // }else
     if(id === 82) {
      this.elem[i].showSupplier2 = true
    }else if(id === 81) {
      this.elem[i].showCustomer2 = true
    }else {
      this.elem[i].showShare2 = false
      this.elem[i].showSupplier2 = false
      this.elem[i].showCustomer2 = false
      this.elem[i].shareholderId2 = 1
      this.elem[i].supplierId2 = 1
      this.elem[i].customerId2 = 1
    }
  }

  // Step.5 of 7 (next: onSubmit / onDone)
  addDeletedElements() {
    this.journalEntryDetailDeletedElementsArray.map((ele, _index) => {
      // ele.srNo = _index + 1;
      this.journalEntryDetailData.push(ele);
    });
  }

  handleKeyUp(e:any){
    if(e.keyCode === 13){
       this.onSubmit();
    }
  }

  onSubmit () {
    var allC: number = 0
        var allD: number = 0
        var accNotSelected: number = 0
        var dcValidation: number = 0
      for (let a = 0; a < this.elem.length; a++) {
        const element = this.elem[a];
        
        allD += +element.debit1
        allC += +element.credit1

        if (element.accountId1 == 2) {
          accNotSelected++
        }

        if (!((element.debit1 == 0 && element.credit1 > 0) || (element.credit1 == 0 && element.debit1 > 0) )) {
          dcValidation ++
        }
        
        
      }
      console.log(dcValidation);
      
   if (accNotSelected == 0) {
    if (dcValidation == 0) {
      if (allD === allC) {
        // console.log("===");
        console.log(this.elem);
        console.log('I ran from submit');
    for(let s=0; s<this.elem.length; s++) {
      const rowFB: journalentrydetailModel = {
        journalEntryDetailId: this.elem[s].journalEntryDetailId1,
        journalEntryId: this.pModel.journalEntryId,
        accountId: this.elem[s].accountId1,
        customerId:this.elem[s].customerId1,
      supplierId:this.elem[s].supplierId1,
      costCenterId:this.elem[s].costCenterId1,
      shareholderId:this.elem[s].shareholderId1,
      sysCompanyId:this.elem[s].sysCompanyId1,
      showShare:this.elem[s].showShare1,
      showSupplier:this.elem[s].showSupplier1,
      showCustomer:this.elem[s].showCustomer1,
      showCost:this.elem[s].showCost1,
        debit: this.elem[s].debit1,
        reference: this.elem[s].reference,
        narration: this.elem[s].narration,
        relatedJournalEntryDetailId: 1,
        credit: this.elem[s].credit1,
        'active': true,
        entryMode: "A",
        readOnly: false,
        auditColumns: this.elem[s].auditColumns
      };
      
      console.log(rowFB);
      this.pModel.journalEntryDetailEntry.push(rowFB);
    }
    
    
  
      // form.journalEntryId = this.pModel.journalEntryId;
      // form = this.pModel;
      this._ui.loadingStateChanged.next(true);
  
      // if (this.validateForm(form) !== true) {
      //     this._ui.loadingStateChanged.next(false);
      //     return false;
      // }
  
      // form.auditColumns = this._auth.getAuditColumns();
      // form.entryMode = this.pModel.entryMode;
  
      try {
          // Calling the service(api) to submit the data
          this._myService.getJournalEntrySubmit(this.pModel)!.subscribe((result: APIResultModel) => {
              if (result.errorNo === 0) {
                  this._ui.loadingStateChanged.next(false);
                  if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
                    this._msg.showInfo("Message", "Saved succesfully");
                  this.dialogRef.close();
                  }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
                    this._msg.showInfo("رسالة", "تم الحفظ بنجاح");
                  this.dialogRef.close();
                  }
              } else {
                  this._ui.loadingStateChanged.next(false);
                  if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
                    this._msg.showInfo("Message", "Error!!");
                  this.dialogRef.close();
                  }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
                    
                    this._msg.showInfo("رسالة", "توجد مشكلة");
                  this.dialogRef.close();
                  }
              }
          }, error => {
              this._ui.loadingStateChanged.next(false);
              if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
                this._msg.showInfo("Message", "Error!!");
              this.dialogRef.close();
              }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
                
                this._msg.showInfo("رسالة", "توجد مشكلة");
              this.dialogRef.close();
              }
            });
      } catch (error) {
          this._ui.loadingStateChanged.next(false);
          if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
            this._msg.showInfo("Message", "Error!!");
          this.dialogRef.close();
          }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
            
            this._msg.showInfo("رسالة", "توجد مشكلة");
          this.dialogRef.close();
          }
      }
        
        
      }else {
        // console.log("!=");
        console.log(this.elem);
        this.alertify.error("Debits doesn't equal Credits")
        
      }
    }else {
      this.alertify.error("Debit can't equal Credit in the same line")
    }
   }else {
    this.alertify.error("Account is not selected")
   }
    
  };

  onCancel() {
      this.dialogRef.close();
  }

  validateForm(form: JournalEntryModel) {
      if (this.pModel.entryMode === 'E') {



      }



      return true;
  }
}
