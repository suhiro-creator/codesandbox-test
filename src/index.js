/**
 * const,letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// // 意図しないところで上書きしてしまったり、再宣言ができてしまうというデメリットがある

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き負荷
// val3 = "const変数を上書き"

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "スヒロー",
//   age: 43,
// };
// val4.name = "suhiro-";
// val4.addres = "Todofuken";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// console.log(val5);
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "suhiro-";
// const age = 43;
// // 「私の名前はsuhiro-です。年齢は４３さんです。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// };

// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// 一行で書くときは「return」はいらない
// const func2 = (str) => str;
// console.log(func2("func2です"));
// ※ この書き方に慣れて、その後{}を入れたとき「return」入れ忘れに注意！

// const func3 = (a, b) => {
//   return a + b;
// }
// console.log(func3(10, 10));

/**
 * 分割代入
 */
// プロフィールのオブジェクトを定義
// const myProfile = {
//   name: "suhiro-",
//   age: 43,
// };

// myProfileを分割代入
// const {name, age} = myProfile;
// message1に代入
// const message1 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message1);

// 配列を定義し、分割代入でmessage2へ代入
// const myProfile = ["suhiro-", 43];
// const [name, age] = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * デフォルト値、引数など
 * ※riact開発でよく使うので、しっかり覚えよう！
 */
// 名前を引数として受け取り、メッセージを返す'sayHello関数'を定義
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello("suhiro-");
// /**
//  * ↑ 「sayHello(引数)」引数を指定していないと、'undefined'が返されるため
//  *    関数name=○○と引数なしの場合に初期値(デフォルト値）を設定しておきましょう
//  */
// const sayHello2 = (name1 = "ゲスト") => console.log(`こんにちは！${name1}さん！！`);
// sayHello2()
