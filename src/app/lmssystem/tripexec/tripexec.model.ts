import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class TripExecModel {
constructor(


        public tripExecId: number,
                public tripName: string,
                public vehicleId: number,
                public driverId: number,
                public tripDate: Date,
                public remarks: string,
                public estimateMileage: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

