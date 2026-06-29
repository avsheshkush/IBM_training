function change(){
    let ele=document.getElementsByTagName("h1");
    ele[0].innerText="hello sekai";

    let ele1=document.getElementById("param")
    ele1.innerText="this is new param"
    ele1.style.backgroundColor="lime"

    ele1.style.transform= " 200px"

    const card = document.getElementById("card");
    Object.assign(card.style, {
        width: "300px", height: "200px", border: "2px solid black",
        borderRadius: "10px", display: "flex", alignItems: "center",
        justifyContent: "center", cursor: "pointer"
    });
    card.onclick = () => Object.assign(card.style, {
        backgroundImage: "url('https://imgs.search.brave.com/4N8tK9Qb3t9XExwod6uSKUPwGdi2lFfkoV4YBlqCT3s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzQy/YWI4M2E4OWYyMmQ4/Yjg4ZmI5MTEwYjhh/ODgxYjdlN2RlNmM4/NTgvaHViLzIwMTYv/MDIvMTkvNTkzMWUy/NjUtNjg0Mi00OWM4/LWJlNDItZWM0MDA3/ZTRhZDU5LzguanBn/P2F1dG89d2VicCZ3/aWR0aD0xMjAw')",
        backgroundSize: "cover", backgroundPosition: "center", color: "white"
    });


}

function clock(){
    let ele=document.getElementById("myclock")
    let date=new Date()
    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()
    let time = h+":"+m+":"+s

    setTimeout(()=>{
        clock()
    },1000)
    ele.innerText=time
}
clock() 

