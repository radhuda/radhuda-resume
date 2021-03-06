window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = "https://getresumecounter-rad.azurewebsites.net/api/GetResumeCounter?code=l6civKkcyVhXpDl0KnNkMWE3EuihBX2Lrd0yKA4/Fd3bUDq2sCD2Ww==";
const localFunctionApi = 'http://localhost:3000/api/GetResumeCounter';

const  getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
        }).catch(function(error){
            console.log(error);
        });
        return count;
    }