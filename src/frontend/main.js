window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getcounterforresume.azurewebsites.net/api/GetResumeCounter?code=pGShCeg6u57L3IQEz3ZZ4vG22iGbP2hRohLy8C3aht1YAzFuKjbemA==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 0;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });

    return count;
}