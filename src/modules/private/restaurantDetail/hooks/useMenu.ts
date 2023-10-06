import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';
import {useState} from 'react';

export default function useMenu() {
  const [openCustomizeMenu, setOpenCustomizeMenu] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  function toggleCustomizeMenu() {
    setOpenCustomizeMenu(!openCustomizeMenu);
  }
  function addProduct(image: string) {
    navigation.navigate('detailMenu', {product: {image: image}});
  }
  return {
    addProduct,
    setOpenCustomizeMenu,
    toggleCustomizeMenu,
    openCustomizeMenu,
  };
}
