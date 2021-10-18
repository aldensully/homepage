import ForceGraph3D from 'react-force-graph-3d';
import ForceGraph2D from 'react-force-graph-2d';
import React, { useRef, useState } from 'react';

export default function Graph(props) {
  const data = { nodes: [{ "id": "1" }, { "id": "2" }], links: [{ "id": "3", "source": '1', "target": '2' }] };
  const ref = useRef();
  const width = props.width;
  const height = props.height;
  const color = props.bg;
  return (
    <ForceGraph3D
      backgroundColor={color}
      width={width}
      height={height}
      graphData={data}
      showNavInfo={false}
    />
  )
}