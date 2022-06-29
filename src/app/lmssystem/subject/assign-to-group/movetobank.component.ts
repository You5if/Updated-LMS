import { Direction } from '@angular/cdk/bidi';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppGlobals } from 'src/app/app.global';
import { CommonService } from 'src/app/components/common/common.service';
import { SelectService } from 'src/app/components/common/select.service';
import { MessageBoxService } from 'src/app/components/messagebox/message-box.service';
import { SelectModel } from 'src/app/components/misc/SelectModel';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';
import { Send } from 'src/app/send.model';
import { AssignClassBatch, AssignClassBatchModel } from '../subject.model';
import { subjectService } from '../subject.service';



@Component({
  selector: 'app-movetobank',
  templateUrl: './movetobank.component.html',
  styleUrls: ['./movetobank.component.scss']
})
export class AssignToClassComponent implements OnInit {

  submit!: string;
  disabled: boolean = true
    cancel!: string;
    direction!: Direction;
    header!: string;
    banks!: SelectModel[];
    bankAccountId!: number
    bankAccount!: string

    jsonToSend: AssignClassBatchModel = {
      record: [],
      schoolClassId: null 
    }

    ver2: any;



  constructor(
    private dialogRef: MatDialogRef<AssignToClassComponent>,
    @Inject(MAT_DIALOG_DATA) public pModel: any,
    private _globals: AppGlobals,
    private _msg: MessageBoxService,
    private _select: SelectService,
    private _ui: UIService,
    private _cf: CommonService,
    private chequetocompanyservice: subjectService
  ) { }

  ngOnInit() {
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      this.direction = "ltr"
      this.submit = "Assign"
      this.cancel = "Cancel"
      this.bankAccount = "Class"
      this.header = "Assign to"
      
    }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
      this.direction = "rtl"
      this.submit = "تعيين"
      this.bankAccount = "الفصول"
      this.cancel = "الغاء"
      this.header = "تعيين الى"
     

    }
    console.log(this.pModel);
    
    //http://lmsapi.autopay-mcs.com/api/Ddl/getdropdown/schoolclassid/schoolclass/scclassname/active=1 and deleted=0 and schoolclassid>1/false
    this._select.getDropdown("schoolclassid", "schoolclass", "scclassname", "active=1 and deleted=0 and schoolclassid>1", false).subscribe((res: SelectModel[]) => {
      this.banks = res
      
    });
    
    // for (let i = 0; i < this.pModel.selected.length; i++) {
    //   this.ver2 = this.pModel.selected[i]
    //   if (this.ver2 && this.ver2.isMoved) {
    //     this.pModel.selected.splice(i, 1)
    //   }
      
    // }

    // const filteredHomes = this.pModel.selected.homes.filter( x => 
    //   x.price <= 1000 && 
    //   x.sqft >= 500 && 
    //   x.num_of_beds >=2 && 
    //   x.num_of_baths >= 2.5
    // );
    
    console.log(this.pModel.selected);
    

  }
  onChangeBank(id: number) {
    this.disabled = false
    this.jsonToSend.schoolClassId = id
    
    this.pModel.selected.forEach((selected:any) => {
      var newChequeId : AssignClassBatch = {
        subjectId: null
      }
      newChequeId.subjectId = selected.subjectId
      this.jsonToSend.record.push(newChequeId)
      // newChequeId.chequeToCompanyId = null
    })

    

  }
  onApply () {
    console.log(JSON.stringify(this.jsonToSend));

    this.chequetocompanyservice.moveToBank(this.jsonToSend).subscribe((response) => {
      console.log(response);
      this._msg.showInfo("Message", "Moved succesfully");
      this.dialogRef.close();
    }, error => {
      this._msg.showInfo("Message", "Error!!");
            this.dialogRef.close();
    })
  }
  onCancel() {
    this.dialogRef.close();
  }

}
