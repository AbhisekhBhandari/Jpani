import React from "react";
import { View } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";

function SingleItem({ title, qty, price, currency_prefix }) {
  return (
    <View style={styles.singleItemContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Typography style={styles.itemTitle}>{title}</Typography>
        <Typography style={styles.priceText}>
          {`${currency_prefix} ${(qty * price).toFixed(2)}`}
        </Typography>
      </View>
      <Typography
        style={styles.qtyDetailsText}
      >{`${qty} x ${currency_prefix} ${price}`}</Typography>
    </View>
  );
}

interface IOrderRecieptCardProps {
  item: { name: string; price: number; quantity: number }[];
  tax_rate: number;
  discount: number;
  total_price: number;
  currency_prefix: string;
}

export default function OrderReceiptCard({
  item,
  tax_rate,
  discount,
  total_price,
  currency_prefix,
}: IOrderRecieptCardProps) {
  return (
    <View style={styles.container}>
      <Typography style={styles.titleText}>order.receipt</Typography>
      <View style={styles.mainContainer}>
        {item.map((item) => (
          <SingleItem
            key={item.name + item.price.toString() + item.quantity.toString()}
            title={item.name}
            qty={item.quantity}
            price={item.price}
            currency_prefix="AED"
          />
        ))}
        <View
          style={{
            paddingVertical: normalize(20),
            borderColor: "#d1d5db",
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderStyle: "dotted",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: normalize(10),
            }}
          >
            <Typography style={styles.itemTitle}>order.total_price</Typography>
            <Typography style={styles.itemTitle}>
              {`${currency_prefix} ${total_price.toFixed(2).toString()}`}
            </Typography>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: normalize(10),
            }}
          >
            <Typography style={styles.itemTitle}>order.vat</Typography>
            <Typography style={styles.itemTitle}>
              {`${currency_prefix} ${((tax_rate / 100) * total_price).toFixed(2)}`}
            </Typography>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: normalize(10),
            }}
          >
            <Typography style={styles.itemTitle}>order.discount</Typography>
            <Typography style={styles.itemTitle}>
              {`${currency_prefix} ${((discount / 100) * total_price).toFixed(2)}`}
            </Typography>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: normalize(10),
            }}
          >
            <Typography style={styles.itemTitle}>
              Total after discount
            </Typography>
            <Typography style={styles.itemTitle}>
              {`${currency_prefix} ${(total_price + tax_rate - discount)
                .toFixed(2)
                .toString()}`}
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
}
