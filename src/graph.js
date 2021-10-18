import ForceGraph3D from 'react-force-graph-3d';
import ForceGraph2D from 'react-force-graph-2d';
import React, { useCallback, useRef, useState } from 'react';
import SpriteText from 'three-spritetext';
import { useColorModeValue } from '@chakra-ui/color-mode';

export default function Graph(props) {
  const data = {
    nodes: [{ "id": "1", "label": "alden", "color": "#E53E3E" }, { "id": "2", "label": "software", "color": "#D53F8C" }, { "id": "3", "label": "Blender", "color": "#F687B3" },
    { "id": "4", "label": "FL Studio", "color": "#F687B3" }, { "id": "5", "label": "Unity", "color": "#F687B3" }, { "id": "6", "label": "Unreal Engine", "color": "#F687B3" },
    { "id": "7", "label": "Touch Designer", "color": "#F687B3" },
    { "id": "8", "label": "Three.js", "color": "#F687B3" }, { "id": "9", "label": "Git", "color": "#F687B3" },
    { "id": "10", "label": "Programming", "color": "#38B2AC" }, { "id": "11", "label": "Projects", "color": "#63B3ED" }, { "id": "12", "label": "ItalScript" },
    { "id": "13", "label": "Languages", "color": "#48BB78" }, { "id": "14", "label": "Python", "color": "#9AE6B4" },
    { "id": "15", "label": "c++", "color": "#9AE6B4" }, { "id": "16", "label": "c#", "color": "#9AE6B4" }, { "id": "17", "label": "java", "color": "#9AE6B4" },
    { "id": "18", "label": "javascript", "color": "#9AE6B4" }, { "id": "19", "label": "SleepEdo" },
    { "id": "20", "label": "SleepEdo Mobile" }, { "id": "21", "label": "Google Data Vis" }, { "id": "22", "label": "Random Audio" }, { "id": "23", "label": "SoundCloud" },
    { "id": "24", "label": "Gallery" }, { "id": "25", "label": "GAN" }, { "id": "26", "label": "Unity Maze Generation" }], links: [{ "id": "30", "source": '1', "target": '2' },
    { "id": "31", "source": '2', "target": '3' }, { "id": "32", "source": '2', "target": '4' }, { "id": "33", "source": '2', "target": '5' }, { "id": "34", "source": '2', "target": '6' },
    { "id": "35", "source": '2', "target": '7' }, { "id": "36", "source": '2', "target": '8' }, { "id": "37", "source": '2', "target": '9' }, { "id": "38", "source": '1', "target": '10' },
    { "id": "39", "source": '10', "target": '11' }, { "id": "40", "source": '10', "target": '13' }, { "id": "41", "source": '11', "target": '12' }, { "id": "42", "source": '11', "target": '19' },
    { "id": "43", "source": '11', "target": '20' }, { "id": "44", "source": '11', "target": '21' }, { "id": "45", "source": '11', "target": '22' }, { "id": "46", "source": '11', "target": '23' },
    { "id": "47", "source": '11', "target": '24' }, { "id": "48", "source": '11', "target": '25' }, { "id": "49", "source": '11', "target": '26' }, { "id": "50", "source": '13', "target": '14' },
    { "id": "51", "source": '13', "target": '15' }, { "id": "52", "source": '13', "target": '16' }, { "id": "53", "source": '13', "target": '17' }, { "id": "54", "source": '13', "target": '18' },
    { "id": "55", "source": '1', "target": '2' }]
  };
  const ref = useRef();
  const width = props.width;
  const height = props.height;
  const color = props.bg;

  const handleClick = useCallback(node => {
    const distance = 100;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

    ref.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      1000  // ms transition duration
    );
  }, [ref]);

  return (
    <ForceGraph3D
      ref={ref}
      backgroundColor={color}
      width={width}
      height={height}
      graphData={data}
      nodeAutoColorBy="group"
      nodeThreeObject={node => {
        const sprite = new SpriteText(node.label);
        sprite.color = node.color;
        sprite.textHeight = 8;
        return sprite;
      }}
      showNavInfo={true}
      linkColor={useColorModeValue("white", "#000")}
      linkAutoColorBy="group"
    />
  )
}