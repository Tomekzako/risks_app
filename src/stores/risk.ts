import { defineStore } from 'pinia';
import type { Risk } from '@/types/risk';

interface State {
  riskList: Risk[];
}

export const useRiskStore = defineStore('risk', {
  state: (): State => ({
    riskList: [
      {
        id: 123,
        title: 'Broken Access Control',
        overview:
          'moves up from the fifth position; 94% of applications were tested for some form of broken access control. The 34 Common Weakness Enumerations (CWEs) mapped to Broken Access Control had more occurrences in applications than any other category.',
        description:
          "Moving up from the fifth position, 94% of applications were tested for some form of broken access control with the average incidence rate of 3.81%, and has the most occurrences in the contributed dataset with over 318k. Notable Common Weakness Enumerations (CWEs) included are CWE-200: Exposure of Sensitive Information to an Unauthorized Actor, CWE-201: Insertion of Sensitive Information Into Sent Data, and CWE-352: Cross-Site Request Forgery. Access control enforces policy such that users cannot act outside of their intended permissions. Failures typically lead to unauthorized information disclosure, modification, or destruction of all data or performing a business function outside the user's limits.",
      },
      {
        id: 234,
        title: 'Broken Access Control',
        overview:
          'moves up from the fifth position; 94% of applications were tested for some form of broken access control. The 34 Common Weakness Enumerations (CWEs) mapped to Broken Access Control had more occurrences in applications than any other category.',
        description:
          "Moving up from the fifth position, 94% of applications were tested for some form of broken access control with the average incidence rate of 3.81%, and has the most occurrences in the contributed dataset with over 318k. Notable Common Weakness Enumerations (CWEs) included are CWE-200: Exposure of Sensitive Information to an Unauthorized Actor, CWE-201: Insertion of Sensitive Information Into Sent Data, and CWE-352: Cross-Site Request Forgery. Access control enforces policy such that users cannot act outside of their intended permissions. Failures typically lead to unauthorized information disclosure, modification, or destruction of all data or performing a business function outside the user's limits.",
      },
    ],
  }),
  getters: {
    getRisk: (state) => {
      return (id: number) => state.riskList.find((risk) => risk.id === id);
    },
  },
  actions: {
    createRisk(payload: Risk) {
      this.riskList.unshift(payload);
    },
    editRisk(payload: Risk) {
      const findIndex = this.riskList.findIndex(
        (risk) => risk.id === payload.id
      );
      this.riskList.splice(findIndex, 1, payload);
    },
    removeRisk(id: number) {
      const findIndex = this.riskList.findIndex((risk) => risk.id === id);
      this.riskList.splice(findIndex, 1);
    },
  },
});
