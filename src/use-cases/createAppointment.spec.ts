import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./createAppointment";
import { Appointments } from "../entities/appointments";

describe("create appointment", () => {
  it("Should be able to create a appointment", () => {
    const createAppointment = new CreateAppointment();
    const startsAt = new Date();

    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1);
    expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointments);
  });
});
