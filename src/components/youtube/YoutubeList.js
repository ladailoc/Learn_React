import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props.children);
  return (
    <div className="youtube-list">
      {props.children}

      {YoutubeData.map((item, index) => {
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar}
            title={item.title}
            author={item.author}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
