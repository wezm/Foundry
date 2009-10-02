/* Vermont-12.4.1-571 */
rsinetsegs=['H07707_10089','H07707_10193','H07707_10194','H07707_10195','H07707_10196','H07707_10197','H07707_10198','H07707_10199','H07707_10296','H07707_10297','H07707_10307','H07707_10387','H07707_10426','H07707_10430','H07707_10493','H07707_10495','H07707_10503','H07707_10552','H07707_10553','H07707_50000','H07707_50028','H07707_50037','H07707_50365','H07707_50366','H07707_50380'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom=location.hostname;
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.[a-zA-Z]{3}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.\w+\.[a-zA-Z]{2}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]{3,}\.[a-zA-Z]{2}$)/,'$1');
var rsiSegs="";
var rsiPat=/.*_5.*/;
for(x=0;x<rsinetsegs.length;++x){if(!rsiPat.test(rsinetsegs[x]))rsiSegs+='|'+rsinetsegs[x];}
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['H07707_10089','H07707_10193','H07707_10194','H07707_10195','H07707_10196','H07707_10197','H07707_10198','H07707_10199','H07707_10296','H07707_10297','H07707_10307','H07707_10387','H07707_10426','H07707_10430','H07707_10493','H07707_10495','H07707_10503','H07707_10552','H07707_10553','H07707_50000','H07707_50028','H07707_50037','H07707_50365','H07707_50366','H07707_50380'],'h07707');}