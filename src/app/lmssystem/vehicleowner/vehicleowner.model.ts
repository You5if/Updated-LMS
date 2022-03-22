import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class VehicleOwnerModel {
constructor(


        public vehicleOwnerId: number,
                public ownerName: string,
                public address: string,
                public mobile1: string,
                public mobile2: string,
                public remarks: string,
                public vehicleId: number,
                public monthlyRent: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

