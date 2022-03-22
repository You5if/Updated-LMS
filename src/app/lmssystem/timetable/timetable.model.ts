import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class TimetableModel {
constructor(


        public timeTableId: number,
                public weekday: number,
                public fromTime: Date,
                public toTime: Date,
                public schoolGroupId: number,
                public subjectId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

