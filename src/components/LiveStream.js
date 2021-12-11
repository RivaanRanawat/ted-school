import React from "react";

function LiveStream() {
  return (
    <div>
      <iframe
        width="100%"
        height="720px"
        src="https://www.youtube.com/embed/JkdBAioUfWw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default LiveStream;
