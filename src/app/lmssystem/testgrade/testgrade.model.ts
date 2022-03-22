import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class TestGradeModel {
constructor(


        public testGradeId: number,
public gradingStyle: string,
                public score: number,
                public remarks: string,
                
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

