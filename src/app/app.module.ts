import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DatePipe } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { MenuItemComponent } from "./components/dynamic/menu/menu-item/menu-item.component";
import { AppGlobals } from "./app.global";
import { CommonService } from "./components/common/common.service";
import { MenuBarComponent } from "./components/dynamic/menu/menu-bar/menu-bar.component";
import { DashboardComponent } from "./components/dynamic/dashboard/dashboard.component";
import { ChartModule } from "angular2-chartjs";
import { ChangePasswordComponent } from "./components/security/user/change-password/change-password.component";
import { UIService } from "./components/shared/uiservices/UI.service";
import { MessageBoxService } from "./components/messagebox/message-box.service";
import { UserService } from "./components/security/user/user.service";
import { ErrorBoxComponent } from "./components/messagebox/error-box/error-box.component";
import { ErrorApiBoxComponent } from "./components/messagebox/error-api-box/error-api-box.component";
import { WarningBoxComponent } from "./components/messagebox/warning-box/warning-box.component";
import { PleaseWaitComponent } from "./components/shared/uiservices/please-wait/please-wait.component";
import { LoginComponent } from "./components/security/auth/login/login.component";
// import { LandingMenuComponent } from "./components/dynamic/menu/landing-menu/landing-menu.component";
import { WelcomeComponent } from "./components/dynamic/welcome/welcome.component";
import { TokenInterceptor } from "./token-interceptor";
import { AuthGuard } from "./components/security/auth/auth-guard";
import { AuthService } from "./components/security/auth/auth.service";
import { CityComponent } from "./components/security/admin/regional/city/city.component";
import { RegionalService } from "./components/security/admin/regional/regional.service";
import { CountryComponent } from "./components/security/admin/regional/country/country.component";
import { CountryEntryComponent } from "./components/security/admin/regional/country/country-entry/country-entry.component";
import { PageEventsService } from "./components/common/pageevents/page-events.service";
import { SelectService } from "./components/common/select.service";
import { PageSortComponent } from "./components/common/pageevents/page-sort/page-sort.component";
import { UploadComponent } from "./components/common/upload/upload.component";
import { UploadFilesComponent } from "./components/common/upload/upload-files/upload-files.component";
import {
  ReportPageComponent,
  SafePipe
} from "./components/PR/report-page/report-page.component";
import { MenuSetupComponent } from "./components/security/admin/menu-setup/menu-setup.component";
import { StateComponent } from "./components/security/admin/regional/state/state.component";
import { NotActivatedComponent } from "src/app/components/dynamic/notactivated/notactivated.component";
import { SignUpComponent } from "src/app/components/security/signup/signup.component";
import { SignUpService } from "./components/security/signup/signup.service";
import { AccountActivatedComponent } from "./components/dynamic/accountactivated/accountactivated.component";
import { RegistrationExpiredComponent } from "src/app/components/dynamic/registrationexpired/registrationexpired.component";
import { ChangePasswordAnonComponent } from "./components/dynamic/change-passwordanon/change-passwordanon.component";
import { AttendanceuploadComponent } from "./components/StatesDispatch/upload/upload.component";
import { NgxImageCompressService } from "ngx-image-compress";
// import { Ng2ImgMaxModule } from "ng2-img-max";
import { SDBatchVehicleEntryComponent } from "./components/AlaadinShipping/sdbatchvehicleentry/sdbatchvehicleentry.component";
import { SDVehicleDetailComponent } from "./components/AlaadinShipping/sdvehicledetail/sdvehicledetail.component";
import { SDVehicleDetailEntryComponent } from "./components/AlaadinShipping/sdvehicledetail/sdvehicledetail-entry/sdvehicledetail-entry.component";
import { SDShippingLineCompaniesEntryComponent } from "./components/AlaadinShipping/sdshippinglinecompanies/sdshippinglinecompanies-entry/sdshippinglinecompanies-entry.component";
import { SDShippingLineCompaniesComponent } from "./components/AlaadinShipping/sdshippinglinecompanies/sdshippinglinecompanies.component";
import { SDDispatchPlanComponent } from "./components/AlaadinShipping/sddispatchplan/sddispatchplan.component";
import { SDDispatchPlanEntryComponent } from "./components/AlaadinShipping/sddispatchplan/sddispatchplan-entry/sddispatchplan-entry.component";
import { SDDispatchPlanExpenseEntryComponent } from "./components/AlaadinShipping/sddispatchplanexpense/sddispatchplanexpense-entry/sddispatchplanexpense-entry.component";
import { SDDispatchPlanExpenseComponent } from "./components/AlaadinShipping/sddispatchplanexpense/sddispatchplanexpense.component";
import { SDDispatchPlanInvoiceComponent } from "./components/AlaadinShipping/sddispatchplaninvoice/sddispatchplaninvoice.component";
import { SDDispatchPlanInvoiceEntryComponent } from "./components/AlaadinShipping/sddispatchplaninvoice/sddispatchplaninvoice-entry/sddispatchplaninvoice-entry.component";
// import {
//   SocialLoginModule,
//   AuthServiceConfig,
//   GoogleLoginProvider
// } from "angular4-social-login";
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider
} from "angularx-social-login";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { SignUpContComponent } from "./components/security/signupcont/signup.component";
// // import { LoginGoogleComponent } from "./components/security/auth/logingoogle/login.component";
// // import { LoginAppComponent } from "./components/security/auth/loginapp/login.component";
// import { SDAppFeedbackComponent } from "./components/AlaadinShipping/sdappfeedback/sdappfeedback.component";
// import { SDAppFeedbackEntryComponent } from "./components/AlaadinShipping/sdappfeedback/sdappfeedback-entry/sdappfeedback-entry.component";
// import { SDVehicleBatchEntryComponent } from "./components/AlaadinShipping/sdvehiclebatch/sdvehiclebatch-entry/sdvehiclebatch-entry.component";
// import { SDVehicleBatchComponent } from "./components/AlaadinShipping/sdvehiclebatch/sdvehiclebatch.component";
// import { SDCityComponent } from "./components/AlaadinShipping/sdcity/sdcity.component";
// import { SDCityEntryComponent } from "./components/AlaadinShipping/sdcity/sdcity-entry/sdcity-entry.component";
import { SDCompanyEntryComponent } from "./components/AlaadinShipping/sdcompany/sdcompany-entry/sdcompany-entry.component";
// import { SDCompanyContactsEntryComponent } from "./components/AlaadinShipping/sdcompanycontacts/sdcompanycontacts-entry/sdcompanycontacts-entry.component";
// import { SDCountryEntryComponent } from "./components/AlaadinShipping/sdcountry/sdcountry-entry/sdcountry-entry.component";
// import { SDDispatchPlanInvoicePaymentEntryComponent } from "./components/AlaadinShipping/sddispatchplaninvoicepayment/sddispatchplaninvoicepayment-entry/sddispatchplaninvoicepayment-entry.component";
// import { SDStateEntryComponent } from "./components/AlaadinShipping/sdstate/sdstate-entry/sdstate-entry.component";
import { SDCompanyComponent } from "./components/AlaadinShipping/sdcompany/sdcompany.component";
// import { SDCompanyContactsComponent } from "./components/AlaadinShipping/sdcompanycontacts/sdcompanycontacts.component";
// import { SDCountryComponent } from "./components/AlaadinShipping/sdcountry/sdcountry.component";
// import { SDDispatchPlanInvoicePaymentComponent } from "./components/AlaadinShipping/sddispatchplaninvoicepayment/sddispatchplaninvoicepayment.component";
// import { SDStateComponent } from "./components/AlaadinShipping/sdstate/sdstate.component";
import { VerifyComponent } from "./components/dynamic/verify/verify.component";
import { AttendanceuploadReadComponent } from "./components/StatesDispatch/uploadRead/uploadRead.component";
import { UploadFilesReadComponent } from "./components/common/uploadMainRead/upload-files/upload-files.component";
import { UploadReadComponent } from "./components/common/uploadMainRead/upload.component";
import { SDCarMakeEntryComponent } from "./components/AlaadinShipping/sdcarmake/sdcarmake-entry/sdcarmake-entry.component";
import { SDCarMakeComponent } from "./components/AlaadinShipping/sdcarmake/sdcarmake.component";
import { SDCarModelComponent } from "./components/AlaadinShipping/sdcarmodel/sdcarmodel.component";
import { SDCarModelEntryComponent } from "./components/AlaadinShipping/sdcarmodel/sdcarmodel-entry/sdcarmodel-entry.component";
import { NavigationComponent } from "./navigation/navigation.component";
// import { SDUserComponent } from "./components/AlaadinShipping/sduser/sduser.component";
// import { SDUserEntryComponent } from "./components/AlaadinShipping/sduser/sduser-entry/sduser-entry.component";
import { SDDispatchPlanPaymentComponent } from "./components/AlaadinShipping/sddispatchplanpayment/sddispatchplanpayment.component";
import { SDDispatchPlanPaymentEntryComponent } from "./components/AlaadinShipping/sddispatchplanpayment/sddispatchplanpayment-entry/sddispatchplanpayment-entry.component";
import { ByYearComponent } from "./components/filterComponents/by-year/by-year.component";
import { FilterComponent } from "./components/filter/filter.component";
import { ByBrandComponent } from "./components/filterComponents/by-brand/by-brand.component";
import { ByVehicleTypeComponent } from "./components/filterComponents/by-vehicle-type/by-vehicle-type.component";
import { ByLocationComponent } from "./components/filterComponents/by-location/by-location.component";
import { ByColorComponent } from "./components/filterComponents/by-color/by-color.component";
import { FilterService } from "./components/filter/filter.service";
import { ByVinComponent } from "./components/filterComponents/by-vin/by-vin.component";
import { ByCompanyComponent } from "./components/filterComponents/by-company/by-company.component";
import { ByModelComponent } from "./components/filterComponents/by-model/by-model.component";
import { ByLotNoComponent } from "./components/filterComponents/by-lot-no/by-lot-no.component";
import { LicensePlateComponent } from "./components/filterComponents/by-license-plate/by-license-plate.component";
import { TagNoComponent } from "./components/filterComponents/by-tag-no/by-tag-no.component";
import { ByVehicleDispatchStatusComponent } from "./components/filterComponents/by-vehicle-dispatch-status/by-vehicle-dispatch-status.component";
import { ByPlanCodeComponent } from "./components/filterComponents/by-plan-code/by-plan-code.component";
import { ByCustomerNameComponent } from "./components/filterComponents/by-customer-name/by-customer-name.component";
import { ByShippingCompanyComponent } from "./components/filterComponents/by-shipping-company/by-shipping-company.component";
import { ByBookingNoComponent } from "./components/filterComponents/by-booking-no/by-booking-no.component";
import { ContainerNoComponent } from "./components/filterComponents/by-container-no/by-container-no.component";
import { ByLoadingPlanNoComponent } from "./components/filterComponents/by-loading-plan-no/by-loading-plan-no.component";
import { ByConsigneeComponent } from "./components/filterComponents/by-consignee/by-consignee.component";
import { ByPlanDispatchDateComponent } from "./components/filterComponents/by-plan-dispatch-date/by-plan-dispatch-date.component";
import { ByPlanStatusComponent } from "./components/filterComponents/by-plan-status/by-plan-status.component";
import { ByExpenseDateComponent } from "./components/filterComponents/by-vehicle-expense-date/by-vehicle-expense-date.component";
import { ByVehicleBillableItemComponent } from "./components/filterComponents/by-vehicle-billable-item/by-vehicle-billable-item.component";
import { ByVehicleSupplierComponent } from "./components/filterComponents/by-vehicle-supplier/by-vehicle-supplier.component";
import { ByVehicleRefNoComponent } from "./components/filterComponents/by-vehicle-ref-no/by-vehicle-ref-no.component";
import { ByVehicleCostPriceComponent } from "./components/filterComponents/by-vehicle-cost-price/by-vehicle-cost-price.component";
import { ByVehicleSellingPriceComponent } from "./components/filterComponents/by-vehicle-selling-price/by-vehicle-selling-price.component";
import { ByPlanExpenseDateComponent } from "./components/filterComponents/by-plan-expense-date/by-plan-expense-date.component";
import { ByPlanBillableItemComponent } from "./components/filterComponents/by-plan-billable-item/by-plan-billable-item.component";
import { ByPlanSupplierComponent } from "./components/filterComponents/by-plan-supplier/by-plan-supplier.component";
import { ByPlanRefNoComponent } from "./components/filterComponents/by-plan-ref-no/by-plan-ref-no.component";
import { ByPlanCostPriceComponent } from "./components/filterComponents/by-plan-cost-price/by-plan-cost-price.component";
import { ByPlanSellingPriceComponent } from "./components/filterComponents/by-plan-selling-price/by-plan-selling-price.component";
import { ByInvoiceNoComponent } from "./components/filterComponents/by-plan-invoice-no/by-plan-invoice-no.component";
import { ByInvoiceTotalAmountComponent } from "./components/filterComponents/by-invoice-total-amount/by-invoice-total-amount.component";
import { ByPaymentDateComponent } from "./components/filterComponents/by-payment-date/by-payment-date.component";
import { ByPaymentTypeComponent } from "./components/filterComponents/by-payment-type/by-payment-type.component";
import { ByPaymentRefTypeComponent } from "./components/filterComponents/by-ref-type/by-payment-ref-type.component";
import { ByPaymentAmountComponent } from "./components/filterComponents/by-payment-amount/by-payment-amount.component";
import { BatchVehiclePlanEntryComponent } from "./components/AlaadinShipping/sdvehicledetail/batchvehicleplan-entry/batchvehicleplan-entry.component";
import { FinancialReportComponent } from "./financial-report/financial-report.component";
import { MasterReportComponent } from "./master-report/master-report.component";
import { ReportComponent } from "./report/report.component";
import { ConfirmComponent } from './components/common/confirm/confirm.component';
// import { ReportPageEmailComponent } from "./components/PR/report-pageemail/report-pageemail.component";


import { DApiSerivce } from "./api.service";


import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";

import { SystemNavigationComponent } from './system/system-navigation/system-navigation.component';
import { SystemHomeComponent } from './system/system-home/system-home.component';

import { SystemBusinessProfileComponent } from './system/system-business-profile/system-business-profile.component';
import { SystemTaxComponent } from './system/tax/system-tax/system-tax.component';
import { SystemAccountComponent } from './system/account/system-account/system-account.component';
import { SystemForexComponent } from './system/forex/system-forex/system-forex.component';
import { AccountComponent } from "./system/account/account.component";
import { ForexComponent } from "./system/forex/forex.component";
import { TaxComponent } from "./system/tax/tax.component";
import { JournalEntryComponent } from "./system/journalentry/journalentry.component";
import { JournalEntryEntryComponent } from "./system/journalentry/journalentry-entry/journalentry-entry.component";
import { UploadProfileComponent } from "./system/upload/upload.component";
import { UploadFiles2Component } from "./system/upload/upload-files/upload-files.component";

// import { SystemLoginComponent } from './system/system-login/system-login.component';
import { AccountConfigurationComponent } from "./system/GeneratedComponents01Apr/accountconfiguration/accountconfiguration.component";
import { AccountConfigurationEntryComponent } from "./system/GeneratedComponents01Apr/accountconfiguration/accountconfiguration-entry/accountconfiguration-entry.component";
import { CustomerComponent } from "./system/GeneratedComponents01Apr/customer/customer.component";
import { CustomerEntryComponent } from "./system/GeneratedComponents01Apr/customer/customer-entry/customer-entry.component";

import { ProductGroupComponent } from "./system/GeneratedComponents01Apr/productgroup/productgroup.component";
import { ProductGroupEntryComponent } from "./system/GeneratedComponents01Apr/productgroup/productgroup-entry/productgroup-entry.component";

// import { ProductUnitConversionService } from "./system/GeneratedComponents01Apr/productunitconversion/productunitconversion.service";
// import { ProductUnitConversionComponent } from "./system/GeneratedComponents01Apr/productunitconversion/productunitconversion.component";
// import { ProductUnitConversionEntryComponent } from "./system/GeneratedComponents01Apr/productunitconversion/productunitconversion-entry/productunitconversion-entry.component";
// import { WareHouseComponent } from "./system/GeneratedComponents01Apr/warehouse/warehouse.component";
// import { WareHouseEntryComponent } from "./system/GeneratedComponents01Apr/warehouse/warehouse-entry/warehouse-entry.component";

// import { ExpensedynamicComponent } from './system/expensedynamic/expensedynamic.component';
// import { ExpensedynamicEntryComponent } from "./system/expensedynamic/expensedynamic-entry/expensedynamic-entry.component";
import { CompanyBankComponent } from "./system/AnotherComponents/companybank/companybank.component";
import { CompanyBankEntryComponent } from "./system/AnotherComponents/companybank/companybank-entry/companybank-entry.component";
import { CompanyBankBranchComponent } from "./system/AnotherComponents/companybankbranch/companybankbranch.component";
import { CompanyBankBranchEntryComponent } from "./system/AnotherComponents/companybankbranch/companybankbranch-entry/companybankbranch-entry.component";
import { CompanyBankBranchAccountComponent } from "./system/AnotherComponents/companybankbranchaccount/companybankbranchaccount.component";
import { CompanyBankBranchAccountEntryComponent } from "./system/AnotherComponents/companybankbranchaccount/companybankbranchaccount-entry/companybankbranchaccount-entry.component";
import { InvoiceComponent } from "./system/AnotherComponents/invoice/invoice.component";
import { InvoiceEntryComponent } from "./system/AnotherComponents/invoice/invoice-entry/invoice-entry.component";
import { PaymentFromCompanyComponent } from "./system/AnotherComponents/paymentfromcompany/paymentfromcompany.component";
import { PaymentFromCompanyEntryComponent } from "./system/AnotherComponents/paymentfromcompany/paymentfromcompany-entry/paymentfromcompany-entry.component";
import { PaymentToCompanyComponent } from "./system/AnotherComponents/paymenttocompany/paymenttocompany.component";
import { PaymentToCompanyEntryComponent } from "./system/AnotherComponents/paymenttocompany/paymenttocompany-entry/paymenttocompany-entry.component";
import { ProductPricingComponent } from "./system/AnotherComponents/productpricing/productpricing.component";
import { ProductPricingEntryComponent } from "./system/AnotherComponents/productpricing/productpricing-entry/productpricing-entry.component";
import { StockInEntryComponent } from "./system/AnotherComponents/stockin/stockin-entry/stockin-entry.component";
import { StockInComponent } from "./system/AnotherComponents/stockin/stockin.component";
import { StockMovementComponent } from "./system/AnotherComponents/stockmovement/stockmovement.component";
import { StockMovementEntryComponent } from "./system/AnotherComponents/stockmovement/stockmovement-entry/stockmovement-entry.component";
// import { JournaldynamicComponent } from "./system/journaldynamic/journaldynamic.component";
// import { JournaldynamicEntryComponent } from "./system/journaldynamic/journaldynamic-entry/journaldynamic-entry.component";
// import { ProductStockComponent } from "./system/GeneratedComponents01Apr/productstock/productstock.component";
// import { ProductStockEntryComponent } from "./system/GeneratedComponents01Apr/productstock/productstock-entry/productstock-entry.component";
// import { DecimalComponent } from './system/decimal/decimal.component';
// import { IsDecimalDirectiveDirective } from './system/is-decimal-directive.directive';
// import { ReportsComponent } from './system/reports/reports.component';
import { FinancialComponent } from './system/reports/financial/financial.component';

import { SchoolClassComponent } from './lmssystem/schoolclass/schoolclass.component';
// //import { TimetableComponent } from './lmssystem/timetable/timetable.component';
// //import { Time } from "./lmssystem/timetable/time-table-entry/time-table-entry.component";
import { TeacherComponent } from "./lmssystem/teacher/teacher.component";
import { TeacherEntryComponent } from "./lmssystem/teacher/teacher-entry/teacher-entry.component";
import { SchoolGroupComponent } from "./lmssystem/schoolgroup/schoolgroup.component";



import { SchoolYearComponent } from "./lmssystem/schoolyear/schoolyear.component";

import { StudentAttendComponent } from "./lmssystem/studentattend/studentattend.component";
import { StudSubjComponent } from "./lmssystem/studsubj/studsubj.component";

import { TimetableComponent } from "./lmssystem/timetable/timetable.component";
import { TimetableEntryComponent } from "./lmssystem/timetable/timetable-entry/timetable-entry.component";
import { SchoolClassEntryComponent } from "./lmssystem/schoolclass/schoolclass-entry/schoolclass-entry.component";
import { SchoolgroupEntryComponent } from "./lmssystem/schoolgroup/schoolgroup-entry/schoolgroup-entry.component";
import { StudentAttendEntryComponent } from "./lmssystem/studentattend/studentattend-entry/studentattend-entry.component";
import { StudSubjEntryComponent } from "./lmssystem/studsubj/studsubj-entry/studsubj-entry.component";
import { TeacSubComponent } from "./lmssystem/teacsub/teacsub.component";
import { TeacSubEntryComponent } from "./lmssystem/teacsub/teacsub-entry/teacsub-entry.component";
import { SubjectOutlineComponent } from "./lmssystem/subjectoutline/subjectoutline.component";
import { SubjectOutlineEntryComponent } from "./lmssystem/subjectoutline/subjectoutline-entry/subjectoutline-entry.component";
// import { SubOutlineUnComponent } from "./lmssystem/suboutlineun/suboutlineun.component";
// import { SubOutlineUnEntryComponent } from "./lmssystem/suboutlineun/suboutlineun-entry/suboutlineun-entry.component";
import { SubjectTrackingComponent } from "./lmssystem/subjecttracking/subjecttracking.component";
import { SubjectTrackingEntryComponent } from "./lmssystem/subjecttracking/subjecttracking-entry/subjecttracking-entry.component";
// import { SubjectContentComponent } from "./lmssystem/subjectcontent/subjectcontent.component";
// import { SubjectContentEntryComponent } from "./lmssystem/subjectcontent/subjectcontent-entry/subjectcontent-entry.component";
import { SubjectHomeworkComponent } from "./lmssystem/subjecthomework/subjecthomework.component";
import { SubjectHomeworkEntryComponent } from "./lmssystem/subjecthomework/subjecthomework-entry/subjecthomework-entry.component";
import { SubjTestMarksComponent } from "./lmssystem/subjtestmarks/subjtestmarks.component";
import { SubjTestMarksEntryComponent } from "./lmssystem/subjtestmarks/subjtestmarks-entry/subjtestmarks-entry.component";
import { GroupStudentComponent } from "./lmssystem/groupstudent/groupstudent.component";
import { GroupStudentEntryComponent } from "./lmssystem/groupstudent/groupstudent-entry/groupstudent-entry.component";
import { ClassSubjectComponent } from "./lmssystem/classsubject/classsubject.component";

import { HomeworkSubComponent } from "./lmssystem/homeworksub/homeworksub.component";
import { HomeworkSubEntryComponent } from "./lmssystem/homeworksub/homeworksub-entry/homeworksub-entry.component";
import { SubjTestComponent } from "./lmssystem/subjtest/subjtest.component";
import { SubjTestEntryComponent } from "./lmssystem/subjtest/subjtest-entry/subjtest-entry.component";
import { VehicleComponent } from "./lmssystem/vehicle/vehicle.component";
import { VehicleEntryComponent } from "./lmssystem/vehicle/vehicle-entry/vehicle-entry.component";
import { VehicleMileageComponent } from "./lmssystem/vehiclemileage/vehiclemileage.component";
import { VehicleMileageEntryComponent } from "./lmssystem/vehiclemileage/vehiclemileage-entry/vehiclemileage-entry.component";
import { VehRegComponent } from "./lmssystem/vehreg/vehreg.component";
import { VehRegEntryComponent } from "./lmssystem/vehreg/vehreg-entry/vehreg-entry.component";
import { DriverComponent } from "./lmssystem/driver/driver.component";
import { DriverEntryComponent } from "./lmssystem/driver/driver-entry/driver-entry.component";
import { VehicleOwnerComponent } from "./lmssystem/vehicleowner/vehicleowner.component";
import { VehicleOwnerEntryComponent } from "./lmssystem/vehicleowner/vehicleowner-entry/vehicleowner-entry.component";
import { VehicleDriverComponent } from "./lmssystem/vehicledriver/vehicledriver.component";
import { VehicleDriverEntryComponent } from "./lmssystem/vehicledriver/vehicledriver-entry/vehicledriver-entry.component";
import { TripShiftComponent } from "./lmssystem/tripshift/tripshift.component";
import { TripShiftEntryComponent } from "./lmssystem/tripshift/tripshift-entry/tripshift-entry.component";
// import { TripShiftDetailsComponent } from "./lmssystem/tripshiftdetails/tripshiftdetails.component";
import { TripExecComponent } from "./lmssystem/tripexec/tripexec.component";
// import { TripExecDetailsComponent } from "./lmssystem/tripexecdetails/tripexecdetails.component";
// import { VehicleFuelComponent } from "./lmssystem/vehiclefuel/vehiclefuel.component";
// import { VehMainComponent } from "./lmssystem/vehmain/vehmain.component";
// import { VehMainDetailsComponent } from "./lmssystem/vehmaindetails/vehmaindetails.component";
// import { TripShiftDetailsEntryComponent } from "./lmssystem/tripshiftdetails/tripshiftdetails-entry/tripshiftdetails-entry.component";
import { TripExecEntryComponent } from "./lmssystem/tripexec/tripexec-entry/tripexec-entry.component";
// import { TripExecDetailsEntryComponent } from "./lmssystem/tripexecdetails/tripexecdetails-entry/tripexecdetails-entry.component";
// import { VehicleFuelEntryComponent } from "./lmssystem/vehiclefuel/vehiclefuel-entry/vehiclefuel-entry.component";
// import { VehMainEntryComponent } from "./lmssystem/vehmain/vehmain-entry/vehmain-entry.component";
// import { VehMainDetailsEntryComponent } from "./lmssystem/vehmaindetails/vehmaindetails-entry/vehmaindetails-entry.component";
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
import { QuBanMCEntryComponent } from "./lmssystem/qubanmc/qubanmc-entry/qubanmc-entry.component";
// import { QuBanMatEntryComponent } from "./lmssystem/qubanmat/qubanmat-entry/qubanmat-entry.component";
// import { QuBanFillEntryComponent } from "./lmssystem/qubanfill/qubanfill-entry/qubanfill-entry.component";
// import { QuBanOrdEntryComponent } from "./lmssystem/qubanord/qubanord-entry/qubanord-entry.component";
import { QuestionBankEntryComponent } from "./lmssystem/questionbank/questionbank-entry/questionbank-entry.component";
import { TestGradeEntryComponent } from "./lmssystem/testgrade/testgrade-entry/testgrade-entry.component";
// import { TestGradeDetEntryComponent } from "./lmssystem/testgradedet/testgradedet-entry/testgradedet-entry.component";
import { SubTeQueEntryComponent } from "./lmssystem/subteque/subteque-entry/subteque-entry.component";
// import { SubTeFreeInputEntryComponent } from "./lmssystem/subtefreeinput/subtefreeinput-entry/subtefreeinput-entry.component";
// import { SubTeBlankEntryComponent } from "./lmssystem/subteblank/subteblank-entry/subteblank-entry.component";
// import { SubTeMatEntryComponent } from "./lmssystem/subtemat/subtemat-entry/subtemat-entry.component";
// import { SubTeOrderEntryComponent } from "./lmssystem/subteorder/subteorder-entry/subteorder-entry.component";

import { ClassSubjectEntryComponent } from "./lmssystem/classsubject/classsubject-entry/classsubject-entry.component";
import { subjectComponent } from "./lmssystem/subject/subject.component";
import { subjectEntryComponent } from "./lmssystem/subject/subject-entry/subject-entry.component";
// import { SubtemcComponent } from "./lmssystem/subtemc/subtemc.component";
// import { SubTeMCEntryComponent } from "./lmssystem/subtemc/subtemc-entry/subtemc-entry.component";
import { CustomerAccountComponent } from "./lmssystem/customeraccount/customeraccount.component";
import { CustomerAccountEntryComponent } from "./lmssystem/customeraccount/customeraccount-entry/customeraccount-entry.component";
import { SchoolYearEntryComponent } from "./lmssystem/schoolyear/schoolyear-entry/schoolyear-entry.component";
import { ProductEntryComponent } from "./system/GeneratedComponents01Apr/product/product-entry/product-entry.component";
import { ProductComponent } from "./system/GeneratedComponents01Apr/product/product.component";
import { ProductCategoryEntryComponent } from "./system/GeneratedComponents01Apr/productcategory/productcategory-entry/productcategory-entry.component";
import { ProductCategoryComponent } from "./system/GeneratedComponents01Apr/productcategory/productcategory.component";
// import { ProductUnitEntryComponent } from "./system/GeneratedComponents01Apr/productunit/productunit-entry/productunit-entry.component";
// import { ProductUnitComponent } from "./system/GeneratedComponents01Apr/productunit/productunit.component";
import { Prod2Component } from "./system/AnotherComponents/productpricing/productpricing-entry/prod2.component";
import { SubTeSubmissionComponent } from "./lmssystem/subTeSubmission/subTeSubmission.component";
import { subTeSubmissionEntryComponent } from "./lmssystem/subTeSubmission/subtesubmission-entry/subtesubmission-entry.component";
import { ExpenseFilingEntryComponent } from "./system/expensefiling/expensefiling/expensefiling-entry/expensefiling-entry.component";
import { ExpenseFilingComponent } from "./system/expensefiling/expensefiling/expensefiling.component";
import { ChangePasswordNewComponent } from "./system/change-password/change-password.component";
import { CheckfordeleteComponent } from "./system/journalentry/operation/checkfordelete/checkfordelete.component";
import { MyFilterComponent } from "./system/journalentry/operation/my-filter/my-filter.component";
import { MySortComponent } from "./system/journalentry/operation/my-sort/my-sort.component";
import { CheckforstateComponent } from "./system/journalentry/operation/statecheck/checkfordelete.component";
import { CheckforpassComponent } from "./system/AnotherComponents/chequetocompany/checkforpass/checkforpass.component";
import { ChequeToCompanyEntryComponent } from "./system/AnotherComponents/chequetocompany/chequetocompany-entry/chequetocompany-entry.component";
import { ChequeToCompanyComponent } from "./system/AnotherComponents/chequetocompany/chequetocompany.component";
import { MovetobankComponent } from "./system/AnotherComponents/chequetocompany/movetobank/movetobank.component";
import { TransportInvoiceEntryComponent } from "./system/AnotherComponents/Transport-invoice/invoice-entry/invoice-entry.component";
import { RegistrationInvoiceEntryComponent } from "./system/AnotherComponents/Registration-invoice/invoice-entry/invoice-entry.component";
import { RegistrationInvoiceComponent } from "./system/AnotherComponents/Registration-invoice/invoice.component";
import { TransportInvoiceComponent } from "./system/AnotherComponents/Transport-invoice/invoice.component";
import { CheckforstateCompComponent } from "./system/AnotherComponents/paymenttocompany/statecheck/checkfordelete.component";
import { CheckforsubmitComponent } from "./system/AnotherComponents/paymenttocompany/submitcheck/checkfordelete.component";
import { PaymentfromEntryComponent } from "./system/AnotherComponents/paymentfrom/paymenttocompany-entry/paymenttocompany-entry.component";
import { PaymentfromComponent } from "./system/AnotherComponents/paymentfrom/paymenttocompany.component";
import { CheckforstateComp2Component } from "./system/AnotherComponents/paymentfrom/statecheck/checkfordelete.component";
import { Checkforsubmit2Component } from "./system/AnotherComponents/paymentfrom/submitcheck/checkfordelete.component";
import { ConfBoxComponent } from "./system/AnotherComponents/confirmbox/checkfordelete.component";
import { Checkforpass2Component } from "./system/AnotherComponents/chequefromcompany/checkforpass/checkforpass.component";
import { ChequeFromCompanyComponent } from "./system/AnotherComponents/chequefromcompany/chequetocompany.component";
import { Movetobank2Component } from "./system/AnotherComponents/chequefromcompany/movetobank/movetobank.component";
import { ChequeFromCompanyEntryComponent } from "./system/AnotherComponents/chequefromcompany/chequetocompany-entry/chequetocompany-entry.component";
import { CheckforIsActiveComponent } from "./lmssystem/schoolyear/checkfordelete/checkfordelete.component";



// local
// const google_oauth_client_id = '744138061341-gvqlm05t8e5bf4qj3ioscavd0ktb0j4t.apps.googleusercontent.com';
// global
const google_oauth_client_id =
  "744138061341-so8uhp36vi2pgkus63cn8diqjv0j9fta.apps.googleusercontent.com";

export let config:any
//  AuthServiceConfig = null;

export function prepareGoogleKey(): SocialAuthServiceConfig {
  config= [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(google_oauth_client_id)
    }
  ];
  return config;
}

config = prepareGoogleKey();

//step 1 of security (next: app.global.ts: baseAppName)
export function getAccessToken(): string|null {
  return localStorage.getItem("QUALITY_HOUSE_token");
}

export const jwtConfig = {
  tokenGetter: getAccessToken,
  // local
  // whiteListedDomains: ['localhost:4200']
  // global
  whiteListedDomains: ["89.34.16.77"]
};



@NgModule({
  
  declarations: [

   SchoolClassEntryComponent,
    SchoolClassComponent,
   TeacSubComponent,
   TeacSubEntryComponent,
    TeacherComponent,
    SchoolGroupComponent,
    subjectComponent,
    subjectEntryComponent,
    SchoolYearComponent,
    StudentAttendComponent,
    StudSubjComponent,
    TeacherEntryComponent,
    SchoolgroupEntryComponent,
    CustomerAccountComponent,
    CustomerAccountEntryComponent,
    SchoolYearComponent,
    StudentAttendEntryComponent,
    StudSubjEntryComponent,
   SubjectOutlineComponent,
   SubjectOutlineEntryComponent,
    TimetableComponent,
    TimetableEntryComponent,
//     SubOutlineUnComponent,
//     SubOutlineUnEntryComponent,
    SubjectTrackingComponent,
    SubjectTrackingEntryComponent,
//     SubjectContentComponent,
//     SubjectContentEntryComponent,
    SubjectHomeworkComponent,
    SubjectHomeworkEntryComponent,
    SubjTestMarksComponent,
    SubjTestMarksEntryComponent,
    GroupStudentComponent,
    GroupStudentEntryComponent,
    ClassSubjectComponent,
    ClassSubjectEntryComponent,
    HomeworkSubComponent,
    HomeworkSubEntryComponent,
    SubjTestComponent,
    SubjTestEntryComponent,
    VehicleComponent,
    VehicleEntryComponent,
    VehicleMileageComponent,
    VehicleMileageEntryComponent,
    VehRegComponent,
    VehRegEntryComponent,
    DriverComponent,
    DriverEntryComponent,
    VehicleOwnerComponent,
    VehicleOwnerEntryComponent,
    VehicleDriverComponent,
	TripShiftComponent,
// 	TripShiftDetailsComponent,
	TripExecComponent,
// 	TripExecDetailsComponent,
// 	VehicleFuelComponent,
// 	VehMainComponent,
// 	VehMainDetailsComponent,
  QuBanMCComponent,
// QuBanMatComponent,
// QuBanFillComponent,
// QuBanOrdComponent,
QuestionBankComponent,
TestGradeComponent,
// TestGradeDetComponent,
SubTeQueComponent,
// SubTeFreeInputComponent,
// SubTeBlankComponent,
// SubTeMatComponent,
// SubTeOrderComponent,
// SubtemcComponent,
// SubTeMCEntryComponent,
QuBanMCEntryComponent,
// QuBanMatEntryComponent,
// QuBanFillEntryComponent,
// QuBanOrdEntryComponent,
QuestionBankEntryComponent,
TestGradeEntryComponent,
// TestGradeDetEntryComponent,
SubTeQueEntryComponent,
// SubTeFreeInputEntryComponent,
// SubTeBlankEntryComponent,
// SubTeMatEntryComponent,
// SubTeOrderEntryComponent,

  VehicleDriverEntryComponent,
	TripShiftEntryComponent,
// 	TripShiftDetailsEntryComponent,
	TripExecEntryComponent,
// 	TripExecDetailsEntryComponent,
// 	VehicleFuelEntryComponent,
// 	VehMainEntryComponent,
// 	VehMainDetailsEntryComponent,


    AppComponent,
    NotActivatedComponent,
    AccountActivatedComponent,
    RegistrationExpiredComponent,
    ChangePasswordComponent,
    ChangePasswordAnonComponent,
    DashboardComponent,
    ErrorBoxComponent,
    ErrorApiBoxComponent,
    WarningBoxComponent,
    PleaseWaitComponent,
    MenuBarComponent,
    MenuItemComponent,
    LoginComponent,
    // LandingMenuComponent,
    WelcomeComponent,
    CountryComponent,
    CountryEntryComponent,
    CityComponent,
    PageSortComponent,
    UploadComponent,
    UploadFilesComponent,
    ReportPageComponent,
    MenuSetupComponent,
    SafePipe,
    StateComponent,
    SignUpComponent,
    UploadComponent,
    AttendanceuploadComponent,
    SDBatchVehicleEntryComponent,
    SDVehicleDetailComponent,
    SDVehicleDetailEntryComponent,
    SDShippingLineCompaniesComponent,
    SDShippingLineCompaniesEntryComponent,
    SDDispatchPlanComponent,
    SDDispatchPlanEntryComponent,
    SDDispatchPlanExpenseComponent,
    SDDispatchPlanExpenseEntryComponent,
    SDDispatchPlanInvoiceComponent,
    SDDispatchPlanInvoiceEntryComponent,
    SignUpContComponent,
    // SDAppFeedbackComponent,
    // SDAppFeedbackEntryComponent,
    // SDVehicleBatchComponent,
    // SDVehicleBatchEntryComponent,
    // SDCityComponent,
    // SDCityEntryComponent,
    SDDispatchPlanInvoiceComponent,
    SDDispatchPlanInvoiceEntryComponent,
    SDCompanyComponent,
    SDCompanyEntryComponent,
    // SDCompanyContactsComponent,
    // SDCompanyContactsEntryComponent,
    // SDCountryComponent,
    // SDCountryEntryComponent,
    // SDDispatchPlanInvoicePaymentComponent,
    // SDDispatchPlanInvoicePaymentEntryComponent,
    // SDStateComponent,
    // SDStateEntryComponent,
    VerifyComponent,
    AttendanceuploadReadComponent,
    UploadFilesReadComponent,
    UploadReadComponent,
    SDCarMakeComponent,
    SDCarMakeEntryComponent,
    SDCarModelComponent,
    SDCarModelEntryComponent,
    NavigationComponent,
    // SDUserComponent,
    // SDUserEntryComponent,
    SDDispatchPlanPaymentComponent,
    SDDispatchPlanPaymentEntryComponent,
    SDCompanyComponent,
    SDCompanyEntryComponent,
    FilterComponent,
    ByYearComponent,
    ByColorComponent,
    ByBrandComponent,
    ByVehicleTypeComponent,
    ByLocationComponent,
    ByVinComponent,
    ByCompanyComponent,
    ByModelComponent,
    ByLotNoComponent,
    LicensePlateComponent,
    TagNoComponent,
    ByVehicleDispatchStatusComponent,
    ByPlanCodeComponent,
    ByCustomerNameComponent,
    ByShippingCompanyComponent,
    ByBookingNoComponent,
    ContainerNoComponent,
    ByLoadingPlanNoComponent,
    ByConsigneeComponent,
    ByPlanDispatchDateComponent,
    ByPlanStatusComponent,
    ByExpenseDateComponent,
    ByVehicleBillableItemComponent,
    ByVehicleSupplierComponent,
    ByVehicleRefNoComponent,
    ByVehicleCostPriceComponent,
    ByVehicleSellingPriceComponent,
    ByPlanExpenseDateComponent,
    ByPlanBillableItemComponent,
    ByPlanSupplierComponent,
    ByPlanRefNoComponent,
    ByPlanCostPriceComponent,
    ByPlanSellingPriceComponent,
    ByInvoiceNoComponent,
    ByInvoiceTotalAmountComponent,
    ByPaymentDateComponent,
    ByPaymentTypeComponent,
    ByPaymentRefTypeComponent,
    ByPaymentAmountComponent,
    BatchVehiclePlanEntryComponent,
    MasterReportComponent,
    ReportComponent,
    // ReportPageEmailComponent,
    FinancialReportComponent,
    ConfirmComponent,
    AccountComponent,
    ForexComponent,
    TaxComponent,
    DynamicFormComponent,
    SystemNavigationComponent,
    SystemHomeComponent,
    SystemBusinessProfileComponent,
    SystemTaxComponent,
    SystemAccountComponent,
    SystemForexComponent,
    JournalEntryComponent,
    JournalEntryEntryComponent,
    UploadProfileComponent,
    SchoolYearEntryComponent,
    
    UploadFiles2Component,
    ExpenseFilingEntryComponent,
    ExpenseFilingComponent,
    // SystemLoginComponent,
    AccountConfigurationComponent,
    AccountConfigurationEntryComponent,
    CustomerComponent,
    CustomerEntryComponent,
    ProductCategoryComponent,
    ProductCategoryEntryComponent,
    ProductGroupComponent,
    ProductGroupEntryComponent,
    // ProductUnitComponent,
    // ProductUnitEntryComponent,
    // ProductUnitConversionComponent,
    // ProductUnitConversionEntryComponent,
    // WareHouseComponent,
    // WareHouseEntryComponent,
    ProductEntryComponent,
    ProductComponent,
    // ExpensedynamicComponent,
    // ExpensedynamicEntryComponent,
    CompanyBankComponent,
    CompanyBankEntryComponent,
    CompanyBankBranchComponent,
    CompanyBankBranchEntryComponent,
    CompanyBankBranchAccountComponent,
    CompanyBankBranchAccountEntryComponent,
    InvoiceComponent,
    InvoiceEntryComponent,
    PaymentFromCompanyComponent,
    PaymentFromCompanyEntryComponent,
    PaymentToCompanyComponent,
    PaymentToCompanyEntryComponent,
    Prod2Component,
    ProductPricingComponent,
    ProductPricingEntryComponent,
    StockInComponent,
    StockInEntryComponent,
    StockMovementComponent,
    StockMovementEntryComponent,
    // JournaldynamicComponent,
    // JournaldynamicEntryComponent,
    // ProductStockComponent,
    // ProductStockEntryComponent,
    // DecimalComponent,
    // IsDecimalDirectiveDirective,
    // ReportsComponent,
    FinancialComponent,
    SubTeSubmissionComponent,
    subTeSubmissionEntryComponent,
    ChangePasswordNewComponent,
    MySortComponent,
    MyFilterComponent,
    CheckfordeleteComponent,
    CheckforstateComponent,
    CheckforpassComponent,
    ChequeToCompanyEntryComponent,
    MovetobankComponent,
    Movetobank2Component,
    Checkforpass2Component,
    ChequeFromCompanyComponent,
    ChequeToCompanyComponent,
    RegistrationInvoiceEntryComponent,
    TransportInvoiceEntryComponent,
    RegistrationInvoiceComponent,
    TransportInvoiceComponent,
    CheckforstateCompComponent,
    CheckforsubmitComponent,
    Checkforsubmit2Component,
    PaymentfromEntryComponent,
    PaymentfromComponent,
    CheckforstateComp2Component,
    ConfBoxComponent,
    ChequeFromCompanyEntryComponent,
    CheckforIsActiveComponent

    
    
    
    
    
  ],
  imports: [
    SocialLoginModule.initialize(config),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    // Ng2ImgMaxModule,
    MatToolbarModule,
    AppRoutingModule,
    ChartModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    JwtModule.forRoot({
      config: jwtConfig
    }),
    MaterialModule,
    MatBottomSheetModule
  ],
  providers: [
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            'clientId'
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  } ,
    { provide: MatDialogRef, useValue: {} },
{ provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppGlobals,
    DApiSerivce,
    AuthGuard,
    AuthService,
    CommonService,
    RegionalService,
    DatePipe,
    MessageBoxService,
    FilterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UIService,
    UserService,
    PageEventsService,
    SelectService,
    // SignUpService,
    NgxImageCompressService,


  ],
  bootstrap: [AppComponent],
  entryComponents: [
//     SubTeMCEntryComponent,
   CustomerAccountEntryComponent,
    SchoolClassEntryComponent,
    VehicleDriverEntryComponent,
	TripShiftEntryComponent,
// 	TripShiftDetailsEntryComponent,
	TripExecEntryComponent,
// 	TripExecDetailsEntryComponent,
// 	VehicleFuelEntryComponent,
// 	VehMainEntryComponent,
// 	VehMainDetailsEntryComponent,
  GroupStudentEntryComponent,
	ClassSubjectEntryComponent,
	HomeworkSubEntryComponent,
	SubjTestEntryComponent,
	VehicleEntryComponent,
	VehicleMileageEntryComponent,
	VehRegEntryComponent,
	DriverEntryComponent,
	VehicleOwnerEntryComponent,
subjectEntryComponent,
  QuBanMCEntryComponent,
// QuBanMatEntryComponent,
// QuBanFillEntryComponent,
// QuBanOrdEntryComponent,
QuestionBankEntryComponent,
TestGradeEntryComponent,
// TestGradeDetEntryComponent,
SubTeQueEntryComponent,
// SubTeFreeInputEntryComponent,
// SubTeBlankEntryComponent,
// SubTeMatEntryComponent,
// SubTeOrderEntryComponent,
//     //Time,
//     SubOutlineUnEntryComponent,
    SubjectTrackingEntryComponent,
//     SubjectContentEntryComponent,
    SubjectHomeworkEntryComponent,
    SubjTestMarksEntryComponent,
    TeacherEntryComponent,
    SchoolgroupEntryComponent,
    StudentAttendEntryComponent,
    TeacSubEntryComponent,
   
    
    SchoolYearEntryComponent,
    StudSubjEntryComponent,
    TeacSubEntryComponent,
    SubjectOutlineEntryComponent,
    TimetableEntryComponent,
    ErrorBoxComponent,
    ErrorApiBoxComponent,
    WarningBoxComponent,
    PleaseWaitComponent,
    CountryEntryComponent,
    PageSortComponent,
    SDVehicleDetailEntryComponent,
    SDShippingLineCompaniesEntryComponent,
    UploadComponent,
    AttendanceuploadComponent,
    SDDispatchPlanEntryComponent,
    SDDispatchPlanExpenseEntryComponent,
    SDDispatchPlanInvoiceEntryComponent,
    // SDAppFeedbackEntryComponent,
    // SDVehicleBatchEntryComponent,
    // SDCityEntryComponent,
    SDDispatchPlanInvoiceEntryComponent,
    SDCompanyEntryComponent,
    // SDCompanyContactsEntryComponent,
    // SDCountryEntryComponent,
    // SDDispatchPlanInvoicePaymentEntryComponent,
    // SDStateEntryComponent,
    AttendanceuploadReadComponent,
    UploadFilesReadComponent,
    UploadReadComponent,
    SDCarMakeEntryComponent,
    SDCarModelEntryComponent,
    SDBatchVehicleEntryComponent,
    // SDUserEntryComponent,
    SDDispatchPlanPaymentEntryComponent,
    SDCompanyEntryComponent,
    // FilterComponent,
    BatchVehiclePlanEntryComponent,
    FinancialReportComponent,
    MasterReportComponent,
    ReportComponent,
    // ReportPageEmailComponent,
    ConfirmComponent,
    SystemAccountComponent,
    SystemForexComponent,
    SystemTaxComponent,
    JournalEntryEntryComponent,
    ExpenseFilingEntryComponent,
    AccountConfigurationEntryComponent,
    
    CustomerEntryComponent,
    ProductEntryComponent,
    
    ProductCategoryEntryComponent,
    
    ProductGroupEntryComponent,
    
    // ProductUnitEntryComponent,
    
    // ProductUnitConversionEntryComponent,
    
    // WareHouseEntryComponent,
    // ExpensedynamicEntryComponent,
    CompanyBankEntryComponent,
    CompanyBankBranchEntryComponent,
    CompanyBankBranchAccountEntryComponent,
    // InvoiceEntryComponent,
    PaymentFromCompanyEntryComponent,
    PaymentToCompanyEntryComponent,
    ProductPricingEntryComponent,
    StockInEntryComponent,
    StockMovementEntryComponent,
    // JournaldynamicEntryComponent,
    // ProductStockEntryComponent,
    Prod2Component,
    subTeSubmissionEntryComponent,
    ChangePasswordNewComponent,
    MySortComponent,
    MyFilterComponent,
    CheckfordeleteComponent,
    CheckforstateComponent,
    CheckforpassComponent,
    ChequeToCompanyEntryComponent,
    MovetobankComponent,
    RegistrationInvoiceEntryComponent,
    TransportInvoiceEntryComponent,
    CheckforstateCompComponent,
    CheckforstateComp2Component,
    CheckforsubmitComponent,
    PaymentfromEntryComponent,
    Checkforsubmit2Component,
    ConfBoxComponent,
    Movetobank2Component,
    Checkforpass2Component,
    ChequeFromCompanyEntryComponent,
    CheckforIsActiveComponent
    
  ]
})

export class AppModule {}
