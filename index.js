var quick = Number(prompt("行動は？(1-8):"));
var direct = Number(prompt("表現は？(1-8):"));
var varied = Number(prompt("表情は？(1-8):"));
var light = Number(prompt("考え方は？(1-8):"));
var normal = Number(prompt("はっきり言って？(1-8):"));


var right;
var up;

function CalclationP(a,b){

if(a>8 || a<1){
	return null;
}
if(b>8 || b<1){
	return null;
}

if(a + b <= 5){
  return 0;
}
else if(a + b >=13){
  return 3;
}
else{
  
  if(b == 1){
    return 1;
  }

  if(b == 2){
    if(a == 8){
      return 2;
    }
    else{
       return 1;
    }
  }
  if(b == 3){
    if(a == 7 || a == 8){
      return 2;
    }
    else{
      return 1;
    }
  }
  if(b == 4){
    if(a >= 2 && a <= 5){
      return 1;
    }
    else{
      return 2;
    }
  }
  if(b == 5){
    if(a >= 1 && a <= 3){
      return 1;
    }
    else{
      return 2;
    }
  }
  if(b == 6){
    if(a == 1 || a == 2){
      return 1;
    }
    else{
      return 2;
    }
  }
  if(b == 7){
    if(a == 1){
      return 1;
    }
    else{
      return 2;
    }
  }
  if(b == 8){
    return 2;
  }
}
}
right = CalclationP(quick,direct);
up = CalclationP(varied,light);

if(right == 0){
if(up == 0){alert("クール系しーん型");}
if(up == 1){alert("クール系もじもじ型");}
if(up == 2){alert("ナゴミ系ほんわか型");}
if(up == 3){alert("ナゴミ系ふわふわ型");}
}
else if(right == 1){
if(up == 0){alert("クール系じっくり型");}
if(up == 1){alert("クール系きっちり型");}
if(up == 2){alert("ナゴミ系まったり型");}
if(up == 3){alert("ナゴミ系にこにこ型");}
}
else if(right == 2){
if(up == 0){alert("ドライ系サバサバ型");}
if(up == 1){alert("ドライ系テキパキ型");}
if(up == 2){alert("ノリ系ワイワイ型");}
if(up == 3){alert("ノリ系キラキラ型");}
}
else if(right == 3){
if(up == 0){alert("ドライ系バッサリ型");}
if(up == 1){alert("ドライ系バリバリ型");}
if(up == 2){alert("ノリ系メラメラ型");}
if(up == 3){alert("ノリ系ガンガン型");}
}
else{
	alert("エラー");
}


