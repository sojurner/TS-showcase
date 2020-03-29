import { useState } from 'react';

type TScrollEvent = (event: React.UIEvent<HTMLElement>) => void;
type UseFiniteScroll = (list: any[], interval: number) => [any[], TScrollEvent];

type UseInfiniteScroll = (
  initialIndex: number,
  interval: number,
  limit: number
) => [number, TScrollEvent];

const useFiniteScroll: UseFiniteScroll = (list, interval) => {
  const [itemList] = useState<any[]>(list);
  const [loadIndex, setLoadIndex] = useState<number>(interval);

  const handleScroll: TScrollEvent = e => {
    const scrollableWidth: number = e.currentTarget.scrollWidth;
    const currentXPosition: number = e.currentTarget.offsetWidth;
    const scrollLeft: number = e.currentTarget.scrollLeft;
    if (scrollableWidth === currentXPosition + scrollLeft) {
      loadNext();
    }
  };

  const loadNext = () => {
    if (loadIndex <= itemList.length - 1) {
      setTimeout(() => {
        setLoadIndex(state => state + interval);
      }, 500);
    }
  };

  return [itemList.slice(0, loadIndex), handleScroll];
};

const useInfiniteScroll: UseInfiniteScroll = (
  initialIndex,
  interval,
  limit
) => {
  const [loadIndex, setLoadIndex] = useState<number>(initialIndex);

  const handleScroll: TScrollEvent = e => {
    const { scrollHeight, offsetHeight, scrollTop } = e.target as HTMLElement;
    if (scrollHeight <= offsetHeight + scrollTop) {
      loadNext();
    }
  };

  const loadNext = () => {
    if (loadIndex <= limit - 20) {
      setTimeout(() => {
        setLoadIndex(state => state + interval);
      }, 500);
    } else if (loadIndex <= limit) {
      setLoadIndex(limit);
    }
  };

  return [loadIndex, handleScroll];
};

export { useFiniteScroll, useInfiniteScroll };
