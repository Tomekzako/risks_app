import { defineStore } from 'pinia';
import type { Risk } from '@/types/risk';

interface State {
  riskList: Risk[];
}

export const useRiskStore = defineStore('risk', {
  state: (): State => ({
    riskList: [],
  }),
  getters: {
    getRisk: (state: State) => {
      return (id: string) => state.riskList.find((risk) => risk.id === id);
    },
  },
  actions: {
    // createRisk(payload: Risk) {
    //   this.riskList.unshift(payload);
    // },
    // editRisk(payload: Risk) {
    //   const findIndex = this.riskList.findIndex(
    //     (risk) => risk.id === payload.id
    //   );
    //   this.riskList.splice(findIndex, 1, payload);
    // },
    // removeRisk(id: string) {
    //   const findIndex = this.riskList.findIndex((risk) => risk.id === id);
    //   this.riskList.splice(findIndex, 1);
    // },
    async fetchRisks() {
      try {
        const result = await fetch('http://localhost:3000/risks');
        const data = await result.json();

        this.riskList.splice(0, this.riskList.length, ...data);
      } catch (e) {
        console.error('Failed to log data. Try again later!');
      }
    },

    async addRisk(riskData: Risk) {
      try {
        await fetch('http://localhost:3000/risks', {
          method: 'POST',
          body: JSON.stringify({ ...riskData }),
        });
        await this.fetchRisks();
      } catch (e) {
        console.error('Something went wrong. Try again later!');
      }
    },

    async editRisk(riskData: Risk) {
      try {
        await fetch(`http://localhost:3000/risks/${riskData.id}`, {
          method: 'PUT',
          body: JSON.stringify({ ...riskData }),
        });
        await this.fetchRisks();
      } catch (e) {
        console.error('Something went wrong. Try again later!');
      }
    },

    async removeRisk(id: string) {
      try {
        await fetch(`http://localhost:3000/risks/${id}`, {
          method: 'DELETE',
        });
        await this.fetchRisks();
      } catch (e) {
        console.error('Something went wrong. Try again later!');
      }
    },
  },
});
