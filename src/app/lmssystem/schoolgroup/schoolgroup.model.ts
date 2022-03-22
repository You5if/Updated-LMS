import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SchoolGroupModel {
constructor(


        public schoolGroupId: number,
                public scGroupName: string,
                public remarks: string,
                public schoolYearId: number,
                public schoolClassId: number,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

