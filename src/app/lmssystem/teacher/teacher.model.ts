import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class TeacherModel {
constructor(


        public teacherId: number,
                public teacherName: string,
                public mobile1: string,
                public mobile2: string,
                public email: string,
                public nationality: number,
                public nationalityNo: string,
                public remarks: string,
                public aPIImagePath: string,
                public aPIPath: string,
                public extension: string,
                public fileName: string,
                public fullPath: string,
                public originalFileName: string,
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

