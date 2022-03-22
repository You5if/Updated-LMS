import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class VehicleMileageModel {
constructor(


        public vehicleMileageId: number,
                public vehicleId: number,
                public mileage: number,
                public mileageDate: Date,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

