const dataChart = {
    labels: ["Confirmados","Muertes"],
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
  
  var ctx = document.getElementById("covidChart").getContext("2d");
  
  var myChart = new Chart(ctx, {
    type: "bar",
    data: dataChart,
    options: {
      responsive:true,
      maintainAspectRatio:false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const getCovidCases = async () => {
  try{
  const covidStatus = [];
    let responseContry = {};
    let citie = document.getElementById("locality-dropdown").value;
    let confirmados = 0;
    let muertes = 0;
   
   if(citie != ""){
    responseContry = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${citie}`);
   } else{
     alert("Para continuar debes seleccionar un pais");
   }
    
    let countryall = responseContry.data['All'];
       confirmados = countryall['confirmed'];
       muertes = countryall['deaths'];
      covidStatus.push(confirmados,muertes);
      recuperados = countryall['recovered'];
       covidStatus.push(confirmados,muertes);

    dataChart.datasets[0].data = covidStatus;
    myChart.update();
}catch(e){
console.log(e);
}
    
  };

let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Selecciona un Pais';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

function getpais(){
    const transPais = [
      {
        "name":"Global",
        "traduccion":"Mundial"

      },
      {
      "name":"Afghanistan",
      "traduccion":"Afganistan"
      },
      {
        "name":"Germany",
        "traduccion":"Alemania"
      },
      {"name":"Saudi Arabia",
      "traduccion":"Arabia Saudi"},
      {"name":"Argentina",
      "traduccion":"Argentina"},
      {"name":"Australia",
      "traduccion":"Australia"},
      {"name":"Austria",
      "traduccion":"Austria"},
      {"name":"Bahamas",
      "traduccion":"Bahamas"},
      {"name": "Bangladesh",
      "traduccion":"Banglades"},
      {"name":"Barbados",
      "traduccion":"Barbados"},
      {"name":"Belgium",
      "traduccion":"Belgica"},
      {"name": "Belize",
      "traduccion":"Belice"},
      {"name":"Burma",
      "traduccion":"Birmania"},
      {"name":"Bolivia",
      "traduccion":"Bolivia"},
      {"name":"Brazil",
      "traduccion":"Brazil"},
      {"name":"Bulgaria",
      "traduccion":"Bulgaria"},
      {"name":"Cambodia",
      "traduccion":"Camboya"},
      {"name": "Canada",
      "traduccion":"Canada"},
      {"name":"Chile",
      "traduccion":"Chile"},
      {"name":"China",
      "traduccion":"China"},
      {"name":"Colombia",
      "traduccion":"Colombia"},
      {"name":"Congo",
      "traduccion":"Congo"},
      {"name":"Korea, South",
      "traduccion":"Corea del Sur"},
      {"name":"Costa Rica",
      "traduccion":"Costa Rica"},
      {"name":"Cuba",
      "traduccion":"Cuba"},
      {"name":"Denmark",
      "traduccion":"Dinamarca"},
      {"name":"Egypt",
      "traduccion":"Egipto"},
      {"name":"El Salvador",
      "traduccion":"El Salvador"},
      {"name":"Slovakia",
      "traduccion":"Eslovaquia"},
      {"name":"Spain",
      "traduccion":"España"},
      {"name":"US",
      "traduccion":"Estados Unidos"},
      {"name":"Ethiopia",
      "traduccion":"Etiopia"},
      {"name":"Philippines",
      "traduccion":"Filipinas"},
      {"name":"Finland",
      "traduccion":"Finlandia"},
      {"name":"France",
      "traduccion":"Francia"},
      {"name": "Greece",
      "traduccion":"Grecia"},
      {"name":"Guatemala" ,
      "traduccion":"Guatemala"},
      {"name":"Guinea",
      "traduccion":"Guinea"},
      {"name":"Haiti",
      "traduccion":"Haiti"},
      {"name":"Honduras",
      "traduccion":"Honduras"},
      {"name":"Hungary",
      "traduccion":"Hungria"},
      {"name":"India",
      "traduccion":"India"},
      {"name":"Indonesia",
      "traduccion":"Indonesia"},
      {"name":"Iraq",
      "traduccion":"Irak"},
      {"name":"Iran",
      "traduccion":"Iran"},
      {"name":"Irland",
      "traduccion":"Irlanda"},
      {"name":"Iceland",
      "traduccion":"Islandia"},
      {"name":"Israel",
      "traduccion":"Israel"},
      {"name": "Italy",
      "traduccion":"Italia"},
      {"name": "Jamaica",
      "traduccion":"Jamaica"},
      {"name":"Japan" ,
      "traduccion":"Japon"},
      {"name":  "Jordan",
      "traduccion":"Jordania"},
      {"name":  "Kenya",
      "traduccion":"Kenia"},
      {"name": "Lebanon",
      "traduccion":"Libano"},
      {"name":"Luxembourg",
      "traduccion":"Luxemburgo"},
      {"name":"Madagascar",
      "traduccion":"Madagascar"},
      {"name":"Malaysia",
      "traduccion":"Malasia"},
      {"name": "Maldives",
      "traduccion":"Maldivas"},
      {"name": "Morocco",
      "traduccion":"Marruecos"},
      {"name": "Mexico",
      "traduccion":"Mexico"},
      {"name": "Monaco",
      "traduccion":"Monaco"},
      {"name": "Mongolia",
      "traduccion":"Mongolia"},
      {"name": "Nepal",
      "traduccion":"Nepal"},
      {"name": "Nicaragua",
      "traduccion":"Nicaragua"},
      {"name":  "Panama",
      "traduccion":"Panama"},
      {"name": "Paraguay",
      "traduccion":"Paraguay"},
      {"name":"Peru",
      "traduccion":"Peru"},
      {"name":"Pland",
      "traduccion":"Polonia"},
      {"name":"Portugal",
      "traduccion":"Portugal"},
      {"name":"United Kingdom",
      "traduccion":"Reino Unido"},
      {"name":"Romania",
      "traduccion":"Rumania"},
      {"name":"Russia",
      "traduccion":"Rusia"},
      {"name":"Singapore",
      "traduccion":"Singapur"},
      {"name":"Syria",
      "traduccion":"Siria"},
      {"name":"South Africa",
      "traduccion":"Sudafrica"},
      {"name":"Sweden",
      "traduccion":"Suecia"},
      {"name":"Thailand",
      "traduccion":"Tailandia"},
      {"name":"Turkey",
      "traduccion":"Turquia"},
      {"name":"Ukraine",
      "traduccion":"Ucrania"},
      {"name":"Uruguay",
      "traduccion":"Uruguay"},
      {"name":"Venezuela",
      "traduccion":"Venezuela"},
      {"name":"Vietnam",
      "traduccion":"Vietnam"},
      {"name":"Yemen",
      "traduccion":"Yemen"},
      {"name":"Zambia",
      "traduccion":"Zambia"}]
      let option;
      for (let i = 0; i < transPais.length; i++) {
        option = document.createElement('option');
        option.text = transPais[i].traduccion;
        option.value = transPais[i].name;
        dropdown.add(option);
      }
  }
  
  getpais();

 