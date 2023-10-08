//測試

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkYXHGj37nHrMglwUHKWN2vOE0ty3o8T4",
    authDomain: "fir-test-dc8dc.firebaseapp.com",
    projectId: "fir-test-dc8dc",
    storageBucket: "fir-test-dc8dc.appspot.com",
    messagingSenderId: "851272507964",
    appId: "1:851272507964:web:493d6b2ce3d5e239029939"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    const db = firebase.firestore()
  
  /*
  設置：set() 的用途是創建或覆蓋文件。文件不存在時，系統會創建一個新的文件。但若文件存在，則內容會整個被新的資料覆蓋，想避免文件被整個蓋掉的狀況，可以加上 {merge: true} 的寫法
  更新：update()就是對指定文件中的某些屬性更新
  
  */

  db.collection('Rhizome')
    .doc('1胡蘿蔔')
    .set({
      //圖片:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ85-Ip8oJxvfC2KE7z6oMbI32QKjydcM15hG_0sP0oS_6dXR9BeZ_xZEHOQ5vhY1ySQ8&usqp=CAU',
      名稱:'胡蘿蔔',
      別稱:'紅蘿蔔、紅菜頭、番蘿蔔、丁香蘿蔔、甘筍。',
      如何挑選: '表皮光滑、顏色紅澄澄，外觀完整無裂縫，並且末端沒有分叉，鬚根少，形狀粗短、頭部大。',
      建議保存方式: '1.冷凍保存：兩種方法，保存期間約2個月。方法一：生的，切成薄片或細絲，平鋪於保鮮膜上包好，裝入冷凍保鮮袋。方法二：汆燙後，撈起放涼，再裝進冷凍保鮮袋。2.冷藏保存：擦乾水分，有葉子的話要切掉，用報紙將紅蘿蔔一根根包起來，裝進塑膠袋，直立著保存冷藏，保存期間約2~3週。3.常溫保存：擦乾水分，用報紙一根一根將紅蘿蔔包起來，放置陰涼處或埋在土裡，保存期間約1週。4.乾燥保存：平鋪晾乾，配合要煮的菜，切圓片、細絲、或隨意切塊，然後平鋪於竹蓆上晾2天左右，保存期間約1個月。'
    })
    .then(docRef => console.log('success'))

    db.collection('Rhizome')
    .doc('2白蘿蔔')
    .set({
      //圖片:'https://d.ifengimg.com/q100/img1.ugc.ifeng.com/newugc/20190228/16/wemedia/4f2f267738b37c6f1317fd0552aa4c53746f405a_size55_w400_h300.jpg',
      名稱:'白蘿蔔',
      別稱:'菜頭、萊菔、大根、蘆菔、菈𦿚（音同「拉沓」）。',
      如何挑選: '要挑選成長線呈均等間隔分布，鬚根的痕跡筆直延伸的，皮白又帶葉，光滑不過裂，沉重夠清脆。',
      建議保存方式: '1.冷凍保存：方法一：切塊冷凍：蘿蔔先去皮、切塊，放入保鮮袋中冷凍保存；烹調時取出可直接料理，不必退冰。方法二：磨泥冷凍：蘿蔔去皮後磨成泥，用小袋子、小型保鮮盒或蛋糕模具分裝，再用保鮮膜完整包覆，冷凍能保存1個月左右。方法三：煮熟再冷凍：想節省下廚時間，也可以先煮好再冷凍，尤其以燉滷、煮湯的蘿蔔適合這樣保存。2.冷藏保存：切掉葉片後，蘿蔔若有清洗，一定要擦乾再用報紙包裹，放置於蔬果冷藏室保存，約可維持蘿蔔約一週的新鮮度。可以的話外頭再套一層紙袋或塑膠袋，直立方式保存會更好。若一餐吃不完整根蘿蔔想要分次料理，因為蘿蔔切口部分最容易乾燥、變軟，必須用保鮮膜完整緊密包覆切口，外部再套一層密封保鮮袋，幫助預防乾燥，再放入冰箱冷藏。3.乾燥保存：曬蘿蔔建議於冬季進行，白蘿蔔切絲後，平鋪在竹籃上置於室外曝曬，晚上移入室內，約持續4～5天即可裝入密封容器中以冷藏存放，避免接觸水氣可保存6個月左右。4.醃製保存：不同的醃製方式，有不同的保存期限。方法一：醋漬白蘿蔔：室溫醃漬2天，冷藏保存15～20天。方法二：辣漬白蘿蔔：冷藏醃3天，冷藏保存1個月。方法三：辣醃蘿蔔絲：冷藏醃半天，冷藏保存1週。方法四：炸雞醃蘿蔔：室溫醃1天，冷藏保存1～3週。方法五：味噌醃蘿蔔：冷藏醃約1小時，冷藏保存2天。方法六：台式醃蘿蔔：室溫醃2天，冷藏保存約1～3週。'
    })
    .then(docRef => console.log('success'))

    db.collection('Rhizome')
    .doc('3馬鈴薯')
    .set({
      //圖片:'https://www.canceraway.org.tw/uploadsmall/FCF_20171415281.jpg',
      名稱:'馬鈴薯',
      別稱:'土豆、洋山芋、薯仔、番仔薯、土蛋。',
      如何挑選: '馬鈴薯塊莖不宜過大，表皮應未發綠或發芽，表皮應偏光滑，外型應呈圓形或橢圓。',
      建議保存方式: '陰涼室溫存放別冷藏，將馬鈴薯以報紙包裹，避免見光，放於通風處常溫可保存2~3週。若2~3週後仍無法吃完，請以報紙或紙袋保裹後放入冰箱冷藏，但因為一般家用冰箱溫度無法達到1℃，因此建議還是盡早享用完畢，以免發芽。！注意：若已置放在冰箱冷藏儲存，就不要再拿出來放常溫，否則容易發芽。'
    })
    .then(docRef => console.log('success'))

    db.collection('Rhizome')
    .doc('4甘藷(地瓜)')
    .set({
      //圖片:'https://img.ltn.com.tw/Upload/food/page/2016/04/27/160427-1468-00-jHDux.jpg',
      名稱:'甘藷(地瓜)',
      別稱:'番薯、山芋、紅薯、甘薯、甜薯。',
      如何挑選: '形狀完整，橢圓飽滿呈紡錘型為佳，表面光滑，無損傷或小黑洞，未發芽，尾端無或少鬚根。',
      建議保存方式: '1.常溫保存：在冬季購買的地瓜，或是少量購買、短期存放需求，只需以平攤的方式放置於通風處即可。2.冷藏保存：將地瓜以紙包裹，再放入冷藏庫中存放。3.冷凍保存：將地瓜蒸熟後放入冷凍庫內貯存。'
    })
    .then(docRef => console.log('success'))

    db.collection('Rhizome')
    .doc('5綠竹筍')
    .set({
      //圖片:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDd215x90vfWShcHKRP1l4IYtSi4KbrydKQQ&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDd215x90vfWShcHKRP1l4IYtSi4KbrydKQQ&usqp=CAU',
      名稱:'綠竹筍',
      別稱:'甜竹、綠仔筍。',
      如何挑選: '四有四無，四有為竹筍有形、筍殼有緊、纖維有細、筍底有白；四無為無出青、無漂白、無受損、無臭味。',
      建議保存方式: '1.若沒有要立刻料理，先不要去殼，先在切面抹鹽，再以餐巾紙包覆，放入塑膠袋內，放進冰箱冷藏；或是先用溼的餐巾紙將竹筍底部包起來，然後放進冰箱，但建議在三天內食用。2.先用清水和軟毛刷刷洗乾淨，然後帶殼放入鍋中，加一點鹽，從冷水開始煮滾，並浸泡在滾水中，等冷卻後再連同鍋子裡的水一起放冰箱冷藏。3.需要貯藏的竹筍，可以先用冰水預冷至攝氏2度，再用塑膠袋包好放進冰箱冷藏，可存放兩周左右。4.加工製作筍乾、脆筍、酸筍或桶筍，可以貯存較久時間。'
    })
    .then(docRef => console.log('success'))

    db.collection('Rhizome')
    .doc('6洋蔥')
    .set({
      //圖片:'https://imagepphcloud.thepaper.cn/pph/image/72/223/849.jpg',
      名稱:'洋蔥',
      別稱:'洋蔥頭、玉蔥、蔥頭、圓蔥、球蔥。',
      如何挑選: '1.外觀完整：表面光滑、乾燥，沒有水傷或擠壓痕跡，才不容易腐爛。2.飽滿厚實：用手輕輕按壓，如果偏軟表示已變質出水，建議不要購買。3.重者為佳：重量較重的表示水分含量充足，甜度也會比較高。4.尖頭扎實：收口扎實的洋蔥表示較為成熟、甜度較高，且尖頭部位乾燥也不易發芽、耐保存。',
      建議保存方式: '1.常溫保存：放入竹籃或紙袋中，置於通風陰涼處為佳。因為洋蔥害怕悶熱，若用袋裝，記得袋口不要密封，為了保持透氣，要避免使用塑膠袋盛裝保存。或將不要的絲襪清洗乾淨、晾乾後，先於絲襪尾端（腳趾處）打個小結，將洋蔥一顆一顆放入，每放一顆就打一個結，再把整串掛在通風陰涼處，要使用時再用剪刀從尾端剪一顆下來。保存期限約2~3個月。2.冷藏保存：若想要冷藏已經使用一半的洋蔥，除了用保鮮膜將切面包覆後，放入冰箱冷藏之外；不妨先全部切成方便烹飪的大小，加入適量的鹽巴混合均勻，再放入保鮮容器中密封冷藏，料理時便能直接使用。保存期限約1周。(Tips：洋蔥切開後，營養素就會開始流失，氧化的速度非常快，可以使用鹽巴稍微醃漬，留住洋蔥的風味和品質，再以保鮮膜包起冷藏，阻絕與空間接觸的機會。)3.冷凍保存：洋蔥切絲或切末，若過程有沾到水可以用廚房紙巾把洋蔥稍微壓乾，再裝入保鮮袋中鋪平、壓出袋內空氣後密封，貼上處理日期的標籤後送入冷凍庫。保存期限約1~3個月。'
    })
    .then(docRef => console.log('success'))




