export abstract class BaseModel {
    public id: string = '';
    public ts!:Date;
    public createdDate:Date = new Date();
    public updateDate!:Date;
}
