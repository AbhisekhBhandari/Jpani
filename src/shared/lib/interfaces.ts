export interface IBranchData {
  created_at: string;
  id: number;
  location: string;
  manager: string;
  restaurant_id: string;
}

export interface IEmployee {
  employee: {
    fullname: string;
    id: string;
  };
  employee_id: string;
  id: number;
  role: string;
  role_description: string;
}

export interface IOrders {
  item_id: string;
  menu_item: { name: string; price: number; quantity: number }[];
  order: {
    estimated_delivery_time: string;
    restaurant_id: string;
    status: string;
    tax_rate: number;
  };
  order_id: string;
  quantity: number;
}

export interface ITender {
  id: number;
  quantity: number;
  tender: {
    agreement_price: number;
    contract_end_date: string;
    delivery_interval: string;
    delivery_time: string;
    discount: number;
    restaurant_id: string;
    status: string;
  };
  tender_id: string;
  tender_item: { name: string, quantity: number, price: number, id: string }[];
  tender_item_id: string;
}
