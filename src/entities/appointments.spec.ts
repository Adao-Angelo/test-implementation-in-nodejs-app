import { expect, test } from "vitest";
import { Appointments } from "./appointments";

test("Create new appointment ", () => {
  const startsAt = new Date();

  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 1);

  const appointment = new Appointments({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointments);

  expect(appointment.customer).toEqual("John Doe");
  expect(appointment.startsAt).toBeInstanceOf(Date);
  expect(appointment.endsAt).toBeInstanceOf(Date);
});

test("cannot create an appointment with and date before a start date", () => {
  const startsAt = new Date();

  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() - 1);

  expect(() => {
    return new Appointments({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
