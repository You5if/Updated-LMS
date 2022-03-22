import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class CustomerAccountModel {
constructor(


        public customerAccountId: number,
                public customerId: number,
                public accountId: number,
                public description: string,
                public accountName: string,
                public accountNumber: string,
                public ename: string,
                public aname: string,
                public remarks: string,
                public dOB: Date,
                public aPIImagePath: string,
                public aPIPath: string,
                public extension: string,
                public fileName: string,
                public fullPath: string,
                public originalFileName: string,
                public nationality: number,
                public nationalityNo: string,
                public nationalityExpiry: Date,
                public studentCode: string,
                public appUserId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

