import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class VehicleDriverModel {
constructor(


        public vehicleDriverId: number,
                public vehicleId: number,
                public driverId: number,
                public fromDate: Date,
                public toDate: Date,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

