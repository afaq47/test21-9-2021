export interface IProductMenuCreateReq{ 
    itemName: string;
    price:number;
  
    
}

export interface IProducMenutUpdateReq{
    _id:string;
    itemName: string;
    price:number;
   
   
}
export interface IProductMenuGetReq{
    id:string;

}
export interface IProductMenuDeleteReq{
    id:string;
}