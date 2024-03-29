import Header from '../../components/Header/Header'
import Divider from '../../components/Divider/Divider'
import myImage from './test_image.png';

const FabFlix = () => {
  return (
    <div>
      <h1>
        FabFlix
      </h1>
      <p>
        FabFlix is my first full-stack project designed to be a movies catalog inspired by IMDb.com. 
      </p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={myImage} style={{width: '100%', height: 'auto'}} />
      </div>
      <h2>
        Front-End
      </h2>
      <ul>
        <li>
          <b>HTML & CSS</b> used for front-end.
        </li>
        <li>
          <b>JavaScript</b> is supplemented to handle dynamic elements such as 
          pagination, searchbar, filters, etc.
        </li>
        <li>
          Redesigned app to mobile for Android using <b>IntelliJ Android Studio</b>.
        </li>
      </ul>
      <h2>
        Back-End
      </h2>
      <ul>
        <li>
          <b>Java</b> and <b>SQL</b> was used to set up all api requests as well as database querying.
        </li>
        <li>
          <b>jQuery</b> and <b>AJAX</b> were used to request calls to the back-end java server.
        </li>
        <li>
          Implemented a <b>MySQL</b> relational database storing information about movies, ratings,
          genres, actors, directors, customers.
        </li>
        <li>
          Webserver was handled by <b>Apache Tomcat</b> and built using <b>Maven</b>.
        </li>
        <li>
          Handled user-logins, password and sensitive information encryption, 
          added Google reCAPTCHAs to prevent login or api abuse. 
        </li>
      </ul>
      <h2>
        Cloud
      </h2>
      <ul>
        <li>
          Deployed project on <b>AWS</b>. 3 AWS EC2 instances (1 Webserver, 2 SQL Databases [Master & Slave]).
        </li>
        <li>
          Deployed secondary webserver on <b>GCP</b> to diversify in cloud services.
        </li>
        <li>
          Distributed server requests between AWS and GCP server for load balancing, optimizing server load.
        </li>
      </ul>
      <h2>
        Other
      </h2>
      <ul>
        <li>
          <b>Stress tested</b> webservers by firing thousands of GET & POST requests to webservers using <b>Apache Jmeter</b>. 
          Project was durable and could support immense load for a few concurrent thousand users just using AWS t2.micro servers.
        </li>
      </ul>
    </div>
  )
}

export default FabFlix