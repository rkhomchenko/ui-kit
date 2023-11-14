import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'transform',
	standalone: true
})
export class Q9TransformPipe implements PipeTransform {
	transform(value: any, callback: (...args: any[]) => any): any {
		if (!callback) {
			return false;
		}

		return callback(value);
	}
}
