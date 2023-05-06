//AWARDS SECTION accordion
var prizesandcertifications = {
    "Prizes":  "<li>British Academy Television Award for Best Entertainment Performance</li><li>Laurence Olivier Award for Best Comedy Performance</li><li>Best Entertainment Performer <ol><li>2018</li><li>2019</li></ol></li>" ,
    "Certificates": "<li>Rose d'Or</li><li>BAFTA</li><li>Academy Cerification</li>",
     };

var selected = '#df9595' //Color when selected icon
var unselected= '#F9F5EB' //Color when unselected icon

var prizesandcertificationstab = document.getElementsByClassName('single-tab') //Variable of all the tabs above

for (a = 0; a<prizesandcertificationstab.length ; a+=1){ //0 is prizes 1 is certificates
    prizesandcertificationstab[a].onclick = function(){   //When Prizes/Certificates is clicked
        var clicked = this.innerHTML;                       //this refers to prizesamdcertificationstab and inner html is 'prizes' or 'certificates'

        document.getElementById('box-text').innerHTML = prizesandcertifications[clicked]        //Putting the content into the box-text 
    
        for(b = 0; b<prizesandcertificationstab.length; b+=1){                  
            prizesandcertificationstab[b].style.backgroundColor = unselected;                   //Making all the tabs above to unselected color
            document.getElementById('box-text').style.padding = '10px'
            document.getElementById('box-text').style.lineHeight = '50px'
            document.getElementById('box-text').style.textAlign = 'left'
            document.getElementById('box-text').style.fontWeight = 'normal'
            document.getElementById('box-text').style.fontSize = '30px'
        }

        this.style.backgroundColor = selected
    }                                                                                   // Changing top bar color to the selected solor if selected
}





//FOOTER changing of the year
document.getElementById('current_year').innerHTML = new Date().getFullYear()