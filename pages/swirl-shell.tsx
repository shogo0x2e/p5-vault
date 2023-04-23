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

    // p5でいうsetupの処理を書く
    p.angleMode(p.DEGREES); // 回転の単位を弧度から角度に変更
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
    p.background("#131821"); // 背景色を設定
    p.blendMode(p.LIGHTEST); // 合成モードを「LIGHTEST=明るく」に設定
  };

  // 描画色1の強さ
  let color1amount = 1;

  const draw = (p: p5Types) => {

    // p5でいうdrawの処理を書く
    // 描画色1・2
    const color1 = p.color("#fffbe3");
    const color2 = p.color("#24495c");

    // 塗り色を設定
    p.fill(p.lerpColor(color2, color1, color1amount));
    // 画面中央を原点に
    p.translate(p.width / 2, p.height / 2);
    // フレーム数分（1フレームあたり13度）回転させる
    p.rotate(p.frameCount * 13);
    // 楕円を描く (花びらみたい！)
    p.ellipse(p.frameCount / 2, 0, p.frameCount, p.frameCount / 3);
    // 「描画色1の強さ」を少し弱くする
    color1amount *= 0.995;
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