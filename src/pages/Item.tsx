import { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import styled from "styled-components";

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
        <Wrapper key={index}>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <button>+</button>
        </Wrapper>
      ))}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 5% 5%;
  border: 1px solid black;
  justify-content: space-between;
`;

export default Item;
