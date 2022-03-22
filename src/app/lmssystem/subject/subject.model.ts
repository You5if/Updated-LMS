import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class subjectModel {
constructor(


        public subjectId: number,
                public subjectName: string,
                public remarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

