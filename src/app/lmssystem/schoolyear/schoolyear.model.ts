import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SchoolYearModel {
constructor(


        public schoolYearId: number,
                public scName: string,
                public remarks: string,
                public isActive: boolean,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

