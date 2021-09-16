import React from 'react'

export const ColorfulMessage = (props) => {  // 定数に対して export とすることもできる
  const { color, children } = props;    // props.color と props.childrenをプロパティ名のみで扱える
  const contentStyle = {                // styleをコンポーネント化
    color: color,
    fontSize: '18px',
  };
  return (
  // <h2 style={ contentStyle }>{ props.message }</h2>      // コンポーネント化したstyleをHTMLごとコンポーネントとして出力
  <h2 style={ contentStyle }>{ children }</h2>    // 変数messageを使わない場合はchildrenで子要素として表示扱える
  );
}

// export default ColorfulMessage;