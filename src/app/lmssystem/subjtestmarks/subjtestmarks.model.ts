import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SubjTestMarksModel {
constructor(


        public subjTestMarksId: number,
                public subjTestId: number,
                public customerAccountId: number,
                public marks: number,
                public teacherRemarks: string,
                public supervRemarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

