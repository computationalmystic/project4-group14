const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// create request variable and assign new XMLHttpRequest
var request = new XMLHttpRequest()

// open a new connection to the github repo list
// use GET request on URL endpoint
request.open('GET', 'http://augur.osshealth.io:5000/api/unstable/repos', true)
request.onload = function() {
  
    // access JSON data
  var data = JSON.parse(this.response)

  // check status request
  //    -> 200 - 399 = OK
  if (request.status >= 200 && request.status < 400) {
    data.forEach(repo => {
      console.log(repo.repo_name)
    })
  } else {
    console.log('error')
  }
}

request.send()