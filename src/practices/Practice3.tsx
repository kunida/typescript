export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    //引数の後に型指定で返却値指定
    const total = num * 1.1;
    return total.toString();
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000); //返却値がおかしいとエラーで表示してくれる
    console.log(total);
  };

  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
