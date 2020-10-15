import { Publisher } from "./base-publisher";
import { TicketUpdatedEvent } from "../@types";
import { Subjects } from "../constants";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
