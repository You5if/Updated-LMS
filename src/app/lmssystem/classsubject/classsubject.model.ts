import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class ClassSubjectModel {
constructor(


        public classSubjectId: number,
                public schoolYearId: number,
                public schoolClassId: number,
                public subjectId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

