const relativeTimes = document.getElementById('relativeTimes');
const dateSet = document.getElementById('dateSet');
const dateSearch = document.getElementById('dateSearch');
const diffTime = document.getElementById('diffTime');
// ドラえもん誕生日
const doraBorn = moment('2112-09-03');

// targetまでの残り時間表示関数
function sample(targetDay, text) {
    let now = moment();
    let duration = moment.duration(targetDay.diff(now))['_data'];
    text.textContent = `${targetDay.format('YYYY-MM-DD')} 00:00:00まで${duration['years']}年${duration['months']}ヶ月${duration['days']}日${duration['hours']}時間${duration['minutes']}分${duration['seconds']}秒`;
}

// 関数呼び出しと１秒毎に更新
setInterval('sample(doraBorn, relativeTimes)', 1000);
// 検索ボタンのイベント
dateSearch.addEventListener('click', function() {
    
    setInterval('sample(moment(dateSet.value), diffTime)', 1000);

});