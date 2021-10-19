const covidStatus = [];
let citie = document.getElementById(pais).value();
let confirmados = 0;
let muertes = 0;
let recuperados = 0;

const dataChart = {
    labels: ["Confirmados","Muertes","Recuperados"],
    datasets: [
      {
        label: "Estatus de Casos Registrados",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  };
  
  var ctx = document.getElementById("myChart").getContext("2d");
  
  var myChart = new Chart(ctx, {
    type: "bar",
    data: dataChart,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const getCovidCases = async () => {
    
   // let response = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases`);//regresa el estatus de todos los paises
    let responseContry = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${citie}`);
    
    let countryall = responseContry.data['All'];
       confirmados = countryall['confirmed'];
       muertes = countryall['deaths'];
       recuperados = countryall['recovered'];
       covidStatus.push(confirmados,muertes,recuperados);
    dataChart.datasets[0].data = covidStatus;
    myChart.update();
  };

  getCovidCases();