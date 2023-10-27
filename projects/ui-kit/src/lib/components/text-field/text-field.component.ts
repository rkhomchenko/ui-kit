import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "q9-text-field",
	standalone: true,
	imports: [CommonModule, MatInputModule, MatIconModule],
	templateUrl: "./text-field.component.html",
	styleUrls: ["./text-field.component.scss"],
})
export class TextFieldComponent {
	@Input() public label: string;
	@Input() public icon: string;
	@Input() public hint: string;
	@Input() public errors: { [key: string]: string };
}
