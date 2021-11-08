const relativeTimes = document.getElementById('relativeTimes');
const dateSet = document.getElementById('dateSet');
const dateSearch = document.getElementById('dateSearch');
const diffTime = document.getElementById('diffTime');

// ドラえもん誕生日
const doraBorn = moment('2112-09-03 00:00:00');

// 誕生日までの残り時間表示関数
function nowRelativeTimesToDora() {

    let now = moment();
    let relativeYears = doraBorn.diff(now, 'years');
    let relativeMonths = doraBorn.diff(now, 'months') % 12;
    let relativeDays = doraBorn.diff(now, 'days') % 365;
    let relativeHours = doraBorn.diff(now, 'hours') % 24;
    let relativeMinutes = doraBorn.diff(now, 'minutes') % 60;
    let relativeSeconds = doraBorn.diff(now, 'seconds') % 60;

    relativeTimes.textContent = `${relativeYears}年${relativeMonths}ヶ月${relativeDays}日${relativeHours}時間${relativeMinutes}分${relativeSeconds}秒`;

}

// 任意の日までの残り時間表示関数
function nowRelativeTimesToSet() {

    let getDate = moment(`${dateSet.value} 00:00:00`);
    let now = moment();
    let relativeYears = getDate.diff(now, 'years');
    let relativeMonths = getDate.diff(now, 'months') % 12;
    let relativeDays = getDate.diff(now, 'days') % 365;
    let relativeHours = getDate.diff(now, 'hours') % 24;
    let relativeMinutes = getDate.diff(now, 'minutes') % 60;
    let relativeSeconds = getDate.diff(now, 'seconds') % 60;
    
    diffTime.textContent = `${dateSet.value} 00:00:00まで${relativeYears}年${relativeMonths}ヶ月${relativeDays}日${relativeHours}時間${relativeMinutes}分${relativeSeconds}秒`;

}

// 関数呼び出しと１秒毎に更新
setInterval(nowRelativeTimesToDora, 1000);
// 検索ボタンのイベント
dateSearch.addEventListener('click', function() {

    setInterval(nowRelativeTimesToSet, 1000);
    
});