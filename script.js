    document.write("<p>");
    
    function addZero(i) {
      if (i < 10) {
      i = "0" + i;
      }
      return i;
    }
   
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var time= h + "" + m;
    var date = d.getDay();
    
    if (date == 1)
    {
        if ((time>=0855)&&(time<0945))
        {
          document.write('<h1>Minor/Honour</h1><h2>9:00-9:50</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=0945)&&(time<1035)) 
        {
          document.write('<h1>System Software</h1><h2>09:50-10:40</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1045)&&(time<1135)) 
        {
          document.write('<h1>Computer Networks</h1><h2>10:50-11:40</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1135)&&(time<1225)) 
        {
          document.write('<h1>Disaster Management</h1><h2>11:40-12:30</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1325)&&(time<1415)) 
        {
          document.write('<h1>Placement</h1><h2>01:30-02:20</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1415)&&(time<1505)) 
        {
          document.write('<h1>FLAT</h1><h2>02:20-03:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1515)&&(time<1610)) 
        {
          document.write('<h1>Microprocessors</h1><h2>03:20-04:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        document.write("</p>");
    }
    
    if (date == 2)
    {
        if ((time>=0855)&&(time<0945))
        {
          document.write('<h1>FLAT</h1><h2>02:20-03:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=0945)&&(time<1035)) 
        {
          document.write('<h1>System Software</h1><h2>09:50-10:40</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1045)&&(time<1135)) 
        {
          document.write('<h1>Computer Networks</h1><h2>10:50-11:40</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1135)&&(time<1225)) 
        {
          document.write('<h1>Disaster Management</h1><h2>11:40-12:30</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1325)&&(time<1415)) 
        {
          document.write('<h1>Minor/Honour</h1><h2>9:00-9:50</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1415)&&(time<1505)) 
        {
          document.write('<h1>Management of System Software</h1><h2>02:20-03:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1515)&&(time<1610)) 
        {
          document.write('<h1>Microprocessors</h1><h2>03:20-04:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        document.write("</p>");
    }

    if (date == 3)
    {
        if ((time>=0855)&&(time<0945))
        {
          document.write('<h1>Minor/Honour</h1><h2>9:00-9:50</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=0945)&&(time<1035)) 
        {
          document.write('<h1>SS/DBMS Lab</h1><h2>09:50-10:40</h2><a href="#" target="_blank" rel="noopener noreferrer">Join via Respective Links</a>');
        }
        if ((time>=1045)&&(time<1135)) 
        {
          document.write('<h1>SS/DBMS Lab</h1><h2>09:50-10:40</h2><a href="#" target="_blank" rel="noopener noreferrer">Join via Respective Links</a>');
        }
        if ((time>=1135)&&(time<1225)) 
        {
          document.write('<h1>SS/DBMS Lab</h1><h2>09:50-10:40</h2><a href="#" target="_blank" rel="noopener noreferrer">Join via Respective Links</a>');
        }
        if ((time>=1325)&&(time<1415)) 
        {
          document.write('<h1>Microprocessors</h1><h2>03:20-04:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1415)&&(time<1505)) 
        {
          document.write('<h1>Computer Networks</h1><h2>10:50-11:40</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1515)&&(time<1610)) 
        {
          document.write('<h1>FLAT</h1><h2>02:20-03:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        document.write("</p>");
    }

    if (date == 4)
    {
        if ((time>=0855)&&(time<0945))
        {
          document.write('<h1>Computer Networks</h1><h2>10:50-11:40</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=0945)&&(time<1035)) 
        {
          document.write('<h1>System Software</h1><h2>09:50-10:40</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1045)&&(time<1135)) 
        {
          document.write('<h1>Management of System Software</h1><h2>02:20-03:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1135)&&(time<1225)) 
        {
          document.write('<h1>Coding Period</h1><h2>11:40-12:30</h2><a href="#" target="_blank" rel="noopener noreferrer">Link in Mail</a>');
        }
        if ((time>=1325)&&(time<1415)) 
        {
          document.write('<h1>SS/DBMS Lab</h1><h2>09:50-10:40</h2><a href="#" target="_blank" rel="noopener noreferrer">Join via Respective Links</a>');
        }
        if ((time>=1415)&&(time<1505)) 
        {
          document.write('<h1>SS/DBMS Lab</h1><h2>09:50-10:40</h2><a href="#" target="_blank" rel="noopener noreferrer">Join via Respective Links</a>');
        }
        if ((time>=1515)&&(time<1610)) 
        {
          document.write('<h1>SS/DBMS Lab</h1><h2>09:50-10:40</h2><a href="#" target="_blank" rel="noopener noreferrer">Join via Respective Links</a>');
        }
        document.write("</p>");
    }

    if (date == 5)
    {
        if ((time>=0855)&&(time<0945))
        {
          document.write('<h1>Microprocessors</h1><h2>03:20-04:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=0945)&&(time<1035)) 
        {
          document.write('<h1>FLAT</h1><h2>02:20-03:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1045)&&(time<1135)) 
        {
          document.write('<h1>Microprocessors</h1><h2>03:20-04:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1135)&&(time<1225)) 
        {
          document.write('<h1>Management of System Software</h1><h2>02:20-03:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1325)&&(time<1415)) 
        {
          document.write('<h1>Minor/Honour</h1><h2>9:00-9:50</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1415)&&(time<1505)) 
        {
          document.write('<h1>System Software</h1><h2>09:50-10:40</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        if ((time>=1515)&&(time<1610)) 
        {
          document.write('<h1>FLAT</h1><h2>02:20-03:10</h2><a href="https://bit.ly/3tkIY1b" target="_blank" rel="noopener noreferrer">Join via Linways</a>');
        }
        document.write("</p>");
    }
    
    if((time>=1225)&&(time<1325)&&(date!=0)&&(date!=6))
    {
      document.write('<h1>Lunch Break</h1>')
    }

    if((time>=1035)&&(time<1045)||(time>=1505)&&(time<1515)&&(date!=0)&&(date!=6))
    {
      document.write('<h1>Break</h1>')
    }
    
    if((time<0850)||(time>1610)||(date==0)||(date==6))
    {
        document.write('<h1>No Class at this time</h1>');
    }