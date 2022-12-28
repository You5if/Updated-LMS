import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { matDrawerAnimations } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';
import { AppGlobals } from 'src/app/app.global';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { LoginModule } from 'src/app/components/security/auth/login/login.model';
import { ChangePasswordNewComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-system-navigation',
  templateUrl: './system-navigation.component.html',
  styleUrls: ['./system-navigation.component.scss']
})
export class SystemNavigationComponent implements OnInit {

  className!:string
  showFiller = false;
  showButton: boolean = false;
  key!: number;
  lang: string = "Arabic";
  direction: Direction = "ltr";
  lang_LS: string = "16001";
  break: boolean = true;
  title = 'SystemHR1';
  home!: string;
  businessP!: string;
  profile!:string;
  journal!: string;
  testSub!: string
  expense!: string;
  tax!: string;
  forex!: string;
  account!: string;
  paymentFromCompany!: string;
  paymentToCompany!: string;
  invoice!: string;
  shSub!: string;
  bank!: string;
  rInvoice!:string;
  tInvoice!: string;
  oInvoice!: string;
  bankBranch!: string;
  bankAccount!: string;
  customer!: string;
  changePassword!: string;
  accountConfiguration!: string;
  accounting!: string;
  config!: string;
  sales!: string;
  inventory!: string;
  product!: string;
  item!: string;
  productCategory!: string;
  productGroup!: string;
  productUnit!: string;
  productPricing!: string;
  productStock!: string;
  productUnitConversion!: string;
  warehouse!: string;
  stockIn!: string;
  stockMovement!: string;
  logout!: string;
  change!: string;
  resizeStyle: object = {};

  isOpen_YourVariable = true;

  // new menu items
  schoolgroup!: string;
  subTeSubmission!: string;
  schoolyear!: string;
  openingBalance!: string;
  schoolclass!: string;
  studentattend!: string;
  studsubj!: string;
  subject!: string;
  teacher!: string;
  timetable!:string;
  teacsub!: string;
  subjectoutline!:string;
  suboutlineun!:string;
  subjecttracking!:string;
  subjectcontent!:string;
  subjecthomework!:string;
  subjtestmarks!:string;
  qubanmc!:string;   
qubanmat!:string;  
qubanfill!:string; 
qubanord!:string;  
questionbank!:string; 
testgrade!:string; 
testgradedet!:string; 
subteque!:string; 
subtefreeinput!:string; 
subteblank!:string; 
subtemat!:string; 
subteorder!:string; 


  navigation!: string ;
  role :string|null= localStorage.getItem("role");

  model: LoginModule = {
    'username': 'milesh@markoncs.com',
    'password': '123456789',
    'loginType': 1
  }
  groupstudent!: string;
  classsubject!: string;
  homeworksub!: string;
  subjtest!: string;
  vehicle!: string;
  vehreg!: string;
  vehiclemileage!: string;
  driver!: string;
  vehicleowner!: string;
  vehicledriver!: string;
  tripshift!: string;
  tripshiftdetails!: string;
  tripexe!: string;
  tripexecdetails!: string;
  vehicleFuel!: string;
  vehMain!: string;
  vehMainDetails!: string;
  tripexec!: string;
  student!: string;
  cheque!:string
  cheque2!:string
  
  customeraccount!: string;
  registration!: string;
  reports!: string;
  serviceM!: string;
  learningManagement!: string;
  examination!: string;
  generalAdiminitration!: string;
  financialReports!: string;
  feesReports!: string;

  constructor(private _globals: AppGlobals,
    public dialog: MatDialog,
    private titleService: Title,
    private router: Router,
    private _auth: AuthService,) { }
    


ngOnInit(): void {
  this.titleService.setTitle("LMS - System");
  this.role = localStorage.getItem("role");
  console.log(this.role);
  this.resizeStyle = {
    "max-width": `30%`,
  };
  // new menu item value
  this.student='Student'
  this.qubanmc= 'Quetion bank MC'   
  this.qubanmat ='Question bank mat' 
  this.qubanfill = 'Quaetion bank fill'
  this.qubanord ='Question bank ord' 
  this.questionbank = 'Question bank '
  this.generalAdiminitration = "General adiminitration"
  this.testgrade ='Grading scheme'
  this.financialReports = "Financial reports"
  this.feesReports = "Fees analysis"
  this.testgradedet ='Test grade details'
  this.subteque ='Test questions'
  this.subtefreeinput ='Subject free input'
this.subteblank = 'Subject test balnk'
this.subtemat = 'subject test mat'
this.subteorder ='Subhect test order'
this.customeraccount='Student'
this.subTeSubmission='Student exam submission'
  this.schoolgroup = 'Group'
  this.schoolyear='School Year'
  this.openingBalance='Opening balance'
  this.schoolclass='Class'
  this.studentattend='Student Attendance'
  this.changePassword = "Change password"
  this.studsubj= ' Student Subject'
  this.subject= 'Subject'
  this.teacher= 'Teacher'
  this.rInvoice = "Registration invoice"
  this.tInvoice = "Transport invoice"
  this.oInvoice = "Other invoice"
  this.timetable='Timetable'
  this.teacsub='Teacher Subject'
  this.subjectoutline='Subject Outline'
  this.subjecttracking='Subject Tracking'
  this.subjecthomework='Homework'
  this.subjectcontent='Subject content'
  this.subjtestmarks='Subject test marks'
  this.suboutlineun='Subject outline un'
  this.testSub = "Student exam submission"
  this.cheque = "Cheque to"
  this.reports = "Reports"

  this.cheque2 = "Cheque from"
  this.serviceM = "Service management"
      this.learningManagement = "Learning management"
      this.examination = "Examination"
  this.groupstudent='Student group'
  this.classsubject='Class Subject'
  this.homeworksub='Homework Subject'
	this.subjtest='Subject Test'
	this.vehicle='Vechile'
	this.vehiclemileage='Vechile Mileage'
	this.vehreg='Vechile registration'
	this.driver= 'Driver'
	this.vehicleowner='vechile owner'
	this.vehicledriver='vechile driver'
	this.tripshift='Transportation shift'
	this.tripshiftdetails='Transportation shift Details'
	this.tripexec='Shift execution'
	this.tripexecdetails= 'Shift execution details'
	this.vehicleFuel='Fuel management'
	this.vehMain='Maintenance'
	this.vehMainDetails='Maintenance details'
  this.home = "Home"
      this.businessP = "Company profile"
      this.journal = "Journal"
      this.expense = "Expense"
      this.bank = "Bank"
      this.profile = "Profile"
      this.invoice = "Invoice"
      this.bankBranch = "Bank branch"
      this.bankAccount = "Bank account"
      this.paymentFromCompany = "Expense"
      this.paymentToCompany = "Customer payment"
      this.accountConfiguration = "Account configuration"
      this.shSub = "Homework submission"
      this.tax = "Tax"
      this.forex = "Forex"
      this.customer = "Parent"
      this.account = "Account"
      this.accounting = "Accounting"
      this.config = "Configrations"
      this.sales = "Sales"
      this.registration = "Registration"
      this.inventory = "Inventory"
      this.product = "Service"
      this.item = "Item"
      this.productCategory = "Service category"
      this.productGroup = "Service group"
      this.productUnit = "Service unit"
      this.productPricing = "Service pricing"
      this.productStock = "Service stock"
      this.productUnitConversion = "Service unit conversion"
      this.warehouse = "Warehouse"
      this.stockIn = "Stock in"
      this.stockMovement = "Stock movement"
      this.logout = "Logout"
      this.change = "Language:"
      this.navigation = "Home"
      if (localStorage.getItem(this._globals.baseAppName + '_nav') == "") {
        this.navigation = "Home"
        localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation)
        this.onClickListItem('H')
        
      }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "Home") {
        this.key = 0
        this.navigation = "Home"
        this.onClickListItem('H')
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "BusinessProfile") {
    this.key = 1
    this.navigation = "BusinessProfile"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "JournalEntry") {
    this.key = 2
    this.navigation = "JournalEntry"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "Expense") {
    this.key = 3
    this.navigation = "Expense"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "Tax") {
    this.key = 4
    this.navigation = "Tax"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "Forex") {
    this.key = 5
    this.navigation = "Forex"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "Account") {
    this.key = 6
    this.navigation = "Account"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "AccountConfig") {
    this.key = 7
    this.navigation = "AccountConfig"
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "AccountConfig") {
    this.key = 8
    this.navigation = "Customer"
 }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "") {
    this.key = 0
    this.navigation = "Home"
    localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation)
  }
  else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "subjectoutline") {
    this.key = 10
    this.navigation = "subjectoutline"
    localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation)
  }else if(localStorage.getItem(this._globals.baseAppName + '_nav') == "subjectoutline") {
    this.key = 10
    this.navigation = "homeworksub"
    localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation)
  }

 // var header = document.getElementById("myDIV");
//var btns = header.getElementsByClassName("side_list_item");
 // var current = document.getElementsByClassName("active");
 // current[0].className = current[0].className.replace(" active", "");
  //btns[this.key].className += " active";

  // this._auth.login(this.model);
  // this._auth.logout();
  localStorage.setItem(this._globals.baseAppName + '_language', this.lang_LS);
  var header = document.getElementById("myDIV");
var btns = header!.getElementsByClassName("side_list_item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", ()=> {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
  console.log(this.navigation);
    this.break =
    window.innerWidth <= 740
      ? false
      : true;
  }

  

  onSignOut() {
    this._auth.logout();
  }

  onBusiness(name: string) {
    this.navigation = "Home"
    localStorage.getItem(this._globals.baseAppName + '_nav');
    var header = document.getElementById("myDIV");
var btns = header!.getElementsByClassName("side_list_item");
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  btns[0].className += " active";
  
  
}

onToggle() {
  this.break = !this.break
}
  
  onClickListItem(event: string) {
    if(event == 'H' ) {
      this.navigation = "Home"
      var header = document.getElementById("myDIV");
      var btns = header!.getElementsByClassName("side_list_item");
      var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  btns[0].className += " active";
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Home clicked", this.navigation);}
    if(event == 'C1' ) {
      this.navigation = "schoolclass"
      var header = document.getElementById("myDIV");
      var btns = header!.getElementsByClassName("side_list_item");
      var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  btns[0].className += " active";
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("schoolclass clicked", this.navigation);
    }else if(event == 'G1' ) {
      this.navigation = "schoolgroup"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("schoolgroup clicked", this.navigation);
    }else if(event == 'SY1' ) {
      this.navigation = "schoolyear"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("schoolyear clicked", this.navigation);
    }else if(event == 'SA1' ) {
      this.navigation = "studentattend"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("studentattend clicked", this.navigation);
    }
    else if(event == 'SS1' ) {
      this.navigation = "studsubj"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("studsubj clicked", this.navigation);
    }
    else if(event == 'S1' ) {
      this.navigation = "subject"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Subject clicked", this.navigation);
    }
    else if(event == 'CA1C' ) {
      this.navigation = "customeraccount"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("customeraccount clicked", this.navigation);
    }
    else if(event == 'T1' ) {
      this.navigation = "teacher"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("teacher clicked", this.navigation);
    }else if(event == 'TT1' ) {
      this.navigation = "timetable"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("timetable clicked", this.navigation);
    }
    
    else if(event == 'TS1' ) {
      this.navigation = "teacsub"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("teachersub clicked", this.navigation);
    }
    else if(event == 'STSV' ) {
      this.navigation = "subTeSubmission"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subTeSubmission clicked", this.navigation);
    }
    else if(event == 'SO1' ) {
      this.navigation = "subjectoutline"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subjectoutline clicked", this.navigation);
    }

    else if(event == 'SOU1' ) {
      this.navigation = "suboutlineun"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("suboutlineun clicked", this.navigation);
    }
    else if(event == 'ST1' ) {
      this.navigation = "subjecttracking"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subjecttracking clicked", this.navigation);
    }
    else if(event == 'SH1' ) {
      this.navigation = "subjecthomework"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subjecthomework clicked", this.navigation);
    }
    else if(event == 'SC1' ) {
      this.navigation = "subjectcontent"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subjectcontent", this.navigation);
    }
    else if(event == 'SM1' ) {
      this.navigation = "subjtestmarks"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subjtestmarks clicked", this.navigation);
    }
    else if(event == 'GS1' ) {
      this.navigation = "groupstudent"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("groupstudent clicked", this.navigation);
    }
    else if(event == 'CST1' ) {
      this.navigation = "classsubject"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("classsubject clicked", this.navigation);
    }
    else if(event == 'STS1' ) {
      this.navigation = "subjtest"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subjtest clicked", this.navigation);
    }
    else if(event == 'VE1' ) {
      this.navigation = "vehicle"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("vehicle clicked", this.navigation);
    }
    else if(event == 'VML1' ) {
      this.navigation = "vehiclemileage"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("vehiclemileage clicked", this.navigation);
    }
    else if(event == 'VH1' ) {
      this.navigation = "vehreg"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("vehreg clicked", this.navigation);
    }
    else if(event == 'DR1' ) {
      this.navigation = "driver"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("driver	 clicked", this.navigation);
    }
    else if(event == 'VO1' ) {
      this.navigation = "vehicleowner"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("vehicleowner clicked", this.navigation);
    }
    else if(event == 'VD1' ) {
      this.navigation = "vehicledriver"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("vehicledriver clicked", this.navigation);
    }
    else if(event == 'VTS1' ) {
      this.navigation = "tripshift"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("tripshift clicked", this.navigation);
    }
    else if(event == 'TSD1' ) {
      this.navigation = "tripshiftdetails"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("tripshiftdetails clicked", this.navigation);
    }
    else if(event == 'TE1' ) {
      this.navigation = "tripexec"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("tripexec clicked", this.navigation);
    }
    else if(event == 'TED1' ) {
      this.navigation = "tripexecdetails"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("tripexecdetails clicked", this.navigation);
    }
    else if(event == 'VF1' ) {
      this.navigation = "vehiclefuel"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("vehiclefuel clicked", this.navigation);
    }
    else if(event == 'VM1' ) {
      this.navigation = "vehmain"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("vehmain clicked", this.navigation);
    }
    else if(event == 'VMD1' ) {
      this.navigation = "vehmaindetails"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("vehmaindetails clicked", this.navigation);
    }
    else if(event == 'QMC2' ) {
      this.navigation = "qubanmc"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("qubanmc clicked", this.navigation);
    }
    else if(event == 'QMAT2' ) {
      this.navigation = "qubanmat"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("qubanmat clicked", this.navigation);
    } 
    else if(event == 'QBANF2' ) {
      this.navigation = "qubanfill"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("qubanfill clicked", this.navigation);
    } 
    else if(event == 'QBANO2' ) {
      this.navigation = "qubanord"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("qubanord clicked", this.navigation);
    }  
    else if(event == 'QB2' ) {
      this.navigation = "questionbank"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("questionbank clicked", this.navigation);
    }  
    else if(event == 'TG2' ) {
      this.navigation = "testgrade"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("testgrade  clicked", this.navigation);
    }
    else if(event == 'TGD2' ) {
      this.navigation = "testgradedet"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("testgradedet  clicked", this.navigation);
    }
    else if(event == 'STQ2' ) {
      this.navigation = "subteque"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subteque  clicked", this.navigation);
    }
    else if(event == 'STF2' ) {
      this.navigation = "subtefreeinput"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subtefreeinput  clicked", this.navigation);
    }
    else if(event == 'STB2' ) {
      this.navigation = "subteblank"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subteblank   clicked", this.navigation);
    }
    else if(event == 'STMAT2' ) {
      this.navigation = "subtemat"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subtemat    clicked", this.navigation);
    }
    else if(event == 'STO2' ) {
      this.navigation = "subteorder"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("subteorder  clicked", this.navigation);
    }else if(event == 'SHS' ) {
      this.navigation = "homeworksub"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'A' ) {
      this.navigation = "Account"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Account clicked", this.navigation);
    }else if(event == 'T' ) {
      this.navigation = "Tax"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Tax clicked", this.navigation);
    }else if(event == 'F' ) {
      this.navigation = "Forex"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Forex clicked", this.navigation);
    }
    else if(event == 'BP' ) {
      this.navigation = "BusinessProfile"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Bussiness Profile clicked", this.navigation);
    }
    else if(event == 'J' ) {
      this.navigation = "JournalEntry"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Journal entry clicked", this.navigation);
    }else if(event == 'E' ) {
      this.navigation = "Expense"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'ED' ) {
      this.navigation = "ExpenseDynamic"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'AC' ) {
      this.navigation = "AccountConfig"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("AccountConfig entry clicked", this.navigation);
    }else if(event == 'C' ) {
      this.navigation = "Customer"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'P' ) {
      this.navigation = "Product"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'PC' ) {
      this.navigation = "ProductCat"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'PG' ) {
      this.navigation = "ProductGroup"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'PU' ) {
      this.navigation = "ProductUnit"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'PUC' ) {
      this.navigation = "ProductUnitCon"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'W' ) {
      this.navigation = "WareHouse"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'B' ) {
      this.navigation = "Bank"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'BB' ) {
      this.navigation = "BankBranch"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'BA' ) {
      this.navigation = "BankAccount"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'I' ) {
      this.navigation = "Invoice"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'PFC' ) {
      this.navigation = "PaymentFromCompany"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'PTC' ) {
      this.navigation = "PaymentToCompany"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'PP' ) {
      this.navigation = "ProductPricing"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'SI' ) {
      this.navigation = "StockIn"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'SM' ) {
      this.navigation = "StockMovement"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'JD' ) {
      this.navigation = "JournalDynamic"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'PS' ) {
      this.navigation = "ProductStock"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'FR' ) {
      this.navigation = "FinancialReports"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'FRP' ) {
      this.navigation = "FinancialReportsPage"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'CTC' ) {
      this.navigation = "Cheque"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'Charts' ) {
      this.navigation = "Charts"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'ECharts' ) {
      this.navigation = "ECharts"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }else if(event == 'TQS' ) {
      this.navigation = "testSub"
      localStorage.setItem(this._globals.baseAppName + '_nav', this.navigation);
      console.log("Expense entry clicked", this.navigation);
    }
  }

  onChangePassword  () {
    
    const dialogRef = this.dialog.open(ChangePasswordNewComponent, {
      disableClose: true,
      
      data: {}
    });
  
  dialogRef.afterClosed().subscribe(() => {});
};

onChangeLanguage() {
  this.navigation = "Home"
  var header = document.getElementById("myDIV");
  var btns = header!.getElementsByClassName("side_list_item");
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    btns[0].className += " active";
  if (localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
    this.lang = "Arabic"
    this.direction = "ltr"
    this.student='Student'
this.qubanmc= 'Quetion bank MC'   
this.qubanmat ='Question bank mat' 
this.qubanfill = 'Quaetion bank fill'
this.qubanord ='Question bank ord' 
this.questionbank = 'Question bank '
this.testgrade ='Grading scheme'
this.testgradedet ='Test grade details'
this.subteque ='Test questions'
this.subtefreeinput ='Subject free input'
this.subteblank = 'Subject test balnk'
this.subtemat = 'subject test mat'
this.subteorder ='Subhect test order'
this.customeraccount='Student'
this.subTeSubmission='Student exam submission'
this.schoolgroup = 'Group'
this.schoolyear='School Year'
this.openingBalance='Opening balance'
this.schoolclass='Class'
this.studentattend='Student Attendance'
this.changePassword = "Change password"
this.studsubj= ' Student Subject'
this.subject= 'Subject'
this.teacher= 'Teacher'
this.rInvoice = "Registration invoice"
this.tInvoice = "Transport invoice"
this.oInvoice = "Other invoice"
this.timetable='Timetable'
this.teacsub='Teacher Subject'
this.subjectoutline='Subject Outline'
this.subjecttracking='Subject Tracking'
this.subjecthomework='Homework'
this.subjectcontent='Subject content'
this.subjtestmarks='Subject test marks'
this.suboutlineun='Subject outline un'
this.testSub = "Student exam submission"
this.cheque = "Cheque to"
this.cheque2 = "Cheque from"

this.groupstudent='Student group'
this.classsubject='Class Subject'
this.homeworksub='Homework Subject'
this.subjtest='Subject Test'
this.vehicle='Vechile'
this.vehiclemileage='Vechile Mileage'
this.vehreg='Vechile registration'
this.driver= 'Driver'
this.vehicleowner='vechile owner'
this.vehicledriver='vechile driver'
this.tripshift='Transportation shift'
this.tripshiftdetails='Transportation shift Details'
this.tripexec='Shift execution'
this.tripexecdetails= 'Shift execution details'
this.vehicleFuel='Fuel management'
this.vehMain='Maintenance'
this.vehMainDetails='Maintenance details'
this.home = "Home"
    this.businessP = "Company profile"
    this.journal = "Journal"
    this.expense = "Expense"
    this.bank = "Bank"
    this.profile = "Profile"
    this.invoice = "Invoice"
    this.bankBranch = "Bank branch"
    this.bankAccount = "Bank account"
    this.paymentFromCompany = "Expense"
    this.paymentToCompany = "Customer payment"
    this.accountConfiguration = "Account configuration"
    this.shSub = "Homework submission"
    this.tax = "Tax"
    this.serviceM = "Service management"
    this.learningManagement = "Learning management"
    this.examination = "Examination"
    this.forex = "Forex"
    this.customer = "Parent"
    this.account = "Account"
    this.accounting = "Accounting"
    this.examination = "Examination"
    this.config = "Configrations"
    this.sales = "Sales"
    this.registration = "Registration"
    this.inventory = "Inventory"
    this.product = "Service"
    this.item = "Item"
    this.generalAdiminitration = "General adiminitration"
    this.productCategory = "Service category"
    this.productGroup = "Service group"
    this.productUnit = "Service unit"
    this.productPricing = "Service pricing"
    this.productStock = "Service stock"
    this.productUnitConversion = "Service unit conversion"
    this.warehouse = "Warehouse"
    this.reports = "Reports"
    this.stockIn = "Stock in"
    this.financialReports = "Financial reports"
    this.feesReports = "Fees analysis"
    this.stockMovement = "Stock movement"
    this.logout = "Logout"
    this.change = "Language:"
    
    
    this.lang_LS = "16001"
  }else if (localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
    this.lang = "انجليزي"
    this.lang_LS = "16002"
    this.direction = "rtl"
    this.home = " الرئيسية "
    this.businessP = "حساب الشركة"
    this.journal = "السجلات"
    this.generalAdiminitration = "الادارة العامة"
    this.invoice = "الفواتير"
    this.student = "الطلاب"
    this.financialReports = "التقارير المالية"
    this.feesReports = "تحليل الرسوم"
    this.changePassword = "تغيير كلمة السر"
    this.bank = "البنك"
    this.paymentFromCompany = "المصروفات"
    this.subTeSubmission = "تسليم اختبارات الطلاب"
    this.paymentToCompany = "الدفع الى الشركة"
    this.bankBranch = "فرع البنك"
    this.bankAccount = "حساب البنك"
    this.accountConfiguration = "اعدادات الحساب"
    this.expense = "المصروفات"
    this.cheque = "الشيكات الى"
    this.cheque2 = "الشيكات من"
    this.tax = "الضرائب"
    this.customer = "العميل"
    this.rInvoice = "فواتير التسجيل"
this.tInvoice = "فواتير النقل"
this.oInvoice = "فواتير اخرى"
    this.forex = "فوركس"
    this.account = "الحسابات"
    this.accounting = "الحسابات"
    this.testSub = "تساليم اختبارات الطلاب"
    this.config = "الاعدادات"
    this.sales = "المبيعات"
    this.inventory = "المخزون"
    this.profile = "ملف المستخدم"
    this.product = "الخدمة"
    this.item = "العنصر"
    this.productCategory = "اصناف الخدمة"
    this.productGroup = "مجموعات الخدمة"
    this.productUnit = "وحدات الخدمة"
    this.productPricing = "تسعيرات الخدمة"
    this.productStock = "مخزون الخدمة"
    this.productUnitConversion = "تحولات وحدات الخدمة"
    this.warehouse = "المخازن"
    this.stockIn = "المخزون الداخل"
    this.stockMovement = "المخزون الخارج"
    this.logout = "تسجيل الخروج"
    this.change = "اللغة:"
    this.schoolyear="السنة الدراسية"
    this.openingBalance='الحساب الافتتاحي'
    this.schoolclass="الفصل"
    this.schoolgroup="المجموعة"
    this.subject="المادة"
    this.classsubject=" مادة الفصل"
    this.subjectoutline=" "
    this.groupstudent=" مجموعة الطلاب"
    this.studentattend= " حضور الطلاب"
    this.studsubj=" مواد الطالب"
    this.teacher="الأستاذ "
    this.teacsub=" مواد الأستاذ"
    this.timetable="الجدول الزمني "
    this.subjecttracking="متابعة المواد "
    this.subjectcontent="محتوى المادة "
    this.subjecthomework=" واجبات المواد"
    this.homeworksub=" تسليم الواجب"
    this.subjtest=" اختبار المادة"
    this.subjtestmarks=" درجات المادة"
    this.shSub = "الواجبات المسلمة"
    this.questionbank=" بنك الأسئلة"
    this.testgrade=" درجات الاختبار"
    this.subteque=" اسئلة الاختبار"
    this.vehicle=" المركبة"
    this.examination = "الامتحانات"
    this.vehiclemileage="مسافة سير المركبة "
    this.accounting = "الحسابات"
    
    this.vehreg="تسجيل المركبات "
    this.driver=" السائق"
    this.vehicleowner=" مالك المركبة"
    this.vehicledriver=" سائق المركبة"
    this.config = "الاعدادات"
    this.sales = "المبيعات"
    this.inventory = "المخزون"
    this.tripshift="تحويل النقل"
    this.tripexec='تنفيذ التحويل'
    this.vehicleFuel=" الوقود"
    this.serviceM = "ادارة الخدمات"
    this.learningManagement = "ادارة التعليم"
    this.tripexe="تنفيذ الرحلة "
    this.reports = "التقارير"
    this.vehMain=" المركبة (الرئيسية)"
    this.registration = "التسجيلات"






  }else if (localStorage.getItem(this._globals.baseAppName + '_language') == "") {
    this.lang = "Arabic"
    this.direction = "ltr"
    this.student='Student'
    this.financialReports = "Financial reports"
    this.feesReports = "Fees analysis"
    this.reports = "Reports"
    this.learningManagement = "Learning management"
this.qubanmc= 'Quetion bank MC'   
this.qubanmat ='Question bank mat' 
this.qubanfill = 'Quaetion bank fill'
this.generalAdiminitration = "General adiminitration"
this.qubanord ='Question bank ord' 
this.serviceM = "Service management"
this.questionbank = 'Question bank '
this.testgrade ='Grading scheme'
this.examination = "Examination"
this.testgradedet ='Test grade details'
this.subteque ='Test questions'
this.subtefreeinput ='Subject free input'
this.subteblank = 'Subject test balnk'
this.subtemat = 'subject test mat'
this.subteorder ='Subhect test order'
this.customeraccount='Student'
this.subTeSubmission='Student exam submission'
this.schoolgroup = 'Group'
this.schoolyear='School Year'
this.openingBalance='Opening balance'
this.schoolclass='Class'
this.studentattend='Student Attendance'
this.changePassword = "Change password"
this.studsubj= ' Student Subject'
this.subject= 'Subject'
this.teacher= 'Teacher'
this.rInvoice = "Registration invoice"
this.tInvoice = "Transport invoice"
this.oInvoice = "Other invoice"
this.timetable='Timetable'
this.teacsub='Teacher Subject'
this.subjectoutline='Subject Outline'
this.subjecttracking='Subject Tracking'
this.subjecthomework='Homework'
this.subjectcontent='Subject content'
this.subjtestmarks='Subject test marks'
this.suboutlineun='Subject outline un'
this.testSub = "Student exam submission"
this.cheque = "Cheque to"
this.cheque2 = "Cheque from"

this.groupstudent='Student group'
this.classsubject='Class Subject'
this.homeworksub='Homework Subject'
this.subjtest='Subject Test'
this.vehicle='Vechile'
this.vehiclemileage='Vechile Mileage'
this.vehreg='Vechile registration'
this.driver= 'Driver'
this.vehicleowner='vechile owner'
this.vehicledriver='vechile driver'
this.tripshift='Transportation shift'
this.tripshiftdetails='Transportation shift Details'
this.tripexec='Shift execution'
this.tripexecdetails= 'Shift execution details'
this.vehicleFuel='Fuel management'
this.vehMain='Maintenance'
this.vehMainDetails='Maintenance details'
this.home = "Home"
    this.businessP = "Company profile"
    this.journal = "Journal"
    this.expense = "Expense"
    this.bank = "Bank"
    this.profile = "Profile"
    this.invoice = "Invoice"
    this.bankBranch = "Bank branch"
    this.bankAccount = "Bank account"
    this.paymentFromCompany = "Expense"
    this.paymentToCompany = "Customer payment"
    this.accountConfiguration = "Account configuration"
    this.shSub = "Homework submission"
    this.tax = "Tax"
    this.forex = "Forex"
    this.customer = "Parent"
    this.account = "Account"
    this.accounting = "Accounting"
    this.config = "Configrations"
    this.sales = "Sales"
    this.registration = "Registration"
    this.inventory = "Inventory"
    this.product = "Service"
    this.item = "Item"
    this.productCategory = "Service category"
    this.productGroup = "Service group"
    this.productUnit = "Service unit"
    this.productPricing = "Service pricing"
    this.productStock = "Service stock"
    this.productUnitConversion = "Service unit conversion"
    this.warehouse = "Warehouse"
    this.stockIn = "Stock in"
    this.stockMovement = "Stock movement"
    this.logout = "Logout"
    this.change = "Language:"
    
    this.lang_LS = "16001"
  }
  localStorage.setItem(this._globals.baseAppName + '_language', this.lang_LS);
  console.log("lang: ",localStorage.getItem(this._globals.baseAppName + '_language'))
  this.router.navigate(['System/Home']);
}

  onResize(event: any){
    this.break =
    window.innerWidth <= 740
      ? false
      : true;
  }
  resizeValidate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }
 
                    /**
                     * Finilizes resize positions
                     * (used for drawer/sidenav width)
                     * @param event 
                     */
  onResizeEnd(event: ResizeEvent): void {
    this.resizeStyle = {
                     // enable/disable these per your needs
      // position: 'fixed',
      // left: `${event.rectangle.left}px`,
      // top: `${event.rectangle.top}px`,
      // height: `${event.rectangle.height}px`,
      width: `${event.rectangle.width}px`,
    };
  }

}
