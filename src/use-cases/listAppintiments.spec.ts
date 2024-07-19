import { describe, expect, it } from "vitest";
import { ListAppointments } from "./listAppointments";

import { Appointments } from "../entities/appointments";

describe("list appointments", () => {
  it("Should be able to list appointments", () => {
    const listAppointments = new ListAppointments();
    expect(listAppointments.execute()).toBeInstanceOf(
      Promise<Array<Appointments>>
    );
  });
});
