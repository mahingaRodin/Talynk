import { useState } from 'react';
import Sidebar from './sidebar';
import Videos from '../overview/Videos'
import Trending from './Trending';
 

import Cards from '../Cards';
import {data as originalData} from '../../data.ts'
import Pending from '@/Reusable/pending.tsx';

const Graph = () => {
 

  return (
    <div className="flex flex-col md:flex-row w-full">
      
      <div className="w-full md:w-[75%] p-6">
        {/* Wrapper for the data items */}
       <Cards data={originalData}></Cards>

        {/* Title and Filter Bar */}
       <div>
        <Pending></Pending>
       </div>

        <div className="relative z-0"> {/* Added lower z-index for Videos component */}
          <Videos />
        </div>
        <div>
          <Trending></Trending>
        </div>
      </div>

      <div className='w-full md:w-[25%]'>
        <Sidebar></Sidebar>

      </div>
    </div>
  );
};

export default Graph;