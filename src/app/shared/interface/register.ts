import { Email } from "./email";
import { Name } from "./name";
import { Password } from './password';
import { Phone } from "./phone";
import { RePassword } from "./re-password";

export interface Register extends Name, Email, Password, RePassword, Phone {
}
