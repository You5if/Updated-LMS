import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class DriverModel {
constructor(


        public driverId: number,
                public fullName: string,
                public dOB: Date,
                public gender: number,
                public licenseNo: string,
                public registrationDate: Date,
                public expiryDate: Date,
                public mobile1: string,
                public mobile2: string,
                public remarks: string,
                public aPIImagePath: string,
                public aPIPath: string,
                public extension: string,
                public fileName: string,
                public fullPath: string,
                public originalFileName: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

