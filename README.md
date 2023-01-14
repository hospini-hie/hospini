# Introduction
Hospini is an Open Source Healthcare IT Interoperability Integration Platform for the mobilization of health care information electronically across organizations within a region, community or hospital system. It helps to facilitate access to and retrieval of clinical/financial data to provide safer and more timely, efficient, effective, and equitable patient-centered care for analyses of the health of the population. 

Its uses set of international interoperability standards such as HL7,FHIR,EDI X12,CDA (+) non-standards such as CSV,CUSTOM JSON APIs,DB ETLs to transfer clinical/financial data between different healthcare providers across the world

# How to use?
<h2> Docker </h3>
<ol>
  <li> Download <a href = 'https://www.docker.com/products/docker-desktop/'> Docker Desktop </a> and Start it </li>
  <li> Download <a href = 'https://www.wampserver.com/en/'> WAMP </a> and Start it </li>
  <li> Login to PHPMyAdmin and create a database called <b> hie </b>
  <li> Import <a href = 'https://github.com/hospini-hie/hospini/tree/main/mysql-db'>hospini_hie.sql </a> into <b> hie </b> database
  <li> Create a MYSQL DB Username = admin1 and PASSWORD = admin1
  <li> Pull the hospini-app Image using <b>docker pull jumbocoder/hospini-app:latest </b></li>
  <li> Pull the mysql:8.0 using <b>docker pull jumbocoder/mysql:8.0 </b></li>
  <li> Run the app container using <b> docker run -d --publish 8085:8080 hospini-app:latest </b></li>
  <li> Run the DB container using <b> docker run -d --publish 3307:3306 -e MYSQL_ROOT_PASSWORD=admin1 jumbocoder/mysql:8.0 </b></li>
  <li> Import the <a href = 'https://github.com/hospini-hie/hospini/tree/main/postman-api-collections'> APIs </a> into your postman client </li>
  <li> Try your CRUD </li>  
</ol>

<h2> Direct </h3>
<ol>
  <li> Clone the Github repository from <a href = 'https://github.com/hospini-hie/hospini.git'> Hospini Github Repo </a>
  <li> Download <a href = 'https://www.wampserver.com/en/'> WAMP </a> and Start it </li>
  <li> Login to PHPMyAdmin and create a database called <b> hie </b>
  <li> Import <a href = 'https://github.com/hospini-hie/hospini/tree/main/mysql-db'>hospini_hie.sql </a> into <b> hie </b> database
  <li> Create a MYSQL DB Username = admin1 and PASSWORD = admin1
  <li> Start NodeJS app using the command <b> node server.js </b>
  <li> Import the <a href = 'https://github.com/hospini-hie/hospini/tree/main/postman-api-collections'> APIs </a> into your postman client </li>
  <li> In all the APIs change the port from 8085 to 8080 as 8085 is Docker port</li>
  <li> Try your CRUD </li>  
</ol>

# Roadmap

<table>

  <tr>
    <th>S.No</th>
    <th>Feature</th>
    <th>Status</th>   
  </tr>

  <tr>
    <td>1</td> 
    <td><a href = 'https://en.wikipedia.org/wiki/MySQL' target='_blank'> MYSQL HIE DB </a> </td>
    <td> Completed</td>   
  </tr>

  <tr>
    <td>2</td> 
    <td><a href = 'https://jsonapi.org/' target='_blank'> Custom APIs </a> </td>
    <td>Completed</td>   
  </tr>

  <tr>
    <td>3</td> 
    <td><a href = 'https://en.wikipedia.org/wiki/Package_manager' target='_blank'> Packages using Docker </a> </td>
    <td> Completed </td>  
  </tr>

  <tr>
    <td>4</td> 
    <td> <a href = 'https://en.wikipedia.org/wiki/Comma-separated_values' target='_blank'> CSV </a>  </td>
    <td></td>   
  </tr>

  <tr>
    <td>5</td> 
    <td> <a href = 'https://www.hl7.org/implement/standards/product_brief.cfm?product_id=491' target='_blank'> HL7 FHIR APIs </a> </td>
    <td></td>   
  </tr>

  <tr>
    <td>6</td> 
    <td> <a href = 'https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185' target='_blank'> HL7 v2 </a> </td>
    <td></td>   
  </tr>  

  <tr>
   <td>7</td> 
   <td>  <a href = 'https://www.hl7.org/implement/standards/product_brief.cfm?product_id=496' target='_blank'> HL7 CDA </a> </td>
   <td></td>   
  </tr>

  <tr>
    <td>8</td> 
    <td> <a href = 'https://en.wikipedia.org/wiki/ASC_X12' target='_blank'> EDI - ASC X12  </a> </td>
    <td></td>   
  </tr>
   
   <tr>
    <td>9</td> 
    <td> <a href = 'https://en.wikipedia.org/wiki/Extract,_transform,_load' target='_blank'> Direct DB ETLs </a>  </td>
    <td></td>   
  </tr>

</table>

# Technologies
<ol> 
<li> Database: <b> MYSQL </b> </li>
<li> API Framework: <b> NodeJS </b> </li>
</ol>

# Hospini License
<a href = 'https://github.com/hospini-hie/hospini/blob/main/LICENSE' target='_blank'> GNU General Public License v3.0 </a>
