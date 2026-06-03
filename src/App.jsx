import { useState, useCallback, useMemo, useEffect, useRef } from "react";
const S1=["佐藤","鈴木","高橋","田中","伊藤","渡辺","山本","中村","小林","加藤","吉田","山田","佐々木","山口","松本","井上","木村","林","斎藤","清水","山崎","森","池田","橋本","阿部","石川","山下","中島","石井","小川","前田","岡田","長谷川","藤田","後藤","近藤","村上","遠藤","青木","坂本","斉藤","福田","太田","西村","藤井","金子","岡本","藤原","中野","三浦","原田","中川","松田","竹内","小野","田村","中山","和田","石田","森田","上田","内田","原","柴田","酒井","宮崎","横山","高木","安藤","宮本","大野","小島","谷口","今井","工藤","高田","増田","丸山","杉山","新井","村田","大塚","小山","平野","藤本","野口","河野","上野","武田","松井","岩崎","千葉","菅原","木下","久保","野村","佐野","松尾","市川","杉本","菊地","島田","古川","大西","水野","桜井","高野","吉川","渡部","山内","飯田","西田","西川","菊池","小松","北村","安田","五十嵐","川口","関","平田","中田","久保田","服部","岩田","土屋","東","福島","川崎","辻","本田","樋口","秋山","永井","田口","山中","吉村","中西","川上","石原","大橋","馬場","松岡","浜田","星野","森本","浅野","矢野","大久保","松下","小池","吉岡","野田","内藤","荒木","大谷","松浦","熊谷","黒田","尾崎","永田","荒井","望月","田辺","松村","川村","栗原","早川","堀","大島","平井","西山","菅野","広瀬","石橋","横田","萩原","岩本","関口","片山","宮田","大石","吉野","高山","須藤","本間","岡崎","伊東","小田","上原","鎌田","篠原","古賀","小西","松原","福井","小泉","大森","奥村","南","内山","成田","川島","杉浦","桑原","沢田","片岡","三宅","富田","岡","小沢","八木","奥田","関根","松永","北川","河合","平山","牧野","白石","今村","寺田","青山","小倉","中尾","渋谷","上村","大山","小野寺","足立","天野","岡村","坂口","多田","佐久間","根本","豊田","田島","飯塚","角田","村山","白井","武藤","榎本","西","塚本","宮下","竹田","神谷","坂田","水谷","児玉","坂井","齋藤","浅井","岡部","小原","神田","森下","中井","植田","小笠原","稲垣","宮川","河村","前川","大川","飯島","松崎","長田","若林","谷","大沢","石塚","安部","堀内","田代","及川","中嶋","江口","中谷","山根","岸本","本多","荒川","西尾","岡野","森山","金井","細川","今野","稲葉","戸田","津田","落合","安達","森川","土井","村松","町田","星","三上","岩井","畠山","堤","長尾","中原","野崎","中沢","金田","杉田","米田","松山","堀田","西野","山岸","三好","佐伯","黒川","西岡","大竹","泉","大木","甲斐","笠原","堀江","岸","川田","須田","徳永","山川","黒木","榊原","古田","梅田","大城","野中","三木","新田","金城","村井","奥山","土田","滝沢","大村","川端","井口","梶原","宮城","大場","比嘉","長島","吉原","宮内","金沢","安井","庄司","大内","茂木","荻野","松島","下田","日高","塚田","向井","石黒","奥野","西本","広田","嶋田","竹中","栗田","福本","藤川","北野","藤野","宇野","丹羽","川原","谷川","小谷","青柳","吉本","竹下","古谷","竹本","藤岡","緒方","平川","亀井","藤村","高島","三輪","篠崎","藤沢","窪田","宮原","根岸","高井","高瀬","下村","小澤","山村","川本","柳沢","横井","武井","吉沢","出口","小森","竹村","長野","志村","宮沢","平松","臼井","黒沢","福岡","溝口","田原","稲田","浅田","奧村","柳田","筒井","永野","大原","瀬戸","冨田","林田","篠田","手塚","大平","入江","北原","矢島","福永","富永","小出","湯浅","鶴田","沼田","堀口","岩瀬","高松","長岡","山岡","大田","澤田","石崎","大槻","石山","池上","島崎","柏木","堀川","二宮","奧田","園田","相馬","平岡","花田","杉原","加納","村瀬","川野","内海","倉田","片桐","長沢","野沢","河原","秋元","福原","松野","西原","越智","笠井","小坂","田畑","北島","渡邊","日野","吉井","谷本","深沢","千田","西沢","相沢","徳田","原口","細谷","米山","小柳","今泉","田上","新谷","浜野","菅","小嶋","森岡","浅見","畑中","磯部","大井","秋田","芳賀","相原","荻原","細田","坪井","植木","大崎","白川","岸田","皆川","中本","平林","福山","島村","三谷","辻本","川瀬","畑","木原","浜口","古屋","大友","遠山","塩田","神山","河内","齊藤","三橋","中里","大澤","三井","植村","大坪","難波","三村","渡邉","栗山","岩下","松川","井手","吉永","井出","早坂","長井","川畑","佐竹","朝倉","柳","亀山","川合","河田","小宮","橘","浜崎","草野","堀井","新垣","保坂","中根","半田","志賀","狩野","尾形","大津","水上","村岡","高村","柴崎","高柳","玉城","若松","亀田","高岡","立石","市村","内野","寺島","三島","木内","武内","瀬川","久野","藤崎","奈良","並木","植松","平","深谷","玉井","江藤","真鍋","守屋","清野","水口","菅谷","大沼","進藤","寺本","高見","橋口","宮地","織田","石渡","藤森","毛利","河本","宮島","矢部","市原","大江","有馬","有田","鳥居","高原","飯野","下山","那須","関谷","松沢","北山","前原","野上","坂下","牧","板垣","三原","染谷","川井","坂上","外山","田崎","小室","平尾","岩佐","立花","山城","三田","成瀬","松木","高尾","長谷","野本","秋葉","宇佐美","阪本","板倉","滝本","長瀬","高崎","塚原","仲村","小寺","高梨","葛西","山﨑","滝口","石垣","山野","井田","江崎","秦","長谷部","椎名","海野","大倉","相川","中澤","正木","和泉","門脇","土居","都築","今田","平塚","細井","藤木","小関","堀越","奥","島","宍戸","小杉","江川","木田","岩永","西谷","諏訪","金山","金谷","乾","永山","大熊","下川","細野","森谷","大貫","田川","金森","石丸","島袋","黒岩","野原","布施","北田","小野田","本橋","小畑","梅原","杉村","山上","大矢","豊島","阿久津","倉持","富樫","上山","赤松","石本","宮野","宮脇","奧野","米沢","末永","古沢","平良","塩谷","菅沼","麻生","仲田","今西","風間","水田","香川","小幡","小久保","生田","大庭","須賀","坂元","喜多","西口","門田","井川","奧山","大和田","中林","富岡","海老原","永島","砂川","梅本","矢口","浦田","川辺","杉野","岩間","佐川","土橋","木本","波多野","木戸","日下","浜本","大滝","岩渕","雨宮","長崎","立川","金丸","小沼","依田","羽田","白鳥","浅川","宇田川","石坂","真田","神崎","平沢","板橋","深田","小椋","目黒","山形","森脇","影山","寺尾","濱田","大畑","三枝","矢田","曽根","松元","山元","北沢","清田","高倉","柳川","橋爪","勝又","鶴岡","赤木","櫻井","芦田","梅津","江原","瀬尾","丹野","吉澤","尾上","岩城","宇都宮","横尾","神野","坂野","柳原","日比野","桑田","池内","西脇","梅村","久米","小菅","栗林","手島","浦野","小堀","西島","角","結城","大嶋","飛田","川西","森口","小高","井原","上杉","田端","横川","首藤","赤坂","柏原","玉置","青野","浅沼","梅沢","北","大林","水島","宮里","宮坂","角谷","有賀","合田","小玉","加瀬","脇田","柴山","竹原","本村","三沢","島津","明石","池本","志田","池谷","春日","勝田","滝川","大和","妹尾","富山","柿沼","前島","会田","楠","中塚","大下","恩田","阪口","戸塚","夏目","磯野","石野","野島","前野","益田","古山","小栗","白木","笹川","曽我","菅井","吉崎","谷村","日下部","川越","国分","楠本","坂東","持田","井本","岡山","花岡","鬼頭","内村","金澤","末吉","神戸","中","高畑","福地","城戸","熊田","沖","石倉","滝","田渕","玉木","田所","粕谷","若山","倉本","浜","児島","塩見","東海林","森井","八田","寺沢","沖田","黒崎","重松","沢井","寺西","長坂","重田","高嶋","廣瀬","深井","本山","森永","村木","大浦","大高","田尻","知念","井村","高谷","鵜飼","南部","川嶋","磯崎","平賀","玉田","秋本","米倉","菊田","岡島","小俣","今","寺岡","下地","熊倉","猪股","古橋","増井","笹原","冨永","富沢","岩谷","畠中","小暮","長浜","五味","氏家","小口","桜田","小平","大関","野呂","平本","小峰","花井","梶田","杉崎","川添","鹿島","牧田","土谷","安永","西井","河西","紺野","倉橋","西浦","柳瀬","新村","鹿野","岩村","宮澤","相田","境","辻村","川名","大越","丸田","塚越","今川","長沼","伴","黒澤","安川","百瀬","寺内","寺崎","松谷","赤羽","寺井","藤島","神原","篠塚","我妻","新保","二瓶","益子","湊","本郷","古市","伊達","熊沢","東野","真野","仲野","須永","滝田","品川","室井","片野","村越","浦","野間","郡司","金","大前","土肥","江田","的場","安西","新川","神保","平原","江頭","石沢","大宮","中岡","大岩","河上","南雲","長澤","保田","金原","渥美","高須","村中","久田","坂","湯川","藤山","野尻","森島","住田","安原","栗本","梶","広川","赤井","大河原","照井","長友","仲宗根","増山","長嶋","河口","高津","津村","河崎","吉見","伏見","船越","磯貝","矢崎","相良","薄井","塩崎","矢吹","北岡","小山田","坪田","関本","上岡","関野","有村","増子","照屋","藤巻","桑野","石村","河井","中森","松橋","谷田","石岡","藤谷","浜中","緑川","高沢","尾関","金野","梶山","安東","八巻","稲村","山脇","垣内","高坂","牛島","西森","湯本","二村","森崎","長山","堺","棚橋","水本","中道","小宮山","松林","住吉","谷内","小村","相澤","塩野","新美","福士","榊","迫田","越川","田嶋","人見","椿","小竹","飯村","鶴見","玉川","塩沢","加賀","船木","東山","芝田","柿本","永瀬","深澤","原島","吉武","矢沢","丸岡","赤塚","柿崎","大坂","仲","梅木","清原","唐沢","西澤","駒井","向山","高森","下野","木島","田沢","井沢","沢","名倉","辻井","小橋","宇田","高杉","藤澤","鮫島","塙","笹本","平間","岩沢","高林","犬飼","上地","疋田","三瓶","磯田","竹林","植野","羽鳥","西崎","川内","福沢","新里","平石","福元","城間","畑山","八幡","勝山","加茂","石毛","柳澤","森野","西垣","金本","横溝","船橋","米谷","志水","袴田","島本","廣田","長屋","村尾","伊沢","城","大屋","山浦","長","安斎","沢村","木谷","岩橋","小崎","長嶺","時田","鳴海","浦川","鳥海","小熊","村本","大杉","桂","早瀬","赤堀","若杉","添田","庄子","川又","高久","衛藤","芹沢","板谷","高塚","新藤","対馬","伊勢","芝","柴","保科","深川","新城","宮村","高本","竹山","平岩","直井","飯沼","小田島","柳井","神","松葉","徳山","丸尾","塩川","水越","永松","小山内","大迫","大須賀","桐山","谷山","米村","猪俣","竹島","井戸","国井","野澤","柘植","大上","安岡","佃","上林","山路","小浜","別府","赤間","須崎","日向","幸田","黒瀬","大河内","竹之内","山谷","安江","岩野","赤嶺","福嶋","生駒","平島","熊野","竹井","猪狩","岩見","脇","大泉","橋詰","藤","藤江","福留","柳沼","深見","猿渡","名取","青島","村川","矢作","神尾","岩元","新倉","須貝","早田","小塚","石上","崎山","鳥越","熊本","上西","綿貫","五島","山西","上島","新山","小松崎","松澤","中平","春田","鎌倉","長江","秋吉","古澤","塩原","宗像","兵頭","間瀬","舟橋","砂田","鷲見","石津","松坂","真下","萩野","市橋","安本","園部","竹谷","岩切","鬼塚","平木","梶谷","竹川","関川","蛭田","大岡","藤枝","広岡","村野","黒須","磯村","池野","荒谷","磯","二階堂","岸野","竹沢","土岐","佐原","辰巳","安倍","犬塚","鳥羽","桜庭","友田","戸村","土方","東田","高石","一ノ瀬","岡林","川尻","副島","守田","伊波","船津","大堀","堀尾","武山","脇坂","大賀","嶋崎","井坂","馬渕","加賀谷","須山","中園","元木","近江","佐山","清家","菊川","米川","大里","田丸","高城","海老沢","片倉","宮嶋","北条","有吉","奥谷","辻野","星川","安里","吉松","若月","北口","日置","小田切","多賀","梶川","亀谷","吉成","岡安","坪内","江本","新","春山","谷岡","広沢","箕輪","杉谷","川北","河辺","兼子","山地","大脇","宮武","大門","大本","戸谷","巽","藤倉","堀部","赤沢","柴原","設楽","間宮","有本","露木","佐田","深津","田山","細見","武石","国吉","中込","宮尾","小木曽","伊原","赤尾","杉江","長内","八島","寺山","辻田","姫野","田坂","末広","片平","糸井","古畑","時山","八木澤","仙崎","南場","芦葉","本林","堺","乃木","朝比奈","志山","河重","木野峯","新堂","八神","徳井","郷道","菱川","高市","中曽根","石破","福川","聖川","聖澤","新島","竹津","石城","深尾","朝長","門屋","清松","清宮","万波","瀬藤","沖乃","池島","池崎","友井","豊久保","花澤","水間","佐倉","熊坂","大黒","一柳","二川","四谷","五条","六川","七枝","九原","十条","茨田","益川","殿川","西園寺","大隈","柴坂","原川"];
const S2=[""];
const F1=["壮志","勇気","祐樹","勇樹","佑樹","裕紀","雄希","俊","駿","祐太","雄太","佑太","裕太","涼平","亮平","卓","英","稜","良","亮","秀隆","英隆","英孝","栄敬","翔太","将太","匠太","実","稔","涼太","亮太","諒太","孝哉","光也","功哉","宏弥","正樹","真樹","雅樹","誠","翔平","昌平","諭","智司","智","悟志","聡志","賢","秀樹","秀喜","英喜","智義","友義","剛士","武","毅","健","丈彦","剛彦","岳","一朗","一郎","拓真","琢磨","拓馬","圭悟","圭吾","啓吾","佳吾","良一","諒一","僚一","哲","徹也","輝也","哲也","鉄也","勝哉","勝也","克也","且也","光一","孝一","幸一","憲","健二","健司","憲治","賢二","賢司","博則","博紀","裕則","佑典","博範","剛志","剛之","翔","康洋","保博","靖宏","泰","康洋","靖","泰輔","泰助","良彦","頼彦","裕康","啓靖","宏泰","宏康","達也","竜也","龍也","樹也","彰浩","彰洋","亮廣","哲広","亮祐","明宏","彰","哲裕","遊星","裕","彬成","明成","敦","篤","篤史","敦史","俊吾","俊伍","純一","潤一","英一","叡一","浩","朝日","昭太郎","恵大","圭太","慶太","佳太","慶汰","海斗","海翔","将大","翔大","健史郎","健志","大成","大誠","聡太","壮太","颯太","蒼汰","奏太","蒼大","蒼","碧","清久","清斗","武明","岳明","大樹","大輝","大毅","蓮","陸","輝","光","凱斗","快斗","翼","瑠偉","響","湊","新","慎一","真一","進一","進","凛","望","律","建英","薫","純也","綾","大善","大智","大地","渉","航","英正","弘樹","宏樹","寛貴","廣喜","拓海","卓実","匠海","巧","太郎","光平","康平","流星","竜星","琉成","凪","純","遥","悠人","悠斗","悠翔","遥大","陽斗","周平","修平","就平","昴","唯人","千尋","秀希","俊輔","俊介","俊佑","信吾","慎吾","真吾","慎悟","真也","壮真","大和","駿輔","一太","傑","祐一朗","悠一郎","孝行","貴幸","勇亮","龍","龍輔","哲信","明暢","明信","遼太","凪也","晴樹","碧生","和輝","和希","一樹","和樹","直樹","直紀","直輝","修己","尚毅","一真","和真","幸隆","大希","弘宗","亘","義経","信長","秀吉","義明","義昭","淳太郎","謙佑","拓斗","拓士","竜馬","正大","和彦","一彦","典行","和則","崇","英寿","秀寿","英稔","鷹","智樹","智輝","誠也","政也","空","小次郎","風太","千隼","秀悟","修吾","寛太","勇翔","伊織","大吉","弥助","紀彰","貴明","東彦","利晃","康志","光英","直輔","喜平","士良","卓史","史哉","一","広翔","孝虎","幸之助","泰輔","凌太朗","一世","一成","宗次","勇己","利蔵","宏成","裕功","彬良","海舟","春久","由太郎","真吾","太助","将友","義純","峻平太","修之","結翔","朔","暖","藍","千颯","律希","健人","奏汰","理玖","理仁","伊吹","然","太陽"];
const F2=[""];
function mkN(){return S1[~~(Math.random()*S1.length)]+" "+F1[~~(Math.random()*F1.length)];}
const FOREIGN_NAMES=["ヴィンセント","ジョセフ","ダニエル","リチャード","ステファン","ピーター","サイモン","ベンジャミン","ジョン","ポール","ジェームス","デイヴィッド","アンドリュー","マイケル","ロバート","ウィリアム","チャールズ","ヘンリー","エドワード","フィリップ","オスカー","エマニュエル","パトリック","アレックス","クリストファー","フランシス","ジェレミー","ニコラス","レナード","マーティン","サミュエル","アブラハム","イサク","ヤコブ","モーゼス","ラファエル","ガブリエル","タッデオ","アイザック","ヨセフ","アディソン","ベルナルド","クリスチャン","ドミニク","エマヌエル","フェリックス","ゲオルク","ハンス","イグナチオ","ジュリアン","ケヴィン","ローレンス","マルコ","ネイサン","オリバー","パスカル","クィンティン","ラスムス","シリル","テオ"];
const FOREIGN_LAST=["キプチュンバ","キプタヌイ","ロチャム","ンディク","ムワンギ","チェベット","キピエゴ","コリル","キムタイ","ベケレ","ゲブレ","ハイレ","アベバ","チェイサ","ティロル","ジルマ","レゲセ","テスファイエ","ヨハネス","アディロ","ムカンビ","オウィテ","ンガラ","キピル","チェメラ","キトニー","チェログイ","コエチ","エチュル","ジェレイ","メトケル","チェキ","ブシェンディチ","セレム","チョゲ","オウォル","タヌイ","ンジル","ロネク","キサング","サンミ","ボーマット","チェランガト","ロカンガ","キパガト","チェクル","ロサパト","ベケリ","ヌワサ","チェロップ","アジョール","セレマ","タンギル","ロケエラ","アクオル","ンガニ","チュンバ","オムワミ","エトゥケト","モヨ"];
function genForeign(yr){
  const talent=0.7+Math.random()*0.3,peak=[2,3,3,3,4][~~(Math.random()*5)];
  const stats={},pot={};
  const _gM=yr===1?22:yr===2?17:yr===3?12:7;const _gS=yr===1?17:yr===2?12:yr===3?8:5;
  SK.forEach(k=>{const isElite=(k==="speed"||k==="stamina");const mean=isElite?85:55;const sigma=isElite?15:20;const cap=isElite?110:100;const v=Math.min(cap,Math.max(10,Math.round(mean+(Math.random()+Math.random()+Math.random()-1.5)*2*sigma)));stats[k]=v;const growth=Math.max(0,Math.round(_gM+(Math.random()+Math.random()+Math.random()-1.5)*2*_gS));pot[k]=Math.min(isElite?110:120,v+growth);});
  const r={id:_id++,name:FOREIGN_NAMES[~~(Math.random()*FOREIGN_NAMES.length)]+" "+FOREIGN_LAST[~~(Math.random()*FOREIGN_LAST.length)],year:yr||1,talent,peak,stats,pot,condition:90,injRisk:3+~~(Math.random()*8),fatigue:0,injured:false,injTurns:0,pb5k:null,pb10k:null,pbHalf:null,trn:"bal",history:[],foreign:true};
  r.pb5k=cTrk(5000,r);r.pb10k=cTrk(10000,r);r.condition=70+~~(Math.random()*25);return r;
}
const FOREIGN_UNIVS=["甲州学院大学","関東国際大学","翔才大学","健忠大学","桃美森大学","篤志館大学","伯旭大学","清水台大学","武蔵薬科大学","瑞穂大学","八王子公明大学","東京文化大学","伊勢崎大学","清博大学","令和外国語大学","富士野学院大学","流通商業大学"];
function applyForeignLimit(runners){
  /* Filter out excess foreigners, keeping only the strongest 1 (by speed+stamina) */
  const foreigners=runners.filter(r=>r.foreign);
  if(foreigners.length<=1)return runners;
  const top=[...foreigners].sort((a,b)=>(b.stats.speed+b.stats.stamina)-(a.stats.speed+a.stats.stamina))[0];
  return runners.filter(r=>!r.foreign||r.id===top.id);
}
const MO=["4月","5月","6月","7月","8月","9月","10月","11月","12月","1月","2月","3月"],moOf=t=>MO[~~((t-1)/4)],wkOf=t=>((t-1)%4)+1;
/* Hakone moved to T37 = January Week 1 */
const CAL={6:{t:"rec",n:"関東インカレ"},10:{t:"rec",n:"大体大記録会"},14:{t:"rec",n:"ホクレンDC"},16:{t:"half",n:"札幌ハーフ"},18:{t:"camp",n:"夏合宿"},22:{t:"rec",n:"日本インカレ"},24:{t:"zenQ",n:"全日本予選会"},26:{t:"ek",n:"出雲駅伝",eid:"izumo"},28:{t:"hakQ",n:"箱根予選会"},30:{t:"ek",n:"全日本大学駅伝",eid:"zennihon"},34:{t:"rec",n:"10000m記録挑戦会"},35:{t:"half",n:"国立ハーフ"},36:{t:"half",n:"上尾ハーフ"},37:{t:"ek",n:"箱根駅伝",eid:"hakone"},40:{t:"half",n:"丸亀ハーフ"},44:{t:"rec",n:"立川ロードレース"},47:{t:"rec",n:"早春トラック記録会"}};
const IZUMO=[{id:1,n:"1区",km:8.0,t:"flat"},{id:2,n:"2区",km:5.8,t:"flat"},{id:3,n:"3区",km:8.5,t:"flat"},{id:4,n:"4区",km:6.2,t:"flat"},{id:5,n:"5区",km:6.4,t:"hill"},{id:6,n:"6区",km:10.2,t:"hill"}];
const ZENNI=[{id:1,n:"1区",km:9.5,t:"flat"},{id:2,n:"2区",km:11.1,t:"flat"},{id:3,n:"3区",km:11.9,t:"flat"},{id:4,n:"4区",km:11.8,t:"flat"},{id:5,n:"5区",km:12.4,t:"flat"},{id:6,n:"6区",km:12.8,t:"flat"},{id:7,n:"7区",km:17.6,t:"hill"},{id:8,n:"8区",km:19.7,t:"hill"}];
const HAK=[{id:1,n:"1区",km:21.3,t:"flat",d:"大手町→鶴見",up:14,dn:14},{id:2,n:"2区",km:23.1,t:"hill",d:"花の2区",up:95,dn:65},{id:3,n:"3区",km:21.4,t:"flat",d:"戸塚→平塚",up:17,dn:54},{id:4,n:"4区",km:20.9,t:"hill",d:"準エース",up:30,dn:8},{id:5,n:"5区",km:20.8,t:"mountain",d:"山登り",up:870,dn:70},{id:6,n:"6区",km:20.8,t:"downhill",d:"山下り",up:70,dn:870},{id:7,n:"7区",km:21.3,t:"flat",d:"復路序盤",up:8,dn:30},{id:8,n:"8区",km:21.4,t:"hill",d:"遊行寺坂",up:54,dn:17},{id:9,n:"9区",km:23.1,t:"hill",d:"復路エース",up:65,dn:95},{id:10,n:"10区",km:23.0,t:"flat",d:"アンカー",up:14,dn:14}];
const EKS={izumo:{name:"出雲駅伝",sec:IZUMO,cnt:6},zennihon:{name:"全日本大学駅伝",sec:ZENNI,cnt:8},hakone:{name:"箱根駅伝",sec:HAK,cnt:10}};
const TEAM_TITLES={
  hakone_win:{n:"正月の覇者",d:"正月駅伝で優勝",icon:"🎍"},
  izumo_win:{n:"島根の覇者",d:"島根駅伝で優勝",icon:"⛩"},
  zennihon_win:{n:"熱田と伊勢の覇者",d:"熱田伊勢駅伝で優勝",icon:"🌊"},
  triple:{n:"三冠達成",d:"同一年に3大駅伝で優勝",icon:"👑"},
  speedsters:{n:"スピードスター軍団",d:"年度末に10000m27分台ランナーが6人以上在籍",icon:"⚡"},
  eternal_hakone:{n:"永世正月王者",d:"5年連続で正月駅伝優勝",icon:"🏆"},
  eternal_izumo:{n:"永世島根覇者",d:"5年連続で島根駅伝優勝",icon:"🏆"},
  eternal_zennihon:{n:"永世熱田伊勢覇者",d:"5年連続で熱田伊勢駅伝優勝",icon:"🏆"},
  absolute:{n:"絶対王者",d:"5年連続で三冠達成",icon:"💎"}
};
const TRS=[
{id:"bal",n:"バランス",fx:{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:1,pack:1,track:1,road:1},f:2},
{id:"speed",n:"スピード",fx:{speed:4,stamina:0,stability:1,uphill:0,downhill:1,solo:1,pack:1,track:3,road:1},f:3},
{id:"end",n:"スタミナ",fx:{speed:0,stamina:4,stability:1,uphill:1,downhill:0,solo:1,pack:1,track:1,road:1},f:4},
{id:"mental",n:"メンタル",fx:{speed:0,stamina:1,stability:4,uphill:1,downhill:1,solo:3,pack:3,track:1,road:1},f:2},
{id:"hill",n:"上り",fx:{speed:0,stamina:1,stability:1,uphill:4,downhill:1,solo:1,pack:0,track:0,road:3},f:3},
{id:"dh",n:"下り",fx:{speed:1,stamina:1,stability:1,uphill:1,downhill:4,solo:1,pack:0,track:0,road:3},f:3},
{id:"team",n:"集団走",fx:{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:0,pack:4,track:1,road:1},f:2},
{id:"solo",n:"単独走",fx:{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:4,pack:0,track:1,road:1},f:2},
{id:"trk",n:"トラック",fx:{speed:3,stamina:1,stability:1,uphill:0,downhill:0,solo:1,pack:1,track:4,road:0},f:2},
{id:"road",n:"ロード",fx:{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:1,pack:1,track:0,road:4},f:3},
{id:"hak",n:"箱根対策",fx:{speed:0,stamina:3,stability:1,uphill:3,downhill:1,solo:1,pack:1,track:0,road:3},f:3},
{id:"base",n:"基本走力",fx:{speed:3,stamina:3,stability:3,uphill:0,downhill:0,solo:0,pack:0,track:0,road:0},f:3}
];
const UNIV=[["緑原学院大学",96,200,{speed:8,stamina:10,stability:8,uphill:10,downhill:10,solo:10,pack:6,track:7,road:10},9,10,9,"都市型キャンパスと郊外型キャンパスを併せ持つ私立大学。フレッシュグリーンの襷で知られる近年の駅伝強豪校。"],["藤駒大学",95,200,{speed:10,stamina:10,stability:7,uphill:8,downhill:10,solo:8,pack:8,track:9,road:9},5,9,8,"曹洞宗系の私立大学。冬の絶対王者と呼ばれる伝統校で、近年も優勝を重ねる強豪。"],["徳岳院大学",93,180,{speed:7,stamina:10,stability:10,uphill:6,downhill:6,solo:7,pack:9,track:7,road:10},8,9,8,"古典と歴史学に強い私立大学。近年の駅伝強化で出雲駅伝優勝経験を持つ新興強豪。"],["多摩法科大学",92,200,{speed:10,stamina:9,stability:7,uphill:6,downhill:8,solo:9,pack:10,track:10,road:9},7,9,9,"法学部の伝統で知られる私立大学。古豪駅伝部の復活を目指す。白地に赤いCマークの襷が象徴。"],["翔才大学",90,80,{speed:6,stamina:9,stability:7,uphill:9,downhill:7,solo:7,pack:3,track:5,road:7},9,8,6,"薬学・経営学を擁する私立大学。山の名将と呼ばれる指導者の下で5区を制する。"],["高田大学",89,200,{speed:10,stamina:7,stability:6,uphill:7,downhill:7,solo:7,pack:7,track:9,road:7},7,7,10,"都の西北にキャンパスを持つ私立の名門。三大駅伝制覇経験を持つ伝統校。エンジ色の襷。"],["八王子公明大学",88,140,{speed:7,stamina:9,stability:4,uphill:7,downhill:7,solo:7,pack:7,track:7,road:9},9,8,8,"八王子の郊外にキャンパスを持つ私立大学。近年急成長し箱根駅伝で旋風を起こした新進校。"],["駿仙堂大学",87,130,{speed:9,stamina:8,stability:7,uphill:8,downhill:7,solo:8,pack:8,track:10,road:7},10,8,8,"医学・スポーツ健康科学に強い私立大学。OBに長距離の名選手が多い駅伝の名門。"],["豊洋大学",86,160,{speed:6,stamina:10,stability:8,uphill:10,downhill:5,solo:8,pack:9,track:5,road:8},8,9,8,"「その1秒をけずりだせ」が標語の私立大学。鉄紺の襷で平成期に黄金時代を築いた強豪。"],["孝海大学",85,150,{speed:10,stamina:7,stability:6,uphill:5,downhill:9,solo:6,pack:8,track:9,road:5},9,7,7,"全国に系列校を持つ総合私立大学。湘南キャンパスを拠点とし箱根駅伝総合優勝経験あり。"],["東成大学",84,75,{speed:7,stamina:7,stability:5,uphill:9,downhill:7,solo:6,pack:3,track:5,road:7},6,7,9,"市ヶ谷にキャンパスを構える私立の名門。オレンジの襷を背負う古豪駅伝部。"],["栄東大学",83,75,{speed:7,stamina:6,stability:10,uphill:6,downhill:6,solo:10,pack:6,track:6,road:9},10,10,7,"医療系学部を擁する私立大学。シード権常連の安定した中堅強豪校。赤の襷。"],["禎義大学",82,145,{speed:8,stamina:6,stability:3,uphill:7,downhill:6,solo:7,pack:8,track:8,road:7},8,5,9,"明治期創立の私立名門大学。紫紺の襷で全日本大学駅伝制覇経験を持つ。"],["大和体育大学",81,70,{speed:8,stamina:6,stability:6,uphill:9,downhill:9,solo:6,pack:6,track:7,road:6},9,7,5,"スポーツ系の単科色が強い私立大学。多くのオリンピアンを輩出する伝統校。"],["関東国際大学",80,85,{speed:8,stamina:8,stability:5,uphill:5,downhill:6,solo:7,pack:9,track:5,road:7},5,6,3,"川越にキャンパスを置く私立大学。外国人留学生を積極受入し近年急成長した新興校。"],["新座大学",79,65,{speed:7,stamina:6,stability:6,uphill:6,downhill:6,solo:6,pack:6,track:6,road:6},5,6,9,"池袋にキャンパスを持つキリスト教系私立大学。55年ぶりに箱根に帰還した古豪。"],["東京文化大学",78,40,{speed:4,stamina:8,stability:6,uphill:8,downhill:4,solo:7,pack:4,track:4,road:6},7,7,7,"東松山にキャンパスを構える私立大学。緑のシマウマ柄の襷で知られた古豪。"],["相模大学",77,40,{speed:9,stamina:6,stability:5,uphill:5,downhill:5,solo:5,pack:5,track:5,road:8},6,7,8,"横浜に位置する私立大学。1990年代に箱根駅伝総合優勝経験あり。海老茶の襷。"],["瑞穂大学",76,40,{speed:6,stamina:6,stability:6,uphill:6,downhill:6,solo:6,pack:6,track:6,road:6},7,4,8,"総合学部数日本最大級の私立マンモス大学。古くは三大駅伝制覇経験ある名門。"],["伯旭大学",75,20,{speed:4,stamina:5,stability:4,uphill:5,downhill:4,solo:5,pack:4,track:5,road:4},7,8,6,"国際関係に強い私立大学。文京区茗荷谷にキャンパスを構え外国人留学生も活躍。"],["甲州学院大学",74,35,{speed:5,stamina:6,stability:3,uphill:4,downhill:4,solo:4,pack:4,track:4,road:4},6,6,4,"山梨甲府の私立大学。スポーツ強化校として外国人留学生制度の先駆け。プリンスブルーの襷。"],["健忠大学",73,15,{speed:5,stamina:5,stability:6,uphill:5,downhill:5,solo:5,pack:6,track:5,road:5},4,6,8,"経済・経営の私立大学。生田にキャンパスを持つ古豪駅伝部の復活を目指す。"],["篤志館大学",72,15,{speed:5,stamina:5,stability:5,uphill:5,downhill:5,solo:5,pack:5,track:5,road:5},5,5,7,"町田と世田谷に拠点を置く私立大学。武道・体育で知られる伝統校。"],["修陽学院大学",71,35,{speed:6,stamina:8,stability:7,uphill:7,downhill:4,solo:8,pack:3,track:4,road:9},4,9,3,"千葉我孫子の私立大学。シード権常連を目指す中堅校。緑の襷。"],["伊勢崎大学",70,10,{speed:2,stamina:5,stability:2,uphill:2,downhill:2,solo:2,pack:2,track:2,road:2},4,7,2,"群馬に拠点を置く私立大学。地方からの箱根挑戦校として知られる。"],["関東農業大学",69,15,{speed:7,stamina:5,stability:5,uphill:5,downhill:5,solo:5,pack:5,track:8,road:5},4,4,8,"農学・食品系の伝統ある私立大学。世田谷キャンパスを拠点とする。大根踊りで有名。"],["茨城科学大学",68,15,{speed:6,stamina:6,stability:6,uphill:6,downhill:6,solo:7,pack:7,track:6,road:6},10,5,9,"筑波研究学園都市の国立大学。学術と体育の両立を掲げる古豪。紫の襷。"],["福澤大学",67,5,{speed:1,stamina:1,stability:4,uphill:2,downhill:2,solo:2,pack:3,track:1,road:1},10,2,10,"塾を起源とする私立名門大学。学業優先の文武両道で箱根帰還を目指す。"],["清水台大学",66,10,{speed:3,stamina:6,stability:7,uphill:3,downhill:3,solo:5,pack:3,track:3,road:4},6,7,4,"埼玉飯能の私立大学。法学・経済を擁する中堅校。"],["清博大学",65,10,{speed:2,stamina:3,stability:2,uphill:3,downhill:2,solo:2,pack:2,track:2,road:4},5,3,3,"千葉柏の私立大学。道徳教育を掲げる名門中堅校。"],["遊羅師安大学",64,10,{speed:4,stamina:4,stability:3,uphill:5,downhill:5,solo:4,pack:3,track:4,road:3},4,4,7,"武蔵野にキャンパスを置く私立大学。1980年代に箱根駅伝総合優勝経験あり。"],["横浜学院大学",63,5,{speed:2,stamina:2,stability:2,uphill:2,downhill:2,solo:2,pack:2,track:2,road:2},2,5,6,"横浜のキリスト教系私立大学。古くは関東1部にいた中堅校。"],["令和外国語大学",62,5,{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:1,pack:1,track:1,road:1},2,2,2,"埼玉加須の私立大学。スポーツ強化で近年箱根予選参戦。"],["富士野学院大学",61,5,{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:1,pack:1,track:1,road:1},2,2,2,"埼玉狭山の私立大学。新興校として箱根挑戦を続ける。"],["桃美森大学",60,5,{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:1,pack:1,track:1,road:1},3,6,4,"町田の私立大学。リベラルアーツ教育を掲げる総合校。"],["流通商業大学",59,5,{speed:3,stamina:3,stability:3,uphill:3,downhill:3,solo:3,pack:3,track:3,road:3},6,6,5,"茨城龍ケ崎の私立大学。物流・スポーツ強化校として知られる。"],["豊洲工業大学",58,5,{speed:3,stamina:3,stability:3,uphill:3,downhill:3,solo:3,pack:3,track:3,road:3},5,3,7,"東京豊洲の理工系私立大学。工学系の名門で文武両道を目指す。"],["禎義学院大学",57,5,{speed:2,stamina:2,stability:2,uphill:2,downhill:2,solo:2,pack:2,track:2,road:2},4,5,8,"白金に拠点を置くキリスト教系私立大学。リベラルな校風。"],["武蔵薬科大学",56,5,{speed:2,stamina:2,stability:2,uphill:2,downhill:2,solo:2,pack:2,track:2,road:2},7,6,3,"埼玉伊奈の薬学系私立大学。文武両道で箱根予選参戦を続ける。"]];
const SK=["speed","stamina","stability","uphill","downhill","solo","pack","track","road"];
const SL={speed:"速",stamina:"持",stability:"安",uphill:"登",downhill:"降",solo:"単",pack:"集",track:"ト",road:"ロ"};
const SL2={speed:"スピード",stamina:"スタミナ",stability:"安定",uphill:"登坂",downhill:"降坂",solo:"単独走",pack:"集団走",track:"トラック",road:"ロード"};
const GR=v=>v>=95?"SS":v>=85?"S":v>=75?"A":v>=65?"B":v>=55?"C":v>=45?"D":v>=35?"E":v>=25?"F":"G";
const GC=g=>({SS:"#FF1F5A",S:"#c0392b",A:"#e67e22",B:"#d4ac0d",C:"#27ae60",D:"#7f8c8d",E:"#bdc3c7",F:"#bdc3c7",G:"#bdc3c7"}[g]);
const RL=["×","▽","△","○","◎"];
function rFacLv(str,t,m,c,rp){return{training:t||1,medical:m||1,coaching:c||1,reputation:rp||1};}
let _id=0;
/* Increased per-stat variance: ±8 random per stat */
function genFresh(){
  const talent=0.3+Math.random(),peak=[1,2,2,3,3,3,4,4][~~(Math.random()*8)];
  const stats={},pot={};
  SK.forEach(k=>{const v=Math.min(100,Math.max(10,Math.round(45+(Math.random()+Math.random()+Math.random()-1.5)*2*20)));stats[k]=v;const growth=Math.max(0,Math.round(22+(Math.random()+Math.random()+Math.random()-1.5)*2*17));pot[k]=Math.min(120,v+growth);});
  const r={id:_id++,name:mkN(),year:1,talent,peak,stats,pot,condition:90,injRisk:3+~~(Math.random()*8),fatigue:0,injured:false,injTurns:0,pb5k:null,pb10k:null,pbHalf:null,trn:"bal",history:[]};
  r.pb5k=cTrk(5000,r);r.pb10k=cTrk(10000,r);r.condition=65+~~(Math.random()*25);return r;}
function genFreshYr(yr){
  const avgStat={4:60,3:55,2:50,1:45}[yr]||50;
  const talent=0.3+Math.random(),peak=[1,2,2,3,3,3,4,4][~~(Math.random()*8)];
  const stats={},pot={};
  const _gM=yr===1?22:yr===2?17:yr===3?12:7;const _gS=yr===1?17:yr===2?12:yr===3?8:5;
  SK.forEach(k=>{const v=Math.min(100,Math.max(10,Math.round(avgStat+(Math.random()+Math.random()+Math.random()-1.5)*2*20)));stats[k]=v;const growth=Math.max(0,Math.round(_gM+(Math.random()+Math.random()+Math.random()-1.5)*2*_gS));pot[k]=Math.min(120,v+growth);});
  const r={id:_id++,name:mkN(),year:yr,talent,peak,stats,pot,condition:90,injRisk:3+~~(Math.random()*8),fatigue:0,injured:false,injTurns:0,pb5k:null,pb10k:null,pbHalf:null,trn:"bal",history:[]};
  r.pb5k=cTrk(5000,r);r.pb10k=cTrk(10000,r);r.condition=60+~~(Math.random()*30);return r;
}
/* Draft-style initial generation: 40 teams × 12 per year × 4 years */
function genAllTeams(rivArr,myStr){
  const allTeams=[...rivArr.map(rv=>({name:rv[0],str:rv[1],sp:rv[2]||5,runners:[]})),{name:"__ME__",str:myStr,sp:5,runners:[],isMe:true}];
  for(let yr=4;yr>=1;yr--){
    const pool=[];for(let i=0;i<allTeams.length*12;i++)pool.push(genFreshYr(yr));
    pool.sort((a,b)=>(b.stats.speed+b.stats.stamina+b.stats.stability)-(a.stats.speed+a.stats.stamina+a.stats.stability));
    const buckets={};allTeams.forEach(t=>{buckets[t.name]=[];});
    const counts={};allTeams.forEach(t=>{counts[t.name]=0;});
    for(let pick=0;pick<pool.length;pick++){
      const el=allTeams.filter(t=>counts[t.name]<12);if(!el.length)break;
      const tot=el.reduce((s,t)=>s+t.sp,0);
      let r=Math.random()*tot,ch=el[0];
      for(const t of el){r-=t.sp;if(r<=0){ch=t;break;}}
      pool[pick].year=yr;buckets[ch.name].push(pool[pick]);counts[ch.name]++;
    }
    allTeams.forEach(t=>{t.runners.push(...buckets[t.name]);});
  }
  return allTeams;
}
function genR(str,yr){return genFreshYr(yr||[1,1,1,2,2,2,3,3,3,4,4,4][~~(Math.random()*12)]);}
function genT48(str,univName,fAllowed){
  const a=[];
  for(let y=1;y<=4;y++)for(let i=0;i<12;i++)a.push(genR(str,y));
  /* Special schools: starting roster includes 1 foreign student in random year */
  const allowed=fAllowed?fAllowed[univName]:FOREIGN_UNIVS.includes(univName);
  if(allowed){
    const yr=1+~~(Math.random()*4);
    /* Replace the lowest-ranked Japanese student in that year with a foreigner */
    const sameYr=a.filter(r=>r.year===yr);
    if(sameYr.length>0){
      const lowest=[...sameYr].sort((p,q)=>(p.stats.speed+p.stats.stamina+p.stats.stability)-(q.stats.speed+q.stats.stamina+q.stats.stability))[0];
      const idx=a.indexOf(lowest);
      if(idx>=0)a[idx]=genForeign(yr);
    }
  }
  return a;
}
function gRate(r){const d=Math.abs(r.year-r.peak);return r.talent*(d===0?2:d===1?1:0.5);}
function growB(f,skillKey){if(!f)return 1;const ts=f.trainSkill||{};const lv=skillKey?(ts[skillKey]||f.training||1):(f.training||1);const co=f.coaching||1;return (1+(lv-1)*1/9)*(1+(co-1)*1/18);}
function injB(f){return Math.max(0.1,1-f.medical*0.08);}
function injPct(r,f){if(r.trn==="rest"||r.injured)return 0;return Math.round((r.injRisk*0.15+r.fatigue*0.08)*0.4*injB(f)*100)/100;}
function eSec(r,s){const t=r.stats;const km=s.km;switch(s.t){case"mountain":return t.uphill*0.35+t.stamina*0.25+t.road*0.15+t.solo*0.15+t.stability*0.1;case"downhill":return t.downhill*0.35+t.speed*0.2+t.road*0.15+t.stability*0.15+t.stamina*0.15;default:{const spd=((25-km)*t.speed+km*t.stamina)/25;return spd*0.75+t.road*0.1+t.pack*0.08+t.stability*0.07;}}}
function e10k(r){return r.stats.speed*0.25+r.stats.stamina*0.3+r.stats.track*0.15+r.stats.road*0.1+r.stats.stability*0.2;}
function eHf(r){return r.stats.stamina*0.3+r.stats.speed*0.15+r.stats.road*0.25+r.stats.solo*0.15+r.stats.stability*0.15;}
/* TIME FORMULA: T=(LN(totalKm)*8.8671+143.93+(3700-combat)/120+RAND()*300/stab-cond/50)*segKm */
/* New time formula:
   combat = 8*((30-km)*speed+km*stamina)/km + surf + situation (in 0-100 scale)
   peakSpeedTime = (-0.00003*km^4+0.0042*km^3-0.182*km^2+3.4519*km+142.78)*km  (seconds)
   baseFactor = 1+(1000-combat)/4800
   stabFactor = 1+(rand()*0.3)/stability
   condFactor = 1+(rand()*0.3)/condition
   slopeFactor = 1+(up/km)*0.00369*(1+(100-uph)/500) - (dn/km)*0.00122*(1+(100-dnh)/1000)
   time = peakSpeedTime * baseFactor * stabFactor * condFactor * slopeFactor
*/
function calcSeg(segKm,totalKm,spd,sta,surf,pk,stab,cond,slope,up,dn,uph,dnh){
  const combat=8*((30-totalKm)*spd+totalKm*sta)/30+surf+pk;
  const peakSpd=(-0.00003*Math.pow(totalKm,4)+0.0042*Math.pow(totalKm,3)-0.182*Math.pow(totalKm,2)+3.4519*totalKm+142.78);
  const baseFactor=Math.max(0.05,1+(1000-combat)/4800);
  const stabFactor=1+(Math.random()*0.45)/Math.max(10,stab);
  const condFactor=1+(Math.random()*0.45)/Math.max(10,cond);
  let slopeFactor=1;
  if(up!=null&&dn!=null){
    slopeFactor=1+(up/totalKm)*0.00369*(1+(100-(uph||50))/500)-(dn/totalKm)*0.00122*(1+(100-(dnh||50))/1000);
  } else {
    slopeFactor={flat:1,hill:1.015,mountain:1.06,downhill:0.97}[slope]||1;
  }
  return Math.max(0.5,peakSpd*baseFactor*stabFactor*condFactor*slopeFactor*segKm);
}
function cSec(r,s,returnCkpts){const t=r.stats;let total=0,pos=0;const ckpts=[];while(pos<s.km){const seg=Math.min(3,s.km-pos);const inPack=Math.random()<(t.pack*0.008+0.2);const pk=inPack?t.pack:t.solo;const sf=s.t==="flat"||s.t==="hill"?t.road:s.t==="mountain"?t.uphill:t.downhill;const blow=Math.random()<(100-t.stability)*0.01?seg*(2+Math.random()*6):0;let segT=calcSeg(seg,s.km,t.speed,t.stamina,sf,pk,t.stability,Math.max(10,(r.condition||50)-(r.fatigue||0)/3),s.t,s.up,s.dn,t.uphill,t.downhill)+blow;if(!inPack)segT*=1.007;total+=segT;pos+=seg;ckpts.push({pos,time:segT,inPack});}return returnCkpts?{total:Math.max(1,Math.round(total)),ckpts}:Math.max(1,Math.round(total));}
function cTrk(d,r){
  const km=d/1000;const t=r.stats;
  const combat=8*((30-km)*t.speed+km*t.stamina)/30+t.track+t.pack;
  const peakSpd=(-0.00003*Math.pow(km,4)+0.0042*Math.pow(km,3)-0.182*Math.pow(km,2)+3.4519*km+142.78)*km;
  const baseFactor=Math.max(0.05,1+(1000-combat)/4800);
  const stabFactor=1+(Math.random()*0.45)/Math.max(10,t.stability);
  const condFactor=1+(Math.random()*0.45)/Math.max(10,r.condition);
  return Math.max(1,Math.round(peakSpd*baseFactor*stabFactor*condFactor));
}
function cHalf(r){return cSec(r,{km:21.1,t:"flat"});}
function eSecD(r,s){const t=r.stats;const combat=(30-s.km)*t.speed+s.km*t.stamina+5*t.road+5*t.pack;return(Math.log(s.km)*8.8671+143.93+(3700-combat)/120)*s.km;}
function fmt(s){if(s==null)return"--:--";const sec=Math.round(s);const h=~~(sec/3600),m=~~((sec%3600)/60),ss=sec%60;return h>0?h+":"+String(m).padStart(2,"0")+":"+String(ss).padStart(2,"0"):m+":"+String(ss).padStart(2,"0");}
/* Priority-based assignment: fill highest-priority sections first */
const IZUMO_PRI=[6,1,3,4,2,5];
const ZENNI_PRI=[7,8,2,3,5,1,6,4];
const HAK_PRI=[5,2,1,3,6,4,9,7,8,10];
function optAssign(runners,secs,eid){
  const foreigners=runners.filter(r=>r.foreign&&!r.injured);
  let allowedForeignId=null;
  if(foreigners.length>0){
    const top=[...foreigners].sort((a,b)=>(b.stats.speed+b.stats.stamina)-(a.stats.speed+a.stats.stamina))[0];
    allowedForeignId=top.id;
  }
  const avail=runners.filter(r=>!r.injured&&(!r.foreign||r.id===allowedForeignId)),used=new Set(),ag={};
  /* Hakone: pair-based assignment for optimal team result */
  if(eid==="hakone"&&secs.length===10){
    const pairs=[[2,5],[1,3],[6,9],[4,8],[7,10]];
    pairs.forEach(([a,b])=>{
      const sA=secs.find(s=>s.id===a),sB=secs.find(s=>s.id===b);
      if(!sA||!sB)return;
      let bestPair=null,bestSum=1e18;
      avail.forEach(r1=>{if(used.has(r1.id))return;
        avail.forEach(r2=>{if(used.has(r2.id)||r1.id===r2.id)return;
          const t=eSecD(r1,sA)+eSecD(r2,sB);
          if(t<bestSum){bestSum=t;bestPair=[r1,r2];}
        });
      });
      if(bestPair){used.add(bestPair[0].id);used.add(bestPair[1].id);ag[a]=bestPair[0];ag[b]=bestPair[1];}
    });
    return ag;
  }
  const pri=eid==="izumo"?IZUMO_PRI:eid==="zennihon"?ZENNI_PRI:null;
  const order=pri?pri.map(id=>secs.find(s=>s.id===id)).filter(Boolean):[...secs].sort((a,b)=>b.km-a.km);
  order.forEach(s=>{let best=null,bestT=1e9;avail.forEach(r=>{if(used.has(r.id))return;const t=eSecD(r,s);if(t<bestT){bestT=t;best=r;}});if(best){used.add(best.id);ag[s.id]=best;}});return ag;}
function simTeamEk(team,secs){const ag=optAssign(team.runners,secs,team.eid);let cum=0;return secs.map(s=>{const r=ag[s.id]||genR(50,3);const t=cSec(r,s);cum+=t;return{time:t,cum,runner:r.name};});}
/* Simulate all teams together with per-section gap penalty.
   Per 3km section: penalty/km = gapSec/stability, capped at 5s/km */
function simAllEk(entries,secs){
  const teams=entries.map(e=>({...e,ag:e._ag||optAssign(e.runners,secs,e.eid),st:[],ckpts:[]}));
  let totalDistSoFar=0;
  for(let si=0;si<secs.length;si++){
    const s=secs[si];
    const runners=teams.map(t=>{const r=t.ag[s.id]||genR(50,3);const res=cSec(r,s,true);return{team:t,runner:r,baseTime:res.total,ckpts:res.ckpts,state:"normal"};});
    runners.forEach(rd=>{rd.runCum=rd.team.st.length>0?rd.team.st[rd.team.st.length-1].cum:0;rd.sectionTime=0;rd.prevPos=0;rd.state="normal";rd.stateLog=[];});
    const nCk=runners[0].ckpts.length;
    for(let ci=0;ci<nCk;ci++){
      const leaderCum=Math.min(...runners.map(rd=>rd.runCum));
      runners.forEach(rd=>{
        /* State transition before this 3km zone */
        const med=Math.max(1,(rd.team.fac&&rd.team.fac.medical)||1);
        const cond=Math.max(10,(rd.runner.condition||50)-(rd.runner.fatigue||0)/3);
        const denom=cond*med;
        if(rd.state==="normal"){
          if(Math.random()<1/denom)rd.state="緊急事態";
          else if(Math.random()<4/denom)rd.state="不調";
        }else if(rd.state==="不調"){
          if(Math.random()<0.5)rd.state="normal";
          else if(Math.random()<0.1)rd.state="緊急事態";
        }else if(rd.state==="緊急事態"){
          if(Math.random()<0.05)rd.state="normal";
          else if(Math.random()<0.3)rd.state="不調";
        }
        const stateMul=rd.state==="緊急事態"?1.08:rd.state==="不調"?1.03:1;
        const gapSec=rd.runCum-leaderCum;
        const stab=Math.max(10,rd.runner.stats.stability);
        const penPerKm=Math.min(0.5,gapSec/(2*stab));
        const inPack=rd.ckpts[ci].inPack;
        const packBonus=inPack?1:0;
        const segLen=rd.ckpts[ci].pos-rd.prevPos;
        const segT=Math.max(0.5,(rd.ckpts[ci].time+(penPerKm-packBonus)*segLen)*stateMul);
        rd.runCum+=segT;rd.sectionTime+=segT;
        rd.team.ckpts.push({totalDist:totalDistSoFar+rd.ckpts[ci].pos,cum:rd.runCum,state:rd.state});
        rd.stateLog.push(rd.state);
        rd.prevPos=rd.ckpts[ci].pos;
      });
    }
    runners.forEach(rd=>{const finalTime=Math.max(1,Math.round(rd.sectionTime));rd.team.st.push({time:finalTime,cum:rd.runCum,runner:rd.runner.name,stateLog:rd.stateLog});});
    totalDistSoFar+=s.km;
  }
  return teams.map(t=>({name:t.name,isMe:t.isMe,st:t.st,ckpts:t.ckpts}));
}
/* fx values: 4=◎(0.04), 3=○(0.03), 1=△(0.01), 0=×(0) */
function fxValue(v){if(v===4)return 0.02+Math.random()/1000;if(v===3)return 0.01+Math.random()/1000;if(v===1)return 0.003+Math.random()/1000;return Math.random()/1000;}
function applyGrowth(r,fx,fac){const ns={...r.stats};
  if(Math.random()<0.001&&r.pot){SK.forEach(k=>{const gap=Math.max(0,r.pot[k]-ns[k]);ns[k]=Math.min(r.pot[k],ns[k]+gap*(0.2+Math.random()*0.2));});return ns;}
  const d=Math.abs(r.year-r.peak);const gm=d===0?2:d===1?1.3:1;
  SK.forEach(k=>{if(!r.pot)return;const gap=Math.max(0,r.pot[k]-ns[k]);if(gap<=0)return;
    const fxV=fxValue(fx[k]||0);
    const gb=fac?growB(fac,k):1;
    const eff=fxV*gm*gb;
    if(Math.random()>0.5)ns[k]=Math.min(r.pot[k],ns[k]+gap*eff);
  });return ns;}
function ekGrow(r,ekKey){
  const ns={...r.stats};
  const ekFactor=ekKey==="izumo"?1.0:ekKey==="zennihon"?1.2:ekKey==="hakone"?1.5:1.0;
  const peakDist=Math.abs((r.year||1)-(r.peak||3));
  const peakFactor=peakDist===0?1.5:peakDist===1?1.2:0.7;
  const pot=r.pot||r.stats;
  SK.forEach(k=>{
    const cap=Math.max(ns[k],pot[k]||ns[k]);
    const room=Math.max(0,cap-ns[k]);
    const expected=(room/50)*ekFactor*peakFactor*(r.foreign?1.2:1);
    const intPart=Math.floor(expected);
    const frac=expected-intPart;
    const actual=intPart+(Math.random()<frac?1:0);
    ns[k]=Math.min(cap,ns[k]+actual);
  });
  return ns;
}
function raceGrow(r){const ns={...r.stats};SK.forEach(k=>{if(Math.random()<0.3)ns[k]=Math.min(100,ns[k]+1);});return ns;}
function growRivals(rivs){const balFx=TRS[0].fx;return rivs.map(rv=>{return{...rv,runners:rv.runners.map(r=>{if(r.injured){const l=r.injTurns-1;return l<=0?{...r,injured:false,injTurns:0}:{...r,injTurns:l};}
  const ns=applyGrowth(r,balFx,rv.fac);
  return{...r,stats:ns,condition:Math.max(30,Math.min(100,r.condition+~~(Math.random()*7)-3))};
})};});}function graduateR(rivs){return rivs.map(rv=>{const kept=rv.runners.filter(r=>r.year<4).map(r=>({...r,year:r.year+1}));const nw=[];for(let i=kept.length;i<48;i++)nw.push(genR(rv.str,1));return{...rv,runners:[...kept,...nw]};});}
/* ═══ SCOUT SCORING: 3-year history ═══ */
function calcScoutPts(hist,repLv,gameYr,fac){let pts=(repLv||1)*5;
  const _minFloor=10;
  /* Facility bonuses: training×2, coaching×1, medical×2 */
  if(fac){const ts=fac.trainSkill;const avgT=ts?(Object.values(ts).reduce((s,v)=>s+v,0)/9):(fac.training||0);pts+=Math.round(avgT*2)+(fac.coaching||0)*1+(fac.medical||0)*2;}
  /* Separate initial points and earned points */
  const initEntries=(hist||[]).filter(h=>h.initPts);
  const earned=(hist||[]).filter(h=>!h.initPts);
  /* Initial points: Y1 (initial deploy) = full, Y2 = 2/3, Y3 = 1/3, Y4+ = 0 */
  const yr=gameYr||1;
  const initMult=yr<=1?1:yr===2?2/3:yr===3?1/3:0;
  initEntries.forEach(h=>{pts+=Math.round((h.initPts||0)*initMult);});
  /* Earned points: keep latest 3 years */
  earned.slice(-1).forEach(h=>{
    pts+=(h.sub28||0);
    pts+=(h.sub27||0)*2;
    pts+=(h.sub5k1330||0)*1;
    pts+=(h.subHalf163||0)*1;
    pts+=(h.hakQBonus||0);
    if(h.hakone!=null){const r=h.hakone;pts+=r===1?30:r===2?22:r<=3?20:r<=4?15:r<=5?10:r<=10?6:3;pts+=(h.hakoneSecWins||0)*3;}
    if(h.zennihon!=null){const r=h.zennihon;pts+=r===1?10:r===2?7:r<=3?6:r<=4?5:r<=5?4:2;pts+=(h.zennihonSecWins||0)*2;}
    if(h.izumo!=null){const r=h.izumo;pts+=r===1?10:r===2?7:r<=3?6:r<=4?5:r<=5?4:2;pts+=(h.izumoSecWins||0)*2;}
  });
  return Math.max(1,pts);
}
function autoDraft(rivals,myRunners,mySRes,myHist,rivalHists,myFac,gameYr){
  const pool=[];for(let i=0;i<480;i++)pool.push(genFresh());pool.sort((a,b)=>(b.stats.speed+b.stats.stamina+b.stats.stability)-(a.stats.speed+a.stats.stamina+a.stats.stability));
  const teams=[...rivals.map((rv,i)=>({name:rv.name,score:calcScoutPts(rivalHists[rv.name],rv.fac.reputation,gameYr,rv.fac),picks:[]})),{name:"__ME__",score:calcScoutPts(myHist,myFac?myFac.reputation:1,gameYr,myFac),picks:[],isMe:true}];
  /* Sort teams by score for tier filtering */
  const sortedByScore=[...teams].sort((a,b)=>b.score-a.score);
  const top7Names=new Set(sortedByScore.slice(0,7).map(t=>t.name));
  const top13Names=new Set(sortedByScore.slice(0,13).map(t=>t.name));
  const top20Names=new Set(sortedByScore.slice(0,20).map(t=>t.name));
  for(let pick=0;pick<480;pick++){
    /* Determine eligible teams based on student tier */
    let elTeams;
    if(pick<5)elTeams=teams.filter(t=>top7Names.has(t.name)&&t.picks.length<12);
    else if(pick<20)elTeams=teams.filter(t=>top13Names.has(t.name)&&t.picks.length<12);
    else if(pick<60)elTeams=teams.filter(t=>top20Names.has(t.name)&&t.picks.length<12);
    else elTeams=teams.filter(t=>t.picks.length<12);
    if(!elTeams.length){elTeams=teams.filter(t=>t.picks.length<12);if(!elTeams.length)break;}
    /* Apply Waseda bonus: +200 score until they have 4 picks */
    const wScores=elTeams.map(t=>{let s=t.score;if(t.name==="早稲田大学"&&t.picks.length<4)s+=200;return{t,s};});
    const tot=wScores.reduce((acc,x)=>acc+x.s,0);
    let r=Math.random()*tot,ch=wScores[0].t;
    for(const x of wScores){r-=x.s;if(r<=0){ch=x.t;break;}}
    ch.picks.push(pick);
  }
  return{pool,teams};
}
function calcPrestige(sRes,sub28,secWins,sub27,sub5k1330,subHalf163){let p=10;
  const _minFloor=10;
  /* Same formula as scout points */
  p+=sub28||0;
  p+=(sub27||0)*2;
  p+=(sub5k1330||0)*1;
  p+=(subHalf163||0)*1;
  if(sRes.hakone!=null){const r=sRes.hakone;p+=r===1?30:r===2?22:r<=3?20:r<=4?15:r<=5?10:r<=10?6:3;p+=(secWins?.hakone||0)*3;}
  if(sRes.zennihon!=null){const r=sRes.zennihon;p+=r===1?10:r===2?7:r<=3?6:r<=4?5:r<=5?4:2;p+=(secWins?.zennihon||0)*2;}
  if(sRes.izumo!=null){const r=sRes.izumo;p+=r===1?10:r===2?7:r<=3?6:r<=4?5:r<=5?4:2;p+=(secWins?.izumo||0)*2;}
  return Math.max(_minFloor,p);
}
function buildGK(rivals,qNames,secs){const pool=[];rivals.forEach(rv=>{if(qNames.includes(rv.name))return;rv.runners.filter(r=>!r.injured).forEach(r=>pool.push({...r}));});pool.sort((a,b)=>SK.reduce((s,k)=>s+b.stats[k],0)-SK.reduce((s,k)=>s+a.stats[k],0));const top=pool.slice(0,secs.length);const used=new Set(),ag={};[...secs].sort((a,b)=>b.km-a.km).forEach(s=>{let best=null,bestT=1e9;top.forEach(r=>{if(used.has(r.id))return;const t=eSecD(r,s);if(t<bestT){bestT=t;best=r;}});if(best){used.add(best.id);ag[s.id]=best;}});let cum=0;return secs.map(s=>{const r=ag[s.id]||genR(60,3);const t=cSec(r,s);cum+=t;return{time:t,cum,runner:r.name};});}
function addBR(prev,ty,entries){return{...prev,[ty]:[...prev[ty],...entries]};}
function adjRep(fac,sRes){let r=fac.reputation;const ranks=[sRes.izumo,sRes.zennihon,sRes.hakone].filter(v=>v!=null&&typeof v==="number");const best=ranks.length?Math.min(...ranks):99;if(best<=3)r=Math.min(10,r+1);else if(best>15||!ranks.length)r=Math.max(1,r-1);return{...fac,reputation:r};}
const SCHOOL_COLORS={"緑原学院大学":"#006633","藤駒大学":"#7B2D8B","徳岳院大学":"#8B2252","多摩法科大学":"#CC0000","翔才大学":"#DAA520","高田大学":"#8B0000","八王子公明大学":"#0066CC","駿仙堂大学":"#5B3C8F","豊洋大学":"#1C2841","孝海大学":"#0055AA","東成大学":"#FF6600","栄東大学":"#D32F2F","禎義大学":"#2D1A4E","大和体育大学":"#1A5CA8","関東国際大学":"#2E5FA1","新座大学":"#6A3D9A","東京文化大学":"#4B7A2E","相模大学":"#0046AD","瑞穂大学":"#C62828","伯旭大学":"#DD6B20","甲州学院大学":"#2C6FAC","健忠大学":"#2E7D32","篤志館大学":"#1A1A1A","修陽学院大学":"#9C27B0","伊勢崎大学":"#222222","関東農業大学":"#2E7D32","茨城科学大学":"#5BC0EB","福澤大学":"#DAA520","清水台大学":"#1976D2","清博大学":"#388E3C","遊羅師安大学":"#43A047","横浜学院大学":"#2E7D32","令和外国語大学":"#9E9E9E","富士野学院大学":"#7B1FA2","桃美森大学":"#E8A0BF","流通商業大学":"#E65100","豊洲工業大学":"#5C6BC0","禎義学院大学":"#FFB74D","武蔵薬科大学":"#7CB342"};
function findRunner(name,rs,rivals){let r=rs.find(x=>x.name===name);if(r)return r;for(const rv of rivals){const f=rv.runners.find(x=>x.name===name);if(f)return{...f,univName:rv.name};}return null;}

const CSS=`@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@600;800&family=M+PLUS+1p:wght@400;500;700;800;900&display=swap');:root{--bg:#f5f5f0;--card:#fff;--cs:#e8f0fe;--ac:#c0392b;--ac2:#e74c3c;--gold:#d4a017;--silver:#7f8c8d;--t:#1a1a1a;--t2:#5a6270;--t3:#bdc3c7;--grn:#27ae60;--red:#c0392b;--bdr:#e0e0d8;}*{box-sizing:border-box;margin:0;padding:0;}body{background:var(--bg);color:var(--t);font-family:'M PLUS 1p',sans-serif;font-size:14px;}::-webkit-scrollbar{width:10px;height:10px;}::-webkit-scrollbar-thumb{background:#aaa;border-radius:5px;}::-webkit-scrollbar-track{background:#eee;}@keyframes fi{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.fi{animation:fi .3s ease both}button{font-family:'M PLUS 1p',sans-serif;cursor:pointer;border:none;outline:none;transition:all .12s;font-size:13px;}button:active{transform:scale(0.97);}.sf{font-family:'Shippori Mincho B1',serif;}table{width:100%;border-collapse:collapse;font-size:12px;}th,td{padding:4px 6px;white-space:nowrap;}th{text-align:left;color:var(--t2);font-weight:600;border-bottom:2px solid var(--bdr);}`;
const CB=({v})=>(<span style={{fontSize:12,fontWeight:700,color:v>=85?"var(--grn)":v>=65?"var(--gold)":v>=45?"var(--t2)":"var(--red)"}}>{v>=85?"絶好調":v>=65?"好調":v>=45?"普通":"不調"}</span>);
function rmStat(r,k){if(!r.pot)return"小";const g=Math.max(0,r.pot[k]-r.stats[k]);return g>=30?"特大":g>=20?"大":g>=10?"中":"小";}
function rmCol(rm){return"#000";}
function cRoom(r){if(!r.pot)return"小";const counts={特大:0,大:0,中:0,小:0};SK.forEach(k=>{counts[rmStat(r,k)]++;});return counts.特大>=3?"特大":counts.特大+counts.大>=4?"大":counts.特大+counts.大+counts.中>=5?"中":"小";}
const GBdg=({r})=>{if(!r.pot)return null;const summary=SK.map(k=>rmStat(r,k));const counts={特大:0,大:0,中:0,小:0};summary.forEach(s=>counts[s]++);return(<span style={{fontSize:10,color:"var(--t2)",fontWeight:600}}>伸{counts.特大>0?<span style={{color:rmCol("特大")}}>特{counts.特大}</span>:""}{counts.大>0?<span style={{color:rmCol("大")}}>大{counts.大}</span>:""}{counts.中>0?<span style={{color:rmCol("中")}}>中{counts.中}</span>:""}{counts.小>0?<span style={{color:rmCol("小")}}>小{counts.小}</span>:""}</span>);};
const GCell=({v})=>(<span style={{fontWeight:800,fontSize:12,color:GC(GR(v))}}>{GR(v)}</span>);
const MR=({r,sel,asgn,onClick,showG,showTrn,onTrn,fac,ar,arT,children,onFav})=>(<div onClick={onClick} style={{padding:"10px 14px",borderRadius:10,background:sel?"var(--cs)":"var(--card)",border:sel?"2px solid var(--ac)":"1px solid var(--bdr)",cursor:(asgn&&!sel)?"not-allowed":"pointer",opacity:(asgn&&!sel)?0.35:(r.injured?0.35:1),marginBottom:6,boxShadow:"0 1px 3px rgba(0,0,0,0.06)",position:"relative"}}><div style={{position:"absolute",top:8,right:10,display:"flex",alignItems:"center",gap:7,zIndex:2}}>{r.injured&&<span style={{fontSize:11,color:"var(--red)",fontWeight:800}}>故障{r.injTurns}w</span>}{r.protege&&<span style={{fontSize:12,color:"var(--gold)",fontWeight:800}}>⭐秘</span>}<span style={{fontSize:12,color:"var(--t2)"}}>{r.year}年</span>{onFav&&<button onClick={e=>{e.stopPropagation();onFav(r.id);}} style={{background:"transparent",border:"none",fontSize:18,cursor:"pointer",padding:0,lineHeight:1,color:r.fav?"#FFC107":"#ccc"}}>{r.fav?"★":"☆"}</button>}</div>
  <div style={{display:"flex"}}><span style={{fontWeight:800,fontSize:16}} className="sf">{r.name}</span></div>
  <div style={{display:"flex",gap:6,alignItems:"center",marginTop:4,flexWrap:"wrap"}}><CB v={r.condition}/><span style={{fontSize:11,color:"var(--t2)"}}>疲{r.fatigue}</span>{r.peak&&<span style={{fontSize:10,color:r.year===r.peak?"var(--ac)":Math.abs(r.year-r.peak)<=1?"var(--gold)":"var(--t3)",fontWeight:r.year===r.peak?800:400}}>{r.year===r.peak?"🔥成長期":Math.abs(r.year-r.peak)<=1?"↑成長期近":"通常"}</span>}{fac&&!r.injured&&r.trn!=="rest"&&<span style={{fontSize:10,color:injPct(r,fac)>3?"var(--red)":"var(--t3)"}}>怪我{injPct(r,fac)}%</span>}{ar&&!r.injured&&r.trn!=="rest"&&r.fatigue>=arT&&<span style={{fontSize:10,color:"var(--grn)",fontWeight:700}}>→自動休養</span>}</div>
  <div style={{display:"flex",gap:8,marginTop:6,fontSize:12}}><span style={{color:r.pb5k?"var(--ac)":"var(--t3)"}}>5k <b style={{fontFamily:"monospace"}}>{r.pb5k?fmt(r.pb5k):"---"}</b></span><span style={{color:r.pb10k?"var(--ac)":"var(--t3)"}}>10k <b style={{fontFamily:"monospace"}}>{r.pb10k?fmt(r.pb10k):"---"}</b></span><span style={{color:r.pbHalf?"var(--ac)":"var(--t3)"}}>H <b style={{fontFamily:"monospace"}}>{r.pbHalf?fmt(r.pbHalf):"---"}</b></span></div>
  <div style={{display:"flex",gap:4,marginTop:6}}>{SK.map(k=>(<div key={k} style={{textAlign:"center",flex:1}}><div style={{fontSize:8.5,color:"var(--t2)",whiteSpace:"nowrap",letterSpacing:-0.5}}>{SL2[k]}</div><GCell v={r.stats[k]}/>{r.pot&&showG&&<div style={{fontSize:8,color:rmCol(rmStat(r,k)),fontWeight:700,marginTop:1}}>{rmStat(r,k)}</div>}</div>))}</div>{r.pot&&showG&&<div style={{fontSize:9,color:"var(--t3)",marginTop:2,textAlign:"right"}}>↑各能力の下は「伸びしろ」(特大→小)</div>}
  {showTrn&&!r.injured&&<div style={{marginTop:6}}><div style={{fontSize:10,color:"var(--ac)",fontWeight:700,marginBottom:3}}>📋 練習メニュー（タップで選択、練習実行で適用）</div><div style={{display:"flex",gap:3,flexWrap:"wrap"}}>{TRS.map(tr=>{const fxStr=Object.entries(tr.fx).filter(([,v])=>v>=3).map(([k,v])=>SL[k]+(v>=4?"◎":"○")).join("");return(<button key={tr.id} onClick={e=>{e.stopPropagation();onTrn(r.id,tr.id);}} style={{padding:"3px 8px",borderRadius:5,fontSize:11,fontWeight:r.trn===tr.id?800:400,background:r.trn===tr.id?"var(--ac)":"var(--card)",color:r.trn===tr.id?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}} title={fxStr}>{tr.n}<span style={{fontSize:8,opacity:0.7,marginLeft:2}}>{fxStr}</span></button>);})}<button onClick={e=>{e.stopPropagation();onTrn(r.id,"rest");}} style={{padding:"3px 8px",borderRadius:5,fontSize:11,fontWeight:r.trn==="rest"?800:400,background:r.trn==="rest"?"var(--grn)":"var(--card)",color:r.trn==="rest"?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}}>休養</button></div></div>}
  {children}
</div>);
function sortR(a,m){const s=a.map((r,i)=>({r,i}));const by=(f)=>{s.sort((x,y)=>{const d=f(x.r)-f(y.r);return d!==0?d:x.i-y.i;});return s.map(o=>o.r);};
  if(m==="5k")return by(r=>r.pb5k||99999);if(m==="10k")return by(r=>r.pb10k||99999);if(m==="half")return by(r=>r.pbHalf||99999);
  if(m==="spRank")return by(r=>-((r.stats&&r.stats.speed)||0));
  if(m==="stRank")return by(r=>-((r.stats&&r.stats.stamina)||0));
  return by(r=>r.year*100000+r.id);}
const SortB=({sm,setSm,yf,setYf,favOnly,setFavOnly})=>{const yfArr=Array.isArray(yf)?yf:[];const toggleY=(y)=>{setYf(p=>{const arr=Array.isArray(p)?p:[];return arr.includes(y)?arr.filter(x=>x!==y):[...arr,y];});};return(<div style={{marginBottom:8}}><div style={{display:"flex",gap:4,flexWrap:"wrap",alignItems:"center",marginBottom:4}}><span style={{fontSize:11,color:"var(--ac)",fontWeight:700,marginRight:2}}>並び替え:</span>{[{id:"year",l:"学年"},{id:"5k",l:"5k"},{id:"10k",l:"10k"},{id:"half",l:"H"},{id:"spRank",l:"速ﾗﾝｸ"},{id:"stRank",l:"持ﾗﾝｸ"}].map(o=>(<button key={o.id} onClick={()=>setSm(o.id)} style={{padding:"4px 10px",borderRadius:6,background:sm===o.id?"var(--ac)":"var(--card)",color:sm===o.id?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}}>{o.l}</button>))}</div><div style={{display:"flex",gap:4,flexWrap:"wrap",alignItems:"center"}}><span style={{fontSize:11,color:"var(--ac)",fontWeight:700,marginRight:2}}>絞り込み:</span><button onClick={()=>setYf([])} style={{padding:"4px 8px",borderRadius:6,background:yfArr.length===0?"var(--ac)":"var(--card)",color:yfArr.length===0?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}}>全学年</button>{[1,2,3,4].map(y=>(<button key={y} onClick={()=>toggleY(y)} style={{padding:"4px 8px",borderRadius:6,background:yfArr.includes(y)?"var(--ac)":"var(--card)",color:yfArr.includes(y)?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}}>{y}年</button>))}{setFavOnly&&<button onClick={()=>setFavOnly(!favOnly)} style={{padding:"4px 10px",borderRadius:6,background:favOnly?"var(--gold)":"var(--card)",color:favOnly?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}}>★{favOnly?"のみ":"含む"}</button>}</div></div>);};

export default function Game(){
  const[ph,setPh]=useState("title"),[tn,setTn]=useState("箱根"),[tc,setTc]=useState("#0055AA"),[gameYear,setGameYear]=useState(1),[turn,setTurn]=useState(1),[rs,setRs]=useState([]),[rivals,setRivals]=useState([]),[log,setLog]=useState([]),[asgn,setAsgn]=useState({}),[selR,setSelR]=useState(null),[curEk,setCurEk]=useState(null),[raceRes,setRaceRes]=useState(null),[raceIdx,setRaceIdx]=useState(0),[recEv,setRecEv]=useState(null),[recAsgn,setRecAsgn]=useState({}),[recRes,setRecRes]=useState(null),[qualRes,setQualRes]=useState(null),[qualSel,setQualSel]=useState([]),[hakQ,setHakQ]=useState(false),[zenQ,setZenQ]=useState(false),[zenQTeams,setZenQTeams]=useState([]),[hakQTeams,setHakQTeams]=useState([]),[sRes,setSRes]=useState({izumo:null,zennihon:null,hakone:null}),[prevHakone,setPrevHakone]=useState(null),[prevZennihon,setPrevZennihon]=useState(null),[prevHakoneRanks,setPrevHakoneRanks]=useState({}),[prevZennihonRanks,setPrevZennihonRanks]=useState({}),[showR,setShowR]=useState(false),[viewRiv,setViewRiv]=useState(-1),[yf,setYf]=useState([]),[sm,setSm]=useState("year"),[recs,setRecs]=useState({t5:[],t10:[],half:[],ek:[]}),[recTab,setRecTab]=useState("t10"),[fac,setFac]=useState({trainSkill:{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:1,pack:1,track:1,road:1},medical:1,coaching:1,reputation:1}),[prestige,setPrestige]=useState(10),[draftResult,setDraftResult]=useState(null),[yearHistory,setYearHistory]=useState([]),[scoutHist,setScoutHist]=useState({}),[viewProfile,setViewProfile]=useState(null),[profileFrom,setProfileFrom]=useState("main"),[autoRest,setAutoRest]=useState(true),[autoRestThreshold,setAutoRestThreshold]=useState(60),[forceRest,setForceRest]=useState(false),[recFG,setRecFG]=useState(0),[recFU,setRecFU]=useState(""),[recDedup,setRecDedup]=useState(false),[recFSec,setRecFSec]=useState(""),[recCurrent,setRecCurrent]=useState(false),[recFEk,setRecFEk]=useState(""),[recJpOnly,setRecJpOnly]=useState(false),[hiddenTeams,setHiddenTeams]=useState({}),[favOnly,setFavOnly]=useState(false),[hallOfFame,setHallOfFame]=useState({izumo:[],zennihon:[],hakone:[],hakoneOut:[],hakoneIn:[]}),[teamRecords,setTeamRecords]=useState({}),[sectionRecords,setSectionRecords]=useState({}),[foreignAllowed,setForeignAllowed]=useState(()=>{const m={};FOREIGN_UNIVS.forEach(n=>m[n]=true);return m;}),[univAlias,setUnivAlias]=useState({}),[ekAlias,setEkAlias]=useState({izumo:"島根駅伝",zennihon:"熱田伊勢駅伝",hakone:"正月駅伝"}),[teamCtrl,setTeamCtrl]=useState(""),[playerHOF,setPlayerHOF]=useState([]),[proteges,setProteges]=useState([]),[protegeSlots,setProtegeSlots]=useState(1),[protegeConfirm,setProtegeConfirm]=useState(null),[slotUnlockConfirm,setSlotUnlockConfirm]=useState(null),[consecutiveTripleCrowns,setConsecutiveTripleCrowns]=useState(0),[newGameConfirm,setNewGameConfirm]=useState(false),[teamTitles,setTeamTitles]=useState({}),[consecutiveIzumo,setConsecutiveIzumo]=useState(0),[consecutiveZennihon,setConsecutiveZennihon]=useState(0),[consecutiveHakone,setConsecutiveHakone]=useState(0),[careerHOF,setCareerHOF]=useState([]),[titleNotif,setTitleNotif]=useState([]),[ekStatsTotals,setEkStatsTotals]=useState({izumo:{app:0,win:0},zennihon:{app:0,win:0},hakone:{app:0,win:0}}),[cumScoutPts,setCumScoutPts]=useState(0);
  const teamName=teamCtrl||(tn+"大学");
  const asgnSet=useMemo(()=>new Set(Object.values(asgn)),[asgn]);
  const filt=useMemo(()=>{let f=(!yf||yf.length===0)?rs:rs.filter(r=>yf.includes(r.year));if(favOnly&&rs.some(r=>r.fav))f=f.filter(r=>r.fav);return sortR(f,sm);},[rs,yf,sm,favOnly]);
  const setTrnR=useCallback((rid,tid)=>{setRs(p=>p.map(r=>r.id===rid?{...r,trn:tid}:r));},[]);
  const toggleFav=useCallback(id=>setRs(p=>p.map(r=>r.id===id?{...r,fav:!r.fav}:r)),[]);
  const setAllTrn=useCallback(tid=>{setRs(p=>p.map(r=>(r.injured||r.trn==="rest")?r:{...r,trn:tid}));},[]);
  /* AUTO SAVE */
  const saveQueueRef=useRef(null),savingRef=useRef(false);
  const doSave=useCallback((state)=>{
    /* Serialize async saves so out-of-order completion can't overwrite newer data with older */
    saveQueueRef.current=state;
    if(savingRef.current)return;
    savingRef.current=true;
    (async()=>{
      try{
        while(saveQueueRef.current){
          const data=saveQueueRef.current;saveQueueRef.current=null;
          try{localStorage.setItem("hakone-save",JSON.stringify(data));}catch(e){}
        }
      }finally{savingRef.current=false;}
    })();
  },[]);
  const exportData=useCallback(()=>{try{const raw=localStorage.getItem("hakone-save");if(!raw){alert("セーブデータがありません");return;}const blob=new Blob([raw],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="hakone-save-"+new Date().toISOString().slice(0,10)+".json";a.click();URL.revokeObjectURL(url);}catch(e){alert("エクスポート失敗");}},[]);
  const importData=useCallback((file)=>{const reader=new FileReader();reader.onload=e=>{try{const text=e.target.result;JSON.parse(text);localStorage.setItem("hakone-save",text);alert("インポート成功!「ロード」を押してください");}catch(err){alert("不正なファイルです");}};reader.readAsText(file);},[]);

  const startNew=useCallback(()=>{_id=0;
    /* ===== Career Hall of Fame: permanently save record if previous game reached 30+ years ===== */
    if(gameYear>=30&&rs.length>0){
      const oldTeam=teamCtrl||(tn+"大学");
      const bestOf=(arr)=>{const mine=(arr||[]).filter(x=>x.univ===oldTeam&&x.time);return mine.length>0?Math.min(...mine.map(x=>x.time)):null;};
      const playerTitleCounts={};
      (playerHOF||[]).forEach(p=>{(p.criteria||[]).forEach(b=>{playerTitleCounts[b]=(playerTitleCounts[b]||0)+1;});});
      const career={
        univ:oldTeam,alias:univAlias[oldTeam]||oldTeam,years:gameYear,
        ekStats:ekStatsTotals,
        bestTimes:{t5:bestOf(recs.t5),t10:bestOf(recs.t10),half:bestOf(recs.half)},
        ekBest:{izumo:(teamRecords[oldTeam+":izumo"]||{}).time||null,zennihon:(teamRecords[oldTeam+":zennihon"]||{}).time||null,hakone:(teamRecords[oldTeam+":hakone"]||{}).time||null},
        cumScout:cumScoutPts,
        playerTitleCount:(playerHOF||[]).length,
        playerTitleTypes:playerTitleCounts,
        teamTitles:teamTitles,
        ekAliasSnapshot:{...ekAlias},
        savedAt:new Date().toISOString().slice(0,10)
      };
      const newCareerHOF=[career,...(careerHOF||[])].slice(0,50);
      setCareerHOF(newCareerHOF);
      try{localStorage.setItem("hakone-career",JSON.stringify(newCareerHOF));}catch(e){}
    }
    /* Reset career-tracking states for the new game */
    setTeamTitles({});setConsecutiveIzumo(0);setConsecutiveZennihon(0);setConsecutiveHakone(0);
    setEkStatsTotals({izumo:{app:0,win:0},zennihon:{app:0,win:0},hakone:{app:0,win:0}});setCumScoutPts(0);
    const myName=teamCtrl||(tn+"大学");
    setForeignAllowed(p=>({...p,[myName]:p[myName]!==false}));
    const allT=genAllTeams(UNIV,64);
    const myTeam=allT.find(t=>t.isMe);
    /* teamCtrl: if user chose to control an existing univ, take that univ's data */
    if(teamCtrl){
      const ctrlUniv=UNIV.find(u=>u[0]===teamCtrl);
      if(ctrlUniv){
        const ctrlTeam=allT.find(a=>a.name===teamCtrl);
        setRs(ctrlTeam?ctrlTeam.runners:genT48(ctrlUniv[1],teamCtrl,foreignAllowed));
        setFac({trainSkill:{...ctrlUniv[3]},medical:ctrlUniv[4],coaching:ctrlUniv[5],reputation:ctrlUniv[6]});
        setRivals(UNIV.filter(u=>u[0]!==teamCtrl).map(([n,s,,t,m,c,rp],idx)=>{const team=allT.find(a=>a.name===n);const seed={};if(idx<10)seed.hakone=idx+1;if(idx<8)seed.zennihon=idx+1;if(idx<10)seed.izumo=idx+1;return{name:n,str:s,fac:{trainSkill:{...t},medical:m,coaching:c,reputation:rp},runners:team?team.runners:genT48(s,n,foreignAllowed),yearRes:seed};}));
        const initHist={};UNIV.forEach(u=>{initHist[u[0]]=[{initPts:u[2]}];});initHist["__ME__"]=[{initPts:ctrlUniv[2]}];
        setScoutHist(initHist);setGameYear(1);setTurn(1);setLog([]);setAsgn({});setSelR(null);setCurEk(null);setRaceRes(null);setRecEv(null);setRecRes(null);setQualRes(null);setQualSel([]);setHakQ(false);setZenQ(false);setZenQTeams([]);setHakQTeams([]);setSRes({izumo:null,zennihon:null,hakone:null});setPrevHakone(null);setPrevZennihon(null);setPrevHakoneRanks({});setPrevZennihonRanks({});setViewRiv(-1);setRecs({t5:[],t10:[],half:[],ek:[]});const ctrlIdx=UNIV.findIndex(u=>u[0]===teamCtrl);
        if(ctrlIdx<10){setPrevHakone(ctrlIdx+1);setPrevZennihon(ctrlIdx<8?ctrlIdx+1:null);}
        setPrestige(30);setYearHistory([]);setDraftResult(null);setForceRest(false);setPh("main");return;
      }
    }
    setRs(myTeam?myTeam.runners:[]);
    setRivals(UNIV.map(([n,s,,t,m,c,rp],idx)=>{const team=allT.find(a=>a.name===n);const seed={};if(idx<10)seed.hakone=idx+1;if(idx<8)seed.zennihon=idx+1;if(idx<10)seed.izumo=idx+1;return{name:n,str:s,fac:{trainSkill:{...t},medical:m,coaching:c,reputation:rp},runners:team?team.runners:genT48(s,n,foreignAllowed),yearRes:seed};}));
    /* Initialize scout history with base points */
    const initHist={};UNIV.forEach(u=>{initHist[u[0]]=[{initPts:u[2]}];});initHist["__ME__"]=[{initPts:10}];
    setScoutHist(initHist);setGameYear(1);setTurn(1);setLog([]);setAsgn({});setSelR(null);setCurEk(null);setRaceRes(null);setRecEv(null);setRecRes(null);setQualRes(null);setQualSel([]);setHakQ(false);setZenQ(false);setZenQTeams([]);setHakQTeams([]);setSRes({izumo:null,zennihon:null,hakone:null});setPrevHakone(null);setPrevZennihon(null);setPrevHakoneRanks({});setPrevZennihonRanks({});setViewRiv(-1);setRecs({t5:[],t10:[],half:[],ek:[]});setFac({trainSkill:{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:1,pack:1,track:1,road:1},medical:1,coaching:1,reputation:1});setPrestige(30);setYearHistory([]);setDraftResult(null);setForceRest(false);setPh("main");
    if(teamCtrl)setFac({trainSkill:{speed:1,stamina:1,stability:1,uphill:1,downhill:1,solo:1,pack:1,track:1,road:1},medical:1,coaching:1,reputation:1});},[teamCtrl,foreignAllowed,tn,gameYear,rs,playerHOF,recs,teamRecords,ekStatsTotals,cumScoutPts,teamTitles,univAlias,ekAlias,careerHOF]);
  const loadGame=useCallback(()=>{try{const raw=localStorage.getItem("hakone-save");if(!raw)return alert("セーブデータなし");const d=JSON.parse(raw);/* Backward compat: convert old fac.training number to trainSkill object */
    if(d.fac&&typeof d.fac.training==="number"&&!d.fac.trainSkill){const lv=d.fac.training;d.fac={...d.fac,trainSkill:{speed:lv,stamina:lv,stability:lv,uphill:lv,downhill:lv,solo:lv,pack:lv,track:lv,road:lv}};}
    if(d.rivals)d.rivals.forEach(rv=>{if(rv.fac&&typeof rv.fac.training==="number"&&!rv.fac.trainSkill){const lv=rv.fac.training;rv.fac={...rv.fac,trainSkill:{speed:lv,stamina:lv,stability:lv,uphill:lv,downhill:lv,solo:lv,pack:lv,track:lv,road:lv}};}});
    Object.entries(d).forEach(([k,v])=>{const setters={tn:setTn,tc:setTc,gameYear:setGameYear,turn:setTurn,rs:setRs,rivals:setRivals,log:setLog,fac:setFac,prestige:setPrestige,hakQ:setHakQ,zenQ:setZenQ,zenQTeams:setZenQTeams,hakQTeams:setHakQTeams,sRes:setSRes,prevHakone:setPrevHakone,prevZennihon:setPrevZennihon,prevHakoneRanks:setPrevHakoneRanks,prevZennihonRanks:setPrevZennihonRanks,recs:setRecs,yearHistory:setYearHistory,scoutHist:setScoutHist,autoRest:setAutoRest,autoRestThreshold:setAutoRestThreshold,hallOfFame:setHallOfFame,teamRecords:setTeamRecords,foreignAllowed:setForeignAllowed,univAlias:setUnivAlias,ekAlias:setEkAlias,draftResult:setDraftResult,teamCtrl:setTeamCtrl,sectionRecords:setSectionRecords,playerHOF:setPlayerHOF,proteges:setProteges,protegeSlots:setProtegeSlots,consecutiveTripleCrowns:setConsecutiveTripleCrowns,teamTitles:setTeamTitles,consecutiveIzumo:setConsecutiveIzumo,consecutiveZennihon:setConsecutiveZennihon,consecutiveHakone:setConsecutiveHakone,ekStatsTotals:setEkStatsTotals,cumScoutPts:setCumScoutPts};if(setters[k])setters[k](v);});
    /* Resume active ekiden if saved mid-event — covers 区間配置(ek_asgn) / 観戦(ek_watch) / レース中(ek_race) */
    if(d._curEk&&EKS[d._curEk]&&(d._ph==="ek_asgn"||d._ph==="ek_watch"||d._ph==="ek_race")){
      setCurEk(d._curEk);setAsgn(d._asgn||{});
      if(d._ph==="ek_race"&&d._raceRes&&Array.isArray(d._raceRes.allT)&&d._raceRes.allT.length>0){
        setRaceRes(d._raceRes);setRaceIdx(d._raceIdx||0);setPh("ek_race");
      }else{
        /* race not yet started (or race data missing) → resume at assignment/watch screen */
        setPh(d._ph==="ek_watch"?"ek_watch":"ek_asgn");
      }
    }
    /* Resume record-meet / qualifier / half selection screens (skip-prevention on app close) */
    else if(d._ph==="rec_sel"&&d._recEv){setRecEv(d._recEv);setRecAsgn(d._recAsgn||{});setRecRes(null);setSelR(null);setPh("rec_sel");}
    else if(d._ph==="zen_q"){setQualSel(d._qualSel||[]);setPh("zen_q");}
    else if(d._ph==="hak_sel"){setQualSel(d._qualSel||[]);setSelR(null);setPh("hak_sel");}
    else if(d._ph==="half_sel"){setQualSel(d._qualSel||[]);setSelR(null);setPh("half_sel");}
    else{setPh("main");}
    }catch(e){console.error("[loadGame]",e);alert("ロード失敗");}}, []);

  const startNextYear=useCallback(()=>{
    const wasTriple=sRes.izumo===1&&sRes.zennihon===1&&sRes.hakone===1;
    if(!wasTriple)setConsecutiveTripleCrowns(0);
    /* ===== Team title evaluation (this year's results) ===== */
    const wonIzumo=sRes.izumo===1,wonZen=sRes.zennihon===1,wonHak=sRes.hakone===1;
    const newConsecIzumo=wonIzumo?consecutiveIzumo+1:0;
    const newConsecZen=wonZen?consecutiveZennihon+1:0;
    const newConsecHak=wonHak?consecutiveHakone+1:0;
    const newConsecTriple=wasTriple?consecutiveTripleCrowns+1:0;
    setConsecutiveIzumo(newConsecIzumo);setConsecutiveZennihon(newConsecZen);setConsecutiveHakone(newConsecHak);
    /* Count 27-min 10000m runners (pb10k < 28:00 = 1680s) currently on roster */
    const speedsterCount=rs.filter(r=>r.pb10k&&r.pb10k<1680).length;
    const earnedThisYear=[];
    const awardTitle=(key)=>{earnedThisYear.push(key);};
    if(wonIzumo)awardTitle("izumo_win");
    if(wonZen)awardTitle("zennihon_win");
    if(wonHak)awardTitle("hakone_win");
    if(wasTriple)awardTitle("triple");
    if(speedsterCount>=6)awardTitle("speedsters");
    if(newConsecHak>=5)awardTitle("eternal_hakone");
    if(newConsecIzumo>=5)awardTitle("eternal_izumo");
    if(newConsecZen>=5)awardTitle("eternal_zennihon");
    if(newConsecTriple>=5)awardTitle("absolute");
    if(earnedThisYear.length>0){
      setTeamTitles(prev=>{const n={...prev};earnedThisYear.forEach(k=>{if(!n[k])n[k]={count:0,years:[]};n[k]={count:n[k].count+1,years:[...n[k].years,gameYear]};});return n;});
      setTitleNotif(earnedThisYear);
    }
    /* Track ekiden appearance/win totals for career record */
    setEkStatsTotals(prev=>({
      izumo:{app:prev.izumo.app+(sRes.izumo?1:0),win:prev.izumo.win+(wonIzumo?1:0)},
      zennihon:{app:prev.zennihon.app+(sRes.zennihon?1:0),win:prev.zennihon.win+(wonZen?1:0)},
      hakone:{app:prev.hakone.app+(sRes.hakone?1:0),win:prev.hakone.win+(wonHak?1:0)}
    }));
    /* Accumulate scout points earned this year */
    setCumScoutPts(prev=>prev+calcScoutPts(scoutHist.__ME__||[],fac.reputation,gameYear,fac));
    /* Identify graduating players (year=4) for record cleanup */
    const graduatedKeys=new Set();
    rs.filter(r=>r.year===4).forEach(r=>graduatedKeys.add(r.name+"|"+teamName));
    rivals.forEach(rv=>rv.runners.filter(r=>r.year===4).forEach(r=>graduatedKeys.add(r.name+"|"+rv.name)));
    /* Hall of Fame: evaluate graduating OWN players against criteria */
    const newInductees=[];
    rs.filter(r=>r.year===4).forEach(r=>{
      const matched=[];
      const hist=r.history||[];
      const secWins=hist.filter(h=>h.secRank===1).length;
      const appearances=hist.length;
      if(r.pb10k&&r.pb10k<1680)matched.push("27分台ランナー");
      if(appearances>=12)matched.push("皆勤賞");
      if(r.pb5k&&r.pb5k<800)matched.push("スピードスター");
      if(r.pbHalf&&r.pbHalf<3660)matched.push("ハーフマラソンマスター");
      if(secWins>=3)matched.push("駅伝の鬼");
      /* 大黒柱: same year 島根6区 + 熱田伊勢7or8区 + 正月2or5区, all top3 */
      const byYear={};hist.forEach(h=>{(byYear[h.yr]=byYear[h.yr]||[]).push(h);});
      Object.values(byYear).forEach(yh=>{
        const izu=yh.find(h=>h.ek==="出雲駅伝"&&h.sec==="6区"&&h.secRank<=3&&h.secRank>0);
        const zen=yh.find(h=>h.ek==="全日本大学駅伝"&&(h.sec==="7区"||h.sec==="8区")&&h.secRank<=3&&h.secRank>0);
        const hak=yh.find(h=>h.ek==="箱根駅伝"&&(h.sec==="2区"||h.sec==="5区")&&h.secRank<=3&&h.secRank>0);
        if(izu&&zen&&hak&&!matched.includes("大黒柱"))matched.push("大黒柱");
      });
      if(r.kamigami)matched.push("山の神");
      if(r.pb10k&&r.pb10k<1650&&r.pb5k&&r.pb5k<790)matched.push("トラックの王");
      if(secWins>=6)matched.push("駅伝の王");
      if(matched.length>0){
        newInductees.push({
          name:r.name,gradYear:gameYear,year:4,foreign:r.foreign||false,
          stats:{...r.stats},pb5k:r.pb5k,pb10k:r.pb10k,pbHalf:r.pbHalf,
          history:hist,secWins,appearances,criteria:matched,univ:teamName
        });
      }
    });
    if(newInductees.length>0)setPlayerHOF(prev=>[...newInductees,...prev]);
    /* Remove slow records of graduated players */
    setRecs(prev=>{const filt={};for(const tab of Object.keys(prev)){filt[tab]=prev[tab].filter(e=>{const k=e.name+"|"+e.univ;if(!graduatedKeys.has(k))return true;if(tab==="t5"&&e.time>=810)return false;if(tab==="t10"&&e.time>=1710)return false;if(tab==="half"&&e.time>=3750)return false;return true;});}
      if(gameYear>=21&&filt.ek){
        const byKey={};filt.ek.forEach(e=>{const sk=(e.ekiden||"")+"|"+(e.sec||"");(byKey[sk]=byKey[sk]||[]).push(e);});
        const trimmed=[];Object.values(byKey).forEach(arr=>{arr.sort((a,b)=>a.time-b.time);trimmed.push(...arr.slice(0,200));});
        filt.ek=trimmed;
      }
      return filt;});
    const kept=rs.filter(r=>r.year<4).map(r=>({...r,year:r.year+1,injured:false,injTurns:0,condition:70+~~(Math.random()*20),protege:false}));
    setProteges([]);
    const myTeam=draftResult?draftResult.teams.find(t=>t.isMe):null;
    /* Fallback: if draftResult missing (e.g. user closed mid-yearend), generate 12 fresh freshmen */
    let nf=myTeam?myTeam.picks.map(i=>draftResult.pool[i]).map(p=>({...p,trn:"bal"})):[];
    if(nf.length<12){const need=12-nf.length;for(let i=0;i<need;i++)nf.push(genFresh());}
    /* Foreign student logic for OWN team */
    if(foreignAllowed[teamName]){
      const hasAnyForeign=kept.some(r=>r.foreign);
      const shouldAdd=!hasAnyForeign||Math.random()<0.5;
      if(shouldAdd&&nf.length>0){
        const lowest=[...nf].sort((p,q)=>(p.stats.speed+p.stats.stamina+p.stats.stability)-(q.stats.speed+q.stats.stamina+q.stats.stability))[0];
        nf=nf.filter(r=>r!==lowest);
        nf.push(genForeign(1));
      }
    }
    /* Update rival rosters with their draft picks */
    const newRivals=rivals.map(rv=>{const t=draftResult?draftResult.teams.find(t=>t.name===rv.name):null;
      const graduated=rv.runners.filter(r=>r.year<4).map(r=>({...r,year:r.year+1}));
      let newPicks=t?t.picks.map(i=>({...draftResult.pool[i],trn:"bal"})):[];
      /* Fallback: ensure 12 freshmen per rival */
      if(newPicks.length<12){const need=12-newPicks.length;for(let i=0;i<need;i++)newPicks.push(genFresh());}
      /* Foreign student logic */
      if(foreignAllowed[rv.name]){
        const hasForeignUpper=graduated.some(r=>r.foreign&&r.year>=2&&r.year<=4);
        const shouldAdd=!hasForeignUpper||Math.random()<0.4;
        if(shouldAdd&&newPicks.length>0){
          /* Remove lowest-ranked freshman, replace with foreigner */
          const lowest=[...newPicks].sort((p,q)=>(p.stats.speed+p.stats.stamina+p.stats.stability)-(q.stats.speed+q.stats.stamina+q.stats.stability))[0];
          newPicks=newPicks.filter(r=>r!==lowest);
          newPicks.push(genForeign(1));
        } else if(shouldAdd&&newPicks.length===0){
          newPicks.push(genForeign(1));
        }
      }
      const newRoster=[...graduated,...newPicks];
      return{...rv,yearRes:t?{}:rv.yearRes,runners:newRoster.slice(0,48)};});
    /* Rival facility fluctuation: 50% for training skills, 20% for medical/coaching/reputation */
    const flucRivals=newRivals.map(rv=>{let newFac={...rv.fac};
      if(Math.random()<0.5){const skillKeys=["speed","stamina","stability","uphill","downhill","solo","pack","track","road"];const sk=skillKeys[~~(Math.random()*9)];const dir=Math.random()<0.5?-1:1;const ts={...(newFac.trainSkill||{})};const cur=ts[sk]||1;const nv=Math.max(1,Math.min(10,cur+dir));ts[sk]=nv;newFac.trainSkill=ts;}
      if(Math.random()<0.2){const mainKeys=["medical","coaching","reputation"];const mk=mainKeys[~~(Math.random()*3)];const dir=Math.random()<0.5?-1:1;const cur=newFac[mk]||1;const nv=Math.max(1,Math.min(10,cur+dir));newFac[mk]=nv;}
      return{...rv,fac:newFac};});
    setRs([...kept,...nf]);setRivals(flucRivals);
    /* Build prev rank maps from all teams' yearRes */
    /* Build prev rank maps - exclude 関東学連選抜 and adjust ranks */
    const hRanks={},zRanks={};
    const allHakRanks=[];if(sRes.hakone)allHakRanks.push({name:teamName,rank:sRes.hakone});
    rivals.forEach(rv=>{const yr=rv.yearRes||{};if(yr.hakone)allHakRanks.push({name:rv.name,rank:yr.hakone});});
    /* Remove gakuren and re-rank */
    allHakRanks.filter(r=>r.name!=="関東学連選抜").sort((a,b)=>a.rank-b.rank).forEach((r,i)=>{hRanks[r.name]=i+1;});
    if(hRanks[teamName]){}else if(sRes.hakone)hRanks[teamName]=sRes.hakone;
    if(sRes.zennihon)zRanks[teamName]=sRes.zennihon;
    rivals.forEach(rv=>{const yr=rv.yearRes||{};if(yr.zennihon)zRanks[rv.name]=yr.zennihon;});
    setPrevHakone(hRanks[teamName]||null);setPrevZennihon(sRes.zennihon);setPrevHakoneRanks(hRanks);setPrevZennihonRanks(zRanks);
    setGameYear(y=>y+1);setTurn(1);setLog([]);setAsgn({});setSelR(null);setCurEk(null);setRaceRes(null);setRecEv(null);setRecRes(null);setQualRes(null);setQualSel([]);setHakQ(false);setZenQ(false);setZenQTeams([]);setHakQTeams([]);setSRes({izumo:null,zennihon:null,hakone:null});setDraftResult(null);setForceRest(false);setPh("main");
  },[rs,draftResult,sRes,rivals]);

  /* Auto-save on phase change */
  useEffect(()=>{try{const raw=localStorage.getItem("hakone-career");if(raw){const c=JSON.parse(raw);if(Array.isArray(c))setCareerHOF(c);}}catch(e){}},[]);
  useEffect(()=>{if(turn>0&&ph!=="title"&&rs.length>0&&rivals.length>0){doSave({tn,tc,gameYear,turn,rs,rivals,log,fac,prestige,hakQ,zenQ,zenQTeams,hakQTeams,sRes,prevHakone,prevZennihon,prevHakoneRanks,prevZennihonRanks,recs,yearHistory,scoutHist,autoRest,autoRestThreshold,hallOfFame,teamRecords,foreignAllowed,univAlias,ekAlias,draftResult,teamCtrl,sectionRecords,playerHOF,proteges,protegeSlots,consecutiveTripleCrowns,teamTitles,consecutiveIzumo,consecutiveZennihon,consecutiveHakone,ekStatsTotals,cumScoutPts,_ph:ph,_raceRes:(ph==="ek_race"?raceRes:null),_raceIdx:raceIdx,_curEk:curEk,_asgn:asgn,_recEv:recEv,_recAsgn:recAsgn,_qualSel:qualSel});}},[ph,turn,fac,prestige,rs,rivals,recs,scoutHist,sRes,gameYear,hallOfFame,teamRecords,foreignAllowed,univAlias,ekAlias,draftResult,teamCtrl,sectionRecords,playerHOF,proteges,protegeSlots,consecutiveTripleCrowns,teamTitles,consecutiveIzumo,consecutiveZennihon,consecutiveHakone,ekStatsTotals,cumScoutPts,raceRes,raceIdx,curEk,asgn,recEv,recAsgn,qualSel]);

  const advance=useCallback((nt,keepTraining)=>{setRivals(p=>growRivals(p));setForceRest(false);setSelR(null);setFavOnly(false);const ev=CAL[nt];if(!ev){setTurn(nt);setPh(nt>48?"year_end":(keepTraining?"training":"main"));return;}
    if(ev.t==="rec"){setRecEv(ev);setRecAsgn({});setRecRes(null);setSelR(null);setTurn(nt);setPh("rec_sel");}
    else if(ev.t==="half"){setTurn(nt);setQualSel([]);setSelR(null);setPh("half_sel");}
    else if(ev.t==="ek"){setCurEk(ev.eid);setAsgn({});setSelR(null);setTurn(nt);
      let q=false;
      if(ev.eid==="izumo")q=prevHakone!=null&&prevHakone<=10;
      else if(ev.eid==="zennihon")q=(prevZennihon!=null&&prevZennihon<=8)||zenQ;
      else if(ev.eid==="hakone")q=(prevHakone!=null&&prevHakone<=10)||hakQ;
      setPh(q?"ek_asgn":"ek_watch");}
    else if(ev.t==="hakQ"){setTurn(nt);
      const iAmSeeded=prevHakone!=null&&prevHakone<=10;
      if(iAmSeeded){
        /* Player seeded - auto-run rival qualifier only */
        const nonSeeded=rivals.filter(rv=>!(prevHakoneRanks[rv.name]&&prevHakoneRanks[rv.name]<=10));
        const rivRes=nonSeeded.map(rv=>({name:rv.name,total:applyForeignLimit(rv.runners.filter(r=>!r.injured)).sort((a,b)=>eHf(b)-eHf(a)).slice(0,12).map(r=>cHalf(r)).sort((a,b)=>a-b).slice(0,10).reduce((s,t)=>s+t,0)})).sort((a,b)=>a.total-b.total);
        setHakQ(true);setHakQTeams(rivRes.slice(0,10).map(t=>t.name));setPrestige(p=>p+3);
        setLog(l=>[...l,"T"+nt+" "+ekAlias.hakone+"予選会（シード校のため免除）通過:"+rivRes.slice(0,10).map(t=>t.name).join(",")]);
        advance(nt+1);return;
      }
      setQualSel([]);setPh("hak_sel");}
    else if(ev.t==="zenQ"){setTurn(nt);
      const iAmSeeded=prevZennihon!=null&&prevZennihon<=8;
      if(iAmSeeded){
        /* Player seeded - auto-run rival qualifier only */
        const nonSeeded=rivals.filter(rv=>!(prevZennihonRanks[rv.name]&&prevZennihonRanks[rv.name]<=8));
        const rivRes=nonSeeded.map(rv=>{const top8=applyForeignLimit(rv.runners.filter(r=>!r.injured)).sort((a,b)=>e10k(b)-e10k(a)).slice(0,8);return{name:rv.name,score:top8.reduce((s,r)=>s+cTrk(10000,r),0)};}).sort((a,b)=>a.score-b.score);
        setZenQ(true);setZenQTeams(rivRes.slice(0,7).map(t=>t.name));setPrestige(p=>p+3);
        setLog(l=>[...l,"T"+nt+" "+ekAlias.zennihon+"予選会（シード校のため免除）通過:"+rivRes.slice(0,7).map(t=>t.name).join(",")]);
        advance(nt+1);return;
      }
      setQualSel([]);setPh("zen_q");}
    else if(ev.t==="camp"){setRs(p=>p.map(r=>{if(r.injured)return r;/* 夏合宿: 全能力に強化された成長(スタミナ重視) + コンディション大幅回復 */const campFx={speed:1,stamina:2,stability:1,uphill:1,downhill:1,solo:1,pack:1,track:1,road:2};let ns=applyGrowth(r,campFx,fac);ns=applyGrowth({...r,stats:ns},campFx,fac);return{...r,stats:ns,condition:Math.min(100,r.condition+20),fatigue:Math.max(0,r.fatigue-25)};}));setLog(l=>[...l,"T"+nt+" 🏕️ 夏合宿！選手が大きく成長した"]);setTurn(nt+1);setPh(nt+1>48?"year_end":"main");}
  },[hakQ,zenQ,fac,prevHakone,prevZennihon,prevHakoneRanks,prevZennihonRanks,rivals]);

  const doTrain=useCallback(()=>{let injN=[];const ib=injB(fac);setRs(p=>p.map(r=>{if(r.injured){const l=r.injTurns-1;const rb=fac.medical>=3?1:0;return l-rb<=0?{...r,injured:false,injTurns:0,fatigue:Math.max(0,r.fatigue-3)}:{...r,injTurns:l-rb};}const shouldRest=forceRest||r.trn==="rest"||(autoRest&&r.fatigue>=autoRestThreshold);if(shouldRest){const restAmt=fac.medical+5+~~(Math.random()*11);return{...r,fatigue:Math.max(0,r.fatigue-restAmt),condition:Math.min(100,r.condition+12+~~(Math.random()*4))};}const tr=TRS.find(x=>x.id===r.trn)||TRS[0];const isPro=r.protege;const fxUse=isPro?Object.fromEntries(Object.entries(tr.fx).map(([k,v])=>[k,v*1.1])):tr.fx;const ns=applyGrowth(r,fxUse,fac);let nf=Math.max(0,Math.min(100,r.fatigue+(tr.f||0)));let nc=Math.max(10,Math.min(100,r.condition-2+~~(Math.random()*5)-2));if(Math.random()<(r.injRisk*0.15+nf*0.08)*0.004*ib){injN.push(r.name);const it=4+~~(Math.random()*6);const dns={...ns};SK.forEach(k=>{dns[k]=Math.max(15,dns[k]-2-~~(Math.random()*2));});return{...r,stats:dns,fatigue:nf,condition:nc,injured:true,injTurns:it};}return{...r,stats:ns,fatigue:nf,condition:nc};}));setLog(l=>[...l,"T"+turn+" "+moOf(turn)+wkOf(turn)+"週: "+(forceRest?"全員休養":"練習"),...injN.map(n=>"🏥 "+n+"が故障")]);advance(turn+1,true);},[turn,advance,fac,autoRest,autoRestThreshold,forceRest]);

  const runRec=useCallback(()=>{
    /* Apply training effect to all players (race day still gets training benefit) */
    setRs(p=>p.map(r=>{
      if(r.injured)return r;
      if(r.trn==="rest")return r;
      const tr=TRS.find(x=>x.id===r.trn)||TRS[0];
      return{...r,stats:applyGrowth(r,tr.fx,fac)};
    }));
    const e5=Object.entries(recAsgn).filter(([,v])=>v==="5k").map(([id])=>rs.find(r=>r.id===+id));const e10=Object.entries(recAsgn).filter(([,v])=>v==="10k").map(([id])=>rs.find(r=>r.id===+id));const rivR5=[],rivR10=[];rivals.forEach(rv=>{rv.runners.filter(r=>!r.injured).forEach(r=>{if(Math.random()<0.5){if(Math.random()<0.5)rivR5.push({...r,univName:rv.name});else rivR10.push({...r,univName:rv.name});}});});const r5=[...e5.map(r=>({runner:r,time:cTrk(5000,r),univ:teamName,yr:r.year})),...rivR5.map(r=>({runner:r,time:cTrk(5000,r),univ:r.univName,yr:r.year}))].sort((a,b)=>a.time-b.time);const r10=[...e10.map(r=>({runner:r,time:cTrk(10000,r),univ:teamName,yr:r.year})),...rivR10.map(r=>({runner:r,time:cTrk(10000,r),univ:r.univName,yr:r.year}))].sort((a,b)=>a.time-b.time);setRs(p=>p.map(r=>{const f5=r5.find(x=>x.runner.id===r.id&&x.univ===teamName);const f10=r10.find(x=>x.runner.id===r.id&&x.univ===teamName);if(!f5&&!f10)return r;const nr={...r,stats:raceGrow(r),fatigue:Math.min(100,r.fatigue+20)};if(f5&&(!nr.pb5k||f5.time<nr.pb5k))nr.pb5k=f5.time;if(f10&&(!nr.pb10k||f10.time<nr.pb10k))nr.pb10k=f10.time;return nr;}));setRivals(prev=>prev.map(rv=>{const upd=rv.runners.map(r=>{const f5=r5.find(x=>x.runner.id===r.id&&x.univ===rv.name);const f10=r10.find(x=>x.runner.id===r.id&&x.univ===rv.name);if(!f5&&!f10)return r;const nr={...r,stats:raceGrow(r)};if(f5&&(!nr.pb5k||f5.time<nr.pb5k))nr.pb5k=f5.time;if(f10&&(!nr.pb10k||f10.time<nr.pb10k))nr.pb10k=f10.time;return nr;});return{...rv,runners:upd};}));setRecs(p=>{let n=addBR(p,"t5",r5.map(r=>({name:r.runner.name,univ:r.univ,time:r.time,grade:r.yr,yr:gameYear,ev:recEv.n,foreign:r.runner.foreign})));return addBR(n,"t10",r10.map(r=>({name:r.runner.name,univ:r.univ,time:r.time,grade:r.yr,yr:gameYear,ev:recEv.n,foreign:r.runner.foreign})));});setRecRes({r5,r10,name:recEv.n,myUniv:teamName});setPh("rec_res");},[recAsgn,rs,recEv,gameYear,tn,rivals]);

  const toggleQS=useCallback(rid=>{setQualSel(p=>{
    if(p.includes(rid))return p.filter(x=>x!==rid);
    if(p.length>=12)return p;
    /* Limit: only 1 foreign student can be selected for own team */
    const newR=rs.find(r=>r.id===rid);
    if(newR&&newR.foreign){
      const alreadyHasForeign=p.some(id=>{const r=rs.find(x=>x.id===id);return r&&r.foreign;});
      if(alreadyHasForeign){alert("外国人留学生は1名までしか出走できません。");return p;}
    }
    return[...p,rid];
  });},[rs]);
  const runHakQ=useCallback(()=>{const sel=qualSel.map(rid=>rs.find(r=>r.id===rid));const times=sel.map(r=>({runner:r,time:cHalf(r),univ:teamName,yr:r.year})).sort((a,b)=>a.time-b.time);const my=times.slice(0,10).reduce((s,t)=>s+t.time,0);setRs(p=>p.map(r=>{const d=times.find(x=>x.runner.id===r.id);if(!d)return r;const nr={...r,stats:raceGrow(r),fatigue:Math.min(100,r.fatigue+15)};if(!nr.pbHalf||d.time<nr.pbHalf)nr.pbHalf=d.time;return nr;}));setRecs(p=>addBR(p,"half",times.map(t=>({name:t.runner.name,univ:teamName,time:t.time,grade:t.runner.year,yr:gameYear,ev:ekAlias.hakone+"予選会",foreign:t.runner.foreign}))));
    /* Only non-seeded rivals participate in qualifier (seeded = prevHakone top 10) */
    const nonSeeded=rivals.filter(rv=>!(prevHakoneRanks[rv.name]&&prevHakoneRanks[rv.name]<=10));
    const allParticipantTimes=[...times.map(t=>({...t,isMe:true}))];
    const allT=[{name:teamName,total:my,isMe:true},...nonSeeded.map(rv=>{const top12=applyForeignLimit(rv.runners.filter(r=>!r.injured)).sort((a,b)=>eHf(b)-eHf(a)).slice(0,12);const rivTimes=top12.map(r=>{const t=cHalf(r);allParticipantTimes.push({runner:r,time:t,univ:rv.name,yr:r.year,isMe:false});return t;}).sort((a,b)=>a-b);return{name:rv.name,total:rivTimes.slice(0,10).reduce((s,t)=>s+t,0)};})];allT.sort((a,b)=>a.total-b.total);
    allParticipantTimes.sort((a,b)=>a.time-b.time);const rank=allT.findIndex(r=>r.isMe)+1;setHakQ(rank<=10);setHakQTeams(allT.slice(0,10).map(t=>t.name));if(rank<=10)setPrestige(p=>p+3);/* Bonus: top 100 → +1pt each, top 20 → +1pt extra each (for player runners). Apply to BOTH prestige & scout pts. */
    const top100Me=allParticipantTimes.slice(0,100).filter(x=>x.isMe).length;
    const top20Me=allParticipantTimes.slice(0,20).filter(x=>x.isMe).length;
    const qBonus=top100Me*1+top20Me*1;
    if(qBonus>0){
      setPrestige(p=>p+qBonus);
      /* Add to scoutHist so calcScoutPts includes it (treated as a separate entry) */
      setScoutHist(prev=>{const n={...prev};if(!n.__ME__)n.__ME__=[];n.__ME__=[...n.__ME__,{hakQBonus:qBonus}];return n;});
    }
    setQualRes({times,allTimes:allParticipantTimes,rivs:allT,rank,q:rank<=10,my,type:"hak",top100Me,top20Me,qBonus});setPh("qual_res");setTurn(turn+1);},[qualSel,rs,rivals,tn,turn,gameYear,prevHakoneRanks]);
  const toggleRA=useCallback((rid,ev)=>{setRecAsgn(p=>{const n={...p};if(n[rid]===ev)delete n[rid];else{if(Object.values(n).filter(v=>v===ev).length>=8)return p;n[rid]=ev;}return n;});},[]);
  const assignR=useCallback(sid=>{
    if(selR===null)return;
    if(asgnSet.has(selR)&&asgn[sid]!==selR)return;
    /* Limit: only 1 foreign student in ekiden assignment */
    const newR=rs.find(r=>r.id===selR);
    if(newR&&newR.foreign){
      const otherForeign=Object.entries(asgn).some(([k,v])=>{
        if(k===String(sid))return false;
        if(v===selR)return false;
        const r=rs.find(x=>x.id===v);return r&&r.foreign;
      });
      if(otherForeign){alert("外国人留学生は1名までしか出走できません。");return;}
    }
    setAsgn(p=>{const n={...p};Object.keys(n).forEach(k=>{if(n[k]===selR)delete n[k];});n[sid]=selR;return n;});setSelR(null);
  },[selR,asgnSet,asgn,rs]);
  const ek=curEk?EKS[curEk]:null,allAsgn=ek?Object.keys(asgn).length===ek.cnt:false;

  const runEkCommon=useCallback((isWatch)=>{const secs=ek.sec;const nR=curEk==="izumo"?10:curEk==="zennihon"?15:20;
    /* Select participating teams by actual qualification */
    let pool;
    if(curEk==="izumo"){
      /* Izumo: prev hakone top 10 */
      const qualified=[...rivals].filter(rv=>prevHakoneRanks[rv.name]&&prevHakoneRanks[rv.name]<=10).sort((a,b)=>(prevHakoneRanks[a.name]||99)-(prevHakoneRanks[b.name]||99));
      const fill=[...rivals].filter(rv=>!qualified.includes(rv)).sort((a,b)=>b.str-a.str);
      pool=[...qualified,...fill].slice(0,nR-(isWatch?0:1));
    } else if(curEk==="zennihon"){
      /* Zennihon: prev zennihon top 8 (seeded) + this year's zenQ qualifiers */
      const seeded=[...rivals].filter(rv=>prevZennihonRanks[rv.name]&&prevZennihonRanks[rv.name]<=8);
      const qualifiers=[...rivals].filter(rv=>zenQTeams.includes(rv.name)&&!seeded.includes(rv));
      const fill=[...rivals].filter(rv=>!seeded.includes(rv)&&!qualifiers.includes(rv)).sort((a,b)=>b.str-a.str);
      pool=[...seeded,...qualifiers,...fill].slice(0,nR-(isWatch?0:1));
    } else {
      /* Hakone: prev hakone top 10 (seeded) + this year's hakQ qualifiers */
      const seeded=[...rivals].filter(rv=>prevHakoneRanks[rv.name]&&prevHakoneRanks[rv.name]<=10);
      const qualifiers=[...rivals].filter(rv=>hakQTeams.includes(rv.name)&&!seeded.includes(rv));
      const fill=[...rivals].filter(rv=>!seeded.includes(rv)&&!qualifiers.includes(rv)).sort((a,b)=>b.str-a.str);
      pool=[...seeded,...qualifiers,...fill].slice(0,nR-(isWatch?0:1));
    }
    const qNames=pool.map(r=>r.name);
    /* Build entries for simAllEk */
    const entries=[];
    if(!isWatch){
      const myRunnerMap={};secs.forEach(s=>{myRunnerMap[s.id]=rs.find(x=>x.id===asgn[s.id]);});
      entries.push({name:teamName,isMe:true,runners:rs,_ag:myRunnerMap,eid:curEk,fac});qNames.push(teamName);
    }
    pool.forEach(rv=>{entries.push({name:rv.name,isMe:false,runners:rv.runners,eid:curEk,fac:rv.fac});});
    if(curEk==="hakone"){
      /* 関東学連選抜: 箱根本戦に出場しない大学から各1名のエース選手を選抜 */
      const participatingNames=new Set(qNames);
      const gkPool=[];
      /* Add own team if not participating */
      if(isWatch){
        const top=[...rs].filter(r=>!r.injured).sort((a,b)=>SK.reduce((s,k)=>s+b.stats[k],0)-SK.reduce((s,k)=>s+a.stats[k],0))[0];
        if(top)gkPool.push({...top,univName:teamName});
      }
      /* Add top runner from each non-participating rival */
      rivals.forEach(rv=>{if(participatingNames.has(rv.name))return;
        const top=[...rv.runners].filter(r=>!r.injured).sort((a,b)=>SK.reduce((s,k)=>s+b.stats[k],0)-SK.reduce((s,k)=>s+a.stats[k],0))[0];
        if(top)gkPool.push({...top,univName:rv.name});
      });
      /* Take top secs.length runners overall */
      const finalPool=gkPool.sort((a,b)=>SK.reduce((s,k)=>s+b.stats[k],0)-SK.reduce((s,k)=>s+a.stats[k],0)).slice(0,secs.length);
      entries.push({name:"関東学連選抜",isMe:false,runners:finalPool,eid:curEk,fac:{medical:3,coaching:3,reputation:1,trainSkill:{speed:5,stamina:5,stability:5,uphill:5,downhill:5,solo:5,pack:5,track:5,road:5}}});
    }
    /* Simulate with gap penalty */
    const allT=simAllEk(entries,secs);
    allT.sort((a,b)=>a.st[secs.length-1].cum-b.st[secs.length-1].cum);
    const rank=isWatch?null:allT.findIndex(t=>t.isMe)+1;
    /* Store records */
    if(!isWatch){const myT=allT.find(t=>t.isMe);
      setRs(p=>p.map(r=>{
        /* Training effect for all players on race day */
        let base=r;
        if(!r.injured&&r.trn!=="rest"){const tr=TRS.find(x=>x.id===r.trn)||TRS[0];base={...r,stats:applyGrowth(r,tr.fx,fac)};}
        if(!Object.values(asgn).includes(r.id))return base;
        const si=myT.st.findIndex(s=>s.runner===r.name);const secRk=si>=0?[...allT].sort((a,b)=>a.st[si].time-b.st[si].time).findIndex(t=>t.isMe)+1:0;
        /* 山の神 detection: 正月(hakone) 5区, section record + leader at end of sec5 + 90s+ gap to 2nd */
        let kamigami=base.kamigami||false;
        if(curEk==="hakone"&&si>=0&&secs[si].n==="5区"){
          const recKey="hakone:"+secs[si].id;const myTime=myT.st[si].time;
          const isRecord=raceRes&&raceRes.newRecords&&raceRes.newRecords[recKey];
          /* cumulative standings at end of section 5 (index si) */
          const cumRank=[...allT].sort((a,b)=>a.st[si].cum-b.st[si].cum);
          const isLeader=cumRank[0]&&cumRank[0].isMe;
          const gap2nd=cumRank.length>1?cumRank[1].st[si].cum-cumRank[0].st[si].cum:0;
          if(isRecord&&isLeader&&gap2nd>=90)kamigami=gameYear;
        }
        return{...base,kamigami,stats:ekGrow(base,curEk),fatigue:Math.min(100,base.fatigue+45),condition:Math.max(10,base.condition-20),history:[...(base.history||[]),{ek:ek.name,yr:gameYear,sec:si>=0?secs[si].n:"",time:si>=0?myT.st[si].time:0,secRank:secRk}]};
      }));}
    /* Store ALL ekiden records (both watch and play) with grade */
    setRecs(p=>{let n={...p};allT.forEach(t=>{const rList=t.isMe?rs:(rivals.find(rv=>rv.name===t.name)||{}).runners||[];n=addBR(n,"ek",secs.map((s,si)=>{const runner=rList.find(r=>r.name===t.st[si].runner);return{name:t.st[si].runner,univ:t.name,sec:s.n,time:t.st[si].time,ekiden:ek.name,yr:gameYear,grade:runner?runner.year:null,foreign:runner?runner.foreign:false};}));});return n;});
    /* Update rival runners */
    pool.forEach(rv=>{const rt=allT.find(t=>t.name===rv.name);if(!rt)return;setRivals(prev=>prev.map(rvp=>{if(rvp.name!==rv.name)return rvp;return{...rvp,runners:rvp.runners.map(r=>{const si=rt.st.findIndex(s=>s.runner===r.name);if(si<0)return r;const secRk=[...allT].sort((a,b)=>a.st[si].time-b.st[si].time).findIndex(t=>t.name===rv.name)+1;return{...r,stats:ekGrow(r,curEk),history:[...(r.history||[]),{ek:ek.name,yr:gameYear,sec:secs[si].n,time:rt.st[si].time,secRank:secRk}]};})};}));});
    setRaceRes({allT,rank,isWatch,secs,newRecords:{}});setRaceIdx(0);setHiddenTeams({});
    /* Update Hall of Fame: top 5 of all time per ekiden + yearly top 5 */
    const sortedRes=[...allT].sort((a,b)=>a.st[secs.length-1].cum-b.st[secs.length-1].cum);
    const yearlyTop5=sortedRes.slice(0,5).map((t,i)=>({rank:i+1,name:t.name,time:t.st[secs.length-1].cum,yr:gameYear}));
    setHallOfFame(prev=>{const n={...prev};
      const ek5=[...sortedRes.slice(0,5).map((t,i)=>({rank:i+1,name:t.name,time:t.st[secs.length-1].cum,yr:gameYear})), ...(prev[curEk]||[])];
      ek5.sort((a,b)=>a.time-b.time);
      n[curEk]=ek5.slice(0,5);
      const yearlyKey=curEk+"_yearly";
      const yearlyRec=[...(prev[yearlyKey]||[]).filter(y=>y.yr!==gameYear),{yr:gameYear,top5:yearlyTop5}];
      yearlyRec.sort((a,b)=>b.yr-a.yr);
      n[yearlyKey]=yearlyRec;
      if(curEk==="hakone"&&secs.length===10){
        const out5=[...sortedRes.map(t=>({name:t.name,time:t.st[4].cum,yr:gameYear})),...(prev.hakoneOut||[])];
        out5.sort((a,b)=>a.time-b.time);n.hakoneOut=out5.slice(0,5);
        const in5=[...sortedRes.map(t=>{let inT=0;for(let i=5;i<10;i++)inT+=t.st[i].time;return{name:t.name,time:inT,yr:gameYear};}),...(prev.hakoneIn||[])];
        in5.sort((a,b)=>a.time-b.time);n.hakoneIn=in5.slice(0,5);
      }
      return n;});
    setTeamRecords(prev=>{const n={...prev};allT.forEach(t=>{const total=t.st[secs.length-1].cum;const key=t.name+":"+curEk;if(!n[key]||total<n[key].time)n[key]={time:total,yr:gameYear};
      if(curEk==="hakone"&&secs.length===10){
        const outT=t.st[4].cum;const outKey=t.name+":hakoneOut";if(!n[outKey]||outT<n[outKey].time)n[outKey]={time:outT,yr:gameYear};
        let inT=0;for(let i=5;i<10;i++)inT+=t.st[i].time;const inKey=t.name+":hakoneIn";if(!n[inKey]||inT<n[inKey].time)n[inKey]={time:inT,yr:gameYear};
      }
    });return n;});
    const secWinners={};const newRecords={};secs.forEach((s,si)=>{const best=[...allT].sort((a,b)=>a.st[si].time-b.st[si].time)[0];if(best)secWinners[best.name]=(secWinners[best.name]||0)+1;
      /* Check section record */
      const recKey=curEk+":"+s.id;
      const bestTime=best?best.st[si].time:null;
      if(bestTime&&(!sectionRecords[recKey]||bestTime<sectionRecords[recKey].time)){
        newRecords[recKey]={time:bestTime,runner:best.st[si].runner,univ:best.name,yr:gameYear,sec:s.n};
      }
    });
    if(Object.keys(newRecords).length>0){setSectionRecords(prev=>({...prev,...newRecords}));setRaceRes(r=>r?{...r,newRecords}:r);}
    if(!isWatch)setSRes(p=>{const np={...p,[curEk]:rank,[curEk+"SecWins"]:secWinners[teamName]||0};
      if(curEk==="hakone"&&rank===1&&np.izumo===1&&np.zennihon===1){setPrestige(pp=>pp+50);const newConsec=consecutiveTripleCrowns+1;setConsecutiveTripleCrowns(newConsec);const consecBonus=newConsec>=3?100:newConsec===2?50:0;const totalScoutBonus=50+consecBonus;setScoutHist(prev=>{const n={...prev};if(!n.__ME__)n.__ME__=[];n.__ME__=[...n.__ME__,{hakQBonus:totalScoutBonus}];return n;});setRaceRes(r=>r?{...r,tripleCrown:true,consecutiveCount:newConsec,consecutiveBonus:consecBonus}:r);}
      return np;});
    setRivals(prev=>prev.map(rv=>{const ri=allT.findIndex(t=>t.name===rv.name);if(ri<0)return rv;const yrKey=curEk+"SecWins";return{...rv,yearRes:{...(rv.yearRes||{}),[curEk]:ri+1,[yrKey]:secWinners[rv.name]||0}};}));
    setPh("ek_race");
  },[ek,asgn,rs,tn,curEk,rivals,gameYear,prevHakoneRanks,prevZennihonRanks,zenQTeams,hakQTeams,consecutiveTripleCrowns]);

  const upgradeFac=useCallback(key=>{
    const isSkill=key.startsWith("trainSkill.");
    if(isSkill){
      const skill=key.split(".")[1];
      const cur=(fac.trainSkill&&fac.trainSkill[skill])||1;
      if(cur>=10)return;
      const costs=(skill==="speed"||skill==="stamina")?[0,0,1,2,3,4,7,11,17,28,45]:[0,0,1,1,2,2,4,6,9,14,23];
      const cost=costs[cur+1]||999;
      if(prestige<cost)return;
      setPrestige(p=>p-cost);
      setFac(p=>({...p,trainSkill:{...(p.trainSkill||{}),[skill]:cur+1}}));
      return;
    }
    const cur=fac[key];if(cur>=10)return;
    const costs=[0,1,2,3,5,8,13,21,34,55,89];
    const cost=costs[cur+1]||999;
    if(prestige<cost)return;
    setPrestige(p=>p-cost);
    setFac(p=>({...p,[key]:cur+1}));
  },[fac,prestige]);

  /* ═══ RENDERS ═══ */
  if(ph==="title")return(<><style>{CSS}</style><div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg,#fff,#f0ede6)",textAlign:"center",padding:24}}>{newGameConfirm&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:20}} onClick={()=>setNewGameConfirm(false)}><div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:16,padding:24,maxWidth:360,textAlign:"left",boxShadow:"0 8px 32px rgba(0,0,0,0.3)"}}><div style={{fontSize:18,fontWeight:800,marginBottom:12,color:"#c0392b"}}>⚠ 新しいゲームを開始</div><div style={{fontSize:14,lineHeight:1.8,color:"#333",marginBottom:18}}>新規開始すると、<b>現在プレイ中のセーブデータは上書きされ、元に戻せません</b>。<br/><br/>続行中のゲームがある場合は、先に「ロード」で確認することをおすすめします。<br/><br/>本当に新しいゲームを始めますか？</div><div style={{display:"flex",gap:8}}><button onClick={()=>{setNewGameConfirm(false);startNew();}} style={{flex:1,padding:"12px",borderRadius:10,background:"#c0392b",color:"#fff",fontWeight:800,border:"none",fontSize:15}}>新規開始する</button><button onClick={()=>setNewGameConfirm(false)} style={{flex:1,padding:"12px",borderRadius:10,background:"#eee",color:"#333",fontWeight:700,border:"none",fontSize:15}}>やめる</button></div></div></div>}
    <div style={{fontSize:13,letterSpacing:10,color:"var(--ac)",fontWeight:800,marginBottom:20}}>UNIVERSITY EKIDEN SIMULATOR</div><h1 className="sf" style={{fontSize:"clamp(34px,7vw,56px)",fontWeight:800}}>大学駅伝</h1><div className="sf" style={{fontSize:"clamp(16px,3vw,22px)",color:"var(--t2)",marginTop:6,marginBottom:10}}>監督キャリアモード</div><div style={{fontSize:13,color:"var(--t2)",marginBottom:28,lineHeight:1.9,maxWidth:420}}>複数年育成。オートセーブ。<br/>3大駅伝制覇を目指す監督シミュレーション。</div><div style={{display:"flex",alignItems:"center",gap:4,marginBottom:8}}><input value={tn} onChange={e=>{setTn(e.target.value);setTeamCtrl("");}} className="sf" style={{background:"#fff",border:"2px solid var(--bdr)",borderRadius:10,padding:"12px 16px",color:"var(--t)",fontSize:18,textAlign:"right",width:160,outline:"none",opacity:teamCtrl?0.4:1}} placeholder="箱根" disabled={!!teamCtrl}/><span className="sf" style={{fontSize:18,fontWeight:700,opacity:teamCtrl?0.4:1}}>大学</span></div><div style={{marginBottom:14,fontSize:11}}><div style={{color:"var(--t2)",marginBottom:4}}>または既存大学を選択(任意)</div><select value={teamCtrl} onChange={e=>setTeamCtrl(e.target.value)} style={{padding:"6px 10px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:12,minWidth:200}}><option value="">— 自分の大学を入力 —</option>{UNIV.map(u=>(<option key={u[0]} value={u[0]}>{u[0]}</option>))}</select>{teamCtrl&&<button onClick={()=>setTeamCtrl("")} style={{marginLeft:6,padding:"6px 10px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:11,background:"var(--card)",cursor:"pointer"}}>解除</button>}</div><div style={{marginBottom:20}}><div style={{fontSize:12,color:"var(--t2)",marginBottom:6}}>スクールカラー</div><div style={{display:"flex",flexWrap:"wrap",gap:5,maxWidth:340,justifyContent:"center",marginBottom:8}}>{["#C0392B","#E67E22","#F39C12","#16A085","#27AE60","#2980B9","#8E44AD","#2C3E50","#D35400","#E74C3C","#1ABC9C","#3498DB","#9B59B6","#34495E","#7F8C8D","#95A5A6","#006633","#7B2D8B","#8B2252","#D32F2F","#5B3C8F","#1C2841","#0055AA","#2D1A4E","#0046AD","#DAA520","#2E7D32","#7B1FA2","#1976D2","#5BC0EB"].map(c=>(<button key={c} onClick={()=>setTc(c)} style={{width:30,height:30,borderRadius:"50%",background:c,border:tc===c?"3px solid #000":"2px solid var(--bdr)",cursor:"pointer"}}/>))}</div><div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:8,fontSize:11}}><span style={{color:"var(--t2)"}}>RGB:</span><input type="color" value={tc} onChange={e=>setTc(e.target.value)} style={{width:36,height:28,border:"none",cursor:"pointer",background:"transparent"}}/><input type="text" value={tc} onChange={e=>{const v=e.target.value;if(/^#[0-9A-Fa-f]{0,6}$/.test(v))setTc(v);}} style={{padding:"4px 8px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:12,fontFamily:"monospace",width:80}}/></div></div><div style={{display:"flex",gap:10}}><button onClick={()=>setNewGameConfirm(true)} style={{padding:"14px 40px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800,fontSize:16}}>新規開始</button><button onClick={loadGame} style={{padding:"14px 30px",borderRadius:50,background:"var(--card)",color:"var(--ac)",fontWeight:700,border:"1px solid var(--bdr)"}}>ロード</button><button onClick={()=>setPh("help")} style={{padding:"14px 30px",borderRadius:50,background:"var(--card)",color:"var(--t2)",fontWeight:700,border:"1px solid var(--bdr)"}}>遊び方</button></div><div style={{marginTop:14}}><button onClick={()=>setPh("foreign_cfg")} style={{padding:"8px 22px",borderRadius:50,background:"var(--card)",color:"var(--t2)",fontWeight:700,border:"1px solid var(--bdr)",fontSize:12}}>🌏 留学生受入設定</button><button onClick={()=>setPh("career_hof")} style={{padding:"8px 22px",borderRadius:50,background:"var(--card)",color:"var(--t2)",fontWeight:700,border:"1px solid var(--bdr)",fontSize:12,marginLeft:8}}>📚 キャリア殿堂</button></div></div></>);

  if(ph==="triple_crown")return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"linear-gradient(135deg,#FFD700 0%,#FFA500 50%,#FF6347 100%)",padding:14,display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{maxWidth:500,margin:"0 auto",textAlign:"center"}} className="fi">
    <div style={{fontSize:72,marginBottom:10}}>🏆👑🏆</div>
    <h1 className="sf" style={{fontSize:"clamp(28px,8vw,48px)",fontWeight:900,color:"#fff",textShadow:"2px 2px 8px rgba(0,0,0,0.4)",marginBottom:14}}>三冠達成！</h1>
    <div style={{background:"rgba(255,255,255,0.95)",borderRadius:16,padding:24,marginBottom:20,boxShadow:"0 8px 32px rgba(0,0,0,0.3)"}}>
      <div style={{fontSize:18,fontWeight:800,marginBottom:12,color:"#FF6347"}}>{univAlias[teamName]||teamName}</div>
      <div style={{fontSize:14,lineHeight:2,color:"#333"}}>
        <div>🌟 {ekAlias.izumo} <b style={{color:"#FFA500"}}>優勝</b></div>
        <div>🌏 {ekAlias.zennihon} <b style={{color:"#FFA500"}}>優勝</b></div>
        <div>🏔 {ekAlias.hakone} <b style={{color:"#FFA500"}}>優勝</b></div>
      </div>
      <div style={{marginTop:16,fontSize:13,color:"#666",lineHeight:1.8}}>Year {gameYear} シーズン、3大駅伝完全制覇！<br/>大学駅伝史に永遠に刻まれる偉業です。</div>{raceRes&&raceRes.consecutiveCount>1&&<div style={{marginTop:12,padding:"10px 14px",background:"linear-gradient(90deg,#FFD700,#FFA500)",borderRadius:10,color:"#222",fontWeight:800,fontSize:13}}>🔥 {raceRes.consecutiveCount}年連続三冠達成！<br/>連続達成ボーナス: スカウトポイント +{raceRes.consecutiveBonus}pt</div>}
    </div>
    <div style={{display:"flex",gap:10,justifyContent:"center"}}>
      <button onClick={()=>advance(turn+1)} style={{padding:"12px 28px",borderRadius:50,background:"#fff",color:"#FF6347",fontWeight:800,border:"none",fontSize:15,boxShadow:"0 4px 12px rgba(0,0,0,0.2)"}}>シーズンを続ける →</button>
    </div>
  </div></div></>);
  if(ph==="ending"){
    /* Career retrospective: count wins across 40 years */
    const myHist=scoutHist["__ME__"]||[];
    let izW=0,zeW=0,haW=0,izApp=0,zeApp=0,haApp=0,tripleCrowns=0;
    const yearRecs=myHist.filter(h=>h.izumo!=null||h.zennihon!=null||h.hakone!=null);
    yearRecs.forEach(h=>{
      if(h.izumo!=null){izApp++;if(h.izumo===1)izW++;}
      if(h.zennihon!=null){zeApp++;if(h.zennihon===1)zeW++;}
      if(h.hakone!=null){haApp++;if(h.hakone===1)haW++;}
      if(h.izumo===1&&h.zennihon===1&&h.hakone===1)tripleCrowns++;
    });
    const totalW=izW+zeW+haW;
    const rank=totalW>=30?"名将":totalW>=15?"名監督":totalW>=5?"実力派監督":totalW>=1?"一流監督":"挑戦者";
    return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)",padding:14}}><div style={{maxWidth:600,margin:"0 auto",textAlign:"center"}} className="fi">
      <div style={{fontSize:56,marginTop:20,marginBottom:6}}>🏁</div>
      <h1 className="sf" style={{fontSize:"clamp(26px,7vw,40px)",fontWeight:900,color:"#fff",marginBottom:4}}>40年間の監督生活</h1>
      <div style={{fontSize:14,color:"#FFD700",fontWeight:700,marginBottom:18}}>{univAlias[teamName]||teamName}</div>
      <div style={{background:"rgba(255,255,255,0.97)",borderRadius:16,padding:24,marginBottom:16,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"}}>
        <div style={{fontSize:20,fontWeight:900,color:"#0f3460",marginBottom:14}}>監督ランク: <span style={{color:"#FF6347"}}>{rank}</span></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:14}}>
          <div style={{padding:"10px",background:"#f0f4f8",borderRadius:8}}><div style={{fontSize:11,color:"#666"}}>{ekAlias.izumo}</div><div style={{fontSize:22,fontWeight:900,color:"#FFA500"}}>{izW}<span style={{fontSize:12}}>勝</span></div><div style={{fontSize:10,color:"#999"}}>{izApp}回出場</div></div>
          <div style={{padding:"10px",background:"#f0f4f8",borderRadius:8}}><div style={{fontSize:11,color:"#666"}}>{ekAlias.zennihon}</div><div style={{fontSize:22,fontWeight:900,color:"#FFA500"}}>{zeW}<span style={{fontSize:12}}>勝</span></div><div style={{fontSize:10,color:"#999"}}>{zeApp}回出場</div></div>
          <div style={{padding:"10px",background:"#f0f4f8",borderRadius:8}}><div style={{fontSize:11,color:"#666"}}>{ekAlias.hakone}</div><div style={{fontSize:22,fontWeight:900,color:"#FFA500"}}>{haW}<span style={{fontSize:12}}>勝</span></div><div style={{fontSize:10,color:"#999"}}>{haApp}回出場</div></div>
        </div>
        <div style={{fontSize:14,color:"#333",lineHeight:1.9}}>
          <div>3大駅伝 通算優勝 <b style={{fontSize:20,color:"#FF6347"}}>{totalW}</b> 回</div>
          {tripleCrowns>0&&<div style={{color:"#FFA500",fontWeight:800,marginTop:4}}>👑 三冠達成 {tripleCrowns} 回</div>}
        </div>
        <div style={{marginTop:16,fontSize:12,color:"#888",lineHeight:1.7}}>40年にわたる選手育成、本当にお疲れさまでした。<br/>あなたが育てた選手たちの記録は、殿堂に永遠に刻まれています。</div>
      </div>
      <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
        <button onClick={()=>setPh("hall")} style={{padding:"12px 24px",borderRadius:50,background:"#FFD700",color:"#0f3460",fontWeight:800,border:"none",fontSize:14}}>🏆 殿堂を見る</button>
        <button onClick={()=>setPh("records")} style={{padding:"12px 24px",borderRadius:50,background:"rgba(255,255,255,0.9)",color:"#0f3460",fontWeight:800,border:"none",fontSize:14}}>📊 記録を見る</button>
      </div>
      <div style={{marginTop:14}}><button onClick={()=>setPh("title")} style={{padding:"10px 22px",borderRadius:50,background:"transparent",color:"#fff",fontWeight:600,border:"1px solid rgba(255,255,255,0.5)",fontSize:13}}>タイトルへ戻る</button></div>
    </div></div></>);}
  if(ph==="team_titles"){const earned=Object.keys(teamTitles||{}).filter(k=>teamTitles[k]&&teamTitles[k].count>0);return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><h2 className="sf">🎖 チーム称号</h2><button onClick={()=>setPh("records")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div>
    <div style={{fontSize:12,color:"var(--t2)",marginBottom:10,padding:10,background:"var(--card)",borderRadius:8,border:"1px solid var(--bdr)"}}>チーム称号は、大学が成し遂げた偉業の記録です。獲得済み {earned.length}/{Object.keys(TEAM_TITLES).length} 種類。</div>
    {Object.entries(TEAM_TITLES).map(([k,t])=>{const got=teamTitles[k]&&teamTitles[k].count>0;const info=teamTitles[k]||{count:0,years:[]};return(<div key={k} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:10,marginBottom:6,background:got?"linear-gradient(135deg,var(--cs),#fff)":"var(--card)",border:got?"2px solid var(--ac)":"1px solid var(--bdr)",opacity:got?1:0.7}}><div style={{fontSize:30,filter:got?"none":"grayscale(1)"}}>{got?t.icon:"❓"}</div><div style={{flex:1}}><div style={{fontWeight:800,fontSize:15,color:got?"var(--ac)":"var(--t3)"}}>{got?t.n:"？？？？？"}{got&&info.count>1&&<span style={{fontSize:12,marginLeft:6,color:"var(--gold)"}}>×{info.count}</span>}</div><div style={{fontSize:11,color:"var(--t3)"}}>{got?t.d:"獲得すると称号名と条件が表示されます"}</div>{got&&info.years.length>0&&<div style={{fontSize:10,color:"var(--t3)",marginTop:2}}>獲得: {info.years.map(y=>"Y"+y).join(", ")}</div>}</div>{got&&<div style={{fontSize:20,color:"var(--ac)"}}>✓</div>}</div>);})}
  </div></div></>);}

  if(ph==="career_hof"){return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><h2 className="sf">📚 キャリア殿堂</h2><button onClick={()=>setPh("title")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div>
    <div style={{fontSize:12,color:"var(--t2)",marginBottom:10,padding:10,background:"var(--card)",borderRadius:8,border:"1px solid var(--bdr)"}}>30年以上プレイした監督キャリアの記録が永久保存されます。新しいゲームを開始すると、その時点の戦績がここに刻まれます。</div>
    {(!careerHOF||careerHOF.length===0)&&<div style={{color:"var(--t3)",textAlign:"center",padding:40}}>まだキャリア記録はありません。<br/>30年以上プレイして新しいゲームを始めると記録されます。</div>}
    {(careerHOF||[]).map((c,i)=>{const tt=Object.keys(c.teamTitles||{}).filter(k=>c.teamTitles[k]&&c.teamTitles[k].count>0);const al=c.ekAliasSnapshot||{izumo:"出雲",zennihon:"全日本",hakone:"箱根"};return(<div key={i} style={{background:"var(--card)",borderRadius:12,padding:16,marginBottom:10,border:"1px solid var(--bdr)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:8,borderBottom:"2px solid var(--ac)",paddingBottom:6}}><span className="sf" style={{fontSize:18,fontWeight:800}}>{c.alias||c.univ}</span><span style={{fontSize:12,color:"var(--t2)"}}>{c.years}年間 / {c.savedAt}</span></div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,fontSize:12,marginBottom:8}}>
        <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}>{al.izumo}: <b>{c.ekStats.izumo.app}回出場 / {c.ekStats.izumo.win}回優勝</b></div>
        <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}>{al.zennihon}: <b>{c.ekStats.zennihon.app}回出場 / {c.ekStats.zennihon.win}回優勝</b></div>
        <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}>{al.hakone}: <b>{c.ekStats.hakone.app}回出場 / {c.ekStats.hakone.win}回優勝</b></div>
        <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}>累積スカウトP: <b>{c.cumScout}</b></div>
      </div>
      <div style={{fontSize:12,marginBottom:6}}><b>自校ベストタイム:</b> 5000m {c.bestTimes.t5?fmt(c.bestTimes.t5):"---"} / 10000m {c.bestTimes.t10?fmt(c.bestTimes.t10):"---"} / ハーフ {c.bestTimes.half?fmt(c.bestTimes.half):"---"}</div>
      <div style={{fontSize:12,marginBottom:6}}><b>駅伝最高タイム:</b> {al.izumo} {c.ekBest.izumo?fmt(c.ekBest.izumo):"---"} / {al.zennihon} {c.ekBest.zennihon?fmt(c.ekBest.zennihon):"---"} / {al.hakone} {c.ekBest.hakone?fmt(c.ekBest.hakone):"---"}</div>
      <div style={{fontSize:12,marginBottom:6}}><b>殿堂入り選手:</b> {c.playerTitleCount}名 {Object.keys(c.playerTitleTypes||{}).length>0&&<span style={{color:"var(--t2)"}}>({Object.entries(c.playerTitleTypes).map(([k,v])=>k+"×"+v).join(", ")})</span>}</div>
      <div style={{fontSize:12}}><b>チーム称号:</b> {tt.length>0?tt.map(k=>(TEAM_TITLES[k]?TEAM_TITLES[k].icon+TEAM_TITLES[k].n:k)+(c.teamTitles[k].count>1?"×"+c.teamTitles[k].count:"")).join(" / "):"なし"}</div>
    </div>);})}
  </div></div></>);}


  if(ph==="help")return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}} className="fi">
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}><h2 className="sf">遊び方</h2><button onClick={()=>setPh("title")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div>

    <div style={{background:"linear-gradient(135deg,var(--ac),#2c5fa0)",borderRadius:12,padding:18,marginBottom:14,color:"#fff"}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,fontWeight:800}}>🎯 このゲームの基本</h3>
      <div style={{fontSize:14,lineHeight:1.9}}>
        <b>練習施設のレベルを上げながら、練習とレースを繰り返して選手を育てるゲーム</b>です。<br/><br/>
        大まかな流れはこの3つの繰り返し:<br/>
        <b>① 練習</b> — 毎週、選手に練習メニューを指示して能力を伸ばす<br/>
        <b>② レース</b> — 記録会や3大駅伝に出場して結果を残す<br/>
        <b>③ 強化</b> — 稼いだポイントで施設・コーチを強化し、有望な新入生をスカウト<br/><br/>
        これを4年周期(選手は4年で卒業)で回しながら、<b>3大駅伝での優勝、そして三冠</b>を目指します。最長40年の監督生活で、どこまで強い大学を作れるかに挑戦しましょう。
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>🏃 ゲーム概要</h3>
      <div style={{fontSize:13,lineHeight:1.8,color:"var(--t2)"}}>あなたは大学駅伝部の監督です。選手をスカウトして育成し、3大駅伝（{ekAlias.izumo}・{ekAlias.zennihon}・{ekAlias.hakone}）での優勝を目指します。学生は4年間在籍して卒業し、毎年新しい新入生を迎えます。<b>監督生活は最長40年間</b>。その間にどれだけの栄光を掴めるか挑戦しましょう。タイトル画面では大学を新しく作るか、既存の大学から選んで監督に就任できます。</div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>📅 1年の流れ</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        <div><b>春〜夏</b>: 記録会で5000m・10000mの自己ベストを狙い、夏合宿で能力アップ</div>
        <div><b>秋</b>: {ekAlias.zennihon}予選会、{ekAlias.izumo}本戦、{ekAlias.hakone}予選会、{ekAlias.zennihon}本戦</div>
        <div><b>冬〜年始</b>: {ekAlias.hakone}本戦。年末に新入生が入学</div>
        <div><b>年始〜春</b>: ハーフマラソンや記録会で実力を磨くオフシーズン</div>
        <div style={{marginTop:6,fontSize:12,color:"var(--t3)"}}>毎ターン練習メニューを選んで選手を育てましょう。</div>
        <div style={{marginTop:10,fontSize:12,lineHeight:1.8}}>
          <div style={{fontWeight:700,color:"var(--ac)",marginBottom:4}}>📋 練習メニュー (全12種)</div>
          <div>・<b>バランス</b>：全能力を均等に伸ばす。疲労が少なく安定した育成。</div>
          <div>・<b>基本走力</b>：スピード・スタミナ・安定感の3点を強化。万能型エースを目指す育成。</div>
          <div>・<b>スピード</b>：速度を大きく伸ばす。トラック能力も上昇。短距離型育成向け。</div>
          <div>・<b>スタミナ</b>：持久力を大きく伸ばす。駅伝の長距離区間で活きる。疲労が大きい。</div>
          <div>・<b>メンタル</b>：安定感を大きく伸ばす。単独走・集団走も向上し、本番に強い選手に。</div>
          <div>・<b>上り</b>：登坂能力を強化。山区間({ekAlias.hakone}5区など)のスペシャリスト育成に。</div>
          <div>・<b>下り</b>：降坂能力を強化。山下り区間({ekAlias.hakone}6区など)の対策に。</div>
          <div>・<b>集団走</b>：集団内での走力を伸ばす。集団走能力が大きく上昇。</div>
          <div>・<b>単独走</b>：単独での走力を伸ばす。エース区間や独走シーンで強い選手に。</div>
          <div>・<b>トラック</b>：トラック走を強化。5000m・10000mの自己ベスト更新を狙う練習。</div>
          <div>・<b>ロード</b>：ロード走を強化。駅伝・ハーフマラソン向けの実戦的な練習。</div>
          <div>・<b>{ekAlias.hakone}対策</b>：スタミナ・登坂・ロードを重点強化。{ekAlias.hakone}の山区間と長距離区間を見据えた特化練習。</div>
          <div style={{marginTop:6,color:"var(--t3)",fontSize:11}}>※ 練習メニューは選手ごとに個別設定可能。疲労が高い時は「休養」を選びましょう。</div>
          <div style={{marginTop:4,color:"var(--gold)",fontSize:11}}>※ 練習効果は施設レベル・コーチレベル・秘蔵っ子設定によって大きく変わります。</div>
        </div>
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>💪 9種類の能力</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        <div><b>速度</b>: 短い距離での速さ。記録会やラストスパートで活きる</div>
        <div><b>持久</b>: 長距離での粘り強さ。ハーフ以上で重要</div>
        <div><b>メンタル(安定感)</b>: タイムが安定し、先頭との差で崩れにくくなる</div>
        <div><b>登坂力</b>: 山登り区間で活きる</div>
        <div><b>降坂力</b>: 山下り区間で活きる</div>
        <div><b>単独走</b>: 一人で走る展開で活きる</div>
        <div><b>集団走</b>: 集団で走る区間で活きる</div>
        <div><b>トラック</b>: トラックの記録会で活きる</div>
        <div><b>ロード</b>: 駅伝やハーフの公道で活きる</div>
        <div style={{marginTop:6,fontSize:11,color:"var(--t3)"}}>区間や種目に応じて活きる能力が変わります。適材適所の配置が勝利のカギ。</div>
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>📈 選手の成長</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        <div>・各選手には<b>ポテンシャル(伸びしろ)</b>があり、練習でその上限まで成長します</div>
        <div>・選手ごとに<b>成長期</b>があり、その時期は特に大きく伸びます</div>
        <div>・練習メニューによって伸びる能力が変わります</div>
        <div>・記録会や駅伝への出場でも成長します</div>
        <div>・施設やコーチを強化すると成長が速くなります</div>
        <div>・若い選手ほど伸びしろが大きく、化ける可能性を秘めています</div>
        <div>・<b>秘蔵っ子</b>に設定した選手は、ポテンシャルが上がり練習効率も上昇します（毎年設定可能）</div>
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>🏥 疲労と怪我</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        <div>・練習やレースで<b>疲労</b>がたまります。疲労が高いと故障しやすくなります</div>
        <div>・レース出場後は特に大きく疲労がたまります</div>
        <div>・<b>休養</b>で疲労を回復し、コンディションも整います</div>
        <div>・<b>自動休養</b>機能で疲れた選手を自動的に休ませられます</div>
        <div>・<b>医療施設</b>を強化すると怪我が減り、回復も早まります</div>
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>🎓 スカウトと新入生</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        <div>毎年12月に新入生が入学します。<b>スカウトポイント</b>が多いほど優秀な選手を獲得できます。</div>
        <div style={{marginTop:6}}>スカウトポイントは、知名度・施設・コーチの強化、そして駅伝や記録会での好成績によって増えていきます。</div>
        <div style={{marginTop:6}}>有力な新入生ほど強豪校に集まる傾向があります。チームを強化して、より良い選手を集めましょう。</div>
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>🏆 三大駅伝の出場権</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        <div>・<b>{ekAlias.izumo}</b>: 前年の{ekAlias.hakone}上位校が出場</div>
        <div>・<b>{ekAlias.zennihon}</b>: 前年のシード校 + 予選会通過校</div>
        <div>・<b>{ekAlias.hakone}</b>: 前年のシード校 + 予選会通過校 + 関東学連選抜</div>
        <div style={{marginTop:6}}>・<b>関東学連選抜</b>: 本戦に出られない大学のエース選手で編成。予選敗退でも自校のエースが出場できる可能性があります</div>
        <div style={{marginTop:6}}>予選会を突破すると施設ポイントのボーナスがもらえます。</div>
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>🔧 施設強化</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        年度終了時にもらえる<b>施設ポイント</b>で施設を強化できます:
        <div style={{marginTop:4}}>・<b>練習施設(能力別)</b>: 各能力ごとに成長を加速</div>
        <div>・<b>医療</b>: 怪我を減らし、休養の回復量を増やす</div>
        <div>・<b>コーチ</b>: すべての能力の成長を加速</div>
        <div>・<b>知名度</b>: スカウトポイントを増やす</div>
        <div style={{marginTop:6,fontSize:11,color:"var(--t3)"}}>コーチと知名度は幅広く効くので、序盤の投資先としておすすめです。</div>
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>🌏 外国人留学生</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        <div>一部の大学(設定で変更可能)は、スピードとスタミナに優れた外国人留学生を獲得できます。</div>
        <div style={{marginTop:6}}>・各大学に複数在籍できますが、駅伝・予選会で出場できるのは1名のみ</div>
        <div>・記録データベースで「日本人のみ」の絞り込みも可能です</div>
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>⭐ お気に入り選手</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        選手カードやプロフィールの星マークでお気に入り登録。選手一覧や選出画面で「お気に入りのみ」に絞り込めるので、主力選手の管理が楽になります。
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>🏆 記録と殿堂</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        <div>記録データベースでは、5000m・10000m・ハーフ・駅伝区間の歴代記録を閲覧できます。</div>
        <div style={{marginTop:6}}>「殿堂」では3大駅伝の歴代トップ5チームや年別記録を確認できます。各大学の情報画面では出場回数・優勝回数・シーズン別成績も見られます。</div>
        <div style={{marginTop:6}}>同じ年に3大駅伝をすべて優勝すると「三冠」達成！大学駅伝史に名を刻みましょう。</div>
        <div style={{marginTop:6}}>特別な活躍を遂げて卒業した選手は<b>「殿堂入り選手」</b>として永久に記録されます。27分台ランナー、皆勤賞、駅伝の鬼、山の神など、9つの栄誉ある称号があります。</div>
        <div style={{marginTop:6}}>監督生活は<b>40年間</b>。40年目を終えると、これまでの戦績を振り返るエンディングを迎えます。</div>
      </div>
    </div>

    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <h3 className="sf" style={{fontSize:18,marginBottom:8,color:"var(--ac)"}}>⚙ カスタマイズ</h3>
      <div style={{fontSize:13,lineHeight:1.9,color:"var(--t2)"}}>
        設定画面では大学名・スクールカラー(自由な色指定が可能)、各大学・3大駅伝の名称、留学生の受入設定、自動休養などを変更できます。あなただけのオリジナル駅伝ワールドを作りましょう。
      </div>
    </div>

    <div style={{textAlign:"center",margin:"20px 0"}}><button onClick={()=>setPh("title")} style={{padding:"10px 30px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800}}>タイトルへ戻る</button></div>
  </div></div></>);
  if(ph==="foreign_cfg")return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}} className="fi">
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}><h2 className="sf">🌏 留学生受入設定</h2><button onClick={()=>setPh(rs.length>0?"settings":"title")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div>
    <div style={{fontSize:12,color:"var(--t2)",marginBottom:10,padding:10,background:"var(--card)",borderRadius:8,border:"1px solid var(--bdr)"}}>各大学が外国人留学生を受け入れるか設定します。ONにした大学は毎年度末に外国人留学生を入学させる可能性があります(新2-4年に1人もいなければ確定、いれば40%)。</div>
    <div style={{fontSize:12,color:"var(--t2)",background:"var(--card)",borderRadius:8,padding:10,marginBottom:10,lineHeight:1.7,border:"1px solid var(--bdr)"}}>🌏 受入を許可した大学には、外国人留学生が加入することがあります。<br/><b>留学生の入学は最速でも2年目の4月（新シーズン開始時）</b>です。1年目には加入しません。<br/>各大会・予選会に出走できる留学生は1名までです。</div>
    <div style={{display:"flex",gap:8,marginBottom:10}}><button onClick={()=>setForeignAllowed(p=>{const n={};Object.keys(p).forEach(k=>n[k]=true);return n;})} style={{padding:"6px 14px",borderRadius:6,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)",fontSize:11}}>全てON</button><button onClick={()=>setForeignAllowed({})} style={{padding:"6px 14px",borderRadius:6,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)",fontSize:11}}>全てOFF</button><button onClick={()=>{const n={};FOREIGN_UNIVS.forEach(name=>n[name]=true);setForeignAllowed(n);}} style={{padding:"6px 14px",borderRadius:6,background:"var(--card)",color:"var(--ac)",border:"1px solid var(--bdr)",fontSize:11}}>デフォルト</button></div>
    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:10}}>
      <div style={{padding:"6px 10px",background:"var(--cs)",borderRadius:6,marginBottom:4,display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid var(--ac)"}}><span style={{fontWeight:700}}>{tn}大学 (自校)</span><button onClick={()=>setForeignAllowed(p=>({...p,[teamName]:!p[teamName]}))} style={{padding:"3px 14px",borderRadius:14,background:foreignAllowed[teamName]?"var(--ac)":"var(--card)",color:foreignAllowed[teamName]?"#fff":"var(--t2)",border:"1px solid var(--bdr)",fontSize:11,fontWeight:700}}>{foreignAllowed[teamName]?"許可":"禁止"}</button></div>
      {UNIV.map(u=>(<div key={u[0]} style={{padding:"6px 10px",borderRadius:6,marginBottom:3,display:"flex",justifyContent:"space-between",alignItems:"center",background:"var(--bg)"}}><span style={{fontSize:12}}>{u[0]}</span><button onClick={()=>setForeignAllowed(p=>({...p,[u[0]]:!p[u[0]]}))} style={{padding:"3px 14px",borderRadius:14,background:foreignAllowed[u[0]]?"var(--ac)":"var(--card)",color:foreignAllowed[u[0]]?"#fff":"var(--t2)",border:"1px solid var(--bdr)",fontSize:11,fontWeight:700}}>{foreignAllowed[u[0]]?"許可":"禁止"}</button></div>))}
    </div>
  </div></div></>);
  if(ph==="rename_cfg")return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}} className="fi">
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}><h2 className="sf">✏ 名称変更</h2><button onClick={()=>setPh(rs.length>0?"settings":"title")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div>
    <div style={{fontSize:12,color:"var(--t2)",marginBottom:10,padding:10,background:"var(--card)",borderRadius:8,border:"1px solid var(--bdr)"}}>各大学・3大駅伝の表示名を変更できます。空欄にするとデフォルト名に戻ります。</div>
    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:12,marginBottom:12}}>
      <div style={{fontSize:13,fontWeight:700,marginBottom:8}}>3大駅伝の名称</div>
      {[{k:"izumo",d:"島根駅伝"},{k:"zennihon",d:"熱田伊勢駅伝"},{k:"hakone",d:"正月駅伝"}].map(ek=>(<div key={ek.k} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6,fontSize:12}}><div style={{minWidth:90,color:"var(--t2)"}}>{ek.d}</div><input value={ekAlias[ek.k]||ek.d} onChange={e=>setEkAlias(p=>({...p,[ek.k]:e.target.value||ek.d}))} style={{padding:"5px 8px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:12,flex:1}}/></div>))}
    </div>
    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:12}}>
      <div style={{fontSize:13,fontWeight:700,marginBottom:8}}>大学名</div>
      {UNIV.map(u=>(<div key={u[0]} style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,fontSize:11}}><div style={{minWidth:110,color:"var(--t2)",fontSize:10}}>{u[0]}</div><input value={univAlias[u[0]]||""} onChange={e=>setUnivAlias(p=>{const n={...p};if(e.target.value)n[u[0]]=e.target.value;else delete n[u[0]];return n;})} placeholder={u[0]} style={{padding:"4px 8px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:11,flex:1}}/></div>))}
    </div>
  </div></div></>);
  if(ph==="settings")return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:600,margin:"0 auto"}} className="fi">
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}><h2 className="sf">⚙ 設定</h2><button onClick={()=>setPh("main")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div>
    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <div style={{fontSize:14,fontWeight:700,marginBottom:8}}>大学名</div>
      <div style={{display:"flex",alignItems:"center",gap:4}}><input value={tn} onChange={e=>setTn(e.target.value)} className="sf" style={{background:"#fff",border:"2px solid var(--bdr)",borderRadius:8,padding:"8px 12px",fontSize:16,width:200}}/><span className="sf" style={{fontSize:16,fontWeight:700}}>大学</span></div>
    </div>
    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}>
      <div style={{fontSize:14,fontWeight:700,marginBottom:8}}>名称変更</div><button onClick={()=>setPh("rename_cfg")} style={{padding:"8px 16px",borderRadius:8,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)",fontSize:13,marginBottom:6}}>✏ 大学名・駅伝名を編集</button></div><div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}><div style={{fontSize:14,fontWeight:700,marginBottom:8}}>留学生受入設定</div><button onClick={()=>setPh("foreign_cfg")} style={{padding:"8px 16px",borderRadius:8,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)",fontSize:13,marginBottom:6}}>🌏 大学別 受入許可を編集</button></div><div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:16,marginBottom:12}}><div style={{fontSize:14,fontWeight:700,marginBottom:8}}>スクールカラー</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:10}}>{["#C0392B","#E67E22","#F39C12","#16A085","#27AE60","#2980B9","#8E44AD","#2C3E50","#D35400","#E74C3C","#1ABC9C","#3498DB","#9B59B6","#34495E","#7F8C8D","#95A5A6","#006633","#7B2D8B","#8B2252","#D32F2F","#5B3C8F","#1C2841","#0055AA","#2D1A4E","#0046AD","#DAA520","#2E7D32","#7B1FA2","#1976D2","#5BC0EB"].map(c=>(<button key={c} onClick={()=>setTc(c)} style={{width:32,height:32,borderRadius:"50%",background:c,border:tc===c?"3px solid #000":"2px solid var(--bdr)",cursor:"pointer"}}/>))}</div>
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderTop:"1px solid var(--bdr)"}}><div style={{fontSize:12,color:"var(--t2)"}}>RGB指定</div><input type="color" value={tc} onChange={e=>setTc(e.target.value)} style={{width:50,height:36,border:"none",cursor:"pointer",background:"transparent"}}/><input type="text" value={tc} onChange={e=>{const v=e.target.value;if(/^#[0-9A-Fa-f]{0,6}$/.test(v))setTc(v);}} style={{padding:"6px 10px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:13,fontFamily:"monospace",width:90}} placeholder="#0055AA"/><div style={{width:36,height:36,borderRadius:"50%",background:tc,border:"2px solid var(--bdr)"}}/></div>
    </div>
  </div></div></>);
  if(ph==="main"){const up=[];for(let t=turn+1;t<=Math.min(turn+6,48);t++){if(CAL[t])up.push({turn:t,...CAL[t]});}return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><div><div style={{fontSize:12,color:"var(--ac)",fontWeight:700,letterSpacing:2}}>{teamName} {gameYear}年目</div><div className="sf" style={{fontSize:24,fontWeight:800}}>{moOf(turn)} 第{wkOf(turn)}週</div></div><div style={{textAlign:"right"}}><div style={{fontSize:12,color:"var(--t2)"}}>T{turn}/48 🏆{prestige}pt</div><div style={{fontSize:10,color:"var(--t3)"}}>オートセーブON</div></div></div>
    <div style={{display:"flex",gap:5,marginBottom:8,flexWrap:"wrap",fontSize:11}}>{[[ekAlias.zennihon+"予選",zenQ===true],[ekAlias.izumo+"(前"+ekAlias.hakone.slice(0,2)+(prevHakone||"--")+")",prevHakone!=null&&prevHakone<=10],[ekAlias.zennihon.slice(0,4)+"(前"+(prevZennihon||"--")+")",prevZennihon!=null&&prevZennihon<=8||zenQ],[ekAlias.hakone+"予選",hakQ===true],[ekAlias.hakone,sRes.hakone]].map(([n,v],i)=>(<div key={i} style={{padding:"3px 8px",borderRadius:5,background:"var(--card)",border:"1px solid var(--bdr)",color:v===true?"var(--grn)":(typeof v==="number"?(v<=3?"var(--gold)":"var(--t)"):"var(--t3)")}}>{n}:{v===true?"通過":(typeof v==="number"?v+"位":"---")}</div>))}</div>
    {up.length>0&&<div style={{marginBottom:10,padding:"8px 14px",borderRadius:8,background:"var(--card)",border:"1px solid var(--bdr)"}}><div style={{fontSize:11,color:"var(--t2)",fontWeight:700}}>📅 予定</div>{up.map((e,i)=>{const displayN=e.eid&&ekAlias[e.eid]?ekAlias[e.eid]:e.t==="zenQ"?(ekAlias.zennihon||"全日本大学駅伝")+"予選会":e.t==="hakQ"?(ekAlias.hakone||"箱根駅伝")+"予選会":e.n;return(<div key={i} style={{fontSize:13,color:e.turn===turn+1?"var(--ac)":"var(--t)",fontWeight:e.turn===turn+1?700:400}}>{moOf(e.turn)}{wkOf(e.turn)}週: {displayN}{e.turn===turn+1?" ← 次":""}</div>);})}</div>}
    <button onClick={()=>{setSelR(null);setFavOnly(false);setPh("training");}} style={{width:"100%",padding:"16px",borderRadius:12,background:"var(--ac)",color:"#fff",fontWeight:800,fontSize:18,border:"none",marginBottom:12,boxShadow:"0 3px 10px rgba(0,85,170,0.3)"}}>▶ 練習・選手管理へ</button>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8,marginBottom:12}}>
      <button onClick={()=>{setViewRiv(-1);setPh("rival_view");}} style={{padding:"14px",borderRadius:10,background:"var(--card)",color:"var(--ac)",fontWeight:700,border:"1px solid var(--bdr)",fontSize:14}}>🏫 大学一覧</button>
      <button onClick={()=>setPh("records")} style={{padding:"14px",borderRadius:10,background:"var(--card)",color:"var(--gold)",fontWeight:700,border:"1px solid var(--bdr)",fontSize:14}}>📊 記録・殿堂</button>
      <button onClick={()=>setPh("facility")} style={{padding:"14px",borderRadius:10,background:"var(--card)",color:"var(--grn)",fontWeight:700,border:"1px solid var(--bdr)",fontSize:14}}>🏋 施設強化</button>
      <button onClick={()=>setPh("settings")} style={{padding:"14px",borderRadius:10,background:"var(--card)",color:"var(--t2)",fontWeight:700,border:"1px solid var(--bdr)",fontSize:14}}>⚙ 設定</button>
    </div>
    <div style={{padding:"6px 12px",borderRadius:8,background:"var(--card)",border:"1px solid var(--bdr)",maxHeight:90,overflowY:"auto"}}><div style={{fontSize:10,color:"var(--t3)",fontWeight:700,marginBottom:2}}>ログ</div>{log.slice(-6).reverse().map((l,i)=>(<div key={i} style={{fontSize:12,color:i===0?"var(--t)":"var(--t2)"}}>{l}</div>))}</div>
  </div></div></>);}

  if(ph==="training"){return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><div><div style={{fontSize:12,color:"var(--ac)",fontWeight:700,letterSpacing:2}}>{teamName} {gameYear}年目 — 練習</div><div className="sf" style={{fontSize:22,fontWeight:800}}>{moOf(turn)} 第{wkOf(turn)}週</div></div><button onClick={()=>setPh("main")} style={{padding:"8px 16px",borderRadius:8,background:"var(--card)",color:"var(--t)",fontWeight:700,border:"1px solid var(--bdr)"}}>🏠 ホーム</button></div>
    <div style={{marginBottom:4}}><span style={{fontSize:13,fontWeight:700,color:"var(--ac)"}} className="sf">📋 全員に同じ練習メニューを設定: </span><div style={{marginTop:4}}>{TRS.map(tr=>(<button key={tr.id} onClick={()=>setAllTrn(tr.id)} style={{padding:"4px 10px",borderRadius:6,background:"var(--card)",color:"var(--t2)",border:"1px solid var(--bdr)",marginRight:4,marginBottom:4}}>{tr.n}</button>))}</div><div style={{fontSize:11,color:"var(--t3)",marginTop:2}}>※ 個別の練習メニューは下の各選手カードで設定できます</div></div>
    <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:6,fontSize:12}}><label style={{display:"flex",gap:4,alignItems:"center"}}><input type="checkbox" checked={autoRest} onChange={e=>setAutoRest(e.target.checked)} style={{accentColor:"var(--ac)"}}/><span style={{color:"var(--t2)"}}>自動休養 疲労</span></label><select value={autoRestThreshold} onChange={e=>setAutoRestThreshold(+e.target.value)} style={{padding:"2px 4px",borderRadius:4,border:"1px solid var(--bdr)",background:"var(--card)",fontSize:12}}>{[20,30,40,50,60,70,80].map(v=>(<option key={v} value={v}>{v}</option>))}</select><span style={{color:"var(--t2)"}}>以上</span></div>
    <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"}}><button onClick={doTrain} style={{padding:"12px 50px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800,fontSize:16}}>▶ 練習実行</button><button onClick={()=>{setForceRest(true);}} style={{padding:"12px 20px",borderRadius:50,background:"var(--card)",color:"var(--grn)",fontWeight:700,border:"1px solid var(--bdr)"}}>全員休養(1週)</button><button onClick={()=>setPh("protege")} style={{padding:"12px 20px",borderRadius:50,background:"var(--card)",color:"var(--gold)",fontWeight:700,border:"1px solid var(--bdr)"}}>⭐ 秘蔵っ子</button></div>
    {forceRest&&<div style={{color:"var(--grn)",fontSize:12,marginBottom:6}}>→次の練習実行で全員休養</div>}
    <div className="fi"><SortB sm={sm} setSm={setSm} yf={yf} setYf={setYf} favOnly={favOnly} setFavOnly={setFavOnly}/>{filt.map(r=>(<MR key={r.id} r={r} onClick={()=>{setViewProfile(r);setProfileFrom("training");setPh("profile");}} showG showTrn onTrn={setTrnR} fac={fac} ar={autoRest} arT={autoRestThreshold} onFav={toggleFav}/>))}</div>
  </div></div></>);}



  if(ph==="year_end"){const mySub28Count=rs.filter(r=>r.pb10k&&r.pb10k<1740).length;const mySub27Count=rs.filter(r=>r.pb10k&&r.pb10k<1680).length;const mySub5k1330Count=rs.filter(r=>r.pb5k&&r.pb5k<810).length;const mySubHalf163Count=rs.filter(r=>r.pbHalf&&r.pbHalf<3780).length;const earned=calcPrestige(sRes,mySub28Count,{hakone:sRes.hakoneSecWins||0,zennihon:sRes.zennihonSecWins||0,izumo:sRes.izumoSecWins||0},mySub27Count,mySub5k1330Count,mySubHalf163Count);if(!yearHistory.find(h=>h.year===gameYear)){
    setYearHistory(p=>[...p,{year:gameYear,...sRes}]);setPrestige(p=>p+earned);
    /* Build scout history for all teams - DEEP COPY to avoid mutation */
    const newHist={};Object.keys(scoutHist).forEach(k=>{newHist[k]=[...scoutHist[k]];});
    const addH=(name,data)=>{if(!newHist[name])newHist[name]=[];newHist[name]=[...newHist[name],data];};
    /* My team */
    const mySub28=rs.filter(r=>r.pb10k&&r.pb10k<1740).length;
    const mySub27Y=rs.filter(r=>r.pb10k&&r.pb10k<1680).length;const mySub5k1330Y=rs.filter(r=>r.pb5k&&r.pb5k<810).length;const mySubHalf163Y=rs.filter(r=>r.pbHalf&&r.pbHalf<3780).length;
    addH("__ME__",{...sRes,year:gameYear,sub28:mySub28,sub27:mySub27Y,sub5k1330:mySub5k1330Y,subHalf163:mySubHalf163Y,hakoneSecWins:sRes.hakoneSecWins||0,zennihonSecWins:sRes.zennihonSecWins||0,izumoSecWins:sRes.izumoSecWins||0});
    rivals.forEach(rv=>{const sub28=rv.runners.filter(r=>r.pb10k&&r.pb10k<1740).length;const sub27=rv.runners.filter(r=>r.pb10k&&r.pb10k<1680).length;const sub5k=rv.runners.filter(r=>r.pb5k&&r.pb5k<810).length;const subH=rv.runners.filter(r=>r.pbHalf&&r.pbHalf<3780).length;const yr=rv.yearRes||{};addH(rv.name,{year:gameYear,hakone:yr.hakone||null,zennihon:yr.zennihon||null,izumo:yr.izumo||null,sub28,sub27,sub5k1330:sub5k,subHalf163:subH,hakoneSecWins:yr.hakoneSecWins||0,zennihonSecWins:yr.zennihonSecWins||0,izumoSecWins:yr.izumoSecWins||0});});
    setScoutHist(newHist);
    /* Run draft */
    const rivalHists={};rivals.forEach(rv=>{rivalHists[rv.name]=newHist[rv.name]||[];});
    setDraftResult(autoDraft(rivals,rs,sRes,newHist["__ME__"]||[],rivalHists,fac,gameYear));
  }
  const dr=draftResult;const myTeam=dr?dr.teams.find(t=>t.isMe):null;
  return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"linear-gradient(180deg,#fff,#f0ede6)",padding:20}}><div style={{maxWidth:600,margin:"0 auto"}} className="fi">
    {titleNotif&&titleNotif.length>0&&<div style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",borderRadius:12,padding:16,marginBottom:14,textAlign:"center",boxShadow:"0 4px 16px rgba(255,165,0,0.4)"}}><div style={{fontSize:14,fontWeight:800,color:"#7a4a00",marginBottom:6}}>🎖 チーム称号を獲得！</div>{titleNotif.map(k=>(<div key={k} style={{fontSize:16,fontWeight:800,color:"#222"}}>{TEAM_TITLES[k]?TEAM_TITLES[k].icon+" "+TEAM_TITLES[k].n:k}</div>))}<button onClick={()=>setTitleNotif([])} style={{marginTop:8,padding:"4px 16px",borderRadius:20,background:"rgba(255,255,255,0.7)",border:"none",fontSize:11,fontWeight:700,cursor:"pointer"}}>閉じる</button></div>}
    <div style={{textAlign:"center",marginBottom:14}}><div style={{fontSize:13,letterSpacing:8,color:"var(--ac)",fontWeight:700}}>{gameYear}年目 終了</div><h1 className="sf" style={{fontSize:26,marginBottom:10}}>{teamName}</h1>{[["izumo",ekAlias.izumo],["zennihon",ekAlias.zennihon],["hakone",ekAlias.hakone]].map(([id,n])=>(<div key={id} style={{display:"flex",justifyContent:"space-between",padding:"8px 14px",borderRadius:8,background:"var(--card)",border:"1px solid var(--bdr)",marginBottom:4}}><span className="sf" style={{fontWeight:700}}>{n}</span><span style={{fontWeight:900,color:sRes[id]&&sRes[id]<=3?"var(--gold)":"var(--t)"}}>{sRes[id]?sRes[id]+"位":"不出場"}</span></div>))}<div style={{fontSize:14,color:"var(--gold)",fontWeight:700,marginTop:8}}>🏆 +{earned}pt（累計{prestige}pt）</div></div>
    {dr&&<div style={{marginTop:12}}><h3 className="sf" style={{fontSize:16,marginBottom:6}}>🎓 新入生入学（スカウトポイント制）</h3>
      {myTeam&&<div style={{fontSize:13,fontWeight:700,color:"var(--ac)",marginBottom:4}}>あなたのスカウトPt: {calcScoutPts(scoutHist["__ME__"]||[],fac.reputation,gameYear,fac)} → 獲得{myTeam.picks.length}名</div>}
      <div style={{maxHeight:250,overflowY:"auto",background:"var(--card)",border:"1px solid var(--bdr)",borderRadius:10,padding:6}}>{dr.pool.map((r,i)=>{const team=dr.teams.find(t=>t.picks.includes(i));const isMe=team&&team.isMe;return(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 8px",fontSize:12,background:isMe?"var(--cs)":"transparent",borderRadius:isMe?6:0,fontWeight:isMe?800:400,color:isMe?"var(--ac)":"var(--t)"}}><span>#{i+1} {r.name}</span><span style={{fontFamily:"monospace"}}>5k{fmt(r.pb5k)} 10k{fmt(r.pb10k)}</span><span style={{color:"var(--t2)",minWidth:80,textAlign:"right"}}>{team?(univAlias[team.name]||team.name).replace("__ME__",teamName):"---"}</span></div>);})}</div>
    </div>}
    <div style={{display:"flex",gap:8,justifyContent:"center",marginTop:16,flexWrap:"wrap"}}><button onClick={()=>setPh("records")} style={{padding:"10px 20px",borderRadius:50,background:"var(--card)",color:"var(--gold)",fontWeight:700,border:"1px solid var(--bdr)"}}>記録</button><button onClick={()=>setPh("facility")} style={{padding:"10px 20px",borderRadius:50,background:"var(--card)",color:"var(--grn)",fontWeight:700,border:"1px solid var(--bdr)"}}>施設</button><button onClick={()=>setPh("scout_pts")} style={{padding:"10px 30px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800,fontSize:15}}>▶ スカウトPt確認→新シーズン</button></div>
  </div></div></>);}

  if(ph==="protege"){
    const proArr=Array.isArray(proteges)?proteges:[];
    const slots=protegeSlots||1;
    const proPlayers=rs.filter(r=>proArr.includes(r.id));
    const canSetMore=proArr.length<slots&&turn<=48;
    const doDesignate=(r)=>{
      setRs(p=>p.map(x=>{if(x.id!==r.id)return x;const np={...(x.pot||x.stats)};SK.forEach(k=>{np[k]=Math.min(x.foreign?110:105,(np[k]||x.stats[k])+2+~~(Math.random()*3));});return{...x,pot:np,protege:true};}));
      setProteges(p=>[...(Array.isArray(p)?p:[]),r.id]);
      setProtegeConfirm(null);
    };
    const designate=(r)=>{
      if(proArr.includes(r.id))return;
      if(proArr.length>=slots)return;
      setProtegeConfirm(r);
    };
    const doUnlock=(cost,newSlots)=>{setPrestige(p=>p-cost);setProtegeSlots(newSlots);setSlotUnlockConfirm(null);};
    const unlock=(cost,newSlots)=>{
      if(prestige<cost)return;
      setSlotUnlockConfirm({cost,newSlots});
    };
    const healthy=sortR(rs.filter(r=>((!yf||yf.length===0)||yf.includes(r.year))&&(!favOnly||r.fav||!rs.some(x=>x.fav))),sm);
    return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><h2 className="sf">⭐ 秘蔵っ子</h2><button onClick={()=>setPh("training")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div>
      {protegeConfirm&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,padding:20}} onClick={()=>setProtegeConfirm(null)}><div onClick={e=>e.stopPropagation()} style={{background:"var(--bg)",borderRadius:14,padding:20,maxWidth:340,border:"2px solid var(--gold)"}}><div style={{fontWeight:800,fontSize:16,marginBottom:10}}>⭐ {protegeConfirm.name} を秘蔵っ子に設定</div><div style={{fontSize:13,color:"var(--t2)",lineHeight:1.7,marginBottom:16}}>・全能力のポテンシャルが上昇<br/>・練習効率が1.1倍<br/><br/><b style={{color:"var(--red)"}}>⚠ 一度設定すると今シーズン中は変更できません。</b></div><div style={{display:"flex",gap:8}}><button onClick={()=>doDesignate(protegeConfirm)} style={{flex:1,padding:"12px",borderRadius:8,background:"var(--gold)",color:"#fff",fontWeight:800,border:"none",fontSize:15}}>設定する</button><button onClick={()=>setProtegeConfirm(null)} style={{flex:1,padding:"12px",borderRadius:8,background:"var(--card)",color:"var(--t)",fontWeight:700,border:"1px solid var(--bdr)"}}>やめる</button></div></div></div>}
      {slotUnlockConfirm&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,padding:20}} onClick={()=>setSlotUnlockConfirm(null)}><div onClick={e=>e.stopPropagation()} style={{background:"var(--bg)",borderRadius:14,padding:20,maxWidth:340,border:"2px solid var(--ac)"}}><div style={{fontWeight:800,fontSize:16,marginBottom:10}}>秘蔵っ子枠を解放</div><div style={{fontSize:13,color:"var(--t2)",lineHeight:1.7,marginBottom:16}}>施設ポイント<b style={{color:"var(--ac)"}}>{slotUnlockConfirm.cost}pt</b>を使って枠を解放します。よろしいですか？</div><div style={{display:"flex",gap:8}}><button onClick={()=>doUnlock(slotUnlockConfirm.cost,slotUnlockConfirm.newSlots)} style={{flex:1,padding:"12px",borderRadius:8,background:"var(--ac)",color:"#fff",fontWeight:800,border:"none",fontSize:15}}>解放する</button><button onClick={()=>setSlotUnlockConfirm(null)} style={{flex:1,padding:"12px",borderRadius:8,background:"var(--card)",color:"var(--t)",fontWeight:700,border:"1px solid var(--bdr)"}}>やめる</button></div></div></div>}
      <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:12,marginBottom:10,fontSize:12,color:"var(--t2)",lineHeight:1.7}}>
        秘蔵っ子に設定した選手は<b style={{color:"var(--gold)"}}>全能力のポテンシャルが上昇</b>し、<b style={{color:"var(--gold)"}}>練習効率が1.1倍</b>になります。<br/>毎年設定でき、一度設定すると今シーズン中は変更できません。空き枠があればシーズン途中でも設定可能です。
      </div>
      <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:12,marginBottom:10}}>
        <div style={{fontWeight:700,marginBottom:6}}>秘蔵っ子枠: {proArr.length} / {slots}</div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {slots<2&&<button onClick={()=>unlock(50,2)} style={{padding:"6px 14px",borderRadius:6,background:prestige>=50?"var(--ac)":"var(--t3)",color:"#fff",fontWeight:700,border:"none",fontSize:12}}>2枠目を解放 (50pt)</button>}
          {slots>=2&&slots<3&&<button onClick={()=>unlock(100,3)} style={{padding:"6px 14px",borderRadius:6,background:prestige>=100?"var(--ac)":"var(--t3)",color:"#fff",fontWeight:700,border:"none",fontSize:12}}>3枠目を解放 (100pt)</button>}
          {slots>=3&&<span style={{fontSize:12,color:"var(--gold)",fontWeight:700}}>全枠解放済み (最大3枠)</span>}
        </div>
        <div style={{fontSize:11,color:"var(--t3)",marginTop:4}}>現在の施設ポイント: {prestige}pt</div>
      </div>
      {proPlayers.length>0&&<div style={{marginBottom:10}}><div style={{fontSize:13,fontWeight:700,color:"var(--gold)",marginBottom:4}}>今シーズンの秘蔵っ子</div>{proPlayers.map(r=>(<div key={r.id} style={{display:"flex",justifyContent:"space-between",padding:"6px 12px",background:"var(--cs)",borderRadius:8,border:"2px solid var(--gold)",marginBottom:4}}><span className="sf" style={{fontWeight:700}}>⭐ {r.name} ({r.year}年)</span><span style={{fontSize:11,color:"var(--t2)"}}>設定済み(変更不可)</span></div>))}</div>}
      {canSetMore?<><div style={{fontSize:13,fontWeight:700,marginBottom:4}}>選手を選んで設定 (残り{slots-proArr.length}枠)</div><SortB sm={sm} setSm={setSm} yf={yf} setYf={setYf} favOnly={favOnly} setFavOnly={setFavOnly}/>{healthy.filter(r=>!proArr.includes(r.id)).map(r=>(<MR key={r.id} r={r} showG onClick={()=>designate(r)}><div style={{marginTop:4}}><button onClick={e=>{e.stopPropagation();designate(r);}} style={{padding:"4px 14px",borderRadius:6,background:"var(--gold)",color:"#fff",fontWeight:700,border:"none",fontSize:12}}>⭐ 秘蔵っ子に設定</button></div></MR>))}</>:<div style={{textAlign:"center",color:"var(--t3)",padding:20,fontSize:13}}>{proArr.length>=slots?"全ての枠が埋まっています。枠を解放すると追加できます。":"今シーズンの設定可能期間が終了しました。"}</div>}
    </div></div></>);
  }
  if(ph==="facility")return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:600,margin:"0 auto"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><h2 className="sf">施設強化</h2><button onClick={()=>setPh(turn>48?"year_end":"main")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div><div style={{fontSize:14,color:"var(--gold)",fontWeight:700,marginBottom:10}}>🏆 {prestige}pt</div>
    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:10,marginBottom:10}}>
      <div style={{fontSize:13,fontWeight:800,marginBottom:6,color:"var(--ac)"}}>🏋 練習施設（能力別）</div>
      <div style={{fontSize:10,color:"var(--t3)",marginBottom:6}}>各能力ごとに練習施設を強化。レベルが高いほどその能力の成長率が上がります。</div>
      {[{k:"speed",l:"スピード"},{k:"stamina",l:"スタミナ"},{k:"stability",l:"メンタル"},{k:"uphill",l:"登り"},{k:"downhill",l:"下り"},{k:"solo",l:"単独"},{k:"pack",l:"集団"},{k:"track",l:"トラック"},{k:"road",l:"ロード"}].map(item=>{const ts=fac.trainSkill||{};const lv=ts[item.k]||1;const isElite=item.k==="speed"||item.k==="stamina";const costs=isElite?[0,0,1,2,3,4,7,11,17,28,45]:[0,0,1,1,2,2,4,6,9,14,23];const cost=lv<10?costs[lv+1]:null;return(<div key={item.k} style={{display:"flex",alignItems:"center",gap:6,padding:"4px 0",borderBottom:"1px solid var(--bdr)"}}><div style={{minWidth:60,fontSize:11,fontWeight:700,color:isElite?"var(--ac)":"var(--t)"}}>{item.l}</div><div style={{display:"flex",gap:1,flex:1}}>{[1,2,3,4,5,6,7,8,9,10].map(i=>(<div key={i} style={{flex:1,height:6,borderRadius:2,background:i<=lv?(isElite?"var(--ac)":"var(--grn)"):"var(--bdr)"}}/>))}</div><div style={{minWidth:24,fontSize:11,textAlign:"center",fontWeight:700}}>Lv{lv}</div>{cost!=null?<button onClick={()=>upgradeFac("trainSkill."+item.k)} style={{padding:"3px 8px",borderRadius:4,fontSize:11,background:prestige>=cost?"var(--ac)":"var(--t3)",color:prestige>=cost?"#fff":"var(--t2)",fontWeight:700,border:"none",cursor:prestige>=cost?"pointer":"not-allowed"}}>{cost}pt</button>:<span style={{fontSize:10,color:"var(--gold)",fontWeight:700,minWidth:36,textAlign:"center"}}>MAX</span>}</div>);})}
    </div>
    {Object.entries({medical:["🏥 医療","怪我率減&休養回復UP"],coaching:["👨‍🏫 コーチ","全能力の成長率UP"],reputation:["⭐ 知名度","スカウトPt+Lv×5"]}).map(([k,[l,d]])=>{const lv=fac[k];const costs=[0,1,2,3,5,8,13,21,34,55,89];const cost=lv<10?costs[lv+1]:null;return(<div key={k} style={{padding:"10px 12px",borderRadius:10,background:"var(--card)",border:"1px solid var(--bdr)",marginBottom:6}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div style={{fontWeight:700,fontSize:14}} className="sf">{l} <span style={{fontSize:10,color:"var(--t2)"}}>{d}</span></div><div style={{display:"flex",gap:2,marginTop:3}}>{[1,2,3,4,5,6,7,8,9,10].map(i=>(<div key={i} style={{width:14,height:6,borderRadius:3,background:i<=lv?"var(--gold)":"var(--bdr)"}}/>))}</div></div><div>{cost!=null?<button onClick={()=>upgradeFac(k)} style={{padding:"6px 12px",borderRadius:5,background:prestige>=cost?"var(--gold)":"var(--t3)",color:prestige>=cost?"#fff":"var(--t2)",fontWeight:700,border:"none"}}>{cost}pt→Lv{lv+1}</button>:<span style={{color:"var(--gold)",fontWeight:700}}>MAX</span>}</div></div></div>);})}
  </div></div></>);

  /* ═══ SCOUT POINTS DISPLAY ═══ */
  if(ph==="scout_pts"){const allPts=[{name:teamName,pts:calcScoutPts(scoutHist["__ME__"]||[],fac.reputation,gameYear,fac),isMe:true},...rivals.map(rv=>({name:rv.name,pts:calcScoutPts(scoutHist[rv.name]||[],rv.fac.reputation,gameYear,rv.fac)}))].sort((a,b)=>b.pts-a.pts);
    const dr=draftResult;const myTeam=dr?dr.teams.find(t=>t.isMe):null;
    return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:600,margin:"0 auto"}} className="fi">
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><h2 className="sf">📊 スカウトポイント一覧</h2><button onClick={()=>setPh("year_end")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div>
      <p style={{fontSize:12,color:"var(--t2)",marginBottom:10}}>過去3年の駅伝成績・28分台ランナー数で算出。良い選手獲得確率に直結。</p>
      {allPts.map((t,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"6px 12px",borderRadius:6,background:t.isMe?"var(--cs)":"var(--card)",border:t.isMe?"2px solid var(--ac)":"1px solid var(--bdr)",marginBottom:3,fontWeight:t.isMe?800:400}}>
        <span>{i+1}. {t.name}</span><span style={{fontFamily:"monospace",fontWeight:800}}>{t.pts}pt</span>
      </div>))}
      {myTeam&&<div style={{marginTop:12}}><div style={{fontSize:14,fontWeight:700,color:"var(--ac)",marginBottom:6}}>🎓 自校獲得選手 ({myTeam.picks.length}名)</div>{[...myTeam.picks].map(i=>dr.pool[i]).filter(Boolean).sort((a,b)=>(a.pb5k||999999)-(b.pb5k||999999)).map(r=>(<div key={r.id} style={{display:"flex",justifyContent:"space-between",padding:"4px 10px",background:"var(--cs)",borderRadius:6,border:"1px solid var(--bdr)",marginBottom:2}}><span className="sf" style={{fontWeight:700}}>{r.name}</span><span style={{fontFamily:"monospace",fontWeight:700,color:"var(--ac)",fontSize:11}}>5k{fmt(r.pb5k)} 10k{fmt(r.pb10k)}</span><div style={{display:"flex",gap:2}}>{["speed","stamina","stability"].map(k=>(<GCell key={k} v={r.stats[k]}/>))}</div></div>))}</div>}
      {dr&&<div style={{marginTop:14}}><div style={{fontSize:14,fontWeight:700,color:"var(--t2)",marginBottom:6}}>📋 各大学の獲得選手まとめ</div>{dr.teams.filter(t=>!t.isMe&&t.picks.length>0).sort((a,b)=>b.score-a.score).map(t=>(<div key={t.name} style={{padding:"6px 10px",background:"var(--card)",border:"1px solid var(--bdr)",borderRadius:6,marginBottom:3}}><div style={{fontSize:12,fontWeight:700,marginBottom:2}}>{univAlias[t.name]||t.name} <span style={{fontSize:10,color:"var(--t3)"}}>({t.picks.length}名)</span></div><div style={{fontSize:10,color:"var(--t2)",lineHeight:1.5}}>{[...t.picks].map(i=>dr.pool[i]).filter(Boolean).sort((a,b)=>(a.pb5k||999999)-(b.pb5k||999999)).map((r,j)=>(<span key={j} style={{marginRight:8}}>{r.name}({fmt(r.pb5k)}/{fmt(r.pb10k)})</span>))}</div></div>))}</div>}
      <div style={{textAlign:"center",marginTop:14}}>{gameYear>=40?<button onClick={()=>setPh("ending")} style={{padding:"10px 30px",borderRadius:50,background:"var(--gold)",color:"#fff",fontWeight:800}}>🏁 監督生活を振り返る</button>:<button onClick={startNextYear} style={{padding:"10px 30px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800}}>▶ 新シーズン開始</button>}</div>
      {gameYear>=40&&<div style={{textAlign:"center",marginTop:8,fontSize:12,color:"var(--t2)"}}>40年間の監督生活、お疲れさまでした。</div>}
    </div></div></>);}

  /* ═══ UNIVERSITY PROFILE ═══ */
  if(ph==="univ_profile"){const isSelf=viewRiv===-2;const sel=isSelf?{name:teamName,fac,runners:rs,str:Math.round(rs.reduce((a,r)=>a+(r.stats.speed+r.stats.stamina)/2,0)/Math.max(1,rs.length)),yearRes:{izumo:sRes.izumo,zennihon:sRes.zennihon,hakone:sRes.hakone}}:(viewRiv>=0?rivals[viewRiv]:null);if(!sel)return null;
    const hist=(scoutHist[isSelf?"__ME__":sel.name]||[]);const sp=calcScoutPts(hist,sel.fac.reputation,gameYear,sel.fac);const yr=sel.yearRes||{};
    return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:600,margin:"0 auto"}} className="fi">
      <button onClick={()=>setPh("rival_view")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)",marginBottom:12}}>← 戻る</button>
      <div style={{background:"var(--card)",borderRadius:14,padding:18,border:"1px solid var(--bdr)"}}>
        <h2 className="sf" style={{fontSize:22,marginBottom:6}}>{univAlias[sel.name]||sel.name}</h2>
        {(()=>{const u=UNIV.find(x=>x[0]===sel.name);return u&&u[7]?<div style={{fontSize:11,color:"var(--t2)",marginBottom:10,padding:"6px 10px",background:"var(--bg)",borderRadius:6,lineHeight:1.6}}>{u[7]}</div>:null;})()}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
          <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}><div style={{fontSize:11,color:"var(--t2)"}}>総合力</div><div style={{fontWeight:800}}>{sel.str}</div></div>
          <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}><div style={{fontSize:11,color:"var(--t2)"}}>スカウトPt</div><div style={{fontWeight:800}}>{sp}pt</div></div>
          <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}><div style={{fontSize:11,color:"var(--t2)"}}>練習施設(平均)</div><div style={{fontWeight:800}}>Lv{sel.fac.trainSkill?Math.round(Object.values(sel.fac.trainSkill).reduce((s,v)=>s+v,0)/9*10)/10:(sel.fac.training||1)}</div></div>
          <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}><div style={{fontSize:11,color:"var(--t2)"}}>コーチ</div><div style={{fontWeight:800}}>Lv{sel.fac.coaching}</div></div>
          <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}><div style={{fontSize:11,color:"var(--t2)"}}>医療</div><div style={{fontWeight:800}}>Lv{sel.fac.medical}</div></div>
          <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}><div style={{fontSize:11,color:"var(--t2)"}}>知名度</div><div style={{fontWeight:800}}>Lv{sel.fac.reputation}</div></div>
          <div style={{padding:"6px 10px",background:"var(--bg)",borderRadius:6}}><div style={{fontSize:11,color:"var(--t2)"}}>28分台ランナー</div><div style={{fontWeight:800}}>{sel.runners.filter(r=>r.pb10k&&r.pb10k<1740).length}名</div></div>
        </div>
        <div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:6}}>今年度の駅伝成績</div>
        <div style={{display:"flex",gap:10,marginBottom:10,fontSize:14,flexWrap:"wrap"}}><span>{ekAlias.izumo}: <b>{yr.izumo?yr.izumo+"位":"---"}</b></span><span>{ekAlias.zennihon}: <b>{yr.zennihon?yr.zennihon+"位":"---"}</b></span><span>{ekAlias.hakone}: <b>{yr.hakone?yr.hakone+"位":"---"}</b></span></div>
        <div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:6}}>三大駅伝 出場回数 & 最高成績</div>
        {(()=>{const ekStats={izumo:{n:ekAlias.izumo,count:0,best:99,wins:0},zennihon:{n:ekAlias.zennihon,count:0,best:99,wins:0},hakone:{n:ekAlias.hakone,count:0,best:99,wins:0}};
          hist.forEach(h=>{["izumo","zennihon","hakone"].forEach(k=>{if(h[k]!=null){ekStats[k].count++;if(h[k]<ekStats[k].best){ekStats[k].best=h[k];}if(h[k]===1){ekStats[k].wins++;}}});});
          ["izumo","zennihon","hakone"].forEach(k=>{if(yr[k]!=null){ekStats[k].count++;if(yr[k]<ekStats[k].best){ekStats[k].best=yr[k];}if(yr[k]===1){ekStats[k].wins++;}}});
          return(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>{["izumo","zennihon","hakone"].map(k=>{const tr=teamRecords[sel.name+":"+k];return(<div key={k} style={{padding:"6px 8px",background:"var(--bg)",borderRadius:6,fontSize:11}}><div style={{color:"var(--t2)"}}>{ekStats[k].n}</div><div style={{fontWeight:800}}>{ekStats[k].count}回 / 最高{ekStats[k].best<99?ekStats[k].best+"位":"---"}</div><div style={{fontSize:10,color:"var(--gold)",fontWeight:700}}>🏆 優勝{ekStats[k].wins}回</div>{tr&&<div style={{fontSize:10,color:"var(--ac)"}}>記録 {fmt(tr.time)}</div>}</div>);})}</div>);})()}
        {(()=>{const tOut=teamRecords[sel.name+":hakoneOut"],tIn=teamRecords[sel.name+":hakoneIn"];if(!tOut&&!tIn)return null;return(<div style={{fontSize:11,color:"var(--t2)",marginBottom:10}}>{ekAlias.hakone} 往路ベスト: <b style={{fontFamily:"monospace"}}>{tOut?fmt(tOut.time):"---"}</b> / 復路ベスト: <b style={{fontFamily:"monospace"}}>{tIn?fmt(tIn.time):"---"}</b></div>);})()}
        {/* Seasonal record table */}
        {(()=>{const ekTurns={izumo:26,zennihon:30,hakone:37};
          /* Real season entries only: must have ekiden result keys (excludes initPts/hakQBonus phantom entries) */
          let seasons=hist.filter(h=>('izumo' in h)||('zennihon' in h)||('hakone' in h));
          /* Year mapping: prefer explicit year field; fallback to sequential for legacy saves */
          let fallbackY=Math.max(1,gameYear-seasons.length+(isSelf?0:1));
          seasons=seasons.map(h=>({...h,_y:(h.year!=null?h.year:fallbackY++)}));
          /* Current mid-season row (self only, if this year not yet recorded) */
          const hasCurrentInHist=seasons.some(h=>h._y===gameYear);
          const showCurrent=isSelf&&!hasCurrentInHist&&(turn>=24);
          const rows=[...seasons];
          if(showCurrent)rows.push({...yr,_y:gameYear,_current:true});
          if(rows.length===0)return null;
          const cell=(k,h)=>{const v=h[k];
            if(v!=null)return{txt:v===1?"🏆 1位":v+"位",col:v===1?"var(--gold)":(v<=3?"var(--ac)":"var(--t)"),fw:v===1?800:500,fs:11};
            /* null: distinguish pending (current season, ekiden not yet run) vs 予選落ち */
            if(h._current&&turn<=ekTurns[k])return{txt:"—",col:"var(--t3)",fw:400,fs:11};
            return{txt:"予選落ち",col:"var(--t3)",fw:400,fs:10};
          };
          return(<div style={{marginBottom:12}}><div style={{fontSize:12,fontWeight:700,color:"var(--t2)",marginBottom:4}}>シーズン別成績</div><div style={{overflowX:"auto"}}><table style={{width:"100%",fontSize:11}}><thead><tr style={{borderBottom:"1px solid var(--bdr)"}}><th style={{textAlign:"left",padding:"4px"}}>Year</th><th style={{padding:"4px"}}>{ekAlias.izumo}</th><th style={{padding:"4px"}}>{ekAlias.zennihon}</th><th style={{padding:"4px"}}>{ekAlias.hakone}</th></tr></thead><tbody>{rows.map((h,i)=>(<tr key={i} style={{borderBottom:"1px solid var(--bdr)",background:h._current?"var(--cs)":"transparent"}}><td style={{padding:"3px 4px",fontWeight:700}}>Y{h._y}{h._current?" (今季)":""}</td>{["izumo","zennihon","hakone"].map(k=>{const c=cell(k,h);return(<td key={k} style={{padding:"3px 4px",textAlign:"center",fontWeight:c.fw,color:c.col,fontSize:c.fs}}>{c.txt}</td>);})}</tr>))}</tbody></table></div></div>);})()}
      </div>
    </div></div></>);}

  if(ph==="hof_players")return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}} className="fi">
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}><h2 className="sf">👑 殿堂入り選手</h2><button onClick={()=>setPh("hall")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div>
    <div style={{fontSize:12,color:"var(--t2)",marginBottom:10,padding:10,background:"var(--card)",borderRadius:8,border:"1px solid var(--bdr)"}}>特別な条件を達成して卒業した自校の名選手たちです。卒業時の能力・記録・駅伝実績が永久に保存されます。</div>
    {(!playerHOF||playerHOF.length===0)?<div style={{textAlign:"center",color:"var(--t3)",padding:40,fontSize:13}}>まだ殿堂入り選手はいません。<br/>特別な条件を達成した選手が卒業すると、ここに永久保存されます。</div>:playerHOF.map((p,i)=>(<div key={i} style={{background:"var(--card)",borderRadius:12,border:"2px solid var(--gold)",padding:14,marginBottom:10}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}><div><span className="sf" style={{fontSize:18,fontWeight:800}}>{p.foreign?"🌏 ":""}{p.name}</span><span style={{fontSize:11,color:"var(--t2)",marginLeft:8}}>Y{p.gradYear}卒業</span></div></div>
      <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8}}>{p.criteria.map((c,j)=>(<span key={j} style={{padding:"3px 10px",borderRadius:12,background:"linear-gradient(90deg,#FFD700,#FFA500)",color:"#000",fontSize:11,fontWeight:800}}>{c}</span>))}</div>
      <div style={{display:"flex",gap:12,marginBottom:8,fontSize:13,flexWrap:"wrap"}}><span>5000m: <b style={{fontFamily:"monospace"}}>{p.pb5k?fmt(p.pb5k):"---"}</b></span><span>10000m: <b style={{fontFamily:"monospace"}}>{p.pb10k?fmt(p.pb10k):"---"}</b></span><span>ハーフ: <b style={{fontFamily:"monospace"}}>{p.pbHalf?fmt(p.pbHalf):"---"}</b></span></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:4,marginBottom:8}}>{SK.map(k=>(<div key={k} style={{display:"flex",justifyContent:"space-between",padding:"3px 8px",background:"var(--bg)",borderRadius:5,fontSize:11}}><span style={{color:"var(--t2)",fontSize:10}}>{SL2[k]}</span><b>{Math.round(p.stats[k])}</b></div>))}</div>
      <div style={{fontSize:11,color:"var(--t2)"}}>駅伝出場 {p.appearances}回 / 区間賞 {p.secWins}回</div>
      {p.history&&p.history.length>0&&<details style={{marginTop:6}}><summary style={{cursor:"pointer",fontSize:11,color:"var(--ac)"}}>駅伝出走歴を見る</summary><div style={{marginTop:4,fontSize:11}}>{p.history.map((h,j)=>(<div key={j} style={{display:"flex",justifyContent:"space-between",padding:"1px 6px",borderBottom:"1px solid var(--bdr)"}}><span>Y{h.yr} {(h.ek==="出雲駅伝"?ekAlias.izumo:h.ek==="全日本大学駅伝"?ekAlias.zennihon:h.ek==="箱根駅伝"?ekAlias.hakone:h.ek)||h.ek} {h.sec}</span><span style={{fontFamily:"monospace"}}>{h.time?fmt(h.time):""}{h.secRank?" ("+h.secRank+"位)":""}</span></div>))}</div></details>}
    </div>))}
  </div></div></>);
  if(ph==="hall")return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}} className="fi">
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}><h2 className="sf">🏆 殿堂入り — 歴代トップ5</h2><div style={{display:"flex",gap:6}}><button onClick={()=>setPh("hof_players")} style={{padding:"6px 14px",borderRadius:7,background:"var(--gold)",color:"#fff",fontWeight:700,border:"none",fontSize:12}}>👑 殿堂入り選手</button><button onClick={()=>setPh("records")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div></div>
    {[{k:"hakone",l:"🏔 "+(ekAlias.hakone||"箱根駅伝")+"（総合）"},{k:"hakoneOut",l:"➡ "+(ekAlias.hakone||"箱根駅伝")+" 往路（1〜5区）"},{k:"hakoneIn",l:"⬅ "+(ekAlias.hakone||"箱根駅伝")+" 復路（6〜10区）"},{k:"zennihon",l:"🌏 "+(ekAlias.zennihon||"全日本大学駅伝")},{k:"izumo",l:"🌟 "+(ekAlias.izumo||"出雲駅伝")}].map(ek=>{const data=hallOfFame[ek.k]||[];return(<div key={ek.k} style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:12,marginBottom:10}}>
      <div style={{fontSize:14,fontWeight:800,marginBottom:6,color:"var(--ac)"}}>{ek.l}</div>
      {data.length===0?<div style={{fontSize:11,color:"var(--t3)"}}>記録なし</div>:data.map((r,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"4px 8px",fontSize:12,borderBottom:"1px solid var(--bdr)",background:r.name===teamName?"var(--cs)":"transparent"}}><span style={{color:i===0?"var(--gold)":"var(--t)",fontWeight:i===0?800:500}}>{i+1}. {univAlias[r.name]||r.name}</span><span style={{fontFamily:"monospace",fontWeight:700}}>{fmt(r.time)} <span style={{fontSize:10,color:"var(--t3)"}}>(Y{r.yr})</span></span></div>))}
    </div>);})}
    {/* Yearly records: per-year top 5 for each ekiden */}
    <div style={{background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:12,marginBottom:10,marginTop:14}}>
      <div style={{fontSize:14,fontWeight:800,marginBottom:8,color:"var(--ac)"}}>📅 年別 三大駅伝トップ5</div>
      {(()=>{const allYrs=new Set();["izumo","zennihon","hakone"].forEach(k=>(hallOfFame[k+"_yearly"]||[]).forEach(y=>allYrs.add(y.yr)));const yrs=[...allYrs].sort((a,b)=>b-a);if(yrs.length===0)return <div style={{fontSize:11,color:"var(--t3)"}}>年別記録なし</div>;
        return yrs.map(yr=>(<div key={yr} style={{marginBottom:10,paddingBottom:8,borderBottom:"1px solid var(--bdr)"}}>
          <div style={{fontWeight:800,fontSize:13,marginBottom:4}}>Year {yr}</div>
          {[{k:"izumo",l:ekAlias.izumo},{k:"zennihon",l:ekAlias.zennihon},{k:"hakone",l:ekAlias.hakone}].map(ek=>{const yEntry=(hallOfFame[ek.k+"_yearly"]||[]).find(y=>y.yr===yr);if(!yEntry)return null;return(<div key={ek.k} style={{marginLeft:8,marginBottom:4}}>
            <div style={{fontSize:11,color:"var(--t2)",fontWeight:700}}>{ek.l}</div>
            {yEntry.top5.map((r,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",fontSize:11,padding:"1px 6px",background:r.name===teamName?"var(--cs)":"transparent"}}><span style={{color:i===0?"var(--gold)":"var(--t)"}}>{i+1}. {univAlias[r.name]||r.name}</span><span style={{fontFamily:"monospace"}}>{fmt(r.time)}</span></div>))}
          </div>);})}
        </div>));})()}
    </div>
  </div></div></>);
  if(ph==="records"){
    /* Build list of current player names for current-only filter */
    const currentNames=new Set();rs.forEach(r=>currentNames.add(r.name+"|"+teamName));rivals.forEach(rv=>rv.runners.forEach(r=>currentNames.add(r.name+"|"+rv.name)));
    let raw=(recs[recTab]||[]).sort((a,b)=>a.time-b.time);
    if(recFG>0)raw=raw.filter(r=>r.grade===recFG);
    if(recFU)raw=raw.filter(r=>r.univ===recFU);
    if(recTab==="ek"&&recFSec)raw=raw.filter(r=>r.sec===recFSec);
    if(recTab==="ek"&&recFEk)raw=raw.filter(r=>r.ekiden===recFEk);
    if(recCurrent&&recTab!=="ek")raw=raw.filter(r=>currentNames.has(r.name+"|"+r.univ));
    if(recJpOnly)raw=raw.filter(r=>!r.foreign);
    if(recDedup){const seen=new Set();raw=raw.filter(r=>{const k=r.name+"|"+r.univ+(recTab==="ek"?"|"+r.sec:"");if(seen.has(k))return false;seen.add(k);return true;});}
    const data=raw.slice(0,50);
    /* Sort universities by UNIV order */
    const univOrder={};UNIV.forEach((u,i)=>{univOrder[u[0]]=i;});univOrder[teamName]=-1;
    const univs=[...new Set((recs[recTab]||[]).map(r=>r.univ))].sort((a,b)=>(univOrder[a]??999)-(univOrder[b]??999));
    /* Sort sections by 1区, 2区, ..., 10区 */
    const ekSecs=recTab==="ek"?[...new Set((recs.ek||[]).map(r=>r.sec))].sort((a,b)=>parseInt(a)-parseInt(b)):[];
    /* Sort ekiden names by chronological order: 出雲 → 全日本 → 箱根 */
    const ekOrder={[ekAlias.izumo]:1,[ekAlias.zennihon]:2,[ekAlias.hakone]:3,"出雲駅伝":1,"全日本大学駅伝":2,"箱根駅伝":3};
    const ekNames=recTab==="ek"?[...new Set((recs.ek||[]).map(r=>r.ekiden))].sort((a,b)=>(ekOrder[a]||99)-(ekOrder[b]||99)):[];
    return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}} className="fi">
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:6}}><h2 className="sf">📊 記録データベース</h2><div style={{display:"flex",gap:6,flexWrap:"wrap"}}><button onClick={()=>setPh("hall")} style={{padding:"6px 14px",borderRadius:7,background:"var(--gold)",color:"#fff",fontWeight:700,border:"none"}}>🏆 殿堂</button><button onClick={()=>setPh("hof_players")} style={{padding:"6px 14px",borderRadius:7,background:"var(--gold)",color:"#fff",fontWeight:700,border:"none"}}>👑 殿堂入り選手</button><button onClick={()=>setPh("team_titles")} style={{padding:"6px 14px",borderRadius:7,background:"var(--ac)",color:"#fff",fontWeight:700,border:"none"}}>🎖 チーム称号</button><button onClick={()=>setPh(turn>48?"year_end":"main")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div></div>
    <div style={{display:"flex",gap:4,marginBottom:8,flexWrap:"wrap"}}>{[{id:"t5",l:"5000m"},{id:"t10",l:"10000m"},{id:"half",l:"ハーフ"},{id:"ek",l:"駅伝区間"}].map(t=>(<button key={t.id} onClick={()=>{setRecTab(t.id);setRecFSec("");setRecFEk("");}} style={{padding:"5px 12px",borderRadius:6,fontWeight:700,background:recTab===t.id?"var(--ac)":"var(--card)",color:recTab===t.id?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}}>{t.l}</button>))}</div>
    <div style={{display:"flex",gap:4,marginBottom:8,flexWrap:"wrap",alignItems:"center"}}>
      <select value={recFG} onChange={e=>setRecFG(+e.target.value)} style={{padding:"4px 8px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:12}}><option value={0}>全学年</option><option value={1}>1年</option><option value={2}>2年</option><option value={3}>3年</option><option value={4}>4年</option></select>
      <select value={recFU} onChange={e=>setRecFU(e.target.value)} style={{padding:"4px 8px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:12,maxWidth:140}}><option value="">全大学</option>{univs.map(u=>(<option key={u} value={u}>{u}</option>))}</select>
      {recTab==="ek"&&<select value={recFSec} onChange={e=>setRecFSec(e.target.value)} style={{padding:"4px 8px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:12}}><option value="">全区間</option>{ekSecs.map(s=>(<option key={s} value={s}>{s}</option>))}</select>}
      {recTab==="ek"&&<select value={recFEk} onChange={e=>setRecFEk(e.target.value)} style={{padding:"4px 8px",borderRadius:5,border:"1px solid var(--bdr)",fontSize:12}}><option value="">全大会</option>{ekNames.map(s=>(<option key={s} value={s}>{s}</option>))}</select>}
      <label style={{fontSize:11,display:"flex",alignItems:"center",gap:3}}><input type="checkbox" checked={recDedup} onChange={e=>setRecDedup(e.target.checked)}/>ベストのみ</label>
      {recTab!=="ek"&&<label style={{fontSize:11,display:"flex",alignItems:"center",gap:3}}><input type="checkbox" checked={recCurrent} onChange={e=>setRecCurrent(e.target.checked)}/>現役のみ</label>}
      <span style={{fontSize:11,color:"var(--t3)"}}>{raw.length}件</span>
    </div>
    {data.length===0?<div style={{color:"var(--t3)",padding:40,textAlign:"center"}}>記録なし</div>:<div style={{overflowX:"auto"}}><table><thead><tr><th>#</th><th>選手</th><th>大学</th><th>学年</th>{recTab==="ek"&&<><th>区間</th><th>大会</th></>}<th>タイム</th><th>年</th></tr></thead><tbody>{data.map((r,i)=>(<tr key={i} style={{borderBottom:"1px solid var(--bdr)",background:r.univ===teamName?"var(--cs)":"transparent",fontWeight:r.univ===teamName?700:400,cursor:"pointer"}} onClick={()=>{const fr=findRunner(r.name,rs,rivals);if(fr){setViewProfile(fr);setProfileFrom("records");setPh("profile");}}}><td style={{color:i<3?"var(--gold)":"var(--t2)"}}>{i+1}</td><td className="sf">{r.name}</td><td style={{color:"var(--t2)",fontSize:11}}>{(univAlias[r.univ]||r.univ||"").slice(0,4)}</td><td>{r.grade||"-"}</td>{recTab==="ek"&&<><td>{r.sec}</td><td style={{fontSize:10,color:"var(--t3)"}}>{r.ekiden||""}</td></>}<td style={{fontFamily:"monospace",fontWeight:800}}>{fmt(r.time)}</td><td style={{fontSize:11,color:"var(--t3)"}}>Y{r.yr||"-"}</td></tr>))}</tbody></table></div>}
    </div></div></>);}


  if(ph==="rival_view"){const isSelf=viewRiv===-2;const sel=isSelf?{name:teamName,fac,runners:rs}:(viewRiv>=0?rivals[viewRiv]:null);return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:800,margin:"0 auto"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}><h2 className="sf">大学一覧</h2><button onClick={()=>setPh("main")} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)"}}>← 戻る</button></div><div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:14}}><button onClick={()=>setViewRiv(-2)} style={{padding:"4px 10px",borderRadius:6,fontSize:11,fontWeight:isSelf?800:500,background:isSelf?"var(--cs)":"var(--card)",color:isSelf?"var(--ac)":"var(--t)",border:isSelf?"2px solid var(--ac)":"1px solid var(--bdr)"}}>⭐ {teamName}</button>{rivals.map((r,i)=>(<button key={i} onClick={()=>setViewRiv(i)} style={{padding:"4px 10px",borderRadius:6,fontSize:11,fontWeight:viewRiv===i?800:500,background:viewRiv===i?"var(--cs)":"var(--card)",color:viewRiv===i?"var(--ac)":"var(--t)",border:viewRiv===i?"2px solid var(--ac)":"1px solid var(--bdr)"}}>{univAlias[r.name]||r.name}</button>))}</div>{sel&&<div className="fi"><div style={{marginBottom:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><span className="sf" style={{fontSize:18,fontWeight:800}}>{univAlias[sel.name]||sel.name}</span><span style={{fontSize:12,color:"var(--t2)",marginLeft:10}}>施設Avg{sel.fac.trainSkill?Math.round(Object.values(sel.fac.trainSkill).reduce((s,v)=>s+v,0)/9*10)/10:(sel.fac.training||1)} SPt:{calcScoutPts(scoutHist[isSelf?"__ME__":sel.name]||[],sel.fac.reputation,gameYear,sel.fac)}</span></div><button onClick={()=>setPh("univ_profile")} style={{padding:"4px 10px",borderRadius:6,background:"var(--card)",color:"var(--ac)",fontWeight:700,border:"1px solid var(--bdr)",fontSize:11}}>大学情報</button></div><div style={{overflowX:"auto"}}><table><thead><tr><th>名前</th><th>年</th><th>5k</th><th>10k</th><th>H</th>{SK.map(k=>(<th key={k}>{SL[k]}</th>))}</tr></thead><tbody>{[...sel.runners].sort((a,b)=>a.year-b.year).map(r=>(<tr key={r.id} style={{borderBottom:"1px solid var(--bdr)",cursor:"pointer"}} onClick={()=>{setViewProfile({...r,univName:sel.name});setProfileFrom("rival_view");setPh("profile");}}><td className="sf" style={{fontWeight:700}}>{r.name}</td><td>{r.year}</td><td style={{fontFamily:"monospace"}}>{r.pb5k?fmt(r.pb5k):"---"}</td><td style={{fontFamily:"monospace"}}>{r.pb10k?fmt(r.pb10k):"---"}</td><td style={{fontFamily:"monospace"}}>{r.pbHalf?fmt(r.pbHalf):"---"}</td>{SK.map(k=>(<td key={k} style={{textAlign:"center"}}><GCell v={r.stats[k]}/>{r.pot&&<div style={{fontSize:8,color:rmCol(rmStat(r,k)),fontWeight:700}}>{rmStat(r,k)}</div>}</td>))}</tr>))}</tbody></table></div></div>}{!sel&&<div style={{color:"var(--t3)",textAlign:"center",padding:40}}>大学名をタップ</div>}</div></div></>);}

  if(ph==="profile"&&viewProfile){const r=viewProfile;return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:500,margin:"0 auto"}} className="fi"><button onClick={()=>setPh(profileFrom)} style={{padding:"6px 18px",borderRadius:7,background:"var(--card)",color:"var(--t)",border:"1px solid var(--bdr)",marginBottom:12}}>← 戻る</button><div style={{background:"var(--card)",borderRadius:14,padding:18,border:"1px solid var(--bdr)"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span className="sf" style={{fontSize:22,fontWeight:800}}>{!r.univName&&<button onClick={()=>{toggleFav(r.id);setViewProfile(p=>({...p,fav:!p.fav}));}} style={{background:"transparent",border:"none",fontSize:22,cursor:"pointer",padding:0,marginRight:6,color:r.fav?"#FFC107":"#ccc"}}>{r.fav?"★":"☆"}</button>}{r.name}</span><span style={{color:"var(--t2)"}}>{r.year}年{r.univName?" / "+(univAlias[r.univName]||r.univName):""}</span></div><div style={{display:"flex",gap:10,marginBottom:12,fontSize:14,flexWrap:"wrap"}}><span>5k: <b style={{fontFamily:"monospace"}}>{r.pb5k?fmt(r.pb5k):"---"}</b></span><span>10k: <b style={{fontFamily:"monospace"}}>{r.pb10k?fmt(r.pb10k):"---"}</b></span><span>H: <b style={{fontFamily:"monospace"}}>{r.pbHalf?fmt(r.pbHalf):"---"}</b></span></div><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginBottom:4}}>{SK.map(k=>{const rm=rmStat(r,k);return(<div key={k} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 8px",background:"var(--bg)",borderRadius:6}}><span style={{fontSize:12,color:"var(--t2)"}}>{SL2[k]}</span><span style={{display:"flex",gap:4,alignItems:"center"}}><GCell v={r.stats[k]}/><span style={{fontSize:9,color:rmCol(rm),fontWeight:700}}>{rm}</span></span></div>);})}</div>{r.pot&&<div style={{fontSize:10,color:"var(--t3)",marginBottom:12,textAlign:"right"}}>※ 能力値の右の「特大／大／中／小」は今後の伸びしろです</div>}{r.history&&r.history.length>0&&<><div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:6}}>駅伝出場歴 ({r.history.length}回/最大12)</div>{r.history.map((h,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",fontSize:13,padding:"3px 0",borderBottom:"1px solid var(--bdr)"}}><span>Y{h.yr} {h.ek} {h.sec||""}</span><span style={{fontFamily:"monospace",fontWeight:700}}>{h.time?fmt(h.time):""}{h.secRank?" (区間"+h.secRank+"位)":""}</span></div>))}</>}</div></div></div></>);}

  if(ph==="zen_q"){const healthy=sortR(rs.filter(r=>!r.injured&&((!yf||yf.length===0)||yf.includes(r.year))).filter(r=>!favOnly||r.fav||!rs.some(x=>x.fav)),sm);
    return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}><h2 className="sf" style={{marginBottom:6}}>{ekAlias.zennihon}予選会 — 出場選手選択</h2><p style={{fontSize:13,color:"var(--t2)",marginBottom:10}}>8名を選出。2名×4ブロックで10000m走。合計タイムで上位7校が{ekAlias.izumo}+{ekAlias.zennihon}出場。</p>
    <div style={{fontSize:15,fontWeight:700,color:"var(--ac)",marginBottom:8}}>選出: {qualSel.length}/8</div>
    <SortB sm={sm} setSm={setSm} yf={yf} setYf={setYf} favOnly={favOnly} setFavOnly={setFavOnly}/>
    {healthy.map(r=>(<MR key={r.id} r={r} sel={qualSel.includes(r.id)} asgn={qualSel.length>=8&&!qualSel.includes(r.id)} onClick={()=>{setQualSel(p=>p.includes(r.id)?p.filter(x=>x!==r.id):p.length>=8?p:[...p,r.id]);}} showG/>))}
    {qualSel.length===8&&<div style={{textAlign:"center",marginTop:10}} className="fi"><button onClick={()=>{
      const sel8=qualSel.map(rid=>rs.find(r=>r.id===rid));
      const myTimes=sel8.map(r=>({runner:r,time:cTrk(10000,r)}));
      const myTotal=myTimes.reduce((s,t)=>s+t.time,0);
      setRs(p=>p.map(r=>{const d=myTimes.find(x=>x.runner.id===r.id);if(!d)return r;const nr={...r,fatigue:Math.min(100,r.fatigue+10)};if(!nr.pb10k||d.time<nr.pb10k)nr.pb10k=d.time;return nr;}));
      /* Only non-seeded rivals participate (seeded = prevZennihon top 8) */
      const nonSeeded=rivals.filter(rv=>!(prevZennihonRanks[rv.name]&&prevZennihonRanks[rv.name]<=8));
      const allT=[{name:teamName,score:myTotal,isMe:true,runners:myTimes},...nonSeeded.map(rv=>{const top8=applyForeignLimit(rv.runners.filter(r=>!r.injured)).sort((a,b)=>e10k(b)-e10k(a)).slice(0,8);const times=top8.map(r=>({runner:r,time:cTrk(10000,r)}));return{name:rv.name,score:times.reduce((s,t)=>s+t.time,0),runners:times};})];
      allT.sort((a,b)=>a.score-b.score);const rank=allT.findIndex(r=>r.isMe)+1;
      const blocks=[[],[],[],[]];allT.forEach(t=>{
        /* Top 8 runners fixed, but block placement randomized */
        const eight=t.runners.slice(0,8);
        const shuffled=[...eight];for(let i=shuffled.length-1;i>0;i--){const j=~~(Math.random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
        shuffled.forEach((r,idx)=>{const b=idx%4;if(r)blocks[b].push({...r,univ:t.name,isMe:t.isMe});});
      });blocks.forEach(br=>br.sort((a,b)=>a.time-b.time));
      setZenQ(rank<=7);setZenQTeams(allT.slice(0,7).map(t=>t.name));if(rank<=7)setPrestige(p=>p+3);setQualRes({rivs:allT,rank,q:rank<=7,type:"zen",blocks});setQualSel([]);setPh("qual_res");setTurn(turn+1);
    }} style={{padding:"14px 52px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800}}>予選会スタート</button></div>}
    <div style={{marginTop:10}}><button onClick={()=>advance(turn+1)} style={{padding:"10px 24px",borderRadius:50,background:"var(--card)",color:"var(--t2)",border:"1px solid var(--bdr)"}}>棄権</button></div>
    </div></div></>);}

  if(ph==="rec_sel"){const healthy=sortR(rs.filter(r=>!r.injured&&((!yf||yf.length===0)||yf.includes(r.year))).filter(r=>!favOnly||r.fav||!rs.some(x=>x.fav)),sm);const cnt5=Object.values(recAsgn).filter(v=>v==="5k").length,cnt10=Object.values(recAsgn).filter(v=>v==="10k").length;return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}><h2 className="sf" style={{marginBottom:4}}>{recEv.n}</h2><div style={{display:"flex",gap:12,marginBottom:8,fontWeight:700}}><span style={{color:"var(--ac)"}}>5k:{cnt5}</span><span style={{color:"var(--gold)"}}>10k:{cnt10}</span></div><SortB sm={sm} setSm={setSm} yf={yf} setYf={setYf} favOnly={favOnly} setFavOnly={setFavOnly}/>{healthy.map(r=>{const a=recAsgn[r.id];return(<MR key={r.id} r={r} sel={!!a} onClick={()=>{}} showG><div style={{display:"flex",gap:6,marginTop:4}}><button onClick={e=>{e.stopPropagation();toggleRA(r.id,"5k");}} style={{padding:"4px 12px",borderRadius:6,fontWeight:700,background:a==="5k"?"var(--ac)":"var(--card)",color:a==="5k"?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}}>5000m</button><button onClick={e=>{e.stopPropagation();toggleRA(r.id,"10k");}} style={{padding:"4px 12px",borderRadius:6,fontWeight:700,background:a==="10k"?"var(--gold)":"var(--card)",color:a==="10k"?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}}>10000m</button></div></MR>);})}
    <div style={{display:"flex",gap:8,justifyContent:"center",marginTop:10}}>{(cnt5+cnt10)>0&&<button onClick={runRec} style={{padding:"12px 40px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800}}>開催</button>}<button onClick={()=>advance(turn+1)} style={{padding:"10px 24px",borderRadius:50,background:"var(--card)",color:"var(--t2)",border:"1px solid var(--bdr)"}}>不参加</button></div></div></div></>);}

  if(ph==="rec_res"&&recRes){const mu=recRes.myUniv||tn;const mkD=arr=>{if(!arr||!arr.length)return[];const ranked=arr.map((r,i)=>({...r,rank:i+1}));return[...ranked.slice(0,10),...ranked.filter(r=>r.univ===mu&&r.rank>10)];};const d5=mkD(recRes.r5),d10=mkD(recRes.r10),dH=recRes.rH||[];
    const Row=({r})=>{const s=r.runner.stats||r.runner;return(<div style={{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:6,background:r.univ===mu?"var(--cs)":"var(--card)",border:r.univ===mu?"2px solid var(--ac)":"1px solid var(--bdr)",marginBottom:2,cursor:"pointer"}} onClick={()=>{setViewProfile({...r.runner,univName:r.univ});setProfileFrom("rec_res");setPh("profile");}}>
      <span style={{width:22,fontWeight:800,color:"var(--t2)"}}>{r.rank}</span>
      <span style={{flex:1,fontWeight:r.univ===mu?800:500}}>{r.runner.name} <span style={{fontSize:10,color:"var(--t2)"}}>{r.yr||r.runner.year}年 {r.univ}</span></span>
      {s&&<span style={{display:"flex",gap:2}}>{["speed","stamina"].map(k=>s[k]!=null?<span key={k} style={{fontSize:10}}><GCell v={s[k]}/></span>:null)}</span>}
      <span style={{fontFamily:"monospace",fontWeight:800,minWidth:55,textAlign:"right"}}>{fmt(r.time)}</span></div>);};
    return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:650,margin:"0 auto"}} className="fi"><h2 className="sf" style={{marginBottom:12}}>{recRes.name} 結果</h2>
    {d5.length>0&&<div style={{marginBottom:14}}><div style={{fontSize:15,color:"var(--ac)",fontWeight:700,marginBottom:6}}>5000m ({recRes.r5.length}名)</div>{d5.map((r,i)=>(<Row key={i} r={r}/>))}</div>}
    {d10.length>0&&<div style={{marginBottom:14}}><div style={{fontSize:15,color:"var(--gold)",fontWeight:700,marginBottom:6}}>10000m ({recRes.r10.length}名)</div>{d10.map((r,i)=>(<Row key={i} r={r}/>))}</div>}
    {dH.length>0&&<div style={{marginBottom:14}}><div style={{fontSize:15,color:"var(--grn)",fontWeight:700,marginBottom:6}}>ハーフ</div>{dH.map((r,i)=>(<Row key={i} r={{...r,univ:r.univ||mu}}/>))}</div>}
    <div style={{textAlign:"center"}}><button onClick={()=>{setRecRes(null);advance(turn+1);}} style={{padding:"12px 40px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:700}}>次へ</button></div></div></div></>);}

  if(ph==="qual_res"&&qualRes){const isH=qualRes.type==="hak";const isZ=qualRes.type==="zen";return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:600,margin:"0 auto"}} className="fi"><h2 className="sf" style={{textAlign:"center",marginBottom:6}}>{isH?(ekAlias.hakone+"予選会"):(ekAlias.zennihon+"予選会")}</h2><div style={{textAlign:"center",marginBottom:12}}><div style={{fontSize:28,fontWeight:900,color:qualRes.q?"var(--grn)":"var(--red)"}} className="sf">{qualRes.rank}位 — {qualRes.q?"通過！":"落選"}</div>{qualRes.qBonus>0&&<div style={{marginTop:8,padding:"6px 12px",borderRadius:6,background:"var(--cs)",fontSize:12,display:"inline-block"}}>🏆 ボーナス +{qualRes.qBonus}pt (TOP100:{qualRes.top100Me||0}名 / TOP20:{qualRes.top20Me||0}名)</div>}</div>
    {isH&&qualRes.times&&(<>
      <div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:4}}>自校選手 (全体順位付き)</div>
      {qualRes.times.map((d,i)=>{const idx=qualRes.allTimes?qualRes.allTimes.findIndex(x=>x.runner&&d.runner&&x.runner.id===d.runner.id):-1;const rank=idx>=0?idx+1:i+1;return(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"4px 10px",borderBottom:"1px solid var(--bdr)",cursor:"pointer",background:"var(--cs)"}} onClick={()=>{setViewProfile(d.runner);setProfileFrom("qual_res");setPh("profile");}}><span><span style={{fontWeight:800,color:"var(--ac)",minWidth:30,display:"inline-block"}}>{rank}位</span> {d.runner.name} ({d.runner.year}年)</span><span style={{display:"flex",gap:4,alignItems:"center"}}>{["speed","stamina"].map(k=><GCell key={k} v={d.runner.stats[k]}/>)}<span style={{fontFamily:"monospace",fontWeight:700}}>{fmt(d.time)}</span></span></div>);})}
      {qualRes.allTimes&&qualRes.allTimes.length>0&&(<details style={{marginTop:8}}><summary style={{cursor:"pointer",fontSize:12,color:"var(--t2)",padding:"4px 8px",background:"var(--card)",borderRadius:6}}>📋 全参加者の個人タイム ({qualRes.allTimes.length}名)</summary><div style={{maxHeight:280,overflowY:"auto",marginTop:4}}>{qualRes.allTimes.slice(0,200).map((d,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 8px",fontSize:11,borderBottom:"1px solid var(--bdr)",background:d.isMe?"var(--cs)":"transparent",fontWeight:d.isMe?700:400}}><span><span style={{minWidth:30,display:"inline-block",color:i<10?"var(--gold)":"var(--t2)",fontWeight:700}}>{i+1}位</span>{d.runner.name} <span style={{color:"var(--t3)",fontSize:10}}>({univAlias[d.univ]||d.univ})</span></span><span style={{fontFamily:"monospace"}}>{fmt(d.time)}</span></div>))}</div></details>)}
    </>)}
    {isZ&&qualRes.blocks&&qualRes.blocks.map((block,bi)=>(<div key={bi} style={{marginBottom:10}}><div style={{fontSize:13,fontWeight:700,color:"var(--ac)",marginBottom:4}}>ブロック{bi+1}</div>{block.slice(0,10).map((r,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 8px",fontSize:12,background:r.isMe?"var(--cs)":"var(--card)",border:r.isMe?"2px solid var(--ac)":"1px solid var(--bdr)",borderRadius:4,marginBottom:1,fontWeight:r.isMe?800:400}}><span>{i+1}. {r.runner.name} <span style={{color:"var(--t2)"}}>{r.univ}</span></span><span style={{fontFamily:"monospace",fontWeight:700}}>{fmt(r.time)}</span></div>))}</div>))}
    <div style={{maxHeight:220,overflowY:"auto",marginTop:12}}><div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:4}}>大学別総合順位</div>{qualRes.rivs.map((r,i)=>(<div key={i} style={{display:"flex",gap:8,padding:"5px 10px",borderRadius:6,background:r.isMe?"var(--cs)":"var(--card)",border:r.isMe?"2px solid var(--ac)":"1px solid var(--bdr)",marginBottom:3,opacity:(i>=(isH?10:7)&&!r.isMe)?0.5:1}}><span style={{fontWeight:800,width:22,color:i<(isH?10:7)?"var(--grn)":"var(--red)"}}>{i+1}</span><span style={{flex:1,fontWeight:r.isMe?800:500}} className={r.isMe?"sf":""}>{univAlias[r.name]||r.name}</span><span style={{fontFamily:"monospace"}}>{fmt(r.total||r.score)}</span></div>))}</div><div style={{textAlign:"center",marginTop:14}}><button onClick={()=>advance(turn+1)} style={{padding:"12px 40px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:700}}>次へ</button></div></div></div></>);}

  if(ph==="hak_sel"){const healthy=sortR(rs.filter(r=>!r.injured&&((!yf||yf.length===0)||yf.includes(r.year))).filter(r=>!favOnly||r.fav||!rs.some(x=>x.fav)),sm);return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}><h2 className="sf" style={{marginBottom:4}}>{ekAlias.hakone||"箱根駅伝"}予選会</h2><div style={{fontWeight:700,color:"var(--ac)",marginBottom:8}}>選出: {qualSel.length}/12</div><SortB sm={sm} setSm={setSm} yf={yf} setYf={setYf} favOnly={favOnly} setFavOnly={setFavOnly}/>{healthy.map(r=>(<MR key={r.id} r={r} sel={qualSel.includes(r.id)} asgn={qualSel.length>=12&&!qualSel.includes(r.id)} onClick={()=>toggleQS(r.id)} showG/>))}{qualSel.length>=10&&<div style={{textAlign:"center",marginTop:10}} className="fi"><button onClick={runHakQ} style={{padding:"14px 52px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800}}>予選会スタート ({qualSel.length}名)</button></div>}</div></div></>);}

  if(ph==="half_sel"){const healthy=sortR(rs.filter(r=>!r.injured&&((!yf||yf.length===0)||yf.includes(r.year))).filter(r=>!favOnly||r.fav||!rs.some(x=>x.fav)),sm);return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}><h2 className="sf" style={{marginBottom:4}}>{(CAL[turn].eid?ekAlias[CAL[turn].eid]:null)||CAL[turn].n}</h2><div style={{fontWeight:700,color:"var(--ac)",marginBottom:8}}>選出: {qualSel.length}/8</div><SortB sm={sm} setSm={setSm} yf={yf} setYf={setYf} favOnly={favOnly} setFavOnly={setFavOnly}/>{healthy.map(r=>(<MR key={r.id} r={r} sel={qualSel.includes(r.id)} asgn={qualSel.length>=8&&!qualSel.includes(r.id)} onClick={()=>{setQualSel(p=>p.includes(r.id)?p.filter(x=>x!==r.id):p.length>=8?p:[...p,r.id]);}} showG/>))}<div style={{display:"flex",gap:8,justifyContent:"center",marginTop:10}}>{qualSel.length>0&&<button onClick={()=>{/* Apply training effect on half day */
        const trainedRs=rs.map(r=>{if(r.injured||r.trn==="rest")return r;const tr=TRS.find(x=>x.id===r.trn)||TRS[0];return{...r,stats:applyGrowth(r,tr.fx,fac)};});
        const sel=qualSel.map(rid=>trainedRs.find(r=>r.id===rid));const rivH=[];rivals.forEach(rv=>{rv.runners.filter(r=>!r.injured).forEach(r=>{if(Math.random()<0.12)rivH.push({...r,univName:rv.name});});});const times=[...sel.map(r=>({runner:r,time:cHalf(r),univ:teamName,yr:r.year})),...rivH.map(r=>({runner:r,time:cHalf(r),univ:r.univName,yr:r.year}))].sort((a,b)=>a.time-b.time);setRs(trainedRs.map(r=>{const d=times.find(x=>x.runner.id===r.id&&x.univ===teamName);if(!d)return r;const nr={...r,stats:raceGrow(r),fatigue:Math.min(100,r.fatigue+25)};if(!nr.pbHalf||d.time<nr.pbHalf)nr.pbHalf=d.time;return nr;}));
    setRivals(prev=>prev.map(rv=>{const upd=rv.runners.map(r=>{const d=times.find(x=>x.runner.id===r.id&&x.univ===rv.name);if(!d)return r;const nr={...r,stats:raceGrow(r)};if(!nr.pbHalf||d.time<nr.pbHalf)nr.pbHalf=d.time;return nr;});return{...rv,runners:upd};}));
    setRecs(p=>addBR(p,"half",times.map(t=>({name:t.runner.name,univ:t.univ,time:t.time,grade:t.yr,yr:gameYear,ev:CAL[turn].n,foreign:t.runner.foreign}))));const mkD=arr=>{const ranked=arr.map((r,i)=>({...r,rank:i+1}));return[...ranked.slice(0,10),...ranked.filter(r=>r.univ===teamName&&r.rank>10)];};setRecRes({r5:[],r10:[],rH:mkD(times),name:CAL[turn].n,myUniv:teamName});setQualSel([]);setPh("rec_res");}} style={{padding:"12px 40px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800}}>出場</button>}<button onClick={()=>{setQualSel([]);advance(turn+1);}} style={{padding:"10px 24px",borderRadius:50,background:"var(--card)",color:"var(--t2)",border:"1px solid var(--bdr)"}}>不参加</button></div></div></div></>);}

  if(ph==="ek_asgn"&&ek){const healthy=sortR(rs.filter(r=>!r.injured&&((!yf||yf.length===0)||yf.includes(r.year))).filter(r=>!favOnly||r.fav||!rs.some(x=>x.fav)),sm);return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}><div style={{textAlign:"center",marginBottom:10}}><h2 className="sf" style={{fontSize:24}}>{ekAlias[curEk]||ek.name} 区間配置</h2></div><div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:10,marginBottom:10}}>{ek.sec.map(s=>{const rid=asgn[s.id],r=rid!=null?rs.find(x=>x.id===rid):null;return(<div key={s.id} onClick={()=>!r&&assignR(s.id)} style={{minWidth:110,padding:"8px 10px",borderRadius:10,flexShrink:0,background:r?"var(--cs)":"var(--card)",border:r?"2px solid var(--ac)":"1px solid var(--bdr)",cursor:selR!==null&&!r?"pointer":"default"}}><div style={{fontWeight:800,fontSize:13,color:"var(--ac)"}}>{s.n} <span style={{fontSize:10,color:"var(--t2)"}}>{s.km}km</span></div>{s.d&&<div style={{fontSize:10,color:"var(--t2)"}}>{s.d}</div>}{r?<div style={{marginTop:3}}><div className="sf" style={{fontWeight:700,fontSize:13}}>{r.name}</div><CB v={r.condition}/><button onClick={e=>{e.stopPropagation();setAsgn(p=>{const n={...p};delete n[s.id];return n;});}} style={{display:"block",marginTop:2,fontSize:10,background:"var(--card)",border:"1px solid var(--bdr)",borderRadius:4,padding:"2px 6px"}}>外す</button></div>:<div style={{fontSize:10,color:"var(--t3)",marginTop:4}}>←選択</div>}</div>);})}</div><SortB sm={sm} setSm={setSm} yf={yf} setYf={setYf} favOnly={favOnly} setFavOnly={setFavOnly}/>{(()=>{const allMyHist=rs.flatMap(r=>(r.history||[]).filter(h=>h.ek===ek.name).map(h=>({...h,runner:r.name,year:r.year}))); if(allMyHist.length===0)return null;return(<details style={{marginBottom:10,background:"var(--card)",borderRadius:8,padding:"6px 10px",border:"1px solid var(--bdr)"}}><summary style={{cursor:"pointer",fontSize:12,fontWeight:700,color:"var(--ac)"}}>📊 自校の過去 {ekAlias[curEk]||ek.name} 出走記録 ({allMyHist.length}件)</summary><div style={{maxHeight:200,overflowY:"auto",marginTop:6,fontSize:11}}>{ek.sec.map(s=>{const recs=allMyHist.filter(h=>h.sec===s.n).sort((a,b)=>a.time-b.time);if(recs.length===0)return null;return(<div key={s.id} style={{marginBottom:6}}><div style={{fontWeight:700,color:"var(--t2)"}}>{s.n}</div>{recs.slice(0,5).map((h,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"1px 8px",background:i===0?"var(--cs)":"transparent"}}><span>Y{h.yr} {h.runner} ({h.year}年)</span><span style={{fontFamily:"monospace"}}>{fmt(h.time)} ({h.secRank}位)</span></div>))}</div>);})}</div></details>);})()}{healthy.map(r=>(<MR key={r.id} r={r} sel={selR===r.id} asgn={asgnSet.has(r.id)} onClick={()=>{if(asgnSet.has(r.id)&&selR!==r.id)return;setSelR(p=>p===r.id?null:r.id);}} showG/>))}{allAsgn&&<div className="fi" style={{marginTop:10}}>
        {/* Entry preview: show rival entries */}
        <div style={{marginBottom:10}}><div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:6}}>📋 各大学エントリー</div>
          <div style={{maxHeight:200,overflowY:"auto"}}>{(()=>{let ep;if(curEk==="izumo"){const q=[...rivals].filter(rv=>prevHakoneRanks[rv.name]&&prevHakoneRanks[rv.name]<=10);const f=[...rivals].filter(rv=>!q.includes(rv)).sort((a,b)=>b.str-a.str);ep=[...q,...f].slice(0,9);}else if(curEk==="zennihon"){const sd=[...rivals].filter(rv=>prevZennihonRanks[rv.name]&&prevZennihonRanks[rv.name]<=8);const qf=[...rivals].filter(rv=>zenQTeams.includes(rv.name)&&!sd.includes(rv));const f=[...rivals].filter(rv=>!sd.includes(rv)&&!qf.includes(rv)).sort((a,b)=>b.str-a.str);ep=[...sd,...qf,...f].slice(0,14);}else{const sd=[...rivals].filter(rv=>prevHakoneRanks[rv.name]&&prevHakoneRanks[rv.name]<=10);const qf=[...rivals].filter(rv=>hakQTeams.includes(rv.name)&&!sd.includes(rv));const f=[...rivals].filter(rv=>!sd.includes(rv)&&!qf.includes(rv)).sort((a,b)=>b.str-a.str);ep=[...sd,...qf,...f].slice(0,19);}return ep.map(rv=>{const ag=optAssign(rv.runners,ek.sec,curEk);return(<div key={rv.name} style={{marginBottom:6,padding:"6px 10px",background:"var(--card)",border:"1px solid var(--bdr)",borderRadius:8}}><div style={{fontWeight:700,fontSize:12,marginBottom:2}}>{rv.name}</div><div style={{display:"flex",gap:4,flexWrap:"wrap"}}>{ek.sec.map(s=>{const r=ag[s.id];return r?(<span key={s.id} style={{fontSize:10}}>{s.n}:{r.name}(<GCell v={r.stats.speed}/>/<GCell v={r.stats.stamina}/>)</span>):null;})}</div></div>);});})()}</div>
        </div>
        <div style={{textAlign:"center"}}><button onClick={()=>runEkCommon(false)} style={{padding:"14px 60px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800,fontSize:17}}>🏃 レース開始</button></div></div>}</div></div></>);}

  if(ph==="ek_watch"&&ek)return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:600,margin:"0 auto",textAlign:"center"}} className="fi"><h2 className="sf" style={{marginBottom:8}}>{ekAlias[curEk]||ek.name}</h2><p style={{color:"var(--t2)",marginBottom:16}}>出場権なし — 観戦</p><button onClick={()=>runEkCommon(true)} style={{padding:"14px 48px",borderRadius:50,background:"var(--gold)",color:"#fff",fontWeight:800}}>📺 観戦</button><button onClick={()=>advance(turn+1)} style={{padding:"12px 30px",borderRadius:50,background:"var(--card)",color:"var(--t2)",marginLeft:10,border:"1px solid var(--bdr)"}}>スキップ</button></div></div></>);

  if(ph==="ek_race"&&raceRes){const isW=raceRes.isWatch,secs=ek.sec,ci=raceIdx,fin=ci>=secs.length-1;const myT=isW?null:raceRes.allT.find(t=>t.isMe);const secRk=[...raceRes.allT].sort((a,b)=>a.st[ci].time-b.st[ci].time),cumRk=[...raceRes.allT].sort((a,b)=>a.st[ci].cum-b.st[ci].cum);const mySR=isW?"-":(secRk.findIndex(t=>t.isMe)+1),myCR=isW?"-":(cumRk.findIndex(t=>t.isMe)+1);return(<><style>{CSS}</style><div style={{minHeight:"100vh",background:"var(--bg)",padding:14}}><div style={{maxWidth:700,margin:"0 auto"}}>
    <div style={{textAlign:"center",marginBottom:10}}><div style={{fontSize:12,color:"var(--ac)",letterSpacing:4,fontWeight:700}}>{ekAlias[curEk]||ek.name}{isW?" (観戦)":""}</div>{!isW&&<><div style={{fontFamily:"monospace",fontSize:40,fontWeight:900}}>{fmt(myT.st[ci].cum)}</div><div style={{color:"var(--t2)"}}>{teamName} 総合<span style={{fontWeight:900,fontSize:16,color:myCR<=3?"var(--gold)":"var(--t)",marginLeft:8}}>{myCR}位</span></div></>}{!fin&&<div style={{fontSize:10,color:"var(--t3)",marginTop:4}}>※ ここで閉じても、次回ロード時にこの区間から再開できます</div>}</div>
    <div style={{display:"flex",gap:2,marginBottom:12}}>{secs.map((_,i)=>(<div key={i} style={{flex:1,height:6,borderRadius:3,background:i<=ci?"var(--ac)":"var(--bdr)"}}/>))}</div>
    {!isW&&<div className="fi" key={ci} style={{background:"var(--card)",borderRadius:14,padding:16,marginBottom:12,border:"1px solid var(--bdr)"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:6}}><span className="sf" style={{fontWeight:900,fontSize:26,color:"var(--ac)"}}>{secs[ci].n}</span><span style={{color:"var(--t2)"}}>{secs[ci].d||""} {secs[ci].km}km</span></div><div style={{display:"flex",justifyContent:"space-between"}}><div className="sf" style={{fontWeight:800,fontSize:18}}>{myT.st[ci].runner}</div><div style={{textAlign:"right"}}><div style={{fontSize:11,color:"var(--t2)"}}>区間{mySR}位{(()=>{const recKey=curEk+":"+secs[ci].id;const nr=raceRes.newRecords&&raceRes.newRecords[recKey];return nr&&nr.runner===myT.st[ci].runner?<span style={{marginLeft:6,color:"#FFA500",fontWeight:900}}>🏅NEW</span>:null;})()}</div><div style={{fontFamily:"monospace",fontSize:26,fontWeight:800}}>{fmt(myT.st[ci].time)}</div></div></div></div>}
    <div style={{marginBottom:10}}>{(()=>{const recKey=curEk+":"+secs[ci].id;const nr=raceRes.newRecords&&raceRes.newRecords[recKey];return nr?<div style={{padding:"8px 12px",background:"linear-gradient(90deg,#FFD700 0%,#FFA500 100%)",borderRadius:8,marginBottom:6,fontWeight:800,color:"#000",display:"flex",justifyContent:"space-between"}}><span>🏅 区間新記録! {nr.runner} ({univAlias[nr.univ]||nr.univ})</span><span style={{fontFamily:"monospace"}}>{fmt(nr.time)}</span></div>:null;})()}<div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:4}}>区間順位 ({secs[ci].n})</div><div style={{maxHeight:200,overflowY:"auto",background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)"}}>{secRk.slice(0,15).map((t,i)=>(<div key={i} style={{display:"flex",gap:5,padding:"4px 10px",fontSize:13,color:t.isMe?"var(--ac)":"var(--t)",fontWeight:t.isMe?800:400}}><span style={{width:22,fontWeight:800}}>{i+1}</span><span style={{flex:1}}>{t.name}</span><span style={{color:"var(--t2)",minWidth:60,cursor:"pointer",textDecoration:"underline"}} onClick={()=>{const fr=findRunner(t.st[ci].runner,rs,rivals);if(fr){setViewProfile(fr);setProfileFrom("ek_race");setPh("profile");}}}>{t.st[ci].runner}</span><span style={{fontFamily:"monospace",fontWeight:700,minWidth:55,textAlign:"right"}}>{fmt(t.st[ci].time)}</span></div>))}</div></div>
    <div style={{marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:4}}>総合順位</div><div style={{maxHeight:240,overflowY:"auto",background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)"}}>{cumRk.map((t,i)=>(<div key={i} style={{display:"flex",gap:5,padding:"4px 10px",fontSize:13,color:t.isMe?"var(--ac)":"var(--t)",fontWeight:t.isMe?800:400,background:t.isMe?"var(--cs)":"transparent"}}><span style={{width:22,fontWeight:800,color:i===0?"var(--gold)":i<3?"var(--silver)":"var(--t2)"}}>{i+1}</span><span style={{flex:1}}>{t.name}</span><span style={{color:"var(--t2)",minWidth:60,cursor:"pointer",textDecoration:"underline"}} onClick={()=>{const fr=findRunner(t.st[ci].runner,rs,rivals);if(fr){setViewProfile(fr);setProfileFrom("ek_race");setPh("profile");}}}>{t.st[ci].runner}</span><span style={{fontFamily:"monospace",fontWeight:700,minWidth:55,textAlign:"right"}}>{fmt(t.st[ci].cum)}</span><span style={{fontFamily:"monospace",fontSize:11,color:"var(--t3)",minWidth:50,textAlign:"right"}}>{i===0?"":"+"+fmt(t.st[ci].cum-cumRk[0].st[ci].cum)}</span></div>))}</div></div>
    {/* Progressive gap chart */}
    <div style={{marginBottom:10,background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:8}}><div style={{fontSize:12,fontWeight:700,color:"var(--t2)",marginBottom:4}}>📊 平均タイム差 ({secs[ci].n}終了時点)</div>
      {(()=>{const W=Math.min(700,typeof window!=="undefined"?window.innerWidth-50:700),H=240,pad=40,rPad=90;const allT=raceRes.allT;const visT=allT.filter(t=>!hiddenTeams[t.name]);
        const useCkpts=allT[0]&&allT[0].ckpts&&allT[0].ckpts.length>0;
        const cumDist=[];let d=0;secs.forEach((s,si)=>{d+=s.km;if(si<=ci)cumDist.push(d);});const totalDist=cumDist[cumDist.length-1]||1;
        /* Filter checkpoints up to current section */
        const cutoff=cumDist[cumDist.length-1];
        const points=useCkpts?allT[0].ckpts.filter(c=>c.totalDist<=cutoff+0.001).map(c=>c.totalDist):cumDist;
        if(points.length===0)return null;
        const gaps=allT.map((t,ti)=>points.map((_,pi)=>{const cums=allT.map(x=>useCkpts?x.ckpts[pi].cum:x.st[pi].cum);const avg=cums.reduce((s,v)=>s+v,0)/cums.length;return avg-(useCkpts?t.ckpts[pi].cum:t.st[pi].cum);}));
        const allG=gaps.flat();const rng=Math.max(Math.abs(Math.max(...allG,1)),Math.abs(Math.min(...allG,-1)),1);
        const xStep=(W-pad-rPad)/totalDist;const yMid=H/2;const yScale=(H/2-30)/rng;
        return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%"}}>
          <line x1={pad} y1={yMid} x2={W-rPad} y2={yMid} stroke="var(--t3)" strokeWidth="1" strokeDasharray="3,3"/>
          {cumDist.map((cd,si)=>(<line key={"g"+si} x1={pad+cd*xStep} y1={15} x2={pad+cd*xStep} y2={H-20} stroke="var(--bdr)" strokeWidth="0.5"/>))}
          {visT.map(t=>{const ti=allT.indexOf(t);const col=t.isMe?tc:(SCHOOL_COLORS[t.name]||"#888");const pts=points.map((dist,pi)=>`${pad+dist*xStep},${yMid-gaps[ti][pi]*yScale}`).join(" ");const lastY=yMid-gaps[ti][points.length-1]*yScale;return(<g key={t.name}><polyline fill="none" stroke={col} strokeWidth={t.isMe?3:1.5} opacity={t.isMe?1:0.7} points={pts}/><text x={W-rPad+6} y={lastY+4} fill={col} fontSize="9" fontWeight={t.isMe?900:500}>{(univAlias[t.name]||t.name).slice(0,5)}</text></g>);})}
          {cumDist.map((cd,si)=>{const xCenter=pad+(si===0?cumDist[0]/2:(cumDist[si-1]+cd)/2)*xStep;return(<text key={si} x={xCenter} y={H-4} textAnchor="middle" fill="var(--t2)" fontSize="9">{secs[si].n}</text>);})}
          <text x={4} y={20} fill="var(--grn)" fontSize="9">+{Math.round(rng)}秒</text><text x={4} y={yMid+3} fill="var(--t2)" fontSize="9">±0</text><text x={4} y={H-22} fill="var(--red)" fontSize="9">-{Math.round(rng)}秒</text>
        </svg>);})()}
    </div>
    {/* Progressive rank chart - shown at each section */}
    <div style={{marginBottom:10,background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)",padding:8}}><div style={{fontSize:12,fontWeight:700,color:"var(--t2)",marginBottom:4}}>📈 順位推移 ({secs[ci].n}終了時点)</div>
      {(()=>{const W=Math.min(700,typeof window!=="undefined"?window.innerWidth-50:700);const allT=raceRes.allT;const nT=allT.length;const visT=allT.filter(t=>!hiddenTeams[t.name]);const H=Math.max(280,nT*16);const pad=30,rPad=90;const nS=ci+1;const xStep=nS>1?(W-pad-rPad)/Math.max(1,nS-1):0;const yStep=Math.max(1,(H-50)/(nT-1));
        return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%"}}>
          {Array.from({length:nS}).map((_,si)=>(<line key={"g"+si} x1={pad+si*xStep} y1={20} x2={pad+si*xStep} y2={H-25} stroke="var(--bdr)" strokeWidth="0.5"/>))}
          {visT.map(t=>{const ranks=Array.from({length:nS},(_,si)=>[...allT].sort((a,b)=>a.st[si].cum-b.st[si].cum).indexOf(t));const col=t.isMe?tc:(SCHOOL_COLORS[t.name]||"#888");const pts=ranks.map((r,si)=>`${pad+si*xStep},${20+r*yStep}`).join(" ");return(<g key={t.name}><polyline fill="none" stroke={col} strokeWidth={t.isMe?3:1.5} opacity={t.isMe?1:0.7} points={pts}/><text x={W-rPad+6} y={20+ranks[nS-1]*yStep+4} fill={col} fontSize="9" fontWeight={t.isMe?900:500}>{(ranks[nS-1]+1)+"."}{(univAlias[t.name]||t.name).slice(0,5)}</text></g>);})}
          {Array.from({length:nS}).map((_,si)=>(<text key={si} x={pad+si*xStep} y={H-8} textAnchor="middle" fill="var(--t2)" fontSize="9">{secs[si].n}</text>))}
        </svg>);})()}
      <div style={{display:"flex",flexWrap:"wrap",gap:3,marginTop:6,fontSize:10}}>{[...raceRes.allT].sort((a,b)=>{const oA=UNIV.findIndex(u=>u[0]===a.name);const oB=UNIV.findIndex(u=>u[0]===b.name);if(a.isMe)return -1;if(b.isMe)return 1;if(a.name==="関東学連選抜")return 1;if(b.name==="関東学連選抜")return -1;return (oA<0?999:oA)-(oB<0?999:oB);}).map(t=>(<button key={t.name} onClick={()=>setHiddenTeams(p=>({...p,[t.name]:!p[t.name]}))} style={{padding:"2px 6px",borderRadius:4,fontSize:10,background:hiddenTeams[t.name]?"var(--card)":(t.isMe?tc:SCHOOL_COLORS[t.name]||"#888"),color:hiddenTeams[t.name]?"var(--t3)":"#fff",border:"1px solid var(--bdr)",textDecoration:hiddenTeams[t.name]?"line-through":"none",fontWeight:t.isMe?800:400}}>{(univAlias[t.name]||t.name).slice(0,5)}</button>))}</div>
    </div>
    {!fin?<div className="fi">
      {/* Section navigation: prev / next + jump to any viewed section */}
      <div style={{display:"flex",gap:3,flexWrap:"wrap",justifyContent:"center",marginBottom:10}}>{secs.slice(0,ci+1).map((sObj,si)=>(<button key={si} onClick={()=>setRaceIdx(si)} style={{padding:"4px 8px",borderRadius:6,fontSize:11,fontWeight:si===ci?800:500,background:si===ci?"var(--ac)":"var(--card)",color:si===ci?"#fff":"var(--t2)",border:"1px solid var(--bdr)"}}>{sObj.n}</button>))}</div>
      <div style={{display:"flex",gap:8,justifyContent:"center"}}>
        {ci>0&&<button onClick={()=>setRaceIdx(i=>Math.max(0,i-1))} style={{padding:"14px 24px",borderRadius:50,background:"var(--card)",color:"var(--t)",fontWeight:700,border:"1px solid var(--bdr)",fontSize:15}}>◀ 前の区間</button>}
        <button onClick={()=>setRaceIdx(i=>i+1)} style={{padding:"14px 40px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:800,fontSize:16}}>次の区間へ ▶</button>
      </div>
    </div>
    :<div className="fi">
      <h3 className="sf" style={{fontSize:22,textAlign:"center",marginBottom:8}}>{ekAlias[curEk]||ek.name} 最終結果</h3>
      {!isW&&<div style={{textAlign:"center",marginBottom:10}}><span className="sf" style={{fontSize:36,fontWeight:900,color:raceRes.rank<=3?"var(--gold)":"var(--t)"}}>{raceRes.rank}位</span></div>}
      {/* Race Report: all section rankings */}
      <div style={{marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:6}}>📋 大会レポート — 全区間順位</div>
        <div style={{overflowX:"auto"}}><table><thead><tr><th>大学</th>{secs.map(s=>(<th key={s.id} style={{textAlign:"center"}}>{s.n}</th>))}<th>総合</th></tr></thead><tbody>
          {[...raceRes.allT].sort((a,b)=>a.st[secs.length-1].cum-b.st[secs.length-1].cum).map((t,rank)=>(<tr key={rank} style={{borderBottom:"1px solid var(--bdr)",background:t.isMe?"var(--cs)":"transparent",fontWeight:t.isMe?700:400}}>
            <td style={{fontWeight:700}}>{rank+1} {t.name}</td>
            {secs.map((s,si)=>{const sr=[...raceRes.allT].sort((a,b)=>a.st[si].time-b.st[si].time);const secRank=sr.findIndex(x=>x===t)+1;return(<td key={s.id} style={{textAlign:"center",fontSize:11,color:secRank<=3?"var(--gold)":"var(--t2)"}}>{secRank}<br/><span style={{fontSize:9,color:"var(--t3)",cursor:"pointer",textDecoration:"underline"}} onClick={()=>{const fr=findRunner(t.st[si].runner,rs,rivals);if(fr){setViewProfile(fr);setProfileFrom("ek_race");setPh("profile");}}}>{t.st[si].runner}</span></td>);})}
            <td style={{fontFamily:"monospace",fontWeight:800}}>{fmt(t.st[secs.length-1].cum)}</td>
          </tr>))}</tbody></table></div>
      </div>
      {/* Rank progression chart */}
      <div style={{marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:6}}>📊 平均タイム差グラフ（3kmごと、上=平均より速い）</div>
        {(()=>{const W=Math.min(700,typeof window!=="undefined"?window.innerWidth-28:700),H=320,pad=40,rPad=90;const allT=raceRes.allT;const visT=allT.filter(t=>!hiddenTeams[t.name]);
          /* Use checkpoints if available, else fall back to section endpoints */
          const useCkpts=allT[0]&&allT[0].ckpts&&allT[0].ckpts.length>0;
          const cumDist=[];let d=0;secs.forEach(s=>{d+=s.km;cumDist.push(d);});const totalDist=d;
          const points=useCkpts?allT[0].ckpts.map(c=>c.totalDist):cumDist;
          /* gap[teamIdx][pointIdx] = avg - team's cumulative */
          const gaps=allT.map((t,ti)=>points.map((_,pi)=>{const cums=allT.map(x=>useCkpts?x.ckpts[pi].cum:x.st[pi].cum);const avg=cums.reduce((s,v)=>s+v,0)/cums.length;return avg-(useCkpts?t.ckpts[pi].cum:t.st[pi].cum);}));
          const allG=gaps.flat();const rng=Math.max(Math.abs(Math.max(...allG,1)),Math.abs(Math.min(...allG,-1)),1);
          const xStep=(W-pad-rPad)/totalDist;const yMid=H/2;const yScale=(H/2-30)/rng;
          return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)"}}>
            <line x1={pad} y1={yMid} x2={W-rPad} y2={yMid} stroke="var(--t3)" strokeWidth="1" strokeDasharray="3,3"/>
            {cumDist.map((cd,si)=>(<line key={"g"+si} x1={pad+cd*xStep} y1={20} x2={pad+cd*xStep} y2={H-20} stroke="var(--bdr)" strokeWidth="0.5"/>))}
            {visT.map(t=>{const ti=allT.indexOf(t);const col=t.isMe?tc:(SCHOOL_COLORS[t.name]||"#888");const pts=points.map((dist,pi)=>`${pad+dist*xStep},${yMid-gaps[ti][pi]*yScale}`).join(" ");const lastY=yMid-gaps[ti][points.length-1]*yScale;return(<g key={t.name}><polyline fill="none" stroke={col} strokeWidth={t.isMe?3:1.5} opacity={t.isMe?1:0.7} points={pts}/><text x={W-rPad+6} y={lastY+4} fill={col} fontSize="9" fontWeight={t.isMe?900:500}>{(univAlias[t.name]||t.name).slice(0,5)}</text></g>);})}
            {secs.map((s,si)=>{const xCenter=pad+(si===0?cumDist[0]/2:(cumDist[si-1]+cumDist[si])/2)*xStep;return(<text key={si} x={xCenter} y={H-4} textAnchor="middle" fill="var(--t2)" fontSize="9">{s.n}</text>);})}
            <text x={4} y={26} fill="var(--grn)" fontSize="9">+{Math.round(rng)}秒</text><text x={4} y={yMid+3} fill="var(--t2)" fontSize="9">±0</text><text x={4} y={H-26} fill="var(--red)" fontSize="9">-{Math.round(rng)}秒</text>
          </svg>);})()}
        <div style={{display:"flex",flexWrap:"wrap",gap:3,marginTop:6,fontSize:10}}>{[...raceRes.allT].sort((a,b)=>{const oA=UNIV.findIndex(u=>u[0]===a.name);const oB=UNIV.findIndex(u=>u[0]===b.name);if(a.isMe)return -1;if(b.isMe)return 1;if(a.name==="関東学連選抜")return 1;if(b.name==="関東学連選抜")return -1;return (oA<0?999:oA)-(oB<0?999:oB);}).map(t=>(<button key={t.name} onClick={()=>setHiddenTeams(p=>({...p,[t.name]:!p[t.name]}))} style={{padding:"2px 6px",borderRadius:4,fontSize:10,background:hiddenTeams[t.name]?"var(--card)":(t.isMe?tc:SCHOOL_COLORS[t.name]||"#888"),color:hiddenTeams[t.name]?"var(--t3)":"#fff",border:"1px solid var(--bdr)",textDecoration:hiddenTeams[t.name]?"line-through":"none",fontWeight:t.isMe?800:400}}>{(univAlias[t.name]||t.name).slice(0,5)}</button>))}</div>
      </div>
      <div style={{marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:"var(--t2)",marginBottom:6}}>📈 順位推移グラフ（全大学）</div>
        {(()=>{const W=Math.min(700,typeof window!=="undefined"?window.innerWidth-28:700);const sortedT=[...raceRes.allT].sort((a,b)=>a.st[secs.length-1].cum-b.st[secs.length-1].cum);const nT=sortedT.length;const visT=sortedT.filter(t=>!hiddenTeams[t.name]);const H=Math.max(360,nT*18);const pad=30,rPad=90;const nS=secs.length;const xStep=(W-pad-rPad)/(nS-1);const yStep=Math.max(1,(H-50)/(nT-1));
          return(<svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",background:"var(--card)",borderRadius:10,border:"1px solid var(--bdr)"}}>{Array.from({length:nS}).map((_,si)=>(<line key={"g"+si} x1={pad+si*xStep} y1={15} x2={pad+si*xStep} y2={H-20} stroke="var(--bdr)" strokeWidth="0.5"/>))}{visT.map(t=>{const ranks=secs.map((_,si)=>[...sortedT].sort((a,b)=>a.st[si].cum-b.st[si].cum).indexOf(t));const col=t.isMe?tc:(SCHOOL_COLORS[t.name]||"#888");return(<g key={t.name}><polyline fill="none" stroke={col} strokeWidth={t.isMe?3:1.5} opacity={t.isMe?1:0.7} points={ranks.map((r,si)=>`${pad+si*xStep},${18+r*yStep}`).join(" ")}/><text x={W-rPad+6} y={18+ranks[nS-1]*yStep+4} fill={col} fontSize="9" fontWeight={t.isMe?900:500}>{(ranks[nS-1]+1)+"."}{(univAlias[t.name]||t.name).slice(0,5)}</text></g>);})}
          {secs.map((s,si)=>(<text key={si} x={pad+si*xStep} y={H-4} textAnchor="middle" fill="var(--t2)" fontSize="9">{s.n}</text>))}</svg>);})()}
        <div style={{display:"flex",flexWrap:"wrap",gap:3,marginTop:6,fontSize:10}}>{[...raceRes.allT].sort((a,b)=>{const oA=UNIV.findIndex(u=>u[0]===a.name);const oB=UNIV.findIndex(u=>u[0]===b.name);if(a.isMe)return -1;if(b.isMe)return 1;if(a.name==="関東学連選抜")return 1;if(b.name==="関東学連選抜")return -1;return (oA<0?999:oA)-(oB<0?999:oB);}).map(t=>(<button key={t.name} onClick={()=>setHiddenTeams(p=>({...p,[t.name]:!p[t.name]}))} style={{padding:"2px 6px",borderRadius:4,fontSize:10,background:hiddenTeams[t.name]?"var(--card)":(t.isMe?tc:SCHOOL_COLORS[t.name]||"#888"),color:hiddenTeams[t.name]?"var(--t3)":"#fff",border:"1px solid var(--bdr)",textDecoration:hiddenTeams[t.name]?"line-through":"none",fontWeight:t.isMe?800:400}}>{(univAlias[t.name]||t.name).slice(0,5)}</button>))}</div>
      </div>
      <div style={{marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:"var(--gold)",marginBottom:6}}>🏆 スカウトポイント獲得</div>
        <div style={{fontSize:11,color:"var(--t2)",marginBottom:4}}>{curEk==="hakone"?ekAlias.hakone+": 1位30pt/2位22pt/3位20pt/4位15pt/5位10pt/6-10位6pt/11位以下3pt + 区間賞3pt":ekAlias.izumo+"・"+ekAlias.zennihon+": 1位10pt/2位7pt/3位6pt/4位5pt/5位4pt/6位以下2pt + 区間賞2pt"}</div>
        {[...raceRes.allT].sort((a,b)=>a.st[secs.length-1].cum-b.st[secs.length-1].cum).map((t,rank)=>{
          const isHak=curEk==="hakone";
          const rPt=isHak?(rank===0?30:rank===1?22:rank===2?20:rank===3?15:rank===4?10:rank<10?6:3):(rank===0?10:rank===1?7:rank===2?6:rank===3?5:rank===4?4:2);
          const secWins=secs.reduce((cnt,_,si)=>{const best=[...raceRes.allT].sort((a,b)=>a.st[si].time-b.st[si].time)[0];return cnt+(best===t?1:0);},0);
          const secPt=secWins*(isHak?3:2);
          return(<div key={rank} style={{display:"flex",justifyContent:"space-between",padding:"3px 8px",fontSize:12,background:t.isMe?"var(--cs)":"transparent",borderRadius:t.isMe?4:0,fontWeight:t.isMe?800:400}}>
            <span>{rank+1}位 {t.name}</span><span style={{color:"var(--gold)"}}>{rPt}pt{secWins>0?` +区間賞${secPt}pt`:""} = {rPt+secPt}pt</span>
          </div>);
        })}
      </div>
      <div style={{textAlign:"center",marginTop:14}}><button onClick={()=>{const wasTriple=raceRes&&raceRes.tripleCrown;setCurEk(null);setRaceRes(null);if(wasTriple){setPh("triple_crown");}else{advance(turn+1);}}} style={{padding:"12px 40px",borderRadius:50,background:"var(--ac)",color:"#fff",fontWeight:700}}>次へ</button></div>
    </div>}
  </div></div></>);}
  return null;
}
