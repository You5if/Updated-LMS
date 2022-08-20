import { Component, OnInit, Inject } from '@angular/core';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';
import { MessageBoxService } from 'src/app/components/messagebox/message-box.service';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { CommonService } from 'src/app/components/common/common.service';
import { APIResultModel } from 'src/app/components/misc/APIResult.Model';
import { Observable, of } from 'rxjs';
import { SelectModel, SelectCodeModel } from 'src/app/components/misc/SelectModel';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, switchMap, map } from 'rxjs/operators';
import { SelectService } from 'src/app/components/common/select.service';
import { AppGlobals } from 'src/app/app.global';
import { Send } from 'src/app/send.model';
import { Sources } from 'src/app/source.model';
import { ServiceEnEntryService } from './serviceen-entry.service';
import { Direction } from '@angular/cdk/bidi';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-serviceen-entry',
  templateUrl: './serviceen-entry.component.html',
  styleUrls: ['./serviceen-entry.component.scss']
})

export class ItemServiceEntry2Component implements OnInit {

	url!: string;

    model: Send = {
      tableId: 120,
      recordId: 0,
      userId: +this._auth.getUserId(),
      roleId: Number(localStorage.getItem('role')),
      languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
    };

    last: any = {
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
    last1: any = {
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
    last2: any = {
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
    last3: any = {
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
    last4: any = {
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
    myFormGroup!: FormGroup;
    fetchBtn!: Sources
    breakpoint!: number;
    checked= false;
    checkedR = false;
    disabled = false;
    sources: Sources[] = [];
    res: any;
    spacepoint: any;
    spacezone!: boolean;
    data!: Sources[];
    data1!: Sources[];
    data2!: Sources[];
    data3!: Sources[];
    data4!: Sources[];
    showFetchBtn: boolean = false
    ver!: Sources;
    maxSize!: number;
    submit!: string;
    cancel!: string;
    fetchDone:boolean = false
    fetch!:string;
  
    light: Sources[] = [];
    dark: Sources[] = [];

    light1: Sources[] = [];
    dark1: Sources[] = [];

    light2: Sources[] = [];
    dark2: Sources[] = [];

    light3: Sources[] = [];
    dark3: Sources[] = [];

    light4: Sources[] = [];
    dark4: Sources[] = [];
  
    ver2!: Sources;
    ver21!: Sources;
    ver22!: Sources;
    ver23!: Sources;
    ver24!: Sources;
    
    obj1!: Sources;
    obj11!: Sources;
    obj12!: Sources;
    obj13!: Sources;
    obj14!: Sources;
    obj2!: Sources;
  
    direction!: Direction;
  
    dropItem!: Sources;
    container: any[][] =[];
  
    accountList: SelectModel[] = [];
  
    dialog_title: string|null = localStorage.getItem(this._globals.baseAppName + '_Add&Edit');
  
    dropList: Sources[] = [];
    dropList1: Sources[] = [];
    dropList2: Sources[] = [];
    dropList3: Sources[] = [];
    dropList4: Sources[] = [];
  stringOfV!: string;
  refString!: string;
  showFetchBtn1: boolean = false;
  total: number = 0;


  constructor(
	  private dapiService: ServiceEnEntryService,
      private _ui: UIService,
      private _msg: MessageBoxService,
      private _auth: AuthService,
      private _globals: AppGlobals,
      private _select: SelectService,
      private dialogRef: MatDialogRef<ItemServiceEntry2Component>,
      @Inject(MAT_DIALOG_DATA) public pModel: Send
  ) { }

  ngOnInit() {
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
        this.direction = "ltr"
        this.submit = "Submit"
        this.cancel = "Cancel"
        this.fetch = "Fetch"
      }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
        this.direction = "rtl"
        this.submit = "ارسال"
        this.cancel = "الغاء"
        this.fetch = "ادخال"
      }

      this._ui.loadingStateChanged.next(true);
      this.dapiService.Controllers(this.pModel).subscribe(res => {
        this._ui.loadingStateChanged.next(false);
        this.data = res;
        this.data[1].value = "12"
        this.data[2].value = "113"
        this.data[1].access = "NoAccess"
        this.data[2].access = "NoAccess"
        this.data[3].label = "Item"
        // this.data[4].access = "NoAccess"
        // this.data[5].access = "NoAccess"
        // this.data[6].access = "NoAccess"
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

  onFetch() {
    var sGroup : string
    for (let s = 0; s < this.data[2].myarray.length; s++) {
      if (this.data[2].myarray[s].id.toString() === this.data[2].value.toString()) {
        sGroup = this.data[2].myarray[s].name
      }
      
    }
    this.fetchDone = true
    this._ui.loadingStateChanged.next(true);
    this.dapiService.Controllers(this.pModel).subscribe(res => {
      this._ui.loadingStateChanged.next(false);
      this.data1 = res;
      this.data1[1].access = "NoAccess"
      this.data1[2].access = "NoAccess"

      this.data1[1].value = this.data[1].value
      this.data1[2].value = this.data[2].value
      this.data1[3].value = sGroup +"_Registration fees"
      
      for(let i=0;i<=this.data1.length;i++){
        this.ver21 = this.data1[i]
        if (this.ver21 && this.ver21.inTransaction && this.ver21.access != "NoAccess"){
          if (this.ver21.type === "dropdown") {
            this.dropList1.push(this.ver21);
            console.log("droplist: ",this.dropList1)
          }
          this.light1.push(this.ver21);

        }else{
          if(this.ver21) {
            this.dark1.push(this.ver21);
          }
        }
      }
      this.breakpoint =
      window.innerWidth <= 960
        ? 1
        : this.data[0].maxRowSize;

      
    })
    this._ui.loadingStateChanged.next(true);
    this.dapiService.Controllers(this.pModel).subscribe(res => {
      this._ui.loadingStateChanged.next(false);
      this.data2 = res;
      this.data2[1].access = "NoAccess"
      this.data2[2].access = "NoAccess"

      this.data2[1].value = this.data[1].value
      this.data2[2].value = this.data[2].value
      this.data2[3].value = sGroup +"_Tuition fees"
      
      for(let i=0;i<=this.data2.length;i++){
        this.ver22 = this.data2[i]
        if (this.ver22 && this.ver22.inTransaction && this.ver22.access != "NoAccess"){
          if (this.ver22.type === "dropdown") {
            this.dropList2.push(this.ver22);
            console.log("droplist: ",this.dropList2)
          }
          this.light2.push(this.ver22);

        }else{
          if(this.ver22) {
            this.dark2.push(this.ver22);
          }
        }
      }
      this.breakpoint =
      window.innerWidth <= 960
        ? 1
        : this.data[0].maxRowSize;

      
    })
    this._ui.loadingStateChanged.next(true);
    this.dapiService.Controllers(this.pModel).subscribe(res => {
      this._ui.loadingStateChanged.next(false);
      this.data3 = res;
      this.data3[1].access = "NoAccess"
      this.data3[2].access = "NoAccess"

      this.data3[1].value = this.data[1].value
      this.data3[2].value = this.data[2].value
      this.data3[3].value = sGroup +"_Books and Uniform fees"
      
      for(let i=0;i<=this.data3.length;i++){
        this.ver23 = this.data3[i]
        if (this.ver23 && this.ver23.inTransaction && this.ver23.access != "NoAccess"){
          if (this.ver23.type === "dropdown") {
            this.dropList3.push(this.ver23);
            console.log("droplist: ",this.dropList3)
          }
          this.light3.push(this.ver23);

        }else{
          if(this.ver23) {
            this.dark3.push(this.ver23);
          }
        }
      }
      this.breakpoint =
      window.innerWidth <= 960
        ? 1
        : this.data[0].maxRowSize;

      
    })
    this._ui.loadingStateChanged.next(true);
    this.dapiService.Controllers(this.pModel).subscribe(res => {
      this._ui.loadingStateChanged.next(false);
      this.data4 = res;
      this.data4[1].access = "NoAccess"
      this.data4[2].access = "NoAccess"

      this.data4[1].value = this.data[1].value
      this.data4[2].value = this.data[2].value
      this.data4[3].value = sGroup +"_Activity fees"
      
      for(let i=0;i<=this.data4.length;i++){
        this.ver24 = this.data4[i]
        if (this.ver24 && this.ver24.inTransaction && this.ver24.access != "NoAccess"){
          if (this.ver24.type === "dropdown") {
            this.dropList4.push(this.ver24);
            console.log("droplist: ",this.dropList4)
          }
          this.light4.push(this.ver24);

        }else{
          if(this.ver24) {
            this.dark4.push(this.ver24);
          }
        }
      }
      this.breakpoint =
      window.innerWidth <= 960
        ? 1
        : this.data[0].maxRowSize;

      
    })
  }

  onGroup(id: number) {
    if (this.showFetchBtn1) { 
      this.showFetchBtn = true
    }else {
      this.showFetchBtn = false
    }
  }

  onAmountChange() {
    this.total = 0
    this.total = Number(this.data1[4].value) + Number(this.data2[4].value) + Number(this.data3[4].value)+ Number(this.data4[4].value)
  }
  onAmountChange2() {
    this.total = 0
    this.total = Number(this.data[4].value)
  }

  onCategory(id: number) {
    this.total = 0
    if (id === 9) {
      this.showFetchBtn = false
      this.showFetchBtn1 = false
      this.light.splice(2, 4);
      this.data[2].value = ""
      this.data[3].access = "Editable"
        this.data[4].access = "Editable"
        this.data[5].access = "Editable"
        this.data[6].access = "Editable"
        
        this.light.push(this.data[3]);
        this.light.push(this.data[4]);
        this.light.push(this.data[5]);
        this.light.push(this.data[6]);
    }else if (id === 10) {
      this.showFetchBtn = false
      this.showFetchBtn1 = true

      this.light.splice(2, 4);
        
      this.data[3].access = "NoAccess"
        this.data[4].access = "NoAccess"
        this.data[5].access = "NoAccess"
        this.data[6].access = "NoAccess"
      this.data[2].value = ""
      this.data[3].value = ""
        this.data[4].value = ""
        this.data[5].value = ""
        this.data[6].value = ""
        
    }
    this.stringOfV = id.toString()
    console.log("working fine")
    for(let k=0;k<=this.dropList.length;k++) {
      
      if(this.dropList[k].tableColumnId == 1032) {
        this.dropItem = this.dropList[k]
        this.refString = this.dropItem.refCondition + this.stringOfV
        this._select.getDropdown(this.dropItem.refId, this.dropItem.refTable, this.dropItem.refColumn, this.refString, false).subscribe((res: SelectModel[]) => {
          console.log("drop: ", res);
          this.dropList[k].myarray = res;
          this.container.push(res);
          console.log(this.container)
  
  
      });
      
      }
      

    }
  }

  onSubmit() {
    this.data.forEach((Object)=> this.light.forEach((obj)=>
    {
      if(Object.tableColumnId === obj.tableColumnId){
        Object.value = obj.value
      }
    }));
	
    for(let i=0;i<=this.data.length;i++){
      this.obj1 = this.data[i];
       if(this.obj1 ){
         this.last.records.push(this.obj1);
       }
     }


    
    

     
      //  console.log(this.last);
       
      if(this.last.records[0].entryMode == "A"){
        console.log('Last:', JSON.stringify(this.last));
       this.dapiService.EntryA(this.last).subscribe(nexto => {
         this.res = nexto;
         if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
          this._msg.showInfo("Message", "Saved succesfully");
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
     }else if(this.last.records[0].entryMode == "E"){
       this.dapiService.EntryE(this.last).subscribe(nexto => {
         this.res = nexto;
         if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
          this._msg.showInfo("Message", "Saved succesfully");
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
          
          this._msg.showInfo("خطأ!!", "توجد مشكلة");
        this.dialogRef.close();
        }
       });
     }
     

     
        //   if(this.last.records[0].entryMode == "A"){
        //    this.last.auditColumn = this._auth.getAuditColumns();
        //    this.dapiService.EntryA(this.last).subscribe(nexto => {
        //      this.res = nexto;
             
     
        //    }, error => {
        //      console.log(error);
        //      if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
        //       this._msg.showInfo("Message", "Error!!");
        //     this.dialogRef.close();
        //     }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
        //       this._msg.showInfo("رسالة", "توجد مشكلة");
        //     this.dialogRef.close();
        //     }
        //    });
        //  }

        
        
        
        
      }

  onResize(event: any) {
    this.spacepoint =
      event.target.innerWidth <= 960
        ? (this.spacezone = false)
        : (this.spacezone = true);
    this.breakpoint =
      event.target.innerWidth <= 960
        ? 1
        : this.data[0].maxRowSize;
  }

  onCancel() {
    this.dialogRef.close();
  }
}

