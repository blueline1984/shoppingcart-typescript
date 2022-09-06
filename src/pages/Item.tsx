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
  const [selectedItems, setSelectedItems] = useState([]);
  const [data, setData] = useState<DataList>({
    currency_code: "",
    discounts: { name: "", rate: 0 },
    items: { count: 0, name: "", price: 0 },
  });

  console.log("selectedItems", selectedItems);

  const handleChange = (event: any) => {
    setSelectedItems(event.target.value);
  };

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "KRW",
    style: "currency",
  });

  function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
  }

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
          <div className="item-title">{item.name}</div>
          <div className="item-price">{formatCurrency(item.price)}</div>
          <input type="checkbox" onChange={handleChange} />
        </Wrapper>
      ))}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 3%;
  padding: 3% 5%;
  border: 1px solid #9586e8;
  border-radius: 10px;
  justify-content: space-between;
  font-size: 1.25rem;
  color: #808080;

  .item-title {
    width: 20%;
    white-space: no-wrap;
  }
`;

export default Item;
