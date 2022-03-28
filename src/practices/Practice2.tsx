export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    //引数の後に型指定で返却値指定
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => console.log(getTotalFee(1000));

  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
