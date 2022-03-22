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
import { subTeSubmissionEntryService } from './subtesubmission-entry.service';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-subtesubmission-entry',
  templateUrl: './subtesubmission-entry.component.html',
  styleUrls: ['./subtesubmission-entry.component.scss']
})

export class subTeSubmissionEntryComponent implements OnInit {

	url!: string;
    model2!: Send ;
    model22!: Send ;
    model3!: Send ;
    model4!: Send ;
    model5!: Send ;
    childElemInit: Sources[] = [];
    childElemInit2: Sources[] = [];
    childElemInit3: Sources[] = [];
    childElemInit4: Sources[] = [];
    childElemInit5: Sources[] = [];
    verCh2!: Sources;
    verCh22!: Sources;
    verCh3!: Sources;
    verCh4!: Sources;
    verCh5!: Sources;
    inAppearance! : boolean;
    chAppearance !: boolean;
    childElemDark: Sources[] = [];
    childElemDark2: Sources[] = [];
    childElemDark3: Sources[] = [];
    childElemDark4: Sources[] = [];
    childElemDark5: Sources[] = [];
    vale!: Sources[]
    vale2!: Sources[]
    vale3!: Sources[]
    vale4!: Sources[]
    vale5!: Sources[]
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
    childElemT: any = {
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
    childElem3: any = {
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
    childElem4: any = {
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
    childElem5: any = {
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
    childElem2T: any = {
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
    childElem23: any = {
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
    childElem24: any = {
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
    childElem25: any = {
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
    last: any = {
      records: [],
      child1: [],
      child2: [],
      child3: [],
      child4: [],
      child5: [],
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
      child3: [],
      child4: [],
      child5: [],
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
      tableId: 118,
      recordId: 0,
      userId: 26,
      roleId: 2,
      languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
    };
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
    ver5!: Sources;
    obj1!: Sources;
    obj2!: Sources;
  
    direction!: Direction;
    dropListItem1: Sources[] = [];
    dropItemchild1!: Sources;
  
    dropItem!: Sources;
    container: any[][] =[];
  
    accountList: SelectModel[] = [];
  
    dialog_title: string|null = localStorage.getItem(this._globals.baseAppName + '_Add&Edit');
  
    dropList: Sources[] = [];


  constructor(
	  private dapiService: subTeSubmissionEntryService,
      private _ui: UIService,
      private _msg: MessageBoxService,
      private _auth: AuthService,
      private _globals: AppGlobals,
      private _select: SelectService,
      private dialogRef: MatDialogRef<subTeSubmissionEntryComponent>,
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
        console.log(this.data);
        
  
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
      tableId: 112,
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

      this.dropListItem1.push(this.childElemInit[2])
      this.dropListItem1.push(this.childElemInit[3])
      this.dropListItem1.push(this.childElemInit[7])
      this.dropListItem1.push(this.childElemInit[10])
      for(let k=0;k<this.dropListItem1.length;k++) {
        console.log("loop cycle" + k)
        this.dropItemchild1 = this.dropListItem1[k]
        console.log("DropitemTax", this.dropItemchild1)

            // this.tableId = this.dropItem.refId;
            // this.tableName = this.dropItem.refTable;
            // this.displayColumn = this.dropItem.refColumn;
            // this.condition = this.dropItem.refCondition;
            
            
              this._select.getDropdown(this.dropListItem1[k].refId, this.dropListItem1[k].refTable, this.dropListItem1[k].refColumn, this.dropListItem1[k].refCondition, false).subscribe((res: SelectModel[]) => {
                this.dropListItem1[k].myarray = res
              })

            

            
          
        
        // this.container.push(res);
        // console.log(this.container)


    
  }
      

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
      
      // this.childElem = res
      // console.log(JSON.stringify(this.child1Data))
      this.childElem2 = null
      this.childElem2 = this.childElem

      //this.last.child1.push(this.childElem2);
      this.last.child1.push(myElem)
     
      
    })
    console.log("child1 final", this.last)
    console.log("DarlDarl",this.lastDark)

    
  }

  onChangeValueC(a:any){}

  onChangePaymentType(a:any){}

  onChangePaymentAganist(a:any){}

  onAmountChange(a:any){}

  onChange1(a:any,b:any){}

  addChild2Item(id:number) {
    
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
    this.model22 = {
      tableId: 117,
      recordId: id,
      userId: 26,
      roleId: 2,
      languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
    };
    this._ui.loadingStateChanged.next(true);
    this.dapiService.child2ItemControllers(this.model22).subscribe((res) => {
      this._ui.loadingStateChanged.next(false);

      this.childElemInit2 = res
      console.log(this.childElemInit2)

      this.dropListItem1.push(this.childElemInit2[4])
      
      for(let k=0;k<this.dropListItem1.length;k++) {
        console.log("loop cycle" + k)
        this.dropItemchild1 = this.dropListItem1[k]
        console.log("DropitemTax", this.dropItemchild1)

            
              this._select.getDropdown(this.dropListItem1[k].refId, this.dropListItem1[k].refTable, this.dropListItem1[k].refColumn, this.dropListItem1[k].refCondition, false).subscribe((res: SelectModel[]) => {
                this.dropListItem1[k].myarray = res
              })


    
  }
      

      for(let i=0;i<this.childElemInit2.length;i++){
        this.verCh22 = this.childElemInit2[i]
        childElemDark2.records.push(this.verCh22);
        

      }
      this.lastDark.child2.push(childElemDark2);
      this.childElemInit2.forEach((itemE) =>{
        if (itemE && itemE.inTransaction && itemE.access != "NoAccess"){
          
          // this.childElem.records.push(itemE);
          myElem.records.push(itemE)
          
  
        }else{
          
            this.childElemDark2.push(this.verCh2);
            // console.log(this.childElemDark)
          
  
  
        }
      })
      
      // this.childElem = res
      // console.log(JSON.stringify(this.child1Data))
      this.childElem2T = null
      this.childElem2T = this.childElemT

      //this.last.child1.push(this.childElem2);
      this.last.child2.push(myElem)
     
      
    })
    console.log("child2 final", this.last)
    

    
  }

  addChild3Item(id:number) {
    
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
    this.model3 = {
      tableId: 114,
      recordId: id,
      userId: 26,
      roleId: 2,
      languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
    };
    this._ui.loadingStateChanged.next(true);
    this.dapiService.child3ItemControllers(this.model3).subscribe((res) => {
      this._ui.loadingStateChanged.next(false);

      this.childElemInit3 = res
      console.log(this.childElemInit3)

      this.dropListItem1.push(this.childElemInit3[2])
      
      for(let k=0;k<this.dropListItem1.length;k++) {
        console.log("loop cycle" + k)
        this.dropItemchild1 = this.dropListItem1[k]
        console.log("DropitemTax", this.dropItemchild1)

            
              this._select.getDropdown(this.dropListItem1[k].refId, this.dropListItem1[k].refTable, this.dropListItem1[k].refColumn, this.dropListItem1[k].refCondition, false).subscribe((res: SelectModel[]) => {
                this.dropListItem1[k].myarray = res
              })


    
  }
      

      for(let i=0;i<this.childElemInit3.length;i++){
        this.verCh3 = this.childElemInit3[i]
        childElemDark2.records.push(this.verCh3);
        

      }
      this.lastDark.child3.push(childElemDark2);
      this.childElemInit3.forEach((itemE) =>{
        if (itemE && itemE.inTransaction && itemE.access != "NoAccess"){
          
          // this.childElem.records.push(itemE);
          myElem.records.push(itemE)
          
  
        }else{
          
            this.childElemDark3.push(this.verCh3);
            // console.log(this.childElemDark)
          
  
  
        }
      })
      
      // this.childElem = res
      // console.log(JSON.stringify(this.child1Data))
      this.childElem23 = null
      this.childElem23 = this.childElem3

      //this.last.child1.push(this.childElem2);
      this.last.child3.push(myElem)
     
      
    })
    console.log("child3 final", this.last)
    console.log("DarlDarl",this.lastDark)

    
  }

  addChild4Item(id:number) {
    
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
    this.model4 = {
      tableId: 115,
      recordId: id,
      userId: 26,
      roleId: 2,
      languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
    };
    this._ui.loadingStateChanged.next(true);
    this.dapiService.child4ItemControllers(this.model4).subscribe((res) => {
      this._ui.loadingStateChanged.next(false);

      this.childElemInit4 = res
      console.log(this.childElemInit4)
      

      for(let i=0;i<this.childElemInit4.length;i++){
        this.verCh4 = this.childElemInit4[i]
        childElemDark2.records.push(this.verCh4);
        

      }
      this.lastDark.child4.push(childElemDark2);
      this.childElemInit4.forEach((itemE) =>{
        if (itemE && itemE.tableColumnId == 370){
          
          // this.childElem.records.push(itemE);
          myElem.records.push(itemE)
          
  
        }else{
          
            this.childElemDark4.push(this.verCh4);
            // console.log(this.childElemDark)
          
  
  
        }
      })
      
      // this.childElem = res
      // console.log(JSON.stringify(this.child1Data))
      this.childElem24 = null
      this.childElem24 = this.childElem4

      //this.last.child1.push(this.childElem2);
      this.last.child4.push(myElem)
     
      
    })
    console.log("child4 final", this.last)
    console.log("DarlDarl",this.lastDark)

    
  }
  addChild5Item(id:number) {
    
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
    this.model5 = {
      tableId: 116,
      recordId: id,
      userId: 26,
      roleId: 2,
      languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
    };
    this._ui.loadingStateChanged.next(true);
    this.dapiService.child4ItemControllers(this.model5).subscribe((res) => {
      this._ui.loadingStateChanged.next(false);

      this.childElemInit5 = res
      console.log(this.childElemInit5)
      

      for(let i=0;i<this.childElemInit5.length;i++){
        this.verCh5 = this.childElemInit5[i]
        childElemDark2.records.push(this.verCh5);
        

      }
      this.lastDark.child5.push(childElemDark2);
      this.childElemInit5.forEach((itemE) =>{
        if (itemE && itemE.tableColumnId == 370){
          
          // this.childElem.records.push(itemE);
          myElem.records.push(itemE)
          
  
        }else{
          
            this.childElemDark5.push(this.verCh5);
            // console.log(this.childElemDark)
          
  
  
        }
      })
      
      // this.childElem = res
      // console.log(JSON.stringify(this.child1Data))
      this.childElem25 = null
      this.childElem25 = this.childElem5

      //this.last.child1.push(this.childElem2);
      this.last.child5.push(myElem)
     
      
    })
    console.log("child5 final", this.last)
    console.log("DarlDarl",this.lastDark)

    
  }

  deleteFun(id: number) {
    console.log('I ran from delete');
    // this.elem.splice(id, 1);
    this.last.child1.splice(id, 1)
    if(this.last.child1.length == 0){
      this.addChild1Item(0)
    }
    this.lastDark.child1.splice(id, 1)
    }
  deleteFun2(id: number) {
    console.log('I ran from delete');
    // this.elem.splice(id, 1);
    this.last.child2.splice(id, 1)
    if(this.last.child2.length == 0){
      this.addChild2Item(0)
    }
    this.lastDark.child2.splice(id, 1)
    }
  deleteFun3(id: number) {
    console.log('I ran from delete');
    // this.elem.splice(id, 1);
    this.last.child3.splice(id, 1)
    if(this.last.child3.length == 0){
      this.addChild3Item(0)
    }
    this.lastDark.child3.splice(id, 1)
    }
  deleteFun4(id: number) {
    console.log('I ran from delete');
    // this.elem.splice(id, 1);
    this.last.child4.splice(id, 1)
    if(this.last.child4.length == 0){
      this.addChild4Item(0)
    }
    this.lastDark.child4.splice(id, 1)
    }

    onSubmit() {

      // this.data.forEach((Object)=> this.light.forEach((obj)=>
      // {
      //   if(Object.tableColumnId === obj.tableColumnId){
      //     Object.value = obj.value
      //   }
  
      // }));
      // this.childElemInit.forEach((Object)=> this.childElem.forEach((obj)=>
      // {
      //   if(Object.tableColumnId === obj.tableColumnId){
      //     Object.value = obj.value
      //   }
  
      // }));
  
      // console.log(JSON.stringify(this.data))
  
      for(let i=0;i<=this.data.length;i++){
        this.obj1 = this.data[i];
         if(this.obj1 ){
          //  this.last.records.push(this.obj1);
           this.lastDark.records.push(this.obj1);
         }
       }
  
      //  console.log(JSON.stringify(this.last));
      //  console.log("Dark",JSON.stringify(this.lastDark));
  
       for(let i=0; i< this.lastDark.child1.length;i++){
         this.lastDark.child1[i].records[0].value = "0"
        //  this.lastDark.child1[i].records[1].value = this.lastDark.records[0].value
         this.vale = this.lastDark.child1[i].records
         this.vale.forEach((val) => {
           val.entryMode = "A"
         })
       }

       this.lastDark.records.sort(function(a:any, b:any) { 
        return a.applicationOrder - b.applicationOrder  ||  a.label.localeCompare(b.label);
      });
      for (let i = 0; i < this.lastDark.child1.length; i++) {
        this.lastDark.child1[i].records.sort(function(a:any, b:any) { 
          return a.applicationOrder - b.applicationOrder  ||  a.label.localeCompare(b.label);
        });
      }
      for (let i = 0; i < this.lastDark.child2.length; i++) {
        this.lastDark.child2[i].records.sort(function(a:any, b:any) { 
          return a.applicationOrder - b.applicationOrder  ||  a.label.localeCompare(b.label);
        });
      }
      for (let i = 0; i < this.lastDark.child3.length; i++) {
        this.lastDark.child3[i].records.sort(function(a:any, b:any) { 
          return a.applicationOrder - b.applicationOrder  ||  a.label.localeCompare(b.label);
        });
      }
      for (let i = 0; i < this.lastDark.child4.length; i++) {
        this.lastDark.child4[i].records.sort(function(a:any, b:any) { 
          return a.applicationOrder - b.applicationOrder  ||  a.label.localeCompare(b.label);
        });
      }
  
       console.log("Dark",JSON.stringify(this.lastDark));
  
       
        
            if(this.lastDark.records[0].entryMode == "A"){
              console.log('Last:', JSON.stringify(this.lastDark));
             this.dapiService.EntryA(this.lastDark).subscribe(nexto => {
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
           }else if(this.lastDark.records[0].entryMode == "E"){
             this.dapiService.EntryE(this.lastDark).subscribe(nexto => {
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

  onCancel() {
    this.dialogRef.close();
  }
}

