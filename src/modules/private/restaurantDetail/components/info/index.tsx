import {View} from 'react-native';
import Typography from '@/shared/components/typography';
import Icon from '@/shared/components/icon';
import {
  ChevronBottom,
  ClipBoard,
  Location,
  Map,
  Time,
} from '@/shared/assets/icons';
import React from 'react';
import {styles} from './styles';

export default function Info() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.innerContainer}>
          <Typography style={styles.title}>Gandaria City Outlet</Typography>
          <View style={styles.row}>
            <Typography>Takeaway</Typography>
            <View style={styles.dot} />
            <Typography>Takeaway</Typography>
          </View>
        </View>
        <Icon customStyles={styles.iconSize} icon={Map} />
      </View>
      <View style={styles.divider} />
      <View style={styles.containerLocation}>
        <Icon customStyles={styles.iconSize} icon={Location} />
        <Typography style={styles.textLocation} translate={false}>
          Jl. Arteri Pd. Indah, RT.10/RW.6, Kby. Lama Utara, Kec. Kby. Lama,
          Kota Jakarta Selatan, DKI Jakarta 12240
        </Typography>
        <Icon customStyles={styles.iconSize} icon={ClipBoard} />
      </View>
      <View style={styles.divider} />
      <View style={styles.containerTime}>
        <View style={styles.containerTitleTime}>
          <Icon customStyles={styles.iconSize} icon={Time} />
          <View style={styles.innerContainerTime}>
            <Typography style={styles.text} translate={false}>
              Open until 22:00 WIB
            </Typography>
            <View style={styles.spancer}>
              <View>
                <Typography style={styles.text}>Weeday</Typography>
                <Typography style={styles.text}>09:00 - 22:00 WIB</Typography>
              </View>
              <View style={styles.spancer}>
                <Typography style={styles.text}>Weekend</Typography>
                <Typography style={styles.text}>09:00 - 22:00 WIB</Typography>
              </View>
            </View>
          </View>
          <Icon customStyles={styles.iconSize} icon={ChevronBottom} />
        </View>
      </View>
    </View>
  );
}
