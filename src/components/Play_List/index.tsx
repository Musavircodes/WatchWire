import React, { useState, useEffect } from "react";

interface Video {
  id: string;
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

interface Category {
  name: string;
  videos: Video[];
}

interface Data {
  categories: Category[];
}

interface DragAndDropState {
  draggedFrom: number | null;
  draggedTo: number | null;
  isDragging: boolean;
  originalOrder: Video[];
  updatedOrder: Video[];
}

interface Props {
  data: Data;
  handleVideoClick: (videoUrl: string) => void;
}

const initialDnDState: DragAndDropState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};

const DragToReorderList: React.FC<Props> = ({ data, handleVideoClick }) => {
  const [list, setList] = useState<Video[]>([]);
  const [dragAndDrop, setDragAndDrop] =
    useState<DragAndDropState>(initialDnDState);

  useEffect(() => {
    if (data.categories.length > 0) {
      setList(data.categories[0].videos);
    }
  }, [data]);

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: index,
      isDragging: true,
      originalOrder: list,
    });
    event.dataTransfer.setData("text/html", "");
  };

  const onDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom || 0;
    const draggedTo = index;

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((item, i) => i !== draggedFrom);

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = () => {
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  return (
    <div
      className="mobile-scroll-container hideScroll"
      style={{ overflowY: "auto", maxHeight: "80vh" }}
    >
      <section className="grid grid-cols-1 md:grid-cols-4 w-full gap-5">
        {list.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={(e) => onDragOver(e, index)}
            onDrop={onDrop}
            onClick={() => handleVideoClick(item.sources[0])}
            onDragLeave={onDragLeave}
            className={
              " cursor-pointer rounded-md p-1 m-1 shadow-sm hover:shadow-lg" +
              (dragAndDrop.draggedTo === index ? " ring-4 ring-blue-400" : "") +
              (index === list.length - 1 ? " mr-0" : "")
            }
          >
            <img
              src={item.thumb}
              alt={item.title}
              className="w-full rounded-md h-40"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default DragToReorderList;
