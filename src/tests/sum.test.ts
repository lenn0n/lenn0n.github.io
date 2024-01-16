import { describe, expect, test } from "@jest/globals";
import { sum } from "../utils/sum";

describe('Number tests', ()=>{
  test("should be 3", ()=> {
    const result = sum(1,2);
    expect(result).toBe(3)
  })
})