import {default as request} from 'superagent';
import * as util from 'util';
import * as url from 'url';
const URL = url.URL;

(async () => {

  // ユーザー一覧表示
  console.log('ユーザー一覧表示');
  try {
    var res = await request.get('http://localhost:3000/users')
    .timeout({response: 5*1000, deadline: 10*1000});
    console.log(res.body);
  } catch(err) {
    if(err.response && err.response.status && err.response.body)
      console.error(`stauts=>${err.response.status}, message=>${err.response.body}`);
    else
      console.error(err);
  }

  // 特定ユーザー抽出
  console.log('特定ユーザー抽出');
  try {
    var res = await request.get('http://localhost:3000/users/2')
    .timeout({response: 5*1000, deadline: 10*1000});
    console.log(res.body);
  } catch(err) {
    console.error(err);
  }

  // ユーザー情報アップデート
  console.log('ユーザー情報アップデート');
  try {
    var res = await request.put('http://localhost:3000/users/3')
    .timeout({response: 5*1000, deadline: 10*1000})
    .send({"id":3, "name":"Toru", "age":25})
    .set('Content-Type', 'application/json');
    console.log(res.body);
  } catch(err) {
    console.error(err);
  }

  // ユーザー追加
  console.log('ユーザー追加');
  try {
    var res = await request.post('http://localhost:3000/users')
    .timeout({response: 5*1000, deadline: 10*1000})
    .send({"id":4, "name":"Kaoru", "age":22})
    .set('Content-Type', 'application/json');
    console.log(res.body);
  } catch(err) {
    console.error(err);
  }

  // ユーザー削除
  console.log('ユーザー削除');
  try {
    var res = await request.delete('http://localhost:3000/users/1')
    .timeout({response: 5*1000, deadline: 10*1000})
    .send();
    console.log(res.body);
  } catch(err) {
    console.error(err);
  }

  // 再度ユーザー一覧表示
  console.log('再度ユーザー一覧表示');
  try {
    var res = await request.get('http://localhost:3000/users')
    .timeout({response: 5*1000, deadline: 10*1000});
    console.log(res.body);
  } catch(err) {
    console.error(err);
  }

})();
