import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class HomeworkSubModel {
constructor(


        public homeworkSubId: number,
                public subjectHomeworkId: number,
                public customerAccountId: number,
                public homework: string,
                public studRemarks: string,
                public teacherRemarks: string,
                public score: number,
                public submissionDate: Date,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

