import ButtonSheet from '@/shared/components/buttonSheet';
import React from 'react';
import {ScrollView, View} from 'react-native';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import ButtonPill from '@/shared/components/buttons/buttonPill';
import Counter from '@/shared/components/counter';

interface CustomizeMenuProps {
  show: boolean;
  onClose: any;
}

export default function CustomizeMenu({show, onClose}: CustomizeMenuProps) {
  return (
    <ButtonSheet onClose={onClose} dispatch={show}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Typography translate={false} style={styles.title}>
              Beef Fillet Steak
            </Typography>
          </View>

          <View style={styles.containerIngredients}>
            <View style={styles.item}>
              <Typography translate={false} style={styles.option}>
                Cooking Level:
              </Typography>
              <Typography translate={false} style={styles.value}>
                Medium Well
              </Typography>
            </View>
            <View style={styles.item}>
              <Typography translate={false} style={styles.option}>
                Sauce:
              </Typography>
              <Typography translate={false} style={styles.value}>
                Normal
              </Typography>
            </View>
            <View style={styles.item}>
              <Typography translate={false} style={styles.option}>
                Side Item:
              </Typography>
              <Typography translate={false} style={styles.value}>
                Potato
              </Typography>
            </View>
            <View style={[styles.rowBetween, styles.mt]}>
              <ButtonPill title="general.change" outline />
              <Counter />
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Typography translate={false} style={styles.title}>
              Beef Fillet Steak
            </Typography>
          </View>

          <View style={styles.containerIngredients}>
            <View style={styles.item}>
              <Typography translate={false} style={styles.option}>
                Cooking Level:
              </Typography>
              <Typography translate={false} style={styles.value}>
                Medium Well
              </Typography>
            </View>
            <View style={styles.item}>
              <Typography translate={false} style={styles.option}>
                Sauce:
              </Typography>
              <Typography translate={false} style={styles.value}>
                Normal
              </Typography>
            </View>
            <View style={styles.item}>
              <Typography translate={false} style={styles.option}>
                Side Item:
              </Typography>
              <Typography translate={false} style={styles.value}>
                Potato
              </Typography>
            </View>
            <View style={[styles.rowBetween, styles.mt]}>
              <ButtonPill title="general.change" outline />
              <Counter />
            </View>
          </View>
        </View>

        <View style={{height: 20}} />
      </ScrollView>
    </ButtonSheet>
  );
}
