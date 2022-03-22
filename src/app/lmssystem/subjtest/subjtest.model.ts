import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SubjTestModel {
constructor(


        public subjTestId: number,
                public schoolYearId: number,
                public subjectId: number,
                public schoolGroupId: number,
                public totalMarks: number,
                public testType: number,
                public testName: string,
                public estDate: Date,
                public actualDate: Date,
                public teacherRemarks: string,
                public supervRemarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

