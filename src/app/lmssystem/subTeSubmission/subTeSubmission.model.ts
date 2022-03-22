import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SubTeSubmissionModel {
constructor(


        public subTeSubmissionId: number,
                public studentId: number,
                public testDate: Date,
                public startTime: Date,
                public endTime: Date,
                public remarks: string,
                public teacherRemarks: string,
                public supervisorRemarks: string,
                public totalPoints: number,
                public totalMarks: number,
                public subjectTestId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

