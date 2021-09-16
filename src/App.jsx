/* eslint react-hooks/exhaustive-deps: off */   // このファイルのみでeslintの設定 useEffect の [num] に faceShow も加えなくていいのかという警告を無視できる
import React, { useEffect, useState} from 'react';
// import ColorfulMessage from './components/ColorfulMessage.jsx';
import { ColorfulMessage } from './components/ColorfulMessage.jsx';  // export const= の場合の読み込み方。定数の名前で読み込む為、誤字に気付きやすい

//  レンダリングの流れ・・・上から下まで読み込み、stateに変更があれば再レンダリングして値を更新する

const App = () => {
  // const contentStyle = {         App.jsxにコンポーネント化
  //   color: 'blue',
  //   fontSize: '18px',
  // };
  // const contentLadyStyle = {
  //   color: 'pink',
  //   fontSize: '18px',
  // };
  console.log('再レンダリング');             // stateが変更される度再レンダリングされるのを確認
  const [num, setNum] = useState(0);    //  numは初期値、setNumはnumの値を変更する関数
  const [faceShow, setFaceShow] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickCountDown = () => {
    setNum(num - 1);
  };
  const onClickSwitchFaceShow = () => {
    setFaceShow(!faceShow);
  };

  // if (num % 3 === 0 ) {           // onClickSwitchFaceShowとこのif文で２回setFaceShowが検知される為、レンダリングの無限ループに陥る
  //   setFaceShow(true);
  // } else {
  //   setFaceShow(false);
  // }

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0 ) {
        faceShow || setFaceShow(true);
      } else {
        faceShow && setFaceShow(false);
      }
    }
    // 右記で次の行だけ設定をOFFにできる  eslint-disable-next-line react-hooks/exhaustive-deps: off
  }, [num])          //  第二引数が空の場合、最初の１回のみ動作する。[num]等として特定の変数にのみ反応する関数を作成できる
  return (    // 単一ファイルコンポーネントの為divタグで囲うと、不要なdivタグが生じてしまう。<React.Fragment></React.Fragment>とすることで描画されない。<> </>としても良い。
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      {/* <h2 style={ contentStyle }>お元気ですか</h2>   App.jsxにコンポーネント化 */}
      {/* <h2 style={ contentLadyStyle }>お元気です</h2> */}
      {/* <ColorfulMessage color="blue" message="お元気ですか"/>   colorとmessageがpropsとして渡される */}
      {/* <ColorfulMessage color="pink" message="お元気です"/> */}

      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>     {/* 変数messageを使わない方法 */}
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button> | <button onClick={onClickCountDown}>カウントダウン</button>
      <p>{ num }</p>
      <button onClick={onClickSwitchFaceShow}>on / off</button>
      { faceShow && <p >( ・∇・)</p> }      {/* faceShowがtrueの時に右辺を表示する */}
    </>
  )
}

export default App;
