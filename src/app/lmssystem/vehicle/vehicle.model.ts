import { AuditModel } from 'src/app/components/misc/AuditParams.Model';

// Definition of our model class
export class VehicleModel {
constructor(


        public vehicleId: number,
                public vehicleName: string,
                public plateNumber: string,
                public vehcileType: number,
                public seats: number,
                public vehcileModel: string,
                public yearMade: string,
                public color: string,
                public engineType: number,
                public isOwned: boolean,
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

