import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class SubTeQueModel {
constructor(


        public subTeQueId: number,
  public subjectTestId: number,
                public questionBankId: number,
                public weightage: number,
                
        public entryMode: string,
        public active: boolean,
        public readOnly: boolean,
        public auditColumns: any,
) { }
}

