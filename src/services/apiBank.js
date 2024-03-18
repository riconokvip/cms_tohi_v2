import axiosBase from "./axiosBase";
import { API_ENDPOINT } from "./endpoints";

export async function getBanks({ BankType, TextSearch, PageIndex, PageSize }) {
  try {
    const banks = await axiosBase.get(`${API_ENDPOINT}/bank/banks`, {
      params: { BankType, TextSearch, PageIndex, PageSize },
    });

    return banks;
  } catch (error) {
    console.error("getBank", error.message);
  }
}

//POST - /bank/banks
export async function createBank() {}

//GET - /bank/banks/bank-types
export async function getBankTypes() {}

//PATCH - /bank/banks/:bankId
export async function updateBank() {}

//GET - /bank/banks/total
export async function getActiveBank() {}
