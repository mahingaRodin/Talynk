import React from "react";

interface CardItem {
  id: number;
  count: number | string;
  text: string;
  image: string;
}

interface CardsProps {
  data: CardItem[];
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center rounded-2xl border border-blue p-4 bg-white w-[210px]"
          >
            <div className="flex flex-row gap-5">
              <div className="text-4xl font-bold text-red mb-2">{item.count}</div>
              <div className="text-lg font-medium mb-2">{item.text}</div>
            </div>
            <img src={item.image} alt="Graph" className="h-[80px] w-[290px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
