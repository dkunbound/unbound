export interface IImage{
    id: number; 
    position: number;     
    created_at: string;
    updated_at: string;
    product_id: number;
    variant_ids: any[];
    src: string;
    width: number;
    height: number;
}