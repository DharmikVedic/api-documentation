import React, {useState} from "react";
import {JavascriptCard} from "./javascript";
import {PhpCard} from "./php";


export function TabCodeHightlight({tab}){
    const [activetab,setactivetab] = useState(tab[0]);

let code;
    switch (activetab) {
        case "javascript":
         code =  <JavascriptCard>
             {`var api = 'planets';
var userId = '';
var apiKey = '';
var data = {
day:12,
month:3,
year:1992,
hour:2,
min:23,
lat:19.132,
lon:72.342,
tzone:5.5
};
var request = $.ajax({
url: "https://json.astrologyapi.com/v1/"+api,
method: "POST",
dataType:'json',
headers: {
"authorization": "Basic " + btoa(userId+":"+apiKey),
"Content-Type":'application/json'
},
data:JSON.stringify(data)
});

request.then( function(resp){
console.log(resp);
}, function(err){
console.log(err);
});`}
         </JavascriptCard>
            break;
        case "php":
            code =
                <PhpCard>
                {`require_once 'VedicRishiClient.php';
$userId = "";
$apiKey = "";
$data = array(
'date' => 25,
'month' => 12,
'year' => 1988,
'hour' => 4,
'minute' => 0,
'latitude' => 25.123,
'longitude' => 82.34,
'timezone' => 5.5
);
$resourceName = "astro_details";
$vedicRishi = new VedicRishiClient($userId, $apiKey);
$responseData = $vedicRishi->call($resourceName, $data['date'], $data['month'], $data['year'], $data['hour'], $data['minute'], $data['latitude'], $data['longitude'], $data['timezone']);
echo $responseData;`}
            </PhpCard>
            break;
    }


    return(
        <>
        <div className="bg-[#282C34] overflow-hidden rounded-[15px] py-2 ">
            {/* tabs */}
            <div className="bg-[#404353]  border border-slate-500/30 rounded-tl">
                {tab.map((item,i)=>(
                    <button key={i} onClick={()=>setactivetab(item)} className={`${activetab === item ? "text-sky-400 bg-[#282C34] before:border-sky-400" : "before:border-transparent text-white"} before:top-full before:left-0 before:w-full relative before:absolute before:border-b mt-[-1px] px-4 text-xs py-2`}>
                        {item}
                    </button>
                ))}
            </div>
            <div className="pl-2">
                {code}
            </div>
        </div>
            </>
    )
}