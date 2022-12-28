import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChangePasswordComponent } from "./components/security/user/change-password/change-password.component";
import { DashboardComponent } from "./components/dynamic/dashboard/dashboard.component";
import { LoginComponent } from "./components/security/auth/login/login.component";
import { WelcomeComponent } from "./components/dynamic/welcome/welcome.component";
import { AuthGuard } from "./components/security/auth/auth-guard";
import { CountryComponent } from "./components/security/admin/regional/country/country.component";
import { CityComponent } from "./components/security/admin/regional/city/city.component";
import { ReportPageComponent } from "./components/PR/report-page/report-page.component";
import { NotActivatedComponent } from "./components/dynamic/notactivated/notactivated.component";
import { SignUpComponent } from "./components/security/signup/signup.component";
import { AccountActivatedComponent } from "./components/dynamic/accountactivated/accountactivated.component";
import { RegistrationExpiredComponent } from "./components/dynamic/registrationexpired/registrationexpired.component";
import { ChangePasswordAnonComponent } from "./components/dynamic/change-passwordanon/change-passwordanon.component";
import { SDBatchVehicleEntryComponent } from "./components/AlaadinShipping/sdbatchvehicleentry/sdbatchvehicleentry.component";
import { SDVehicleDetailComponent } from "./components/AlaadinShipping/sdvehicledetail/sdvehicledetail.component";
// import { SDShippingLineCompaniesComponent } from "./components/AlaadinShipping/sdshippinglinecompanies/sdshippinglinecompanies.component";
import { SDDispatchPlanComponent } from "./components/AlaadinShipping/sddispatchplan/sddispatchplan.component";
import { SDDispatchPlanExpenseComponent } from "./components/AlaadinShipping/sddispatchplanexpense/sddispatchplanexpense.component";
import { SignUpContComponent } from "./components/security/signupcont/signup.component";
// // import { LoginAppComponent } from "./components/security/auth/loginapp/login.component";
// // import { LoginGoogleComponent } from "./components/security/auth/logingoogle/login.component";
import { SDCarMakeComponent } from "./components/AlaadinShipping/sdcarmake/sdcarmake.component";
import { SDCarModelComponent } from "./components/AlaadinShipping/sdcarmodel/sdcarmodel.component";
// import { SDUserComponent } from "./components/AlaadinShipping/sduser/sduser.component";
import { SDDispatchPlanPaymentComponent } from "./components/AlaadinShipping/sddispatchplanpayment/sddispatchplanpayment.component";
import { SDCompanyComponent } from "./components/AlaadinShipping/sdcompany/sdcompany.component";
import { AdminGuard } from "./components/security/Guard/admin.guard";
// import { StaffGuard } from "./components/security/Guard/staff.guard";
// import { ReportPageEmailComponent } from "./components/PR/report-pageemail/report-pageemail.component";

import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { SystemNavigationComponent } from "./system/system-navigation/system-navigation.component";
import { SystemHomeComponent } from "./system/system-home/system-home.component";
import { SchoolClassComponent } from "./lmssystem/schoolclass/schoolclass.component";
import { SchoolGroupComponent } from "./lmssystem/schoolgroup/schoolgroup.component";
import { SchoolYearComponent } from "./lmssystem/schoolyear/schoolyear.component";
import { StudentAttendComponent } from "./lmssystem/studentattend/studentattend.component";
import { StudSubjComponent } from "./lmssystem/studsubj/studsubj.component";
import { subjectComponent } from "./lmssystem/subject/subject.component";
import { TeacherComponent } from "./lmssystem/teacher/teacher.component";
import { CustomerAccountComponent } from "./lmssystem/customeraccount/customeraccount.component";
import { TimetableComponent } from "./lmssystem/timetable/timetable.component";
import { TeacSubComponent } from "./lmssystem/teacsub/teacsub.component";
import { SubjectOutlineComponent } from "./lmssystem/subjectoutline/subjectoutline.component";
// import { SubOutlineUnComponent } from "./lmssystem/suboutlineun/suboutlineun.component";
// import { SubjectContentComponent } from "./lmssystem/subjectcontent/subjectcontent.component";
import { SubjectHomeworkComponent } from "./lmssystem/subjecthomework/subjecthomework.component";
import { SubjectTrackingComponent } from "./lmssystem/subjecttracking/subjecttracking.component";
import { SubjTestMarksComponent } from "./lmssystem/subjtestmarks/subjtestmarks.component";
import { GroupStudentComponent } from "./lmssystem/groupstudent/groupstudent.component";
import { SubTeSubmissionComponent } from "./lmssystem/subTeSubmission/subTeSubmission.component";
import { ClassSubjectComponent } from "./lmssystem/classsubject/classsubject.component";
import { HomeworkSubComponent } from "./lmssystem/homeworksub/homeworksub.component";
import { SubjTestComponent } from "./lmssystem/subjtest/subjtest.component";
import { VehicleMileageComponent } from "./lmssystem/vehiclemileage/vehiclemileage.component";
import { VehicleComponent } from "./lmssystem/vehicle/vehicle.component";
import { VehRegComponent } from "./lmssystem/vehreg/vehreg.component";
import { DriverComponent } from "./lmssystem/driver/driver.component";
import { VehicleOwnerComponent } from "./lmssystem/vehicleowner/vehicleowner.component";
import { VehicleDriverComponent } from "./lmssystem/vehicledriver/vehicledriver.component";
import { TripShiftComponent } from "./lmssystem/tripshift/tripshift.component";
// import { TripShiftDetailsComponent } from "./lmssystem/tripshiftdetails/tripshiftdetails.component";
import { TripExecComponent } from "./lmssystem/tripexec/tripexec.component";
// import { TripExecDetailsComponent } from "./lmssystem/tripexecdetails/tripexecdetails.component";
// import { VehicleFuelComponent } from "./lmssystem/vehiclefuel/vehiclefuel.component";
// import { VehMainComponent } from "./lmssystem/vehmain/vehmain.component";
// import { VehMainDetailsComponent } from "./lmssystem/vehmaindetails/vehmaindetails.component";
import { QuBanMCComponent } from "./lmssystem/qubanmc/qubanmc.component";
// import { QuBanMatComponent } from "./lmssystem/qubanmat/qubanmat.component";
// import { QuBanFillComponent } from "./lmssystem/qubanfill/qubanfill.component";
// import { QuBanOrdComponent } from "./lmssystem/qubanord/qubanord.component";
import { QuestionBankComponent } from "./lmssystem/questionbank/questionbank.component";
import { TestGradeComponent } from "./lmssystem/testgrade/testgrade.component";
// import { TestGradeDetComponent } from "./lmssystem/testgradedet/testgradedet.component";
import { SubTeQueComponent } from "./lmssystem/subteque/subteque.component";
// import { SubTeFreeInputComponent } from "./lmssystem/subtefreeinput/subtefreeinput.component";
// import { SubTeBlankComponent } from "./lmssystem/subteblank/subteblank.component";
// import { SubTeMatComponent } from "./lmssystem/subtemat/subtemat.component";
// import { SubTeOrderComponent } from "./lmssystem/subteorder/subteorder.component";
import { SystemBusinessProfileComponent } from "./system/system-business-profile/system-business-profile.component";
import { SystemTaxComponent } from "./system/tax/system-tax/system-tax.component";
import { AccountComponent } from "./system/account/account.component";
import { ForexComponent } from "./system/forex/forex.component";
import { JournalEntryComponent } from "./system/journalentry/journalentry.component";
import { ExpenseFilingComponent } from "./system/expensefiling/expensefiling/expensefiling.component";
import { AccountConfigurationComponent } from "./system/GeneratedComponents01Apr/accountconfiguration/accountconfiguration.component";
import { ProductComponent } from "./system/GeneratedComponents01Apr/product/product.component";
import { ProductCategoryComponent } from "./system/GeneratedComponents01Apr/productcategory/productcategory.component";
import { ProductGroupComponent } from "./system/GeneratedComponents01Apr/productgroup/productgroup.component";
// import { ProductUnitComponent } from "./system/GeneratedComponents01Apr/productunit/productunit.component";
// import { ProductUnitConversionComponent } from "./system/GeneratedComponents01Apr/productunitconversion/productunitconversion.component";
// import { WareHouseComponent } from "./system/GeneratedComponents01Apr/warehouse/warehouse.component";
import { CompanyBankComponent } from "./system/AnotherComponents/companybank/companybank.component";
import { CompanyBankBranchComponent } from "./system/AnotherComponents/companybankbranch/companybankbranch.component";
import { CompanyBankBranchAccountEntryService } from "./system/AnotherComponents/companybankbranchaccount/companybankbranchaccount-entry/companybankbranchaccount-entry.service";
import { CompanyBankBranchAccountComponent } from "./system/AnotherComponents/companybankbranchaccount/companybankbranchaccount.component";
import { InvoiceComponent } from "./system/AnotherComponents/invoice/invoice.component";
import { PaymentFromCompanyComponent } from "./system/AnotherComponents/paymentfromcompany/paymentfromcompany.component";
import { PaymentToCompanyComponent } from "./system/AnotherComponents/paymenttocompany/paymenttocompany.component";
import { ProductPricingComponent } from "./system/AnotherComponents/productpricing/productpricing.component";
import { StockInComponent } from "./system/AnotherComponents/stockin/stockin.component";
import { StockMovementComponent } from "./system/AnotherComponents/stockmovement/stockmovement.component";
// import { ProductStockComponent } from "./system/GeneratedComponents01Apr/productstock/productstock.component";
import { FinancialReportComponent } from "./financial-report/financial-report.component";
import { CustomerComponent } from "./system/GeneratedComponents01Apr/customer/customer.component";
import { FinancialComponent } from "./system/reports/financial/financial.component";
import { TaxComponent } from "./system/tax/tax.component";
import { ChequeToCompanyComponent } from "./system/AnotherComponents/chequetocompany/chequetocompany.component";
import { RegistrationInvoiceComponent } from "./system/AnotherComponents/Registration-invoice/invoice.component";
import { TransportInvoiceComponent } from "./system/AnotherComponents/Transport-invoice/invoice.component";
import { PaymentfromComponent } from "./system/AnotherComponents/paymentfrom/paymenttocompany.component";
import { ChequeFromCompanyComponent } from "./system/AnotherComponents/chequefromcompany/chequetocompany.component";
import { ServiceEnComponent } from "./system/GeneratedComponents01Apr/serviceen/serviceen.component";
import { FeesComponent } from "./system/reports/fees/financial.component";
import { ItemServiceComponent } from "./system/GeneratedComponents01Apr/item/serviceen.component";
import { OtherInvoiceComponent } from "./system/AnotherComponents/Other-invoice/invoice.component";
import { accountOpenComponent } from "./system/accountopen/accountopen.component";


const routes: Routes = [
  { path: "", component: LoginComponent },
  
  
  {
    path: "welcome",
    component: WelcomeComponent,
    data: { title: "Premium Quality Shipping" },
  },
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login to get access to an instant service" },
  },
  
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
     
      { path: "dynamic", component: DynamicFormComponent },
      { path: "System", component: SystemNavigationComponent, children: [
        { path: '', redirectTo: 'Home', pathMatch: 'full' },
        { path: "Home", component: SystemHomeComponent},
        { path: "schoolclass", component: SchoolClassComponent},
        { path: "cheque", component: ChequeToCompanyComponent},
        { path: "chequeFrom", component: ChequeFromCompanyComponent},
        { path: "schoolgroup", component: SchoolGroupComponent},
        { path: "schoolyear", component: SchoolYearComponent},
        { path: "studentattend", component: StudentAttendComponent},
        { path: "studsubj", component: StudSubjComponent},
        { path: "subject", component: subjectComponent},
        { path: "teacher", component: TeacherComponent},
        { path: "customeraccount", component: CustomerAccountComponent},
        { path: "timetable", component: TimetableComponent},
        { path: "teacsub", component: TeacSubComponent},
        { path: "subjectoutline", component: SubjectOutlineComponent},
      //   { path: "suboutlineun", component: SubOutlineUnComponent},
      //   { path: "subjectcontent", component: SubjectContentComponent},
        { path: "subjecthomework", component: SubjectHomeworkComponent},
        { path: "subjecttracking", component: SubjectTrackingComponent},
        { path: "subjtestmarks", component: SubjTestMarksComponent},
        { path: "groupstudent", component: GroupStudentComponent},
        { path: "subTeSubmission", component: SubTeSubmissionComponent},
        { path: "classsubject", component: ClassSubjectComponent},
        { path: "homeworksub", component: HomeworkSubComponent},
        { path: "subjtest", component: SubjTestComponent},
        { path: "vehiclemileage", component: VehicleMileageComponent},
        { path: "vehicle", component: VehicleComponent},
        { path: "vehreg", component: VehRegComponent},
        { path: "driver", component: DriverComponent},
        { path: "vehicleowner", component: VehicleOwnerComponent},
        { path: "vehicledriver", component: VehicleDriverComponent},
        { path: "tripshift", component: TripShiftComponent},
      //   { path: "tripshiftdetails", component: TripShiftDetailsComponent},
        { path: "tripexec", component: TripExecComponent},
      //   { path: "tripexecdetails", component: TripExecDetailsComponent},
      //   { path: "vehiclefuel", component: VehicleFuelComponent},
      //   { path: "vehmain", component: VehMainComponent},
      //   { path: "vehmaindetails", component: VehMainDetailsComponent},
        { path: "qubanmc", component: QuBanMCComponent},
      //   { path: "qubanmat", component: QuBanMatComponent},
      //   { path: "qubanfill", component: QuBanFillComponent},
      //   { path: "qubanord", component: QuBanOrdComponent},
        { path: "questionbank", component: QuestionBankComponent},
        { path: "testgrade", component: TestGradeComponent},
      //   { path: "testgradedet", component: TestGradeDetComponent},
        { path: "subteque", component: SubTeQueComponent},
      //   { path: "subtefreeinput", component: SubTeFreeInputComponent},
      //   { path: "subteblank", component: SubTeBlankComponent},
      //   { path: "subtemat", component: SubTeMatComponent},
      //   { path: "subteorder", component: SubTeOrderComponent},
        { path: "BusinessProfile", component: SystemBusinessProfileComponent},
        { path: "Tax", component: TaxComponent},
        { path: "Account", component: AccountComponent},
        { path: "Forex", component: ForexComponent},
        { path: "JournalEntry", component: JournalEntryComponent},
        { path: "Expense", component: ExpenseFilingComponent},
        { path: "AccountConfig", component: AccountConfigurationComponent},
        { path: "Customer", component: CustomerComponent},
        { path: "Product", component: ProductComponent},
        { path: "Service", component: ServiceEnComponent},
        { path: "Item", component: ItemServiceComponent},
        { path: "ProductCat", component: ProductCategoryComponent},
        { path: "ProductGroup", component: ProductGroupComponent},
      //   { path: "ProductUnit", component: ProductUnitComponent},
      //   { path: "ProductUnitCon", component: ProductUnitConversionComponent},
      //   { path: "WareHouse", component: WareHouseComponent},
        { path: "Bank", component: CompanyBankComponent},
        { path: "BankBranch", component: CompanyBankBranchComponent},
        { path: "BankAccount", component: CompanyBankBranchAccountComponent},
        { path: "Invoice", component: InvoiceComponent},
        { path: "RegistrationInvoice", component: RegistrationInvoiceComponent},
        { path: "TransportInvoice", component: TransportInvoiceComponent},
        { path: "OtherInvoice", component: OtherInvoiceComponent},
        { path: "PaymentFromCompany", component: PaymentfromComponent},
        { path: "PaymentToCompany", component: PaymentToCompanyComponent},
        { path: "ProductPricing", component: ProductPricingComponent},
        { path: "StockIn", component: StockInComponent},
        { path: "StockMovement", component: StockMovementComponent},
      //   { path: "ProductStock", component: ProductStockComponent},
        { path: "FinancialReports", component: FinancialComponent},
        { path: "FinancialReportsPage", component: ReportPageComponent},
        { path: "FeesReports", component: FeesComponent},
        { path: "OpeningBalance", component: accountOpenComponent},
      ] },
      
      //  { path: 'dohinv', component: InventoriesComponent },
      {
        path: "signup",
        component: SignUpComponent,
        data: { title: "Create an account for the best services" },
        canActivate: [AdminGuard],
      },
      {
        path: "report",
        component: ReportPageComponent,
      },
      { path: 'sdvhclebatch', component: SDBatchVehicleEntryComponent, data: { title: 'Get your vehicle deliveried' } },
      
      
    ],
  },
{ path: "**", redirectTo: "welcome", pathMatch: "full" },
];

@NgModule({
  
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
//  declarations: []
})
export class AppRoutingModule {}
