import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class ServiceEnModel {
constructor(


        public serviceEnId: number,
                                public categoryId: number,
                public groupId: number,
                public service: string,
                public price: number,
                public comment: string,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

