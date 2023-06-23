function dating()
{
    let dateTime=new Date();
    let hrs=dateTime.getHours();
    let mins=dateTime.getMinutes();
    let sec=dateTime.getSeconds();

    if(hrs>12)
    {
        hrs=hrs-12;
        document.getElementById('ampm').innerHTML='PM';
    }
    
    document.getElementById('hrs').innerHTML=zero(hrs); 
    document.getElementById('mins').innerHTML=zero(mins);
    document.getElementById('sec').innerHTML=zero(sec);
 
    function zero(num)
    {
        return num<10?"0"+num:num;
    }


}



setInterval(dating,500);