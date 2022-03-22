import { Component, OnInit, Inject } from '@angular/core';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';
import { MessageBoxService } from 'src/app/components/messagebox/message-box.service';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { CommonService } from 'src/app/components/common/common.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIResultModel } from 'src/app/components/misc/APIResult.Model';
import { Observable, of } from 'rxjs';
import { SelectModel, SelectCodeModel } from 'src/app/components/misc/SelectModel';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, switchMap, map } from 'rxjs/operators';
import { SelectService } from 'src/app/components/common/select.service';
import { AppGlobals } from 'src/app/app.global';
import { Send } from 'src/app/send.model';
import { Sources } from 'src/app/source.model';
import { TripShiftEntryService } from './tripshift-entry.service';
import { productPricingModel } from 'src/app/system/AnotherComponents/invoice/invoice.model';
import { TripShiftModel } from '../tripshift.model';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-tripshift-entry',
  templateUrl: './tripshift-entry.component.html',
  styleUrls: ['./tripshift-entry.component.scss']
})

export class TripShiftEntryComponent implements OnInit {

  checkParentAccountId!:any
	url!: string;
  total!: number;
  totalTax!: number;
  totalE!: string;
  subTotalE!: string;
  subTotal!: number;
  model2!: Send ;
  childElemInit: Sources[] = [];
  verCh2!: Sources;
  childElemDark: Sources[] = [];
  vale!: Sources[]
  childElem: any = {
    records: [],
    auditColumn: {
      approvalStatusId: 1100001,
      companyId: 10001,
      branchId: 201,
      financialYearId: 1,
      userId: 1,
      mACAddress: "unidentified",
      hostName: "unidentified",
      iPAddress: "unidentified",
      deviceType: "Win32"
    }
  }
  childElem2: any = {
    records: [],
    auditColumn: {
      approvalStatusId: 1100001,
      companyId: 10001,
      branchId: 201,
      financialYearId: 1,
      userId: 1,
      mACAddress: "unidentified",
      hostName: "unidentified",
      iPAddress: "unidentified",
      deviceType: "Win32"
    }
  }
    model: Send = {
      tableId: 97,
      recordId: 0,
      userId: +this._auth.getUserId(),
      roleId: Number(localStorage.getItem('role')),
      languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
    };

    last: any = {
      records: [],
      child1: [],
      auditColumn: {
        approvalStatusId: 1100001,
        companyId: 10001,
        branchId: 201,
        financialYearId: 1,
        userId: 1,
        mACAddress: "unidentified",
        hostName: "unidentified",
        iPAddress: "unidentified",
        deviceType: "Win32"
      }
    }
    lastDark: any = {
      records: [],
      child1: [],
      child2: [],
      auditColumn: {
        approvalStatusId: 1100001,
        companyId: 10001,
        branchId: 201,
        financialYearId: 1,
        userId: 1,
        mACAddress: "unidentified",
        hostName: "unidentified",
        iPAddress: "unidentified",
        deviceType: "Win32"
      }
  
    }
    myFormGroup!: FormGroup;
    alarray!: Sources[];
    breakpoint!: number;
    checked= false;
    checkedR = false;
    disabled = false;
    sources: Sources[] = [];
    res: any;
    spacepoint: any;
    spacezone!: boolean;
    data!: Sources[];
    ver!: Sources;
    maxSize!: number;
    submit!: string;
    cancel!: string;
    stringOfV!: string;
  refString!: string;
    light: Sources[] = [];
    dark: Sources[] = [];
  
    ver2!: Sources;
    ver3!: Sources;
    ver4!: Sources;
    obj1!: Sources;
    obj2!: Sources;
    records: Sources[] = []
    direction!: Direction;
    dropItem!: Sources;
    dropItemchild!: Sources;
    dropItemTax!: Sources;
    container: any[][] =[];
  
   
  
    accountList: SelectModel[] = [];
  
    dialog_title: string|null = localStorage.getItem(this._globals.baseAppName + '_Add&Edit');
  
    dropList: Sources[] = [];
    dropListItem: Sources[] = [];
    dropListTax: Sources[] = [];
    // childElem: Sources[] = [];
 
    childElemInit3: Sources[] = [];
    child1Data: any;
  constructor(
	  private dapiService: TripShiftEntryService,
      private _ui: UIService,
      private _msg: MessageBoxService,
      private _auth: AuthService,
      private _globals: AppGlobals,
      private _select: SelectService,
      private dialogRef: MatDialogRef<TripShiftEntryComponent>,
      @Inject(MAT_DIALOG_DATA) public pModel: Send
  ) { }

  ngOnInit() {
   

    this.child1Data = this.last.child1;
    
    if(localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Add") {
      this.addChild1Item(0)
      console.log(this.lastDark);
      
      
      
    }
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
        this.direction = "ltr"
        this.submit = "Submit"
        this.cancel = "Cancel"
      }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
        this.direction = "rtl"
        this.submit = "ارسال"
        this.cancel = "الغاء"
      }

      this._ui.loadingStateChanged.next(true);
      this.dapiService.Controllers(this.pModel).subscribe(res => {
        this._ui.loadingStateChanged.next(false);
        this.data = res;
        if(localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Edit") {
          if(this.data.length > 0) {
    
            this.dapiService.getChildItembyChild(+this.data[0].value).subscribe((res) => {
      
            this._ui.loadingStateChanged.next(false);
            
              // console.log("EditRes",res)
    
              
              for(let k=0;k<res.length;k++){
                this.addChild1Item(res[k].tripShiftId)
              }
    
              
              
              
            }
            )
            
          }else {
            this.addChild1Item(0)
          }
          
        }
        for(let i=0;i<=this.data.length;i++){
          this.ver2 = this.data[i]
          if (this.ver2 && this.ver2.inTransaction && this.ver2.access != "NoAccess"){
            if (this.ver2.type === "dropdown") {
              this.dropList.push(this.ver2);
              console.log("droplist: ",this.dropList)
            }
            this.light.push(this.ver2);
  
          }else{
            if(this.ver2) {
              this.dark.push(this.ver2);
            }
          }
        }
        this.breakpoint =
        window.innerWidth <= 960
          ? 1
          : this.data[0].maxRowSize;
  
        for(let k=0;k<=this.dropList.length;k++) {
          this.dropItem = this.dropList[k]
  
          this._select.getDropdown(this.dropItem.refId, this.dropItem.refTable, this.dropItem.refColumn, this.dropItem.refCondition, false).subscribe((res: SelectModel[]) => {
          this.dropList[k].myarray = res;
          this.container.push(res);
      });
  
        }  
      })
  }

  onParent(){}

  onAmountChange(a:any){}

  onChange1(a:any,b:any){}

  addChild1Item(id:number) {
    
    let myElem = {
      records: []as any[],
      auditColumn: {
        approvalStatusId: 1100001,
        companyId: 10001,
        branchId: 201,
        financialYearId: 1,
        userId: 1,
        mACAddress: "unidentified",
        hostName: "unidentified",
        iPAddress: "unidentified",
        deviceType: "Win32"
      }
    }
    let childElemDark2 = {
      records: []as any[],
      auditColumn: {
        approvalStatusId: 1100001,
        companyId: 10001,
        branchId: 201,
        financialYearId: 1,
        userId: 1,
        mACAddress: "unidentified",
        hostName: "unidentified",
        iPAddress: "unidentified",
        deviceType: "Win32"
      }
    }
    this.model2 = {
      tableId: 98,
      recordId: id,
      userId: 26,
      roleId: 2,
      languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
    };
    this._ui.loadingStateChanged.next(true);
    this.dapiService.child1ItemControllers(this.model2).subscribe((res) => {
      this._ui.loadingStateChanged.next(false);

      this.childElemInit = res
      console.log(this.childElemInit)
      

      for(let i=0;i<this.childElemInit.length;i++){
        this.verCh2 = this.childElemInit[i]
        childElemDark2.records.push(this.verCh2);
        

      }
      this.lastDark.child1.push(childElemDark2);
      this.childElemInit.forEach((itemE) =>{
        if (itemE && itemE.inTransaction && itemE.access != "NoAccess"){
          
          // this.childElem.records.push(itemE);
          myElem.records.push(itemE)
          
  
        }else{
          
            this.childElemDark.push(this.verCh2);
            // console.log(this.childElemDark)
          
  
  
        }
      })
      // this.last.child1.splice(0, 1)
      // this.childElem = res
      // console.log(JSON.stringify(this.child1Data))
      
      this.childElem2 = null
      this.childElem2 = this.childElem

      //this.last.child1.push(this.childElem2);
      if (localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Add") {
        if (this.last.child1.length == 0) {
          myElem.records.forEach((ele) => {
            if (ele.tableColumnId == 155) {
              ele.value = "Base account"
            }
            if (ele.tableColumnId == 156) {
              ele.value = "Base"
            }
          })
        }
      }
      this.last.child1.push(myElem)
      
     
      
    })

    // if(localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Add") {
        
    //   this.lastDark.child1[0].records[3].value = "Base"
    //   this.lastDark.child1[0].records[4].value = "Base account"
      
      
    // }

    
    console.log("child1 final", this.last)
    console.log("DarlDarl",this.lastDark)
    

    
    
  }
  deleteFun(id: number) {
    console.log('I ran from delete');
    // this.elem.splice(id, 1);
    this.last.child1.splice(id, 1)
    this.lastDark.child1.splice(id, 1)
    if(this.last.child1.length == 0){
      this.addChild1Item(0)
    }
    
    }
  onSubmit() {
    this.data.forEach((Object)=> this.light.forEach((obj)=>
    {
      if(Object.tableColumnId === obj.tableColumnId){
        Object.value = obj.value
      }
    }));
	
    // for(let i=0;i<=this.data.length;i++){
    //   this.obj1 = this.data[i];
    //    if(this.obj1 ){
    //      this.last.records.push(this.obj1);
    //    }
    //  }
     for(let i=0;i<=this.data.length;i++){
      this.obj1 = this.data[i];
       if(this.obj1 ){
        //  this.last.records.push(this.obj1);
         this.lastDark.records.push(this.obj1);
       }
     }
     this.lastDark.records.sort(function(a:any, b:any) { 
      return a.applicationOrder - b.applicationOrder  ||  a.label.localeCompare(b.label);
    });
    for (let i = 0; i < this.lastDark.child1.length; i++) {
      this.lastDark.child1[i].records.sort(function(a:any, b:any) { 
        return a.applicationOrder - b.applicationOrder  ||  a.label.localeCompare(b.label);
      });
    }
    
          if(this.lastDark.records[0].entryMode == "A"){
           //this.last.auditColumn = this._auth.getAuditColumns();
           this.dapiService.EntryA(this.lastDark).subscribe(nexto => {
             this.res = nexto;
             if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
              this._msg.showInfo("Message", "saved succesfully");
            this.dialogRef.close();
            }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
              this._msg.showInfo("رسالة", "تم الحفظ بنجاح");
            this.dialogRef.close();
            }
     
           }, error => {
             console.log(error);
             if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
              this._msg.showInfo("Message", "Error!!");
            this.dialogRef.close();
            }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
              this._msg.showInfo("رسالة", "توجد مشكلة");
            this.dialogRef.close();
            }
           });
         }else if(this.lastDark.records[0].entryMode == "E"){
           //this.last.auditColumn = this._auth.getAuditColumns();
           this.dapiService.EntryE(this.lastDark).subscribe(nexto => {
             this.res = nexto;
             if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
              this._msg.showInfo("Message", "saved succesfully");
            this.dialogRef.close();
            }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
              this._msg.showInfo("رسالة", "تم الحفظ بنجاح");
            this.dialogRef.close();
            }
     
           }, error => {
             if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
              this._msg.showInfo("Message", "Error!!");
            this.dialogRef.close();
            }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
              
              this._msg.showInfo("خطأ!!", "توجد مشكلة");
            this.dialogRef.close();
            }
           });
         }
      }
      onChangeValue(id: number, id2: number) {
        this._ui.loadingStateChanged.next(true);
        
        this.dapiService.getProductPricing2(id, +this.data[6].value, this.data[2].value).subscribe((resu:  TripShiftModel) => {
          this._ui.loadingStateChanged.next(false);
          console.log(resu)
          this.alarray = this.last.child1[id2].records
          console.log(this.alarray)
          this.alarray.forEach((element) => {
            if(element.tableColumnId == 292){
              element.myarray = resu
            }
          });
        })
        // for (let i = 0; i < this.alarray[2].myarray.length; i++) {
        //   if (this.alarray[2].myarray[i].unitId == id) {
        //     this.alarray[3].value = this.alarray[2].myarray[i].unitPrice
        //     this.alarray[4].value = (+this.alarray[1].value * this.alarray[2].myarray[i].unitPrice).toString()
        //   }
          
        // }
        
      }

  onResize(event:any) {
    this.spacepoint =
      event.target.innerWidth <= 960
        ? (this.spacezone = false)
        : (this.spacezone = true);
    this.breakpoint =
      event.target.innerWidth <= 960
        ? 1
        : this.data[0].maxRowSize;
  }
  allTotal() {
    console.log(this.data);
    console.log(this.lastDark);
    console.log(this.lastDark.child1.length);

    
    this.totalTax = 0
    this.total = 0
    if(this.data[3].value == "24001"){
      var per: number
      console.log(this.data[4].value);
      per = +this.data[4].value / 100
      this.subTotal = 0
    for (let i = 0; i < this.lastDark.child1.length; i++) {
      if (this.lastDark.child1[i] && this.lastDark.child1[i].records[3].tableColumnId == 291) {
        this.subTotal += (this.lastDark.child1[i].records[3].value * this.lastDark.child1[i].records[5].value )
        console.log(this.subTotal);
      }
    }
    this.subTotal = this.subTotal - (this.subTotal * per)
    
      
    }else if(this.data[3].value == "24002"){
      
      this.subTotal = 0
    for (let i = 0; i < this.lastDark.child1.length; i++) {
      if (this.lastDark.child1[i] && this.lastDark.child1[i].records[3].tableColumnId == 291) {
        this.subTotal += (this.lastDark.child1[i].records[3].value * this.lastDark.child1[i].records[5].value )
        console.log(this.subTotal);
      }
    }
    this.subTotal  = this.subTotal - +this.data[4].value 
      
    }else{
      
      this.subTotal = 0
    for (let i = 0; i < this.lastDark.child1.length; i++) {
      if (this.lastDark.child1[i] && this.lastDark.child1[i].records[3].tableColumnId == 291) {
        this.subTotal += (this.lastDark.child1[i].records[3].value * this.lastDark.child1[i].records[5].value )
        console.log(this.subTotal);
      }
    }
    this.subTotal  = this.subTotal - +this.data[4].value 
      
    }
    if (this.lastDark.child2.length > 0) {
      this.totalTax = 0
      
      console.log(this.lastDark.child2.length);
      
    for (let i = 0; i < this.lastDark.child2.length; i++) {
      var taxi = 0
      var totali = 0
      if (this.lastDark.child2[i] && this.lastDark.child2[i].records[2].tableColumnId == 298) {
        this._select.getDropdown("taxId", "tax", "convert(nvarchar,taxAmount)", "active=1 and deleted=0 and taxId="+this.lastDark.child2[i].records[2].value, false).subscribe((result) => {
          taxi += +result[0].name
          console.log("totalTax",taxi);
          console.log("sub",this.subTotal);
          console.log("total",this.total);
          totali = this.subTotal + (this.subTotal * taxi / 100)
          this.total = totali
      })
      }
      
    }
    
    }else {
      this.total = this.subTotal
    }
  }
 
  
  

  onCancel() {
    this.dialogRef.close();
  }
}

