import { DataPoint, PlotPoint } from '../util/Types';

export default class Log10PlotPointsGenerator
{
	public static generate(points: DataPoint[]): PlotPoint[]
	{
		return points
			.map((point, index) =>
			{
				const previous = points[Math.max(0, index - 7)];
				const x = Math.log10(point.value);
				const y = Math.log10(point.value - previous.value);
				return { x, y, date: point.date };
			})
			.filter(point =>
				point.x > -Infinity &&
				point.y > -Infinity &&
				point.x < Infinity &&
				point.y < Infinity);
	}
}
