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
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [data, setData] = useState<DataList>({
    currency_code: "",
    discounts: { name: "", rate: 0 },
    items: { count: 0, name: "", price: 0 },
  });

  const handleChange = (event: any, checked: boolean, id: never) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "KRW",
    style: "currency",
  });

  function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
  }

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const newData = await fetchData();
      setData(newData);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div>
      {Object.values(data.items).map((item, index) => (
        <Wrapper key={index}>
          {!isLoading ? (
            <>
              <div className="item-title">{item.name}</div>
              <div className="item-price">{formatCurrency(item.price)}</div>
              <input type="checkbox" id={item} />
            </>
          ) : (
            <div>Loading...</div>
          )}
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
