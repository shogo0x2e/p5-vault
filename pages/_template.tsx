/*
    File Name   : swirl-shell.tsx
    Created     : on 09:12 at Apr 22, 2023
    Description : 渦巻き貝殻のサンプル (チュートリアルサイトより)

    Copyright 2023 Shogo Kitada All Rights Reserved.
        contact@shogo0x2e.com (Twitter, GitHub: @shogo0x2e)

    I would be happy to notify me if you use part of my code.
*/


import React from "react";
import p5Types from "p5"; //Import this for typechecking and intellisense
import dynamic from 'next/dynamic';

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})
  
const SketchComponent = () => {
  
  const preload = (p: p5Types) => {
    // 画像などのロードを行う
  };

  const setup = (p: p5Types, canvasParentRef: Element) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef);

    // -------- setup() -------- //

  };

  const draw = (p: p5Types) => {

    //--------- draw() ---------//

  };

  const windowResized = (p: p5Types) => {
    // コンポーネントのレスポンシブ化
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  return (
    <Sketch 
      setup={setup}
      draw={draw} 
      preload={preload} 
      windowResized={windowResized} 
    />
  );
};

export default SketchComponent;