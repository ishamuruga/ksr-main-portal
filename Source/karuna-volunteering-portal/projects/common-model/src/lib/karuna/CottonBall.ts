import { BaseModel } from "./BaseModel";

export class CottonBall extends BaseModel {

    shippingproviders:string="";
    shippedDate!:Date;
    awb: string="";
    
    cbCount: number = 0;
    cbColor: string="";
    plannedCompleteDate: Date = new Date();
    plannedShippedDate: Date = new Date();
    status:string="";
}