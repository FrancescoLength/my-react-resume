import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, reference} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="text-xl font-bold">
          <div className="flex items-center justify-between">
            {title}
            {reference && (
              <a
                className="flex items-center gap-x-2 rounded-full border-2 border-orange-500 bg-stone-700 px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-orange-500"
                download
                href={reference.href}>
                {reference.text}
                <ArrowDownTrayIcon className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      <div className="text-justify">{content}</div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
