import { Coordinate } from "./Coordinate";

export interface Shipment {
    Id: number;
    WaybillNo: string;
    CustomerName: string;
    Site: string;
    WaybillDate: string;
    Group: string;
    Status: string;
    Coordinate: Coordinate;
    CustomerReference: string;
    GroupType: string;
    CBM: string;
    Weight: string;
  }