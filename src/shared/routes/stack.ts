import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SignIn from "@/modules/auth/signIn";
import Auth from "@/modules/auth";
import RestaurantDetail from "@/modules/private/restaurantDetail";
import DetailMenu from "@/modules/private/restaurantDetail/sections/detailMenu";
import Search from "@/modules/private/search";
import Conversation from "@/modules/private/conversation";
import EditProfile from "@/modules/private/profile/sections/editProfile";
import ChangeLanguage from "@/modules/private/profile/sections/changeLanguage";
import OrderDetails from "@/modules/private/orderDetails";
import AddCreditCard from "@/modules/private/orders/components/addCreditCard";
import AddAddress from "@/modules/private/orders/components/addAddress";
import Orders from "@/modules/private/orders";
import TenderDetails from "@/modules/private/tenderDetails";
import Bag from "@/modules/private/bag";
import Tenders from "@/modules/private/tenders";
import BranchDetail from "@/modules/private/branchDetail";
import AddBranch from "@/modules/private/addBranch";
import CreateTender from "@/modules/private/createTender";

export type RootStackParamList = {
  login: undefined;
  signIn: undefined;
  signUp: undefined;
  components: undefined;
  detailMenu: {
    product: {
      image: string;
      id: string;
    };
  };
  tab: undefined;
  restaurantDetail: {
    restaurant: {
      image: string;
      id: string;
    };
  };
  branchDetail: {
    branch: {
      image: string;
      id: string;
    };
  };
  orders: undefined;
  addCreditCard: undefined;
  addAddress: undefined;
  orderComplete: undefined;
  search: undefined;
  conversation: undefined;
  editProfile: undefined;
  changeLanguage: undefined;
  orderDetails: {
    id: string;
  };
  tenderDetails: {
    id: string;
  };
  createTender: undefined;
  store: undefined;
  tenders: undefined;
  addBranches: {
    branch: {
      image: string;
    };
  };
};
export type RouteItem = {
  path: keyof RootStackParamList;
  component: any;
  private: boolean;
};
export type RouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export const UnauthenticatedRoutesStack: RouteItem[] = [
  {
    path: "login",
    component: Auth,
    private: false,
  },

  {
    path: "signIn",
    component: SignIn,
    private: false,
  },
];

const RoutesStack: RouteItem[] = [
  {
    path: "restaurantDetail",
    component: RestaurantDetail,
    private: true,
  },
  {
    path: "detailMenu",
    component: DetailMenu,
    private: true,
  },
  {
    path: "branchDetail",
    component: BranchDetail,
    private: true,
  },
  {
    path: "orders",
    component: Orders,
    private: true,
  },
  {
    path: "tenders",
    component: Tenders,
    private: true,
  },
  {
    path: "addCreditCard",
    component: AddCreditCard,
    private: true,
  },
  {
    path: "addAddress",
    component: AddAddress,
    private: true,
  },
  {
    path: "orderDetails",
    component: OrderDetails,
    private: true,
  },
  {
    path: "tenderDetails",
    component: TenderDetails,
    private: true,
  },
  {
    path: "createTender",
    component: CreateTender,
    private: true,
  },
  {
    path: "store",
    component: Bag,
    private: true,
  },
  {
    path: "search",
    component: Search,
    private: true,
  },
  {
    path: "conversation",
    component: Conversation,
    private: true,
  },
  {
    path: "editProfile",
    component: EditProfile,
    private: true,
  },
  {
    path: "changeLanguage",
    component: ChangeLanguage,
    private: true,
  },
  {
    path: "addBranches",
    component: AddBranch,
    private: true,
  },
];
export default RoutesStack;
