import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SubjectTrackingModel {
constructor(


        public subjectTrackingId: number,
                public schoolYearId: number,
                public schoolGroupId: number,
                public teacherId: number,
                public subjectId: number,
                public subOutlineUnId: number,
                public expectedDate: Date,
                public actualDate: Date,
                public teacherRemarks: string,
                public supervRemarks: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

