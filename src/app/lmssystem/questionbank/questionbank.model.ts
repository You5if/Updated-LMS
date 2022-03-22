import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class QuestionBankModel {
constructor(


        public questionBankId: number,
 public question: string,
                public subjectId: number,
                public classId: number,
                public questionTypeId: number,
                public points: number,
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

