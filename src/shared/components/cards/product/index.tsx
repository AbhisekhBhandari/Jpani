import React from 'react';
import {Image, View} from 'react-native';
import Typography from '@/shared/components/typography';
import {styles, stylesVertical} from './styles';
import ButtonPill from '@/shared/components/buttons/buttonPill';
import Icon from '@/shared/components/icon';
import {Plus} from '@/shared/assets/icons';
import Counter from '@/shared/components/counter';

interface ProductProps {
  vertical?: boolean | undefined;
  onSelected?: boolean | undefined;
  callback?: (image: string) => void;
  isCart?: boolean | undefined;
}

export default function Product({
  vertical,
  onSelected,
  callback,
  isCart,
}: ProductProps) {
  if (vertical) {
    return (
      <View>
        <Image
          resizeMode="cover"
          style={stylesVertical.imageProduct}
          source={{uri: 'https://i.ibb.co/S09kKSJ/Image.png'}}
        />
        <View style={stylesVertical.info}>
          <Typography style={stylesVertical.title}>
            Beef Fillet Steak
          </Typography>
          <View style={stylesVertical.footer}>
            <Typography style={stylesVertical.price}>$ 23.00</Typography>
            {isCart ? (
              <Counter />
            ) : (
              <>
                {onSelected ? (
                  <ButtonPill
                    outline
                    onPress={() =>
                      callback
                        ? callback('https://i.ibb.co/S09kKSJ/Image.png')
                        : null
                    }
                    title="1 item"
                  />
                ) : (
                  <ButtonPill
                    onPress={() =>
                      callback
                        ? callback('https://i.ibb.co/S09kKSJ/Image.png')
                        : null
                    }
                    leftIcon={
                      <Icon customStyles={{tintColor: 'white'}} icon={Plus} />
                    }
                    title="general.add"
                  />
                )}
              </>
            )}
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageProduct}
        source={{uri: 'https://i.ibb.co/S09kKSJ/Image.png'}}
      />
      <View style={styles.info}>
        <View>
          <Typography style={styles.title}>Beef Fillet Steak</Typography>
          <Typography
            style={styles.description}
            numberOfLines={2}
            translate={false}>
            Beef fillet steak is a tender and juicy cut of meat that comes from
            the tenderloin of a cow. It is a lean cut with very little fat
          </Typography>
        </View>
        <View style={styles.footer}>
          <Typography style={styles.price}>$ 23.00</Typography>
          {isCart ? (
            <Counter />
          ) : (
            <>
              {onSelected ? (
                <ButtonPill
                  outline
                  onPress={() =>
                    callback
                      ? callback('https://i.ibb.co/S09kKSJ/Image.png')
                      : null
                  }
                  title="1 item"
                />
              ) : (
                <ButtonPill
                  onPress={() =>
                    callback
                      ? callback('https://i.ibb.co/S09kKSJ/Image.png')
                      : null
                  }
                  leftIcon={
                    <Icon customStyles={{tintColor: 'white'}} icon={Plus} />
                  }
                  title="general.add"
                />
              )}
            </>
          )}
        </View>
      </View>
    </View>
  );
}
