import app from '../../src/app';
import createVoucher from '../../src/services/voucherService';
import applyVoucher  from '../../src/services/voucherService';
import { jest } from "@jest/globals";


describe("createVoucher Service", () => {
  it("given a valid task it should return 201, created", () => {
    // Aqui vai o código desse teste
  });

  it("given an invalid task it should return 422", () => {
    // Aqui vai o código desse teste
  });

  it("given a task with duplicate title it should return 409", () => {
    // Aqui vai o código desse teste
  });
});

describe("applyDiscount function", () => {
    it("given a valid task it should return 201, created", () => {
      // Aqui vai o código desse teste
    });
  
    it("given an invalid task it should return 422", () => {
      // Aqui vai o código desse teste
    });
  
    it("given a task with duplicate title it should return 409", () => {
      // Aqui vai o código desse teste
    });
  });