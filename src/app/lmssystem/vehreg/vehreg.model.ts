import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class VehRegModel {
constructor(


        public vehRegId: number,
                public vehicleId: number,
                public registeredOn: Date,
                public expiryDate: Date,
                public forYear: string,
                public registrationFees: number,
                public insuranceType: number,
                public insuranceCode: string,
                public insuranceContact1: string,
                public insuranceContact2: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

