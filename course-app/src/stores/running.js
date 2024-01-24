import { defineStore } from 'pinia'

export const useRunningStore = defineStore('running', {

  state: () => {
    return {
      apiData: null,
      etape: {
        etapeType: null,
        etapeDuree: null,
        etapeStatut: null
      },
      etapeChiffre: 0,
      maxEtapeChiffre: 0,
      etapeTitre: ['Echauffement','Trot','Marche','Trot','Marche','Trot','Marche','Trot','Marche','Trot','Marche','Trot','Etirements'],
      etapeOff: 'none',
      intervalId: null,
    }
  },
  actions: {
    /*async fetchDataFromAPI() {
      try {
        const response = await fetch('/src/api.json')
        const data = await response.json()

        this.apiData = data
        
        console.log(data.trainingPlans[0].weeks[0].days[0].steps[0])
        this.etape = data.trainingPlans[0].weeks[0].days[0].steps[0]

      } catch (error) {
        console.error('Error fetching data from API:', error)
      }
    },*/
    startInterval() {
      this.stopInterval()
      this.intervalId = setInterval(() => {
        this.etapeChiffre++
        
        if(this.etapeChiffre >= this.etapeTitre.length) {
          //this.etapeOff = 'none'
          this.stopInterval()
        }
      }, 1000)
    },
    stopInterval() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    changerEtape() {
      this.etapeChiffre = 0
      this.etapeOff = 'block'

      this.startInterval()
    }
  },

})