let loading = document.getElementById("loading")

    function tableGenerator(){

     let x =document.getElementById('inpbox').value;
    x = Number.parseInt(x);

      if(x>0){
        // loading animation

        loading.removeAttribute("hidden")
        document.getElementById("errorBox").innerHTML = "" //if any error remove first then load...

        setTimeout(()=>{
          loading.setAttribute("hidden","true")

        },1990)

        // table list
        setTimeout(()=>{
        document.getElementById('s1').innerHTML = ` ${x} x 1 = ${x*1} `;
        document.getElementById('s2').innerHTML = ` ${x} x 2 = ${x*2} `;
        document.getElementById('s3').innerHTML = ` ${x} x 3 = ${x*3} `;
        document.getElementById('s4').innerHTML = ` ${x} x 4 = ${x*4} `;
        document.getElementById('s5').innerHTML = ` ${x} x 5 = ${x*5} `;
        document.getElementById('s6').innerHTML = ` ${x} x 6 = ${x*6} `;
        document.getElementById('s7').innerHTML = ` ${x} x 7 = ${x*7} `;
        document.getElementById('s8').innerHTML = ` ${x} x 8 = ${x*8} `;
        document.getElementById('s9').innerHTML = ` ${x} x 9 = ${x*9} `;
        document.getElementById('s10').innerHTML =` ${x} x 10 = ${x*10} `;
        document.getElementById("errorBox").innerHTML = ""
        },2000)
        
      }
      else{
        document.getElementById('s1').innerHTML =""
        document.getElementById('s2').innerHTML =""
        document.getElementById('s3').innerHTML =""
        document.getElementById('s4').innerHTML =""
        document.getElementById('s5').innerHTML =""
        document.getElementById('s6').innerHTML =""
        document.getElementById('s7').innerHTML =""
        document.getElementById('s8').innerHTML = ""
        document.getElementById('s9').innerHTML = ""
        document.getElementById('s10').innerHTML =""
        document.getElementById("errorBox").innerHTML = "Please Enter Valid Number"
      }
    };
   

    
    function clearbtn(){
      window.location.reload();
      
    }