import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class TeacSubModel {
constructor(


        public teacSubId: number,
                public schoolGroupId: number,
                public teacherId: number,
                public subjectId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

