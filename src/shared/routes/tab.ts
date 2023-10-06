import Home from '@/modules/private/home';
import {
  Tender as TendersIcon,
  Home as HomeIcon,
  User as UserIcon,
  Orders as OrdersIcon
} from "@/shared/assets/icons";
import Profile from '@/modules/private/profile';
import Orders from '@/modules/private/orders';
import Tenders from '@/modules/private/tenders'

export default [
  {
    id: '1',
    displayName: 'general.home',
    name: 'homeTab',
    icon: HomeIcon,
    component: Home,
  },
  {
    id: '2',
    displayName: 'general.orders',
    name: 'orders',
    icon: OrdersIcon,
    component: Orders,
  },
  {
    id: '3',
    displayName: 'general.tenders',
    name: 'chat',
    icon: TendersIcon,
    component: Tenders,
  },
  {
    id: '4',
    displayName: 'general.profile',
    name: 'profile',
    icon: UserIcon,
    component: Profile,
  },
];
