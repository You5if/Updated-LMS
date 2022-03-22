import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class StudentAttendModel {
constructor(


        public studentAttendId: number,
                public customerAccountId: number,
                public schoolGroupId: number,
                public attDate: Date,
                public attStatus: number,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

