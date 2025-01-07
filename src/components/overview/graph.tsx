import { data } from '../../data';


const Graph = () => {
  return (
    <div className="flex w-full px-4">
      <div className="w-[70%] p-4">
        {/* Wrapper for the data items - Flex row layout */}
        <div className="flex flex-wrap gap-4">
          {data.map(item => (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-2xl border border-blue p-4 bg-white w-[200px]"
            >
              {/* Display the red number and text */}
              <div className="flex flex-row gap-5">
                <div className="text-4xl font-bold text-red text-red-600 mb-2">{item.count}</div>
                <div className="text-lg  font-medium mb-2">{item.text}</div>
              </div>
              
              {/* Display the image dynamically based on item */}
              <img src={item.image} alt="Graph" className="h-[80px] w-[290px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graph;
