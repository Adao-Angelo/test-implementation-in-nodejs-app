export interface AppointmentsProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointments {
  private props: AppointmentsProps;

  constructor(props: AppointmentsProps) {
    const { startsAt, endsAt } = props;

    if (startsAt >= endsAt) {
      throw new Error("Invalid and date 🔥");
    }
    this.props = props;
  }

  get customer(): string {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }
}
