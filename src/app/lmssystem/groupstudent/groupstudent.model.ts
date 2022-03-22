import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class GroupStudentModel {
constructor(


        public groupStudentId: number,
                public customerAccountId: number,
                public schoolGroupId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

