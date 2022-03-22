import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class TripShiftModel {
constructor(


        public tripShiftId: number,
                public tripName: string,
                public vehicleId: number,
                public driverId: number,
                public fromDate: Date,
                public toDate: Date,
                public estimateMileage: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}
export class invoiceproductModel {
        constructor(
                public invoiceProductId: number,
                public invoiceId: number,
                public productId: number,
                public quantity: number,
                public productUnitId: number,
                public unitPrice: number,
                public totalPrice: number,
                public active: boolean,
    public entryMode: string,
    public readOnly: boolean,
    public auditColumns: any,
        ) { }
}
