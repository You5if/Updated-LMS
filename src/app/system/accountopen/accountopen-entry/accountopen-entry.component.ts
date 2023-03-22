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
import { accountOpenEntryService } from './accountopen-entry.service';
import { Direction } from '@angular/cdk/bidi';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-accountopen-entry',
  templateUrl: './accountopen-entry.component.html',
  styleUrls: ['./accountopen-entry.component.scss']
})

export class accountOpenEntryComponent implements OnInit {

	url!: string;

    model: Send = {
      tableId: 123,
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
    myFormGroup!: FormGroup;

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
  
    light: Sources[] = [];
    dark: Sources[] = [];
  
    ver2!: Sources;
    ver3!: Sources;
    ver4!: Sources;
    obj1!: Sources;
    obj2!: Sources;
  
    direction!: Direction;
  
    dropItem!: Sources;
    container: any[][] =[];
  
    accountList: SelectModel[] = [];
  
    dialog_title: string |null= localStorage.getItem(this._globals.baseAppName + '_Add&Edit');
  
    dropList: Sources[] = [];


  constructor(
	  private dapiService: accountOpenEntryService,
      private _ui: UIService,
      private _msg: MessageBoxService,
      private _auth: AuthService,
      private _globals: AppGlobals,
      private alertify: AlertifyService,
      private _select: SelectService,
      private dialogRef: MatDialogRef<accountOpenEntryComponent>,
      @Inject(MAT_DIALOG_DATA) public pModel: Send
  ) { }

  ngOnInit() {
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

  onSubmit() {
    if (this.data[1].value != "0") {
      if ((Number(this.data[2].value) == 0 && Number(this.data[3].value) > 0) || (Number(this.data[3].value) == 0 && Number(this.data[2].value) > 0) ) {
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
            this.last.auditColumn = this._auth.getAuditColumns();
            this.dapiService.EntryA(this.last).subscribe(nexto => {
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
          }else if(this.last.records[0].entryMode == "E"){
            this.last.auditColumn = this._auth.getAuditColumns();
            this.dapiService.EntryE(this.last).subscribe(nexto => {
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
      }else {
        this.alertify.error("Check Debit and Credit!")
      }
    
        }else {
          this.alertify.error("Account is not selected")
        }


      }

      onParent() {}

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

  onCancel() {
    this.dialogRef.close();
  }
}

