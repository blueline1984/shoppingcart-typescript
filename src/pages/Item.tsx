import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";

interface DataList {
  currency_code: string;
  discounts: Discount;
  items: Items;
}

interface Discount {
  name: string;
  rate: number;
}

interface Items {
  count: number;
  name: string;
  price: number;
}

function Item() {
  const [data, setData] = useState<DataList>({
    currency_code: "",
    discounts: { name: "", rate: 0 },
    items: { count: 0, name: "", price: 0 },
  });

  useEffect(() => {
    const getData = async () => {
      const newData = await fetchData();
      setData(newData);
    };

    getData();
  }, []);

  return (
    <div>
      {Object.values(data.items).map((item, index) => (
        <div key={index}>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Item;
