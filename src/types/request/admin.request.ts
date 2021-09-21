export interface IAdminCreateWaiterReq{
    FirstName: string;
    LastName: string;
    email:string
    password:string
    Desgination: string;
  
  
}

export interface IAdminUpdateWaiterReq{
    id:string;
    FirstName: string;
    LastName: string;
    email: string;
    password:string;
    Desgination: string;
    

}
export interface IAdminGetWaiterReq{
    id:string;

}
export interface IAdminDeleteWaiterReq{
    id:string;
}