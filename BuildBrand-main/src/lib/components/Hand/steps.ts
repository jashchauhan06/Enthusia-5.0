import { MathUtils } from 'three';

export const steps = [
	{
		position: [-0.1, -1.25, 0],
		scale: 0.6,
		rotation: [0, Math.PI * 0.5, 0] as const,
		type: 1
	},
	{
		position: [0.15, 0.1, 0],
		scale: 0.25,
		rotation: [MathUtils.degToRad(-45), MathUtils.degToRad(-135), MathUtils.degToRad(-45)] as const,
		type: 1
	},
	{
		position: [0.15, 0.1, 0],
		scale: 0.25,
		rotation: [MathUtils.degToRad(45), MathUtils.degToRad(-315), MathUtils.degToRad(-45)] as const,
		type: 1
	},
	{
		position: [-0.2, 0.15, 0],
		scale: 0.25,
		rotation: [MathUtils.degToRad(-90), MathUtils.degToRad(-405), MathUtils.degToRad(-45)] as const,
		type: 1
	},
	{
		position: [-1.2, -0.1, 0],
		scale: 0.6,
		rotation: [MathUtils.degToRad(-90), MathUtils.degToRad(-405), MathUtils.degToRad(-45)] as const,
		type: 1
	},
	{
		position: [-1.6, -0.1, 0],
		scale: 0.6,
		rotation: [MathUtils.degToRad(-90), MathUtils.degToRad(-405), MathUtils.degToRad(-45)] as const,
		type: 1
	},
	{
		position: [0.16, -0.88, 0],
		scale: 0.6,
		rotation: [MathUtils.degToRad(0), MathUtils.degToRad(200), MathUtils.degToRad(-16)] as const,
		type: 2
	},
	{
		position: [0, -0.18, 0],
		scale: 0.5,
		rotation: [MathUtils.degToRad(0), MathUtils.degToRad(-14), MathUtils.degToRad(-16)] as const,
		type: 2
	},
	{
		position: [-0.22, -0.11, 0],
		scale: 0.4,
		rotation: [
			MathUtils.degToRad(0),
			MathUtils.degToRad(-(157 + 360)),
			MathUtils.degToRad(-16)
		] as const,
		type: 2
	},
	{
		position: [0.2, 0.04, 0],
		scale: 0.4,
		rotation: [
			MathUtils.degToRad(0),
			MathUtils.degToRad(-(340 + 360)),
			MathUtils.degToRad(-16)
		] as const,
		type: 2
	}
];
